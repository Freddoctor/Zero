webpackJsonp([6],{"26Jd":function(t,e){},A4Mn:function(t,e){},Aapj:function(t,e){},Kd7u:function(t,e){},YYXs:function(t,e){},mj6b:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("Ldyx"),a={data:function(){return{configName:"",configDesc:"",positionNum:"",appType:"",codeName:"",codeId:"",adConfigId:"",codeList:[],isAtive:!1,soltNameLen:"最多可输入100个字符",modal:!1}},created:function(){this.getCodeData()},methods:{createAdConfig:function(){var t=this,e="/appConfig/createAppConfig.json?configName="+encodeURIComponent(this.configName)+"&configDesc="+encodeURIComponent(this.configDesc)+"&positionNum="+this.positionNum+"&appType="+this.appType+"&codeId="+this.codeId;this.$Http.get(e,{}).then(function(e){0==e.body.status?(t.modal=!1,t.$Message.success("新建广告配置成功"),t.$emit("filterParent")):t.modal=!1})},cancel:function(){this.soltNameLen="最多可输入100个字符",this.isAtive=!1,this.modal=!1},getCodeData:function(){var t=this;this.$Http.get("/code/getCodeList.json?status=1&isNative=1",{}).then(function(e){if(0==e.body.status){var o=e.body.data.result;t.codeList=o}})},beforeLoad:function(){this.configName="",this.configDesc="",this.positionNum="",this.codeId="",this.appType=""},showAdWindow:function(){this.modal=!0},onFocusName:function(){this.soltNameLen="最多可输入100个字符",this.isAtive=!1},userDataNum:function(){if(""!=this.customName){null==this.customName.match(/^[\s\S]{1,100}$/)&&(this.soltNameLen="长度超过100个字符",this.isAtive=!0)}else this.soltNameLen="广告名称不能为空",this.isAtive=!0}}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Modal",{staticStyle:{"{width":"100%}"},attrs:{title:"新建广告配置","class-name":"modal-box"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[o("div",{staticClass:"master-content"},[o("div",{staticClass:"row"},[o("label",[t._v("广告配置名:")]),t._v(" "),o("Input",{staticStyle:{width:"300px"},attrs:{type:"text",name:"configName",placeholder:"请输入广告配置名"},on:{"on-blur":t.userDataNum,"on-focus":t.onFocusName},model:{value:t.configName,callback:function(e){t.configName=e},expression:"configName"}}),t._v(" "),o("span",{staticClass:"label-right",class:{"label-right-active":t.isAtive}},[t._v(t._s(t.soltNameLen))])],1),t._v(" "),o("div",{staticClass:"row"},[o("label",[t._v("广告配置描述:")]),t._v(" "),o("Input",{staticStyle:{width:"300px"},attrs:{type:"text",name:"configDesc",placeholder:"请输入广告配置描述"},model:{value:t.configDesc,callback:function(e){t.configDesc=e},expression:"configDesc"}})],1),t._v(" "),o("div",{staticClass:"row"},[o("label",[t._v("位置号:")]),t._v(" "),o("Input",{staticStyle:{width:"300px"},attrs:{type:"text",name:"positionNum",placeholder:"请输入位置号"},model:{value:t.positionNum,callback:function(e){t.positionNum=e},expression:"positionNum"}})],1),t._v(" "),o("div",{staticClass:"row"},[o("label",[t._v("所属代码位:")]),t._v(" "),o("div",{staticClass:"main-element"},[o("el-select",{staticStyle:{width:"300px"},attrs:{filterable:"",placeholder:"请选择"},model:{value:t.codeId,callback:function(e){t.codeId=e},expression:"codeId"}},t._l(t.codeList,function(t,e){return o("el-option",{key:e,attrs:{label:t.codeName,value:t.fxAdCodeId}})}))],1)]),t._v(" "),o("div",{staticClass:"row"},[o("label",[t._v("终端类型:")]),t._v(" "),o("div",{staticClass:"main-element"},[o("el-select",{staticStyle:{width:"200px"},attrs:{filterable:"",placeholder:"请选择"},model:{value:t.appType,callback:function(e){t.appType=e},expression:"appType"}},t._l(t.$Constants.appTypeSelector,function(t,e){return o("el-option",{key:e,attrs:{label:t.value,value:t.key}})}))],1)])]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),o("Button",{staticClass:"btnColor",attrs:{type:"primary"},on:{click:t.createAdConfig}},[t._v("新建")])],1)])],1)},staticRenderFns:[]};var n=o("vSla")(a,s,!1,function(t){o("YYXs"),o("A4Mn")},"data-v-b54906a4",null).exports,l={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Modal",{attrs:{title:"查看广告配置（原生）"},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[o("div",{staticClass:"master-content"},[o("div",{staticClass:"row"},[o("label",[t._v("广告配置名:")]),t._v(t._s(t.configName))]),t._v(" "),o("div",{staticClass:"row"},[o("label",[t._v("广告配置描述:")]),t._v("\n        "+t._s(t.configDesc)+"\n      ")]),t._v(" "),o("div",{staticClass:"row"},[o("label",[t._v("位置号:")]),t._v(t._s(t.positionNum))]),t._v(" "),o("div",{staticClass:"row"},[o("label",[t._v("所属代码位:")]),t._v(t._s(t.codeName))]),t._v(" "),o("div",{staticClass:"row"},[o("label",[t._v("终端类型:")]),t._v(t._s(t.appType))])]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("Button",{attrs:{type:"text"},on:{click:function(e){t.modal1=!1}}},[t._v("返回")])],1)])],1)},staticRenderFns:[]};var c=o("vSla")({data:function(){return{configName:"",configDesc:"",positionNum:"",appType:"",codeName:"",adConfigId:"",modal1:!1}},created:function(){},methods:{beforeLoad:function(){this.configName="",this.configDesc="",this.positionNum="",this.appType="",this.codeName="",this.adConfigId=""},getAdConfigData:function(t){var e=this;this.adConfigId=t;var o="/appConfig/getAppConfigById.json?appConfigId="+this.adConfigId;this.$Http.get(o,{}).then(function(t){var o=t.body.data;e.configName=o.configName,e.configDesc=o.configDesc,e.positionNum=o.positionNum,e.appType=0==o.appType?"ios":"andriod",e.codeName=o.codeName,e.modal1=!0})}}},l,!1,function(t){o("Aapj")},"data-v-3ed8d0c7",null).exports,d={data:function(){return{configName:"",configDesc:"",positionNum:"",appType:"",codeName:"",codeId:"",adConfigId:"",isAtive:!1,soltNameLen:"最多可输入100个字符",modal:!1,codeList:[]}},created:function(){this.getCodeData()},methods:{beforeLoad:function(){this.configName="",this.configDesc="",this.positionNum="",this.appType="",this.codeName="",this.codeId="",this.adConfigId="",this.soltNameLen="最多可输入100个字符",this.isAtive=!1},cancel:function(){this.soltNameLen="最多可输入100个字符",this.isAtive=!1,this.modal=!1},getCodeData:function(){var t=this;this.$Http.get("/code/getCodeList.json?status=1&isNative=1",{}).then(function(e){if(0==e.body.status){var o=e.body.data.result;console.log(o),t.codeList=o,console.log(t.codeList)}})},getAdConfigData:function(t){var e=this;this.adConfigId=t;var o="/appConfig/getAppConfigById.json?appConfigId="+this.adConfigId;this.$Http.get(o,{}).then(function(t){if(0==t.body.status){var o=t.body.data;e.configName=o.configName,e.configDesc=o.configDesc,e.positionNum=o.positionNum,e.appType=o.appType,e.codeName=o.codeName,e.codeId=o.codeId,console.log("appType is "+e.appType),e.modal=!0}})},updateAdConfig:function(){var t=this,e="/appConfig/updateAppConfig.json?configName="+encodeURIComponent(this.configName)+"&configDesc="+encodeURIComponent(this.configDesc)+"&positionNum="+this.positionNum+"&appType="+this.appType+"&codeId="+this.codeId+"&appConfigId="+this.adConfigId;this.$Http.get(e,{}).then(function(e){0==e.body.status?(t.modal=!1,t.$emit("filterParent")):t.modal=!0})},loadMore:function(){this.pageNo=this.pageNo+1,this.getCodeData()},onFocusName:function(){this.soltNameLen="最多可输入100个字符",this.isAtive=!1},userDataNum:function(){if(this.configName){null==this.configName.match(/^[\s\S]{1,100}$/)&&(this.soltNameLen="长度超过100个字符",this.isAtive=!0)}else this.soltNameLen="物料名称不能为空",this.isAtive=!0}}},p={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Modal",{style:{width:"100%"},attrs:{title:"修改广告配置","class-name":"modal-box"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[o("div",{staticClass:"master-content"},[o("div",{staticClass:"row"},[o("label",[t._v("广告配置名:")]),t._v(" "),o("Input",{staticStyle:{width:"300px"},attrs:{type:"text",name:"configName",placeholder:""},on:{"on-blur":t.userDataNum,"on-focus":t.onFocusName},model:{value:t.configName,callback:function(e){t.configName=e},expression:"configName"}}),t._v(" "),o("span",{staticClass:"label-right",class:{"label-right-active":t.isAtive}},[t._v(t._s(t.soltNameLen))])],1),t._v(" "),o("div",{staticClass:"row"},[o("label",[t._v("广告配置描述:")]),t._v(" "),o("Input",{staticStyle:{width:"300px"},attrs:{type:"text",name:"configDesc",placeholder:""},model:{value:t.configDesc,callback:function(e){t.configDesc=e},expression:"configDesc"}})],1),t._v(" "),o("div",{staticClass:"row"},[o("label",[t._v("位置号:")]),t._v(" "),o("Input",{staticStyle:{width:"300px"},attrs:{type:"text",name:"positionNum",placeholder:""},model:{value:t.positionNum,callback:function(e){t.positionNum=e},expression:"positionNum"}})],1),t._v(" "),o("div",{staticClass:"row"},[o("label",[t._v("所属代码位:")]),t._v(" "),o("div",{staticClass:"main-element"},[o("el-select",{staticStyle:{width:"300px"},attrs:{filterable:"",placeholder:"请选择"},model:{value:t.codeId,callback:function(e){t.codeId=e},expression:"codeId"}},t._l(t.codeList,function(t,e){return o("el-option",{key:t.fxAdCodeId,attrs:{label:t.codeName,value:t.fxAdCodeId}})}))],1)]),t._v(" "),o("div",{staticClass:"row"},[o("label",[t._v("终端类型:")]),t._v(" "),o("div",{staticClass:"main-element"},[o("el-select",{staticStyle:{width:"200px"},attrs:{filterable:"",placeholder:"请选择"},model:{value:t.appType,callback:function(e){t.appType=e},expression:"appType"}},t._l(t.$Constants.appTypeSelector,function(t,e){return o("el-option",{key:e,attrs:{label:t.value,value:t.key}})}))],1)])]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("Button",{attrs:{type:"text"},on:{click:function(e){t.modal=!1}}},[t._v("取消")]),t._v(" "),o("Button",{staticClass:"btnColor",attrs:{type:"primary"},on:{click:t.updateAdConfig}},[t._v("确定修改")])],1)])],1)},staticRenderFns:[]};var r=o("vSla")(d,p,!1,function(t){o("uaBF")},null,null).exports,f={data:function(){var t=this;return{tenplate:null,loading:!1,disabled:!0,sxIcon:"chevron-down",isNative:"",nameLike:"",codeId:-99,appType:-99,pageSize:10,pageNo:1,isShow:!1,totalCount:0,codeList:[],data:[],deleteAdConfigParams:[],textLoadMore:"加载更多",codeListTotalPages:0,codeListPageNo:1,columns:[{type:"selection",width:60,align:"center"},{title:"广告配置ID",key:"adConfigId"},{title:"广告配置名",key:"adConfigName"},{title:"位置号",key:"positionNum",width:100},{title:"广告配置描述",key:"adConfigDesc"},{title:"所属代码位",key:"code"},{title:"终端类型",key:"type"},{title:"操作",key:"operation",width:200,align:"center",render:function(e,o){return e("div"),[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px",backgroundColor:"#0676c4",borderColor:"#0676c4"},on:{click:function(){t.$refs.showAdConfig.beforeLoad(),t.$refs.showAdConfig.getAdConfigData(o.row.adConfigId)}}},"查看"),e("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px",backgroundColor:"#1fa2fd",borderColor:"#1fa2fd"},on:{click:function(){t.$refs.updateAdConfig.beforeLoad(),t.$refs.updateAdConfig.getAdConfigData(o.row.adConfigId)}}},"修改"),e("Button",{props:{type:"error",size:"small"},style:{marginRight:"5px",backgroundColor:"#ea0b00",borderColor:"#ea0b00"},on:{click:function(){var e=[];e.push(o.row),t.deleteBox(e)}}},"删除")]}}]}},created:function(){this.initTabList(),this.getCodeList()},methods:{sx:function(){this.isShow=!this.isShow,this.isShow?this.sxIcon="chevron-up":this.sxIcon="chevron-down"},initTabList:function(){var t=this,e="/appConfig/getAppConfigList.json?codeId="+this.codeId+"&appType="+this.appType+"&pageSize="+this.pageSize+"&pageNo="+this.pageNo+"&nameLike="+encodeURIComponent(this.nameLike);this.data=[],this.$Http.get(e,{}).then(function(e){t.loading=!1;var o=e.body.data.result,i="";for(var a in t.totalCount=e.body.data.totalCount,o)i={adConfigId:o[a].fxAdAppConfigId,adConfigName:o[a].configName,adConfigDesc:o[a].configDesc,code:o[a].codeName,type:0==o[a].appType?"ios":"andriod",positionNum:o[a].positionNum},t.data.push(i)})},selectCode:function(t){this.codeId=t,void 0===this.codeId&&(this.codeId=-99),this.pageSize=10,this.pageNo=1,this.initTabList()},clickPage:function(t){this.loading=!0,this.pageNo=t,this.data=[],this.initTabList()},changePageSize:function(t){this.loading=!0,this.pageSize=t,this.pageNo=1,this.data=[],this.initTabList()},search:function(){this.data=[],this.initTabList()},showAdWindow:function(){this.$refs.createAdConfig.beforeLoad(),this.$refs.createAdConfig.showAdWindow()},selectChange:function(t){this.appType=t,void 0===this.appType&&(this.appType=-99),this.initTabList()},deleteBox:function(t){var e=this;if(0==t.length)return!1;var o=t.map(function(t,e){return t.adConfigName}),i=t.map(function(t,e){return t.adConfigId});this.$Modal.confirm({title:"删除广告配置",content:"你确定要删除"+o.join(","),onOk:function(){e.deleteAdConfigData(i.join(","))}})},deleteAdConfigData:function(t){var e=this,o="/appConfig/deleteAppConfig.json?&appConfigId="+t;this.$Http.get(o,{}).then(function(t){e.$Message.info("删除广告配置成功!"),e.initTabList()})},getCodeList:function(){var t=this,e="/code/getCodeList.json?nameLike=&status=1&isNative=1&useStatus=&pageSize=10&pageNo="+this.codeListPageNo+"&codeSize=&codeGroupId=";this.$Http.get(e,{}).then(function(e){e.body.data.result;for(var o=0;o<e.body.data.result.length;o++)t.codeList.push(e.body.data.result[o]);t.codeListTotalPages=e.body.data.totalPages})},selectData:function(t){this.deleteAdConfigParams=t,0==this.deleteAdConfigParams.length?this.disabled=!0:this.disabled=!1},deleteAll:function(){this.deleteBox(this.deleteAdConfigParams),this.deleteAdConfigParams.length=0},loadMore:function(){this.codeListPageNo!=this.codeListTotalPages?(this.codeListPageNo++,this.getCodeList()):this.textLoadMore="已到最底部"}},components:{topTitle:i.a,showAdConfig:c,updateAdConfig:r,createAdConfig:n}},u={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("top-title",{attrs:{title:"广告配置（原生）"}}),t._v(" "),o("div",{staticStyle:{padding:"10px"}},[o("div",[o("div",{staticClass:"topBtnWrap"},[o("div",[o("Button",{staticClass:"btnColor",attrs:{icon:"plus"},on:{click:t.showAdWindow}},[t._v("新建广告配置")]),t._v(" "),o("Button",{staticClass:"btnCancel",attrs:{type:"error",disabled:!t.deleteAdConfigParams.length},on:{click:t.deleteAll}},[t._v("删除")]),t._v(" "),o("Button",{attrs:{type:"ghost",icon:t.sxIcon},on:{click:t.sx}},[t._v("筛选")])],1),t._v(" "),o("div",[o("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入广告配置名称"},model:{value:t.nameLike,callback:function(e){t.nameLike=e},expression:"nameLike"}}),t._v(" "),o("Button",{staticClass:"btnColor",on:{click:t.search}},[t._v("搜索")])],1)])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"master-content-middle"},[o("ul",[o("li",{staticClass:"master-content-middle-child"},[o("span",{staticClass:"label-left"},[t._v("所属代码位：")]),t._v(" "),o("div",{staticClass:"main-element"},[o("el-select",{staticStyle:{width:"200px"},attrs:{filterable:"",placeholder:"请选择",clearable:""},on:{change:t.selectCode},model:{value:t.codeId,callback:function(e){t.codeId=e},expression:"codeId"}},[o("el-option",{attrs:{value:-99,label:"全部"}}),t._v(" "),t._l(t.codeList,function(t,e){return o("el-option",{key:e,attrs:{label:t.codeName,value:t.fxAdCodeId}})})],2)],1)]),t._v(" "),o("li",{staticClass:"master-content-middle-child"},[o("span",{staticClass:"label-left"},[t._v("终端类型：")]),t._v(" "),o("div",{staticClass:"main-element"},[o("el-select",{staticStyle:{width:"200px"},attrs:{filterable:"",placeholder:"请选择",clearable:""},on:{change:t.selectChange},model:{value:t.appType,callback:function(e){t.appType=e},expression:"appType"}},[o("el-option",{attrs:{value:-99,label:"全部"}}),t._v(" "),t._l(t.$Constants.appTypeSelector,function(t,e){return o("el-option",{key:e,attrs:{label:t.value,value:t.key}})})],2)],1)])])]),t._v(" "),o("Table",{staticStyle:{"margin-top":"10px"},attrs:{loading:t.loading,border:!0,columns:t.columns,data:t.data},on:{"on-select":function(t){},"on-select-cancel":function(t){},"on-select-all":function(t){},"on-selection-change":t.selectData}}),t._v(" "),o("Page",{attrs:{current:t.pageNo,total:t.totalCount,"show-sizer":"","show-total":""},on:{"on-change":t.clickPage,"on-page-size-change":t.changePageSize}})],1),t._v(" "),o("show-ad-config",{ref:"showAdConfig"}),t._v(" "),o("update-ad-config",{ref:"updateAdConfig",on:{filterParent:t.search}}),t._v(" "),o("create-ad-config",{ref:"createAdConfig",on:{filterParent:t.search}})],1)},staticRenderFns:[]};var h=o("vSla")(f,u,!1,function(t){o("Kd7u"),o("26Jd")},"data-v-025e81b9",null);e.default=h.exports},uaBF:function(t,e){}});
//# sourceMappingURL=6.ffe3a3417e62f13dff1a.js.map