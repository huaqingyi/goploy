(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d409a3a"],{"013f":function(e,t,r){var a=r("4ce5"),o=r("224c"),n=r("008a"),i=r("eafa"),s=r("5dd2");e.exports=function(e,t){var r=1==e,l=2==e,c=3==e,d=4==e,u=6==e,p=5==e||u,f=t||s;return function(t,s,m){for(var b,v,h=n(t),g=o(h),y=a(s,m,3),D=i(g.length),j=0,w=r?f(t,D):l?f(t,0):void 0;D>j;j++)if((p||j in g)&&(b=g[j],v=y(b,j,h),e))if(r)w[j]=v;else if(v)switch(e){case 3:return!0;case 5:return b;case 6:return j;case 2:w.push(b)}else if(d)return!1;return u?-1:c||d?d:w}}},"0358":function(e,t,r){"use strict";var a=r("1cc0"),o=r.n(a);o.a},"1cc0":function(e,t,r){},2346:function(e,t,r){var a=r("75c4");e.exports=Array.isArray||function(e){return"Array"==a(e)}},"23ba":function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u})),r.d(t,"f",(function(){return p}));r("5ab2"),r("6d57"),r("e10e");var a=r("88d6"),o=r("b775");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e){return Object(o["a"])({url:"/group/getList",method:"get",params:i({},e)})}function l(){return Object(o["a"])({url:"/group/getOption",method:"get"})}function c(){return Object(o["a"])({url:"/group/getDeployOption",method:"get"})}function d(e){return Object(o["a"])({url:"/group/add",method:"post",data:e})}function u(e){return Object(o["a"])({url:"/group/edit",method:"post",data:e})}function p(e){return Object(o["a"])({url:"/group/remove",method:"delete",data:{id:e}})}},"24d2":function(e,t,r){"use strict";r.d(t,"h",(function(){return o})),r.d(t,"i",(function(){return n})),r.d(t,"f",(function(){return i})),r.d(t,"g",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"a",(function(){return c})),r.d(t,"d",(function(){return d})),r.d(t,"j",(function(){return u})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return f})),r.d(t,"l",(function(){return m})),r.d(t,"k",(function(){return b}));var a=r("b775");function o(e,t){var r=e.page,o=e.rows;return Object(a["a"])({url:"/project/getList",method:"get",params:{page:r,rows:o,projectName:t}})}function n(){return Object(a["a"])({url:"/project/getOption",method:"get",params:{}})}function i(e){return Object(a["a"])({url:"/project/getBindServerList",method:"get",params:{id:e}})}function s(e){return Object(a["a"])({url:"/project/getBindUserList",method:"get",params:{id:e}})}function l(e){return Object(a["a"])({url:"/project/getBindProjectList",method:"get",params:{userId:e}})}function c(e){return Object(a["a"])({url:"/project/add",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/project/edit",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/project/remove",method:"delete",data:{id:e}})}function p(e){return Object(a["a"])({url:"/project/addServer",method:"post",data:e})}function f(e){return Object(a["a"])({url:"/project/addUser",method:"post",data:e})}function m(e){return Object(a["a"])({url:"/project/removeProjectUser",method:"delete",data:{projectUserId:e}})}function b(e){return Object(a["a"])({url:"/project/removeProjectServer",method:"delete",data:{projectServerId:e}})}},"5dd2":function(e,t,r){var a=r("81dc");e.exports=function(e,t){return new(a(e))(t)}},"81dc":function(e,t,r){var a=r("fb68"),o=r("2346"),n=r("cb3d")("species");e.exports=function(e){var t;return o(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!o(t.prototype)||(t=void 0),a(t)&&(t=t[n],null===t&&(t=void 0))),void 0===t?Array:t}},aa22:function(e,t,r){"use strict";r.d(t,"f",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"d",(function(){return c})),r.d(t,"g",(function(){return d})),r.d(t,"a",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"b",(function(){return f})),r.d(t,"i",(function(){return m})),r.d(t,"h",(function(){return b}));r("5ab2"),r("6d57"),r("e10e");var a=r("88d6"),o=r("b775");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e){return Object(o["a"])({url:"/server/getList",method:"get",params:i({},e)})}function l(e){return Object(o["a"])({url:"/server/getInstallPreview",method:"get",params:{serverId:e}})}function c(e){return Object(o["a"])({url:"/server/getInstallList",method:"get",params:{token:e}})}function d(){return Object(o["a"])({url:"/server/getOption",method:"get"})}function u(e){return Object(o["a"])({url:"/server/add",method:"post",data:e})}function p(e){return Object(o["a"])({url:"/server/edit",method:"post",data:e})}function f(e){return Object(o["a"])({timeout:1e5,url:"/server/check",method:"post",data:e})}function m(e){return Object(o["a"])({url:"/server/remove",method:"delete",data:{id:e}})}function b(e,t){return Object(o["a"])({url:"/server/install",method:"post",data:{serverId:e,templateId:t}})}},b996:function(e,t,r){"use strict";var a=r("e828"),o=r.n(a);o.a},c0f9:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticClass:"app-container"},[r("el-row",{staticClass:"app-bar",attrs:{type:"flex",justify:"space-between"}},[r("el-row",[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入项目名称"},model:{value:e.projectName,callback:function(t){e.projectName=t},expression:"projectName"}}),e._v(" "),r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchProjectList}},[e._v("搜索")])],1),e._v(" "),r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleAdd}},[e._v("添加")])],1),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"","highlight-current-row":"",data:e.tableData}},[r("el-table-column",{attrs:{prop:"name",label:"项目名称",width:"200"}}),e._v(" "),r("el-table-column",{attrs:{prop:"url",label:"项目地址",width:"350"}}),e._v(" "),r("el-table-column",{attrs:{prop:"path",label:"部署路径","min-width":"200"}}),e._v(" "),r("el-table-column",{attrs:{prop:"group",label:"分组",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.findGroupName(t.row.groupId))+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"environment",width:"120",label:"环境"}}),e._v(" "),r("el-table-column",{attrs:{prop:"branch",width:"160",label:"分支"}}),e._v(" "),r("el-table-column",{attrs:{width:"80",label:"自动部署"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.autoDeploy?r("span",[e._v("关闭")]):r("span",[e._v("Webhook")])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"operation",label:"操作",width:"350",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.handleEdit(t.row)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{type:"success"},on:{click:function(r){return e.handleServer(t.row)}}},[e._v("服务器管理")]),e._v(" "),r("el-button",{attrs:{type:"warning"},on:{click:function(r){return e.handleUser(t.row)}}},[e._v("成员管理")]),e._v(" "),r("el-button",{attrs:{type:"danger"},on:{click:function(r){return e.handleRemove(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("el-row",{staticStyle:{"margin-top":"10px"},attrs:{type:"flex",justify:"end"}},[r("el-pagination",{attrs:{"hide-on-single-page":"",total:e.pagination.total,"page-size":e.pagination.rows,background:"",layout:"prev, pager, next"},on:{"current-change":e.handlePageChange}})],1),e._v(" "),r("el-dialog",{staticClass:"project-setting-dialog",attrs:{title:"项目设置",visible:e.dialogVisible,width:"60%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"form",attrs:{rules:e.formRules,model:e.formData,"label-width":"90px"}},[r("el-tabs",{on:{"tab-click":e.handleTabClick},model:{value:e.formProps.tab,callback:function(t){e.$set(e.formProps,"tab",t)},expression:"formProps.tab"}},[r("el-tab-pane",{attrs:{label:"基本配置",name:"base"}},[r("el-form-item",{attrs:{label:"项目名称",prop:"name"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"项目地址",prop:"url"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.formData.url,callback:function(t){e.$set(e.formData,"url",t)},expression:"formData.url"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"部署路径",prop:"path"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.formData.path,callback:function(t){e.$set(e.formData,"path",t)},expression:"formData.path"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"环境",prop:"environment"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"选择环境"},model:{value:e.formData.environment,callback:function(t){e.$set(e.formData,"environment",t)},expression:"formData.environment"}},[r("el-option",{attrs:{label:"生产环境",value:"生产环境"}}),e._v(" "),r("el-option",{attrs:{label:"预发布环境",value:"预发布环境"}}),e._v(" "),r("el-option",{attrs:{label:"测试环境",value:"测试环境"}}),e._v(" "),r("el-option",{attrs:{label:"开发环境",value:"开发环境"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"分支",prop:"branch"}},[r("el-input",{attrs:{autocomplete:"off",disabled:e.formData.id>0},model:{value:e.formData.branch,callback:function(t){e.$set(e.formData,"branch",t)},expression:"formData.branch"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"rsync选项",prop:"rsyncOption"}},[r("el-input",{attrs:{type:"textarea",rows:2,autocomplete:"off",placeholder:"-rtv --exclude .git --delete-after"},model:{value:e.formData.rsyncOption,callback:function(t){e.$set(e.formData,"rsyncOption",t)},expression:"formData.rsyncOption"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"绑定分组",prop:"groupId"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"选择分组"},model:{value:e.formData.groupId,callback:function(t){e.$set(e.formData,"groupId",t)},expression:"formData.groupId"}},[e.hasGroupManagerPermission()?r("el-option",{attrs:{label:"默认",value:0}}):e._e(),e._v(" "),e._l(e.groupOption,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],2)],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.formProps.showServers,expression:"formProps.showServers"}],attrs:{label:"绑定服务器",prop:"serverIds"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:"选择服务器，可多选"},model:{value:e.formData.serverIds,callback:function(t){e.$set(e.formData,"serverIds",t)},expression:"formData.serverIds"}},e._l(e.serverOption,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.id}})})),1)],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.formProps.showUsers,expression:"formProps.showUsers"}],attrs:{label:"绑定用户",prop:"userIds"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:"选择用户，可多选"},model:{value:e.formData.userIds,callback:function(t){e.$set(e.formData,"userIds",t)},expression:"formData.userIds"}},e._l(e.userOption,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1)],1),e._v(" "),r("el-tab-pane",{attrs:{label:"软链部署(推荐)",name:"symlink"}},[r("el-row",{staticStyle:{margin:"0 10px"}},[r("p",[e._v("项目先同步到指定目录(rsync 软链目录)，然后ln -s 部署路径 软链目录")]),e._v(" "),r("p",[e._v("可以避免项目在同步传输文件的过程中，外部访问到部分正在同步的文件")]),e._v(" "),r("p",[e._v("备份最近10次的部署文件，以便快速回滚")])]),e._v(" "),r("el-form-item",{attrs:{label:"","label-width":"10px"}},[r("el-radio-group",{model:{value:e.formProps.symlink,callback:function(t){e.$set(e.formProps,"symlink",t)},expression:"formProps.symlink"}},[r("el-radio",{attrs:{label:!1}},[e._v("关闭")]),e._v(" "),r("el-radio",{attrs:{label:!0}},[e._v("开启")])],1)],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.formProps.symlink,expression:"formProps.symlink"}],attrs:{label:"目录",prop:"symlink_path","label-width":"50px"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.formData.symlinkPath,callback:function(t){e.$set(e.formData,"symlinkPath",t)},expression:"formData.symlinkPath"}})],1),e._v(" "),r("el-row",{directives:[{name:"show",rawName:"v-show",value:e.formProps.symlink,expression:"formProps.symlink"}],staticStyle:{margin:"0 10px"}},[r("p",[e._v("如果部署路径已存在在目标服务器，请手动删除该目录"),r("span",{staticStyle:{color:"red"}},[e._v("rm -rf 部署路径")]),e._v("，否则软链将会不成功")]),e._v(" "),r("p",[e._v("如须更换目录，务必手动迁移原先的目录到目标服务器")])])],1),e._v(" "),r("el-tab-pane",{attrs:{label:"拉取后运行脚本",name:"afterPullScrpit"}},[r("el-form-item",{attrs:{prop:"afterPullScrpit","label-width":"0px"}},[r("codemirror",{ref:"afterPullScrpit",attrs:{options:e.cmOptions,placeholder:"已切换至项目目录..."},model:{value:e.formData.afterPullScript,callback:function(t){e.$set(e.formData,"afterPullScript",t)},expression:"formData.afterPullScript"}})],1)],1),e._v(" "),r("el-tab-pane",{attrs:{label:"部署后运行脚本",name:"afterDeployScrpit"}},[r("el-form-item",{attrs:{prop:"afterDeployScrpit","label-width":"0px"}},[r("codemirror",{ref:"afterDeployScrpit",attrs:{options:e.cmOptions,placeholder:"已切换至项目目录..."},model:{value:e.formData.afterDeployScript,callback:function(t){e.$set(e.formData,"afterDeployScript",t)},expression:"formData.afterDeployScript"}})],1)],1),e._v(" "),r("el-tab-pane",{attrs:{label:"构建触发器",name:"autoDeploy"}},[r("el-row",{staticStyle:{margin:"10px"}},[e._v("构建触发器：达成某种条件后自动构建发布项目")]),e._v(" "),r("el-radio-group",{staticStyle:{margin:"10px"},model:{value:e.formData.autoDeploy,callback:function(t){e.$set(e.formData,"autoDeploy",t)},expression:"formData.autoDeploy"}},[r("el-radio",{attrs:{label:0}},[e._v("关闭")]),e._v(" "),r("el-radio",{attrs:{label:1}},[e._v("webhook")])],1),e._v(" "),r("el-row",{directives:[{name:"show",rawName:"v-show",value:1===e.formData.autoDeploy,expression:"formData.autoDeploy===1"}],staticStyle:{margin:"10px"}},[e._v("\n            前往GitLab、GitHub或Gitee的webhook（可前往谷歌查找各自webhook所在的位置）"),r("br"),e._v("\n            填入连接"),r("span",{staticStyle:{color:"red"}},[e._v("http(s)://域名(IP)/deploy/webhook?project_name="+e._s(e.formData.name?e.formData.name:"请先填写项目名称"))]),r("br"),e._v("\n            勾选push event即可\n          ")])],1),e._v(" "),r("el-tab-pane",{attrs:{label:"高级配置",name:"advance"}},[r("el-form-item",{attrs:{label:"构建通知",prop:"notifyTarget"}},[r("el-row",{attrs:{type:"flex"}},[r("el-select",{attrs:{clearable:""},model:{value:e.formData.notifyType,callback:function(t){e.$set(e.formData,"notifyType",t)},expression:"formData.notifyType"}},[r("el-option",{attrs:{label:"无",value:0}}),e._v(" "),r("el-option",{attrs:{label:"企业微信",value:1}}),e._v(" "),r("el-option",{attrs:{label:"钉钉",value:2}})],1),e._v(" "),r("el-input",{attrs:{autocomplete:"off",placeholder:"webhook链接"},model:{value:e.formData.notifyTarget,callback:function(t){e.$set(e.formData,"notifyTarget",t)},expression:"formData.notifyTarget"}})],1)],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{disabled:e.formProps.disabled,type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"服务器管理",visible:e.dialogServerVisible},on:{"update:visible":function(t){e.dialogServerVisible=t}}},[r("el-row",{staticClass:"app-bar",attrs:{type:"flex",justify:"end"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleAddServer}},[e._v("添加")])],1),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"","highlight-current-row":"",data:e.tableServerData}},[r("el-table-column",{attrs:{prop:"serverId",label:"服务器ID",width:"100"}}),e._v(" "),r("el-table-column",{attrs:{prop:"serverName",label:"服务器名称",width:"100"}}),e._v(" "),r("el-table-column",{attrs:{prop:"serverDescription",label:"服务器描述","min-width":"200","show-overflow-tooltip":""}}),e._v(" "),r("el-table-column",{attrs:{prop:"insertTime",width:"160",label:"绑定时间"}}),e._v(" "),r("el-table-column",{attrs:{prop:"updateTime",width:"160",label:"更新时间"}}),e._v(" "),r("el-table-column",{attrs:{prop:"operation",label:"操作",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"danger"},on:{click:function(r){return e.removeProjectServer(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogServerVisible=!1}}},[e._v("取 消")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"成员管理",visible:e.dialogUserVisible},on:{"update:visible":function(t){e.dialogUserVisible=t}}},[r("el-row",{staticClass:"app-bar",attrs:{type:"flex",justify:"end"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleAddUser}},[e._v("添加")])],1),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"","highlight-current-row":"",data:e.tableUserData}},[r("el-table-column",{attrs:{prop:"userId",label:"用户ID"}}),e._v(" "),r("el-table-column",{attrs:{prop:"userName",label:"用户名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"insertTime",width:"160",label:"绑定时间"}}),e._v(" "),r("el-table-column",{attrs:{prop:"updateTime",width:"160",label:"更新时间"}}),e._v(" "),r("el-table-column",{attrs:{prop:"operation",label:"操作",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"danger"},on:{click:function(r){return e.removeProjectUser(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogUserVisible=!1}}},[e._v("取 消")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"添加服务器",visible:e.dialogAddServerVisible},on:{"update:visible":function(t){e.dialogAddServerVisible=t}}},[r("el-form",{ref:"addServerForm",attrs:{rules:e.addServerFormRules,model:e.addServerFormData}},[r("el-form-item",{attrs:{label:"绑定服务器","label-width":"120px",prop:"serverIds"}},[r("el-select",{attrs:{multiple:"",placeholder:"选择服务器，可多选"},model:{value:e.addServerFormData.serverIds,callback:function(t){e.$set(e.addServerFormData,"serverIds",t)},expression:"addServerFormData.serverIds"}},e._l(e.serverOption,(function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.id}})})),1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogAddServerVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{disabled:e.addServerFormProps.disabled,type:"primary"},on:{click:e.addServer}},[e._v("确 定")])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:"添加用户",visible:e.dialogAddUserVisible},on:{"update:visible":function(t){e.dialogAddUserVisible=t}}},[r("el-form",{ref:"addUserForm",attrs:{rules:e.addUserFormRules,model:e.addUserFormData}},[r("el-form-item",{attrs:{label:"绑定用户","label-width":"120px",prop:"userIds"}},[r("el-select",{attrs:{multiple:"",placeholder:"选择用户，可多选"},model:{value:e.addUserFormData.userIds,callback:function(t){e.$set(e.addUserFormData,"userIds",t)},expression:"addUserFormData.userIds"}},e._l(e.userOption,(function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogAddUserVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{disabled:e.addUserFormProps.disabled,type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1)],1)},o=[],n=(r("e697"),r("cc57"),r("c24f")),i=r("aa22"),s=r("23ba"),l=r("24d2"),c=r("8a2b"),d=(r("148a"),r("4fc6"),r("d647"),r("85e5"),r("6990"),r("f590"),{components:{codemirror:c["codemirror"]},data:function(){var e=this,t=function(t,r,a){0!==r&&""!==e.formData.notifyType||0===r&&""===e.formData.notifyType?a():a(new Error("请选择推送类型"))};return{cmOptions:{tabSize:4,mode:"text/x-sh",lineNumbers:!0,line:!0,scrollbarStyle:"overlay",theme:"darcula"},projectName:"",dialogVisible:!1,dialogServerVisible:!1,dialogUserVisible:!1,dialogAddServerVisible:!1,dialogAddUserVisible:!1,serverOption:[],userOption:[],groupOption:[],tableData:[],pagination:{page:1,rows:17,total:0},tableServerData:[],tableUserData:[],formProps:{symlink:!1,disabled:!1,showServers:!0,showUsers:!0,tab:"base"},tempFormData:{},formData:{id:0,groupId:"",name:"",url:"",path:"",symlinkPath:"",afterPullScript:"",afterDeployScript:"",environment:"生产环境",branch:"master",rsyncOption:"-rtv --exclude .git --delete-after",serverIds:[],userIds:[],autoDeploy:0,notifyType:0,notifyTarget:""},formRules:{name:[{required:!0,message:"请输入项目名称",trigger:["blur"]}],url:[{required:!0,message:"请输入项目地址",trigger:["blur"]}],path:[{required:!0,message:"请输入部署路径",trigger:["blur"]}],environment:[{required:!0,message:"请选择环境",trigger:["blur"]}],branch:[{required:!0,message:"请输入分支名称",trigger:["blur"]}],groupId:[{required:!0,message:"请选择分组",trigger:"blur"}],serverIds:[{type:"array",message:"请选择服务器",trigger:"change"}],userIds:[{type:"array",message:"请选择组员",trigger:"change"}],notifyTarget:[{validator:t,trigger:"blur"}]},addServerFormProps:{disabled:!1},addServerFormData:{projectId:0,serverIds:[]},addServerFormRules:{serverIds:[{type:"array",required:!0,message:"请选择服务器",trigger:"change"}]},addUserFormProps:{disabled:!1},addUserFormData:{projectId:0,userIds:[]},addUserFormRules:{userIds:[{type:"array",required:!0,message:"请选择用户",trigger:"change"}]}}},created:function(){this.storeFormData(),this.get()},methods:{handleAdd:function(){this.restoreFormData(),this.formProps.showServers=this.formProps.showUsers=!0,this.formProps.symlink=!1,this.dialogVisible=!0},handleEdit:function(e){this.formData=Object.assign({},e),this.formData.serverIds=[],this.formData.userIds=[],this.formProps.symlink=""!==this.formData.symlinkPath,this.formProps.showServers=this.formProps.showUsers=!1,this.dialogVisible=!0},handleRemove:function(e){var t=this;this.$confirm("此操作将删除该项目, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["j"])(e.id).then((function(e){t.$message({message:"删除成功",type:"success",duration:5e3}),t.getProjectList()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},handleTabClick:function(e){var t=e.name;"afterPullScrpit"===t?this.$refs.afterPullScrpit.refresh():"afterDeployScrpit"===t&&this.$refs.afterDeployScrpit.refresh()},handleServer:function(e){this.getBindServerList(e.id),this.addServerFormData.projectId=e.id,this.dialogServerVisible=!0},handleGroup:function(e){this.getBindServerList(e.id),this.addServerFormData.projectId=e.id,this.dialogServerVisible=!0},handleUser:function(e){this.getBindUserList(e.id),this.addUserFormData.projectId=e.id,this.dialogUserVisible=!0},handleAddServer:function(){this.dialogAddServerVisible=!0},handleAddUser:function(){this.dialogAddUserVisible=!0},submit:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return!1;!1===e.formProps.symlink&&(e.formData.symlinkPath=""),0===e.formData.id?e.add():e.edit()}))},add:function(){var e=this;this.formProps.disabled=!0,Object(l["a"])(this.formData).then((function(t){e.dialogVisible=!1,e.$message({message:"添加成功",type:"success",duration:5e3}),e.getProjectList()})).finally((function(){e.formProps.disabled=!1}))},edit:function(){var e=this;this.formProps.disabled=!0,Object(l["d"])(this.formData).then((function(t){e.dialogVisible=!1,e.$message({message:"修改成功",type:"success",duration:5e3}),e.getProjectList()})).finally((function(){e.formProps.disabled=!1}))},addServer:function(){var e=this;this.$refs.addServerForm.validate((function(t){if(!t)return!1;e.addServerFormProps.disabled=!0,Object(l["b"])(e.addServerFormData).then((function(t){e.dialogAddServerVisible=!1,e.$message({message:"添加成功",type:"success",duration:5e3}),e.getBindServerList(e.addServerFormData.projectId)})).finally((function(){e.addServerFormProps.disabled=!1}))}))},addUser:function(){var e=this;this.$refs.addUserForm.validate((function(t){if(!t)return!1;e.addUserFormProps.disabled=!0,Object(l["c"])(e.addUserFormData).then((function(t){e.dialogAddUserVisible=!1,e.$message({message:"添加成功",type:"success",duration:5e3}),e.getBindUserList(e.addUserFormData.projectId)})).finally((function(){e.addUserFormProps.disabled=!1}))}))},removeProjectServer:function(e){var t=this;this.$confirm("此操作将永久删除该服务器的绑定关系, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["k"])(e.id).then((function(r){t.$message({message:"删除成功",type:"success",duration:5e3}),t.getBindServerList(e.projectId)}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},removeProjectUser:function(e){var t=this;this.$confirm("此操作将永久删除该用户的绑定关系, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["l"])(e.id).then((function(r){t.$message({message:"删除成功",type:"success",duration:5e3}),t.getBindUserList(e.projectId)}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},get:function(){var e=this;this.getProjectList(),Object(i["g"])().then((function(t){e.serverOption=t.data.serverList||[],e.serverOption.map((function(e){return e.label=e.name+(e.description.length>0?"("+e.description+")":""),e}))})),Object(n["d"])().then((function(t){e.userOption=t.data.userList||[]})),Object(s["e"])().then((function(t){e.groupOption=t.data.groupList||[]}))},getProjectList:function(){var e=this;Object(l["h"])(this.pagination,this.projectName).then((function(t){var r=t.data.projectList||[];e.tableData=r,e.pagination=t.data.pagination})).catch((function(){}))},getBindServerList:function(e){var t=this;Object(l["f"])(e).then((function(e){t.tableServerData=e.data.projectServerMap||[]}))},getBindUserList:function(e){var t=this;Object(l["g"])(e).then((function(e){t.tableUserData=e.data.projectUserMap||[]}))},searchProjectList:function(){this.pagination.page=1,this.getProjectList()},handlePageChange:function(e){this.pagination.page=e,this.getProjectList()},findGroupName:function(e){var t=this.groupOption.find((function(t){return t.id===e}));return t?t["name"]:"默认"},storeFormData:function(){this.tempFormData=JSON.parse(JSON.stringify(this.formData))},restoreFormData:function(){this.formData=JSON.parse(JSON.stringify(this.tempFormData))}}}),u=d,p=(r("0358"),r("b996"),r("4023")),f=Object(p["a"])(u,a,o,!1,null,"fb22e08e",null);t["default"]=f.exports},e697:function(e,t,r){"use strict";var a=r("e46b"),o=r("013f")(5),n="find",i=!0;n in[]&&Array(1)[n]((function(){i=!1})),a(a.P+a.F*i,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r("0e8b")(n)},e828:function(e,t,r){},f590:function(e,t,r){(function(e){e(r("a564"))})((function(e){function t(e){e.state.placeholder&&(e.state.placeholder.parentNode.removeChild(e.state.placeholder),e.state.placeholder=null)}function r(e){t(e);var r=e.state.placeholder=document.createElement("pre");r.style.cssText="height: 0; overflow: visible",r.style.direction=e.getOption("direction"),r.className="CodeMirror-placeholder CodeMirror-line-like";var a=e.getOption("placeholder");"string"==typeof a&&(a=document.createTextNode(a)),r.appendChild(a),e.display.lineSpace.insertBefore(r,e.display.lineSpace.firstChild)}function a(e){n(e)&&r(e)}function o(e){var a=e.getWrapperElement(),o=n(e);a.className=a.className.replace(" CodeMirror-empty","")+(o?" CodeMirror-empty":""),o?r(e):t(e)}function n(e){return 1===e.lineCount()&&""===e.getLine(0)}e.defineOption("placeholder","",(function(r,n,i){var s=i&&i!=e.Init;if(n&&!s)r.on("blur",a),r.on("change",o),r.on("swapDoc",o),o(r);else if(!n&&s){r.off("blur",a),r.off("change",o),r.off("swapDoc",o),t(r);var l=r.getWrapperElement();l.className=l.className.replace(" CodeMirror-empty","")}n&&!r.hasFocus()&&a(r)}))}))}}]);