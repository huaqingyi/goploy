(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3064d698"],{"23ba":function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"e",(function(){return l})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return d})),a.d(e,"f",(function(){return f}));a("5ab2"),a("6d57"),a("e10e");var n=a("88d6"),r=a("b775");function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t){return Object(r["a"])({url:"/group/getList",method:"get",params:o({},t)})}function l(){return Object(r["a"])({url:"/group/getOption",method:"get"})}function u(){return Object(r["a"])({url:"/group/getDeployOption",method:"get"})}function c(t){return Object(r["a"])({url:"/group/add",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/group/edit",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/group/remove",method:"delete",data:{id:t}})}},f775:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"app-container"},[a("el-row",{staticClass:"app-bar",attrs:{type:"flex",justify:"end"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.hasManagerPermission(),expression:"hasManagerPermission()"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v("添加")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"","highlight-current-row":"",data:t.tableData}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"组名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"insertTime",label:"创建时间",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"operation",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return t.handleEdit(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{disabled:!t.hasGroupManagerPermission(),size:"small",type:"danger"},on:{click:function(a){return t.handleRemove(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"10px"},attrs:{type:"flex",justify:"end"}},[a("el-pagination",{attrs:{"hide-on-single-page":"",total:t.pagination.total,"page-size":t.pagination.rows,background:"",layout:"prev, pager, next"},on:{"current-change":t.handlePageChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:"分组设置",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{ref:"form",attrs:{rules:t.formRules,model:t.formData,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{disabled:t.formProps.disabled,type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1)],1)},r=[],i=a("23ba"),o={data:function(){return{dialogVisible:!1,tableData:[],pagination:{page:1,rows:16,total:0},tempFormData:{},formProps:{disabled:!1},formData:{id:0},formRules:{name:[{required:!0,message:"请输入分组名称",trigger:"blur"}]}}},created:function(){this.storeFormData(),this.getList()},methods:{getList:function(){var t=this;Object(i["d"])(this.pagination).then((function(e){var a=e.data.groupList||[];t.tableData=a,t.pagination=e.data.pagination}))},handlePageChange:function(t){this.pagination.page=t,this.getList()},handleAdd:function(){this.restoreFormData(),this.dialogVisible=!0},handleEdit:function(t){this.formData=Object.assign({},t),this.dialogVisible=!0},handleRemove:function(t){var e=this;this.$confirm("此操作将删除该分组, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["f"])(t.id).then((function(t){e.$message({message:"删除成功",type:"success",duration:5e3}),e.getList()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},submit:function(){var t=this;this.$refs.form.validate((function(e){if(!e)return!1;0===t.formData.id?t.add():t.edit()}))},add:function(){var t=this;this.formProps.disabled=!0,Object(i["a"])(this.formData).then((function(e){t.getList(),t.$message({message:"添加成功",type:"success",duration:5e3})})).finally((function(){t.formProps.disabled=t.dialogVisible=!1}))},edit:function(){var t=this;this.formProps.disabled=!0,Object(i["b"])(this.formData).then((function(e){t.getList(),t.$message({message:"修改成功",type:"success",duration:5e3})})).finally((function(){t.formProps.disabled=t.dialogVisible=!1}))},storeFormData:function(){this.tempFormData=JSON.parse(JSON.stringify(this.formData))},restoreFormData:function(){this.formData=JSON.parse(JSON.stringify(this.tempFormData))}}},s=o,l=a("4023"),u=Object(l["a"])(s,n,r,!1,null,null,null);e["default"]=u.exports}}]);