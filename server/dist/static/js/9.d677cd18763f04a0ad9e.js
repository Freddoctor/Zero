webpackJsonp([9,24,26],{"5kHr":function(e,t){},FuSp:function(e,t){},GJpq:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{modal:!1,level:1,sysResourceName:"",parentId:"",btndRadio:1,soltNameLen:"最多可输入100个字符",soltNameLenUrl:"请输入URL",permissionUrl:"",isAtive:!1,isUrlAtive:!1,resourceLevel:[],ishow1:!0,ishow2:!1,ishow3:!1,resourceListFirst:[],resourceListSecond:[],model1:"",model2:""}},created:function(){this.getAdResourceLevel(),this.SelectGroupFirst(),this.SelectGroupSecond()},methods:{cancel:function(){this.level=1,this.parentId="",this.permissionUrl="",this.sysResourceName="",this.ishow2=!1,this.ishow3=!1,this.soltNameLenUrl="请输入URL",this.isUrlAtive=!1,this.soltNameLen="最多可输入100个字符",this.isAtive=!1,this.modal=!1},beforeLoad:function(){this.level=1,this.parentId="",this.permissionUrl="",this.sysResourceName="",this.ishow2=!1,this.ishow3=!1,this.soltNameLenUrl="请输入URL",this.isUrlAtive=!1,this.soltNameLen="最多可输入100个字符",this.isAtive=!1,this.modal=!0},onFocusName:function(){this.soltNameLen="最多可输入100个字符",this.isAtive=!1},userDataNum:function(){if(this.sysResourceName){null==this.sysResourceName.match(/^[\s\S]{1,100}$/)&&(this.soltNameLen="权限角色名长度超过一百个字符",this.isAtive=!0)}else this.soltNameLen="权限角色名不能为空",this.isAtive=!0},getAdResourceLevel:function(){var e=this;this.$Http.post("/common/getAdResourceLevelMap.json?level=2",{}).then(function(t){console.log(t),e.resourceLevel=t.body.data.list})},urlBlur:function(){""==this.permissionUrl?(this.soltNameLenUrl="URL不能为空",this.isUrlAtive=!0):(this.soltNameLenUrl="请输入URL",this.isUrlAtive=!1)},clickRadio:function(e){console.log(e),this.level=e,1===e?(this.ishow1=!0,this.ishow2=!1,this.ishow3=!1):2===e?(this.ishow1=!1,this.ishow2=!0,this.ishow3=!1):3===e&&(this.ishow1=!1,this.ishow2=!1,this.ishow3=!0)},SelectGroupFirst:function(){var e=this;this.$Http.get("/common/getResourceListByLevel.json?level=1&parentId",{}).then(function(t){console.log(t.body.data.resourceList),e.resourceListFirst=t.body.data.resourceList})},SelectGroupSecond:function(){var e=this;this.$Http.get("/common/getResourceList.json?level=2&nameLike=",{}).then(function(t){console.log(t.body.data.resourceList),e.resourceListSecond=t.body.data.resourceList})},createSysResource:function(){var e=this;if(""==this.permissionUrl)return this.isUrlAtive=!0,!1;var t="/user/createSysResource.json?level="+this.level+"&permissionUrl="+this.permissionUrl+"&sysResourceName="+encodeURIComponent(this.sysResourceName)+"&parentId="+this.parentId;this.$Http.get(t,{}).then(function(t){0===t.body.status&&(e.modal=!1,e.SelectGroupFirst(),e.SelectGroupSecond(),e.$emit("filterParent"))})}}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form-wrap"},[s("Modal",{staticStyle:{"{width":"100%}"},attrs:{title:"新建权限功能","class-name":"modal-box"},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[s("div",{staticClass:"fu"},[s("div",{staticClass:"RadioGroup-wrap"},[s("span",{staticClass:"label-left"},[e._v("级别类型")]),e._v(" "),e._l(e.resourceLevel,function(t,i){return s("RadioGroup",{key:i,on:{"on-change":e.clickRadio},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}},[s("Radio",{attrs:{label:t.id,value:t.id}},[e._v(e._s(t.name))])],1)})],2),e._v(" "),s("ul",{staticClass:"content-page"},[s("li",{directives:[{name:"show",rawName:"v-show",value:e.ishow2,expression:"ishow2"}]},[s("div",{staticClass:"content-input"},[s("span",{staticClass:"label-left"},[e._v("所属一级分类：")]),e._v(" "),s("Select",{staticStyle:{width:"200px"},model:{value:e.parentId,callback:function(t){e.parentId=t},expression:"parentId"}},e._l(e.resourceListFirst,function(t,i){return s("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}))],1)]),e._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:e.ishow3,expression:"ishow3"}]},[s("div",{staticClass:"content-input"},[s("span",{staticClass:"label-left"},[e._v("所属二级分类：")]),e._v(" "),s("Select",{staticStyle:{width:"200px"},model:{value:e.parentId,callback:function(t){e.parentId=t},expression:"parentId"}},e._l(e.resourceListSecond,function(t,i){return s("OptionGroup",{key:i,attrs:{label:t.name}},e._l(t.childList,function(t){return s("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name)+"\n                ")])}))}))],1)]),e._v(" "),s("div",{staticClass:"content-input"},[s("span",{staticClass:"label-left"},[e._v("权限功能名称：")]),e._v(" "),s("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入权限功能名称"},on:{"on-blur":e.userDataNum,"on-focus":e.onFocusName},model:{value:e.sysResourceName,callback:function(t){e.sysResourceName=t},expression:"sysResourceName"}}),e._v(" "),s("span",{staticClass:"label-right",class:{"label-right-active":e.isAtive}},[e._v(e._s(e.soltNameLen))])],1),e._v(" "),s("div",{staticClass:"content-input"},[s("span",{staticClass:"label-left"},[e._v("URL：")]),e._v(" "),s("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入地址"},on:{"on-blur":e.urlBlur},model:{value:e.permissionUrl,callback:function(t){e.permissionUrl=t},expression:"permissionUrl"}}),e._v(" "),s("span",{staticClass:"label-right",class:{"label-right-active":e.isUrlAtive}},[e._v(e._s(e.soltNameLenUrl))])],1)])]),e._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Button",{staticStyle:{"margin-right":"20px"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),s("Button",{staticClass:"btnColor",attrs:{type:"primary"},on:{click:e.createSysResource}},[e._v("新建")])],1)])],1)},staticRenderFns:[]};var a=s("vSla")(i,o,!1,function(e){s("5kHr")},"data-v-13c0a3aa",null);t.default=a.exports},Mtfb:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("a3Yh"),o={data:function(){return{modal:!1,level:1,sysResourceName:"",parentId:"",btndRadio:1,soltNameLen:"最多可输入100个字符",soltNameLenUrl:"请输入URL",permissionUrl:"",isAtive:!1,resourceLevel:[],ishow1:!0,ishow2:!1,ishow3:!1,isUrlAtive:!1,resourceListFirst:[],resourceListSecond:[],sysResourceId:""}},created:function(){this.getAdResourceLevel(),this.SelectGroupFirst(),this.SelectGroupSecond()},mounted:function(){},methods:s.n(i)()({beforeLoad:function(e){this.btndRadio="",this.parentId="",this.sysResourceName="",this.permissionUrl="",this.soltNameLen="最多可输入100个字符",this.isAtive=!1,this.soltNameLenUrl="请输入URL",this.isUrlAtive=!1,this.modal=!0,this.clickRadio(e)},cancel:function(){this.soltNameLen="最多可输入100个字符",this.isAtive=!1,this.soltNameLenUrl="请输入URL",this.isUrlAtive=!1,this.modal=!1},userDataNum:function(){if(this.sysResourceName){null==this.sysResourceName.match(/^[\s\S]{1,100}$/)&&(this.soltNameLen="长度超过一百个字符",this.isAtive=!0)}else this.soltNameLen="权限功能名称不能为空",this.isAtive=!0},onFocusName:function(){this.soltNameLen="最多可输入100个字符",this.isAtive=!1},getAdResourceLevel:function(){var e=this;this.$Http.post("/common/getAdResourceLevelMap.json?level=2",{}).then(function(t){console.log(t),e.resourceLevel=t.body.data.list})},urlBlur:function(){""==this.permissionUrl?(this.soltNameLenUrl="URL不能为空",this.isUrlAtive=!0):(this.soltNameLenUrl="请输入URL",this.isUrlAtive=!1)},clickRadio:function(e){console.log(e),this.level=e,1===e?(this.ishow1=!0,this.ishow2=!1,this.ishow3=!1):2===e?(this.ishow1=!1,this.ishow2=!0,this.ishow3=!1):3===e&&(this.ishow1=!1,this.ishow2=!1,this.ishow3=!0)},SelectGroupFirst:function(){var e=this;this.$Http.get("/common/getResourceListByLevel.json?level=1&parentId",{}).then(function(t){console.log(t.body.data.resourceList),e.resourceListFirst=t.body.data.resourceList})},SelectGroupSecond:function(){var e=this;this.$Http.get("/common/getResourceList.json?level=2&nameLike=",{}).then(function(t){console.log(t.body.data.resourceList),e.resourceListSecond=t.body.data.resourceList})},updateSysResource:function(){var e=this;if(""==this.permissionUrl)return this.isUrlAtive=!0,!1;var t="/user/updateSysResource.json?level="+this.level+"&permissionUrl="+this.permissionUrl+"&sysResourceName="+encodeURIComponent(this.sysResourceName)+"&parentId="+this.parentId+"&sysResourceId="+this.sysResourceId;this.$Http.get(t,{}).then(function(t){console.log(t),0===t.body.status&&(e.modal=!1,e.$emit("filterParent"))})},getSysResourceById:function(e){var t=this;this.sysResourceId=e;var s="/user/getSysResourceById.json?sysResourceId="+e;this.$Http.get(s,{}).then(function(e){0===e.body.status&&(console.log(e),t.level=e.body.data.level,t.parentId=e.body.data.parentId,t.sysResourceName=e.body.data.sysResourceName,t.permissionUrl=e.body.data.permissionUrl)})}},"urlBlur",function(){""==this.permissionUrl?(this.soltNameLenUrl="URL不能为空",this.isUrlAtive=!0):(this.soltNameLenUrl="请输入URL",this.isUrlAtive=!1)})},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form-wrap"},[s("Modal",{staticStyle:{"{width":"100%}"},attrs:{title:"修改权限功能","class-name":"modal-box"},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[s("div",{staticClass:"fu"},[s("div",{staticClass:"RadioGroup-wrap"},[s("span",{staticClass:"label-left"},[e._v("级别类型")]),e._v(" "),e._l(e.resourceLevel,function(t,i){return s("RadioGroup",{key:i,on:{"on-change":e.clickRadio},model:{value:e.level,callback:function(t){e.level=t},expression:"level"}},[s("Radio",{attrs:{label:t.id}},[e._v(e._s(t.name))])],1)})],2),e._v(" "),s("ul",{staticClass:"content-page"},[s("li",{directives:[{name:"show",rawName:"v-show",value:e.ishow2,expression:"ishow2"}]},[s("div",{staticClass:"content-input"},[s("span",{staticClass:"label-left"},[e._v("所属一级分类：")]),e._v(" "),s("Select",{staticStyle:{width:"200px"},model:{value:e.parentId,callback:function(t){e.parentId=t},expression:"parentId"}},e._l(e.resourceListFirst,function(t,i){return s("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name))])}))],1)]),e._v(" "),s("li",{directives:[{name:"show",rawName:"v-show",value:e.ishow3,expression:"ishow3"}]},[s("div",{staticClass:"content-input"},[s("span",{staticClass:"label-left"},[e._v("所属二级分类：")]),e._v(" "),s("Select",{staticStyle:{width:"200px"},model:{value:e.parentId,callback:function(t){e.parentId=t},expression:"parentId"}},e._l(e.resourceListSecond,function(t,i){return s("OptionGroup",{key:i,attrs:{label:t.name}},e._l(t.childList,function(t){return s("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.name)+"\n                ")])}))}))],1)]),e._v(" "),s("div",{staticClass:"content-input"},[s("span",{staticClass:"label-left"},[e._v("权限功能名称：")]),e._v(" "),s("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入权限功能名称"},on:{"on-blur":e.userDataNum},model:{value:e.sysResourceName,callback:function(t){e.sysResourceName=t},expression:"sysResourceName"}}),e._v(" "),s("span",{staticClass:"label-right",class:{"label-right-active":e.isAtive}},[e._v(e._s(e.soltNameLen))])],1),e._v(" "),s("div",{staticClass:"content-input"},[s("span",{staticClass:"label-left"},[e._v("URL：")]),e._v(" "),s("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入地址"},on:{"on-blur":e.urlBlur},model:{value:e.permissionUrl,callback:function(t){e.permissionUrl=t},expression:"permissionUrl"}}),e._v(" "),s("span",{staticClass:"label-right",class:{"label-right-active":e.isUrlAtive}},[e._v(e._s(e.soltNameLenUrl))])],1)])]),e._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Button",{staticStyle:{"margin-right":"20px"},on:{click:function(t){e.modal=!1}}},[e._v("取消")]),e._v(" "),s("Button",{staticClass:"btnColor",attrs:{type:"primary"},on:{click:e.updateSysResource}},[e._v("修改并启用")])],1)])],1)},staticRenderFns:[]};var l=s("vSla")(o,a,!1,function(e){s("QLAo")},"data-v-0cd7658f",null);t.default=l.exports},QLAo:function(e,t){},Qol6:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("KYCO");var i=s("Ldyx"),o=s("GJpq"),a=s("Mtfb"),l={components:{topTitle:i.a,setRole:o.default,changePermission:a.default},data:function(){var e=this;return{value:"",isShow:!1,roleStatus:1,loading:!0,permissionArr:[],pageSize:"",pageNo:"",modal1:!1,delBol:!0,modalLogin:!1,errorMsg:"",bolOk:null,paramsIndex:"",dataSysUserId:"",selectTabAllsysResourceid:"",deleAllArr:[],isAdds:!0,isDeletes:!0,deleteJurisdictionParams:[],data1:[],columns:[{type:"selection",width:60,align:"center"},{title:"权限功能名称",key:"sysResourceName"},{title:"状态",key:"statusDesc"},{title:"层级路径",key:"parentUrl"},{title:"接口路径",key:"permissionUrl"},{title:"级别类型",key:"resourceType"},{title:"操作",key:"operate",width:150,align:"center",render:function(t,s){return 0==s.row.status?t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px",backgroundColor:"#1fa2fd",borderColor:"#1fa2fd"},on:{click:function(){e.$refs.changePermission.beforeLoad(s.row.level),e.$refs.changePermission.getSysResourceById(s.row.sysResourceid)}}},"修改")]):t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px",backgroundColor:"#1fa2fd",borderColor:"#1fa2fd"},on:{click:function(){e.$refs.changePermission.beforeLoad(s.row.level),e.$refs.changePermission.getSysResourceById(s.row.sysResourceid)}}},"修改"),t("Button",{props:{type:"error",size:"small"},style:{backgroundColor:"#ea0b00",borderColor:"#ea0b00"},on:{click:function(){var t=[];t.push(s.row),e.deleteBox(t)}}},"删除")])}}]}},created:function(){this.roleList()},methods:{selectData:function(e){console.log(e);var t=e.filter(function(e){return 1==e.status});this.isDeletes=0==t.length,this.deleteJurisdictionParams=t},deleteBox:function(e){var t=this;console.log(e);var s=e.map(function(e,t){return e.sysResourceName}),i=e.map(function(e,t){return e.sysResourceid});this.$Modal.confirm({title:"删除权限",content:"你确定要删除"+s.join(","),onOk:function(){console.log(i.join(",")),t.deleteMaterialData(i.join(","))}})},deleteMaterialData:function(e){var t=this,s="/user/deleteSysResource.json?sysResourceId="+e;console.log(e),this.$Http.get(s,{}).then(function(e){console.log(e),0==e.body.status&&t.$Message.info("删除成功")})},deleteAll:function(){this.deleteBox(this.deleteJurisdictionParams)},toLogin:function(){this.$router.push({name:"login"})},trigger:function(){this.isShow=!this.isShow},getFilterData:function(){this.loading=!0,this.roleList()},show:function(e){this.$Modal.info({title:"User Info",content:"Name："+this.data1[e].name+"<br>Age："+this.data1[e].age+"<br>Address："+this.data1[e].address})},remove:function(e){this.data1.splice(e,1)},roleList:function(){var e=this,t="/user/getSysResourceList.json?resourceNameLike="+encodeURIComponent(this.value)+"&pageSize=10&pageNo="+this.pageNo+"&status="+this.roleStatus;this.data1=[],this.$Http.get(t,{}).then(function(t){e.loading=!1,console.log(t.body),e.permissionArr=t.body.data.result;var s=[];for(var i in e.pageSize=t.body.data.totalCount,e.permissionArr)s={sysResourceName:e.permissionArr[i].sysResourceName,permissionUrl:e.permissionArr[i].permissionUrl,level:e.permissionArr[i].level,parentUrl:""==e.permissionArr[i].parentUrl?"／":e.permissionArr[i].parentUrl,resourceType:1==e.permissionArr[i].resourceType?"页面":"功能",sysResourceid:e.permissionArr[i].sysResourceid,key:i,status:e.permissionArr[i].status,statusDesc:0==e.permissionArr[i].status?"删除":"启用"},e.data1.push(s);console.log(e.data1)})},thisRouter:function(){this.$refs.setRole.beforeLoad()},clickPage:function(e){this.loading=!0,console.log(e),this.pageNo=e,this.data1=[],this.roleList()},search:function(){this.data1=[],this.roleList()},ok:function(){var e=this,t="/user/deleteSysResource.json?sysResourceId="+(0==this.delBol?this.dataSysUserId:this.selectTabAllsysResourceid);console.log(t),this.$Http.get(t,{}).then(function(t){if(console.log(t),0==t.body.status){e.$Message.info(t.body.msg);for(var s=0;s<e.deleAllArr.length;s++)e.data1.splice(e.deleAllArr[s],1)}else 200==t.body.status?(e.$router.push({name:"login"}),e.$Message.info(t.body.msg)):e.$Message.info(t.body.msg)})},cancel:function(){this.$Message.info("已取消删除")},selectTabdelAllid:function(e){this.delBol;for(var t="",s=0;s<e.length;s++)s==e.length-1?t+=e[s].sysResourceid:t+=e[s].sysResourceid+",";console.log(t),this.selectTabAllsysResourceid=t},delAllUserId:function(){this.modal1=!0}}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("top-title",{attrs:{title:"权限功能设置"}}),e._v(" "),s("div",{staticClass:"fu"},[s("div",{staticClass:"topBtnWrap"},[s("div",[s("Button",{staticClass:"btnColor",attrs:{icon:"plus",type:"primary"},on:{click:e.thisRouter}},[e._v("新建权限功能")]),e._v(" "),s("Button",{staticClass:"btnCancel",attrs:{disabled:e.isDeletes,type:"error"},on:{click:e.deleteAll}},[e._v("删除")]),e._v(" "),s("Button",{attrs:{type:"text"},on:{click:e.trigger}},[e._v("筛选  \n                    "),s("Icon",{attrs:{type:"arrow-down-b"}})],1)],1),e._v(" "),s("div",[s("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入权限功能名称"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),s("Button",{staticClass:"btnColor",attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")])],1)]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"master-content-middle"},[s("div",{staticClass:"label"},[e._v("\n                权限状态：\n            ")]),e._v(" "),s("div",{staticClass:"label-value"},[s("Select",{staticStyle:{width:"200px"},on:{"on-change":e.getFilterData},model:{value:e.roleStatus,callback:function(t){e.roleStatus=t},expression:"roleStatus"}},[s("Option",{attrs:{value:-99}},[e._v("全部")]),e._v(" "),s("Option",{attrs:{value:1}},[e._v("启用")]),e._v(" "),s("Option",{attrs:{value:0}},[e._v("删除")])],1)],1)]),e._v(" "),s("div",[s("div",{staticClass:"tab-full"},[s("Table",{ref:"selection",attrs:{"highlight-row":"",loading:e.loading,border:"",columns:e.columns,data:e.data1},on:{"on-selection-change":e.selectData}})],1),e._v(" "),s("Page",{attrs:{total:e.pageSize,"show-total":""},on:{"on-change":e.clickPage}})],1)]),e._v(" "),s("set-Role",{ref:"setRole",on:{filterParent:e.roleList}}),e._v(" "),s("change-Permission",{ref:"changePermission",on:{filterParent:e.roleList}}),e._v(" "),s("Modal",{attrs:{styles:{top:"20px"}},model:{value:e.modalLogin,callback:function(t){e.modalLogin=t},expression:"modalLogin"}},[s("p",[e._v(e._s(e.errorMsg))]),e._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("Button",{attrs:{type:"error",size:"large"},on:{click:e.toLogin}},[e._v("重新登录")])],1)])],1)},staticRenderFns:[]};var n=s("vSla")(l,r,!1,function(e){s("FuSp")},"data-v-f7ab119e",null);t.default=n.exports}});
//# sourceMappingURL=9.d677cd18763f04a0ad9e.js.map