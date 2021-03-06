<template>
  <el-row class="app-container">
    <el-row class="app-bar" type="flex">
      <el-select v-model="groupId" placeholder="选择分组" @change="handleGroupChange">
        <el-option label="默认" :value="0" />
        <el-option
          v-for="(item, index) in groupOption"
          :key="index"
          :label="item.name"
          :value="item.id"
        />
      </el-select>
      <el-input v-model="projectName" style="width:300px" placeholder="请输入项目名称" @change="getList" />
    </el-row>
    <el-table
      :key="tableHeight"
      border
      stripe
      highlight-current-row
      :max-height="tableHeight"
      :data="tableData"
      style="width: 100%;margin-top: 5px;"
    >
      <el-table-column prop="id" label="ID" width="80" align="center" />
      <el-table-column prop="name" label="项目名称" min-width="160" align="center">
        <template slot-scope="scope">
          <b v-if="scope.row.environment === '生产环境'" style="color: #F56C6C">{{ scope.row.name }} - {{ scope.row.environment }}</b>
          <b v-else-if="scope.row.environment === '测试环境'" style="color: #E6A23C">{{ scope.row.name }} - {{ scope.row.environment }}</b>
          <b v-else style="color: #909399">{{ scope.row.name }} - {{ scope.row.environment }}</b>
        </template>
      </el-table-column>
      <el-table-column prop="group" label="分组" align="center">
        <template slot-scope="scope">
          {{ findGroupName(scope.row.groupId) }}
        </template>
      </el-table-column>
      <el-table-column prop="branch" label="分支" align="center" />
      <el-table-column prop="deployState" label="构建状态" width="230" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.tagType" effect="plain">{{ scope.row.tagText }}</el-tag>
          <el-progress :percentage="scope.row.progressPercentage" :status="scope.row.progressStatus" />
        </template>
      </el-table-column>
      <el-table-column prop="updateTime" label="上次构建时间" width="160" align="center" />
      <el-table-column prop="operation" label="操作" width="165" fixed="right">
        <template slot-scope="scope">
          <el-row class="operation-btn">
            <el-dropdown
              split-button
              trigger="click"
              :disabled="scope.row.deployState === 1"
              type="primary"
              @click="publish(scope.row)"
              @command="handlePublishCommand"
            >
              构建
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="scope.row">选择具体commit</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button type="success" @click="handleDetail(scope.row)">详情</el-button>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="构建记录" :visible.sync="dialogVisible" class="publish-record">
      <el-row>
        <el-col :span="8">
          <el-radio-group v-model="publishToken" @change="handleDetailChange">
            <el-row v-for="(item, index) in gitTraceList" :key="index">
              <el-row style="margin:5px 0">
                <el-radio style="margin-left: 10px;margin-right: 5px;padding-right:8px;width: 210px;" :label="item.token" border>
                  {{ item.publisherName }} commitID: {{ item.commit }}
                  <span v-if="item.publishState === 1" style="color:#67C23A;float:right;line-height:16px;">成功</span>
                  <span v-else style="color:#F56C6C;float:right;line-height:16px;">失败</span>
                </el-radio>
                <el-button type="danger" plain @click="rollback(item)">rebuild</el-button>
              </el-row>
            </el-row>
          </el-radio-group>
        </el-col>
        <el-col :span="16" class="project-detail">
          <el-row v-for="(item, index) in publishLocalTraceList" :key="index">
            <el-row v-if="item.type === 2">
              <el-row style="margin:5px 0">git同步信息</el-row>
              <el-row style="margin:5px 0">时间: {{ item.insertTime }}</el-row>
              <!-- 用数组的形式 兼容以前版本 -->
              <el-row v-if="item.state !== 0">
                <el-row>commit: {{ item['commit'] }}</el-row>
                <el-row>message: {{ item['message'] }}</el-row>
                <el-row>author: {{ item['author'] }}</el-row>
                <el-row>datetime: {{ item['timestamp'] ? parseTime(item['timestamp']) : '' }}</el-row>
                <el-row><span v-html="formatDetail(item['diff'])" /></el-row>
              </el-row>
              <el-row v-else style="margin:5px 0">
                <el-tag type="danger" effect="plain">失败</el-tag>
                <span v-html="formatDetail(item.detail)" />
              </el-row>
            </el-row>
            <el-row v-if="item.type === 3">
              <hr>
              <el-row style="margin:5px 0">获取代码后脚本信息</el-row>
              <el-row style="margin:5px 0">时间: {{ item.insertTime }}</el-row>
              <el-row>脚本: <pre v-html="formatDetail(item.script)" /></el-row>
              <el-row style="margin:5px 0">
                <el-tag v-if="item.state === 0" type="danger" effect="plain">失败</el-tag>
                <el-row>[goploy ~]# <span v-html="formatDetail(item.detail)" /></el-row>
              </el-row>
            </el-row>
            <el-row v-if="item.type === 6">
              <hr>
              <el-row>
                <el-row style="margin:5px 0">remote服务器信息</el-row>
                <el-row style="margin:5px 0">服务器: {{ item.serverName }}</el-row>
                <el-row style="margin:5px 0">时间: {{ item.insertTime }}</el-row>
                <el-row style="margin:5px 0">脚本: {{ item.script }}</el-row>
                <el-row style="margin:5px 0">
                  <el-tag v-if="item.state === 0" type="danger" effect="plain">失败</el-tag>
                  <span v-html="formatDetail(item.detail)" />
                </el-row>
              </el-row>
            </el-row>
          </el-row>
          <hr>
          <el-row style="margin:5px 0">目标服务器</el-row>
          <el-tabs v-model="activeRomoteTracePane">
            <el-tab-pane v-for="(item, serverName) in publishRemoteTraceList" :key="serverName" :label="serverName" :name="serverName">
              <el-row v-for="(trace, key) in item" :key="key">
                <el-row v-if="trace.type === 4">
                  <el-row style="margin:5px 0">部署前脚本</el-row>
                  <el-row style="margin:5px 0">时间: {{ trace.insertTime }}</el-row>
                  <el-row>脚本: <pre v-html="formatDetail(trace.script)" /></el-row>
                  <el-row style="margin:5px 0">
                    <el-tag v-if="trace.state === 0" type="danger" effect="plain">失败</el-tag>
                    <el-row>[goploy ~]# <span v-html="formatDetail(trace.detail)" /></el-row>
                  </el-row>
                </el-row>
                <el-row v-else-if="trace.type === 5">
                  <el-row style="margin:5px 0">rsync同步文件</el-row>
                  <el-row style="margin:5px 0">时间: {{ trace.insertTime }}</el-row>
                  <el-row>命令: {{ trace.command }}</el-row>
                  <el-row style="margin:5px 0">
                    <el-tag v-if="trace.state === 0" type="danger" effect="plain">失败</el-tag>
                    <span v-html="formatDetail(trace.detail)" />
                  </el-row>
                </el-row>
                <el-row v-else>
                  <el-row style="margin:5px 0">部署后脚本</el-row>
                  <el-row style="margin:5px 0">时间: {{ trace.insertTime }}</el-row>
                  <el-row>脚本: {{ trace.script }}</el-row>
                  <el-row style="margin:5px 0">
                    <el-tag v-if="trace.state === 0" type="danger" effect="plain">失败</el-tag>
                    <el-row>[goploy ~]# <span v-html="formatDetail(trace.detail)" /></el-row>
                  </el-row>
                </el-row>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <el-dialog title="commit管理" :visible.sync="commitDialogVisible">
      <el-table
        border
        stripe
        highlight-current-row
        max-height="447px"
        :data="commitTableData"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <span v-html="formatDetail(props.row.diff)" />
          </template>
        </el-table-column>
        <el-table-column prop="commit" label="commit" width="290" />
        <el-table-column prop="author" label="author" />
        <el-table-column label="提交时间" width="135">
          <template slot-scope="scope">
            {{ parseTime(scope.row.timestamp) }}
          </template>
        </el-table-column>
        <el-table-column prop="message" label="message" width="200" show-overflow-tooltip />
        <el-table-column prop="operation" label="操作" width="80" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="danger" @click="rollback(scope.row)">构建</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="commitDialogVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>
<script>
import tableHeight from '@/mixin/tableHeight'
import { getList, getDetail, getPreview, getCommitList, publish } from '@/api/deploy'
import { getDeployOption as getDeployGroupOption } from '@/api/group'
import { parseTime } from '@/utils'

export default {
  mixins: [tableHeight],
  data() {
    return {
      groupId: parseInt(localStorage.getItem('groupId')) || 0,
      groupOption: [],
      projectName: '',
      publishToken: '',
      commitDialogVisible: false,
      dialogVisible: false,
      webSocket: null,
      tableData: [],
      commitTableData: [],
      gitTraceList: [],
      publishTraceList: [],
      publishLocalTraceList: [],
      publishRemoteTraceList: {},
      activeRomoteTracePane: ''
    }
  },
  watch: {
    '$store.getters.ws_message': function(response) {
      if (response.type !== 1) {
        return
      }
      const data = response.message
      data.message = this.formatDetail(data.message)
      if (data.state === 0) {
        this.$notify.error({
          title: data.projectName,
          dangerouslyUseHTMLString: true,
          message: data.message,
          duration: 0
        })
      }
      const projectIndex = this.tableData.findIndex(element => element.id === data.projectId)
      if (projectIndex !== -1) {
        const percent = 12.5 * data.state
        this.tableData[projectIndex].progressPercentage = percent
        this.tableData[projectIndex].progressStatus = 'warning'
        this.tableData[projectIndex].tagType = 'warning'
        this.tableData[projectIndex].tagText = data.message

        if (percent === 0) {
          this.tableData[projectIndex].progressStatus = 'exception'
          this.tableData[projectIndex].tagType = 'danger'
          this.tableData[projectIndex].tagText = '失败'
        } else if (percent > 98) {
          this.tableData[projectIndex].progressStatus = 'success'
          this.tableData[projectIndex].tagType = 'success'
        }

        this.tableData[projectIndex].deployState = data.state
        this.tableData[projectIndex].publisherName = data.username
        this.tableData[projectIndex].updateTime = parseTime(new Date())
      }
    }
  },
  created() {
    this.getList()
    this.getDeployGroupOption()
    // // 路由跳转时结束websocket链接
    this.$router.afterEach(() => {
      this.webSocket && this.webSocket.close()
    })
  },
  methods: {
    parseTime,
    handleGroupChange(groupId) {
      localStorage.setItem('groupId', groupId)
      this.groupId = groupId
      this.getList()
    },

    getDeployGroupOption() {
      getDeployGroupOption().then((response) => {
        this.groupOption = response.data.groupList || []
      })
    },

    getList() {
      getList(this.groupId, this.projectName).then((response) => {
        const projectList = response.data.projectList || []
        this.tableData = projectList.map(element => {
          element.progressPercentage = 0
          element.tagType = 'info'
          element.tagText = '未构建'
          if (element.deployState === 2) {
            element.progressPercentage = 100
            element.progressStatus = 'success'
            element.tagType = 'success'
            element.tagText = '成功'
          } else if (element.deployState === 1) {
            element.progressPercentage = 60
            element.progressStatus = 'warning'
            element.tagType = 'warning'
            element.tagText = '构建中'
          }
          return element
        })
      })
    },

    publish(data) {
      const id = data.id
      const h = this.$createElement
      let color = ''
      if (data.environment === '生产环境') {
        color = 'color: #F56C6C'
      } else if (data.environment === '测试环境') {
        color = 'color: #E6A23C'
      } else {
        color = 'color: #909399'
      }
      this.$confirm('', '提示', {
        message: h('p', null, [
          h('span', null, '此操作将部署 ' + data.name),
          h('b', { style: color }, '(' + data.environment + ')'),
          h('span', null, ', 是否继续? ')
        ]),
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.gitLog = []
        this.remoteLog = {}
        publish(id, '').then((response) => {
          const projectIndex = this.tableData.findIndex(element => element.id === id)
          this.tableData[projectIndex].deployState = 1
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消构建'
        })
      })
    },

    getDetail() {
      getDetail(this.publishToken).then((response) => {
        const publishTraceList = response.data.publishTraceList || []
        this.publishTraceList = publishTraceList.map(element => {
          if (element.ext !== '') Object.assign(element, JSON.parse(element.ext))
          return element
        })

        this.publishLocalTraceList = this.publishTraceList.filter(element => element.type < 4)
        this.publishRemoteTraceList = {}
        for (const trace of this.publishTraceList) {
          if (trace.type < 4) continue
          if (!this.publishRemoteTraceList[trace.serverName]) {
            this.publishRemoteTraceList[trace.serverName] = []
          }
          this.publishRemoteTraceList[trace.serverName].push(trace)
        }
        this.activeRomoteTracePane = Object.keys(this.publishRemoteTraceList)[0]
      })
    },

    handleDetail(data) {
      this.dialogVisible = true
      getPreview(data.id).then((response) => {
        const gitTraceList = response.data.gitTraceList || []
        this.gitTraceList = gitTraceList.map(element => {
          if (element.ext !== '') Object.assign(element, JSON.parse(element.ext))
          element.commit = element['commit'] ? element['commit'].substring(0, 6) : ''
          return element
        })
        if (this.gitTraceList.length > 0) {
          this.publishToken = this.gitTraceList[0].token
          this.getDetail()
        }
      })
    },

    handleDetailChange(lastPublishToken) {
      this.publishToken = lastPublishToken
      this.getDetail()
    },

    handlePublishCommand(data) {
      const id = data.id
      getCommitList(id).then(response => {
        this.commitTableData = response.data.commitList.map(element => {
          return Object.assign(element, { projectId: id })
        })
        this.commitDialogVisible = true
      })
    },

    rollback(data) {
      this.$confirm('此操作将重新构建' + data.commit + ', 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        publish(data.projectId, data.commit).then((response) => {
          const projectIndex = this.tableData.findIndex(element => element.id === data.projectId)
          this.tableData[projectIndex].deployState = 1
          this.commitDialogVisible = false
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消重新构建'
        })
      })
    },

    findGroupName(groupId) {
      const projectGroup = this.groupOption.find(element => element.id === groupId)
      return projectGroup ? projectGroup['name'] : '默认'
    },

    formatDetail(detail) {
      return detail ? detail.replace(/\n|(\r\n)/g, '<br>') : ''
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "@/styles/mixin.scss";
.project-detail {
  height:375px;
  overflow-y: auto;
  @include scrollBar();
}
.operation-btn {
  >>>.el-button {
    line-height: 1.15;
  }
}
@media screen and (max-width: 1440px){
  .publish-record {
    >>>.el-dialog {
      width: 75%;
    }
  }
}
</style>
