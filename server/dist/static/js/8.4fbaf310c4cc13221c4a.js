webpackJsonp([8,15,25],{"/2Th":function(s,t){},KGmi:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("w67j");var a={data:function(){return{modal:!1,name:"",userName:"",password:"",surePaw:"",textArea:"",roleIds:[],soltNameLen:"最多可输入100个字符",soltUserName:"至少4位，最长16位，允许使用大小写英文字母、中文、数字",soltPaw:"至少6位，最长32位，必须包含小写字母、大写字母和阿拉伯数字三种字符",soltSurePaw:"请重复您上面输入的密码以确认输入正确",isAtive:!1,isUserAtive:!1,passwordActive:!1,surePawSolActivet:!1,radiaData1:1,radiaData2:2,radiaData3:3,radiaData4:4,radiaData5:5,getRoleListarr:[],checkedNames:[],checked:!0,roleIdChild:"",roleIdArr:[]}},created:function(){this.getRoleList(),this.getroleUserId()},methods:{beforeLoad:function(){this.userName="",this.password="",this.surePaw="",this.roleIdArr=[],this.roleIdChild="",this.name="",this.soltNameLen="最多可输入100个字符",this.soltUserName="至少4位，最长16位，允许使用大小写英文字母、中文、数字",this.soltPaw="至少6位，最长32位，必须包含小写字母、大写字母和阿拉伯数字三种字符",this.soltSurePaw="请重复您上面输入的密码以确认输入正确",this.isAtive=!1,this.isUserAtive=!1,this.passwordActive=!1,this.surePawSolActivet=!1,this.modal=!0},cancel:function(){this.roleIdArr=[],this.userName="",this.password="",this.surePaw="",this.name="",this.roleIdChild="",this.soltNameLen="最多可输入100个字符",this.soltUserName="至少4位，最长16位，允许使用大小写英文字母、中文、数字",this.soltPaw="至少6位，最长32位，必须包含小写字母、大写字母和阿拉伯数字三种字符",this.soltSurePaw="请重复您上面输入的密码以确认输入正确",this.isAtive=!1,this.isUserAtive=!1,this.passwordActive=!1,this.surePawSolActivet=!1,this.modal=!1},urlCreate:function(s){var t=this;this.$Http.get(s,{}).then(function(s){0===s.body.status&&(t.modal=!1,t.$emit("filterParent"))})},setUser:function(){var s="/user/createSysUser.json?userName="+encodeURIComponent(this.userName)+"&password="+encodeURIComponent(this.password)+"&passwordConfirm="+encodeURIComponent(this.surePaw)+"&roleIds="+this.roleIdChild+"&name="+encodeURIComponent(this.name);this.userName&&this.password&&this.surePaw&&this.roleIdChild&&this.name&&this.urlCreate(s)},getRoleList:function(){var s=this;this.$Http.get("/common/getRoleList.json?",{}).then(function(t){console.log(t.body.data.roleList),s.getRoleListarr=t.body.data.roleList})},userDataNum:function(){if(this.name){null==this.name.match(/^[\s\S]{1,100}$/)&&(this.soltNameLen="姓名长度超过一百个字符",this.isAtive=!0)}else this.soltNameLen="姓名不能为空",this.isAtive=!0},userUserName:function(){if(this.userName){console.log(this.soltUserName);var s=this.userName.match(/^[a-zA-Z0-9_-]{4,16}$/);console.log(s),null==s&&(this.soltUserName="用户名不符合标准",this.isUserAtive=!0)}else this.soltUserName="用户名不能为空",this.isUserAtive=!0},passwordSolt:function(){if(this.password){null==this.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,32}$/gm)&&(this.soltPaw="密码格式不正确",this.passwordActive=!0),this.password==this.surePaw?(this.soltSurePaw="密码确认正确",this.surePawSolActivet=!1):(this.soltSurePaw="两次密码输入不同",this.surePawSolActivet=!0)}else this.soltPaw="密码不能为空",this.passwordActive=!0},surePawSolt:function(){this.surePaw?this.surePaw==this.password?this.soltSurePaw="密码确认正确":(this.soltSurePaw="两次密码输入不同",this.surePawSolActivet=!0):(this.soltSurePaw="密码不能为空",this.surePawSolActivet=!0)},onFocusName:function(){this.soltNameLen="最多可输入100个字符",this.isAtive=!1},onFocusUsername:function(){this.soltUserName="至少4位，最长16位，允许使用大小写英文字母、中文、数字",this.isUserAtive=!1},onFocusPaw:function(){this.soltPaw="至少6位，最长32位，必须包含小写字母、大写字母和阿拉伯数字三种字符",this.passwordActive=!1},onFocusSurePaw:function(){this.soltSurePaw="请重复您上面输入的密码以确认输入正确",this.surePawSolActivet=!1},getroleUserId:function(){},checkAllGroupChange:function(s){for(var t="",e=0;e<s.length;e++)e==s.length-1?t+=s[e]:t+=s[e]+",";this.roleIdChild=t,console.log(this.roleIdChild)}}},o={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"form-wrap"},[e("Modal",{attrs:{title:"新建账号",styles:{width:"100%"},"class-name":"modal-box"},model:{value:s.modal,callback:function(t){s.modal=t},expression:"modal"}},[e("Form",{staticClass:"fu"},[e("ul",{staticClass:"form-full"},[e("li",[e("span",{staticClass:"label-left"},[s._v("姓名：")]),s._v(" "),e("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入姓名"},on:{"on-blur":s.userDataNum,"on-focus":s.onFocusName},model:{value:s.name,callback:function(t){s.name=t},expression:"name"}}),s._v(" "),e("span",{staticClass:"label-right",class:{"label-right-active":s.isAtive}},[s._v(s._s(s.soltNameLen))])],1),s._v(" "),e("li",[e("span",{staticClass:"label-left"},[s._v("用户名：")]),s._v(" "),e("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入用户名"},on:{"on-blur":s.userUserName,"on-focus":s.onFocusUsername},model:{value:s.userName,callback:function(t){s.userName=t},expression:"userName"}}),s._v(" "),e("span",{staticClass:"label-right",class:{"label-right-active":s.isUserAtive}},[s._v(s._s(s.soltUserName))])],1),s._v(" "),e("li",[e("span",{staticClass:"label-left"},[s._v("密码：")]),s._v(" "),e("Input",{staticStyle:{width:"300px"},attrs:{type:"password",placeholder:"请输入密码："},on:{"on-blur":s.passwordSolt,"on-focus":s.onFocusPaw},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),s._v(" "),e("span",{staticClass:"label-right",class:{"label-right-active":s.passwordActive}},[s._v(s._s(s.soltPaw))])],1),s._v(" "),e("li",[e("span",{staticClass:"label-left"},[s._v("确认密码：")]),s._v(" "),e("Input",{staticStyle:{width:"300px"},attrs:{type:"password",placeholder:"清再次输入密码"},on:{"on-blur":s.surePawSolt,"on-focus":s.onFocusSurePaw},model:{value:s.surePaw,callback:function(t){s.surePaw=t},expression:"surePaw"}}),s._v(" "),e("span",{staticClass:"label-right",class:{"label-right-active":s.surePawSolActivet}},[s._v(s._s(s.soltSurePaw))])],1),s._v(" "),e("li",[e("span",{staticClass:"label-left"},[s._v("权限角色：")]),s._v(" "),s._l(s.getRoleListarr,function(t,a){return e("CheckboxGroup",{key:a,staticStyle:{display:"inline-block"},on:{"on-change":s.checkAllGroupChange},model:{value:s.roleIdArr,callback:function(t){s.roleIdArr=t},expression:"roleIdArr"}},[e("Checkbox",{attrs:{label:t.roleId}},[s._v(s._s(t.roleName))])],1)})],2)])]),s._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{staticStyle:{"margin-right":"20px"},on:{click:s.cancel}},[s._v("取消")]),s._v(" "),e("Button",{staticClass:"btnColor",attrs:{type:"primary"},on:{click:s.setUser}},[s._v("新建")])],1)],1)],1)},staticRenderFns:[]};var i=e("vSla")(a,o,!1,function(s){e("v8cT")},"data-v-0e8a731e",null);t.default=i.exports},Kdzy:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{modal:!1,name:"",userName:"",password:"",surePaw:"",textArea:"",soltNameLen:"最多可输入100个字符",soltUserName:"至少4位，最长16位，允许使用大小写英文字母、中文、数字",soltPaw:"至少6位，最长32位，必须包含小写字母、大写字母和阿拉伯数字三种字符",soltSurePaw:"请重复您上面输入的密码以确认输入正确",isAtive:!1,isUserAtive:!1,passwordActive:!1,surePawSolActivet:!1,radiaData1:1,radiaData2:2,radiaData3:3,radiaData4:4,radiaData5:5,getRoleListarr:[],checkedNames:[],checked:!0,testv:"ssss",roleIdChild:"",roleIds:[],sysUserId:""}},created:function(){this.getRoleList(),this.getroleUserId()},methods:{beforeLoad:function(){this.name="",this.userName="",this.roleIds=[],this.soltNameLen="最多可输入100个字符",this.soltUserName="至少4位，最长16位，允许使用大小写英文字母、中文、数字",this.soltPaw="至少6位，最长32位，必须包含小写字母、大写字母和阿拉伯数字三种字符",this.soltSurePaw="请重复您上面输入的密码以确认输入正确",this.isAtive=!1,this.isUserAtive=!1,this.passwordActive=!1,this.surePawSolActivet=!1,this.modal=!0},cancel:function(){this.roleIdArr=[],this.userName="",this.password="",this.surePaw="",this.name="",this.roleIdChild="",this.soltNameLen="最多可输入100个字符",this.soltUserName="至少4位，最长16位，允许使用大小写英文字母、中文、数字",this.soltPaw="至少6位，最长32位，必须包含小写字母、大写字母和阿拉伯数字三种字符",this.soltSurePaw="请重复您上面输入的密码以确认输入正确",this.isAtive=!1,this.isUserAtive=!1,this.passwordActive=!1,this.surePawSolActivet=!1,this.modal=!1},setUser:function(){var s=this,t="/user/updateSysUser.json?userName="+encodeURIComponent(this.userName)+"&password="+encodeURIComponent(this.password)+"&passwordConfirm="+encodeURIComponent(this.surePaw)+"&roleIds="+this.roleIdChild+"&sysUserId="+this.sysUserId+"&name="+encodeURIComponent(this.name);this.$Http.get(t,{}).then(function(t){0===t.body.status&&(s.modal=!1,s.$emit("filterParent"),console.log(t.body))})},getRoleList:function(){var s=this;this.$Http.get("/common/getRoleList.json?",{}).then(function(t){console.log(t.body.data.roleList),s.getRoleListarr=t.body.data.roleList,console.log(s.getRoleListarr)})},userDataNum:function(){if(this.name){null==this.name.match(/^[\s\S]{1,100}$/)&&(this.soltNameLen="姓名长度超过一百个字符",this.isAtive=!0)}else this.soltNameLen="姓名不能为空",this.isAtive=!0},userUserName:function(){if(this.userName){console.log(this.soltUserName);var s=this.userName.match(/^[a-zA-Z0-9_-]{4,16}$/);console.log(s),null==s&&(this.soltUserName="用户名不符合标准",this.isUserAtive=!0)}else this.soltUserName="用户名不能为空",this.isUserAtive=!0},passwordSolt:function(){if(this.password){null==this.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,32}$/gm)&&(this.soltPaw="密码格式不正确",this.passwordActive=!0),this.password==this.surePaw?(this.soltSurePaw="密码确认正确",this.surePawSolActivet=!1):(this.soltSurePaw="两次密码输入不同",this.surePawSolActivet=!0)}else this.soltPaw="密码不能为空",this.passwordActive=!0},surePawSolt:function(){this.surePaw?this.surePaw==this.password?this.soltSurePaw="密码确认正确":(this.soltSurePaw="两次密码输入不同",this.surePawSolActivet=!0):(this.soltSurePaw="密码不能为空",this.surePawSolActivet=!0)},onFocusName:function(){this.soltNameLen="最多可输入100个字符",this.isAtive=!1},onFocusUsername:function(){this.soltUserName="至少4位，最长16位，允许使用大小写英文字母、中文、数字",this.isUserAtive=!1},onFocusPaw:function(){this.soltPaw="至少6位，最长32位，必须包含小写字母、大写字母和阿拉伯数字三种字符",this.passwordActive=!1},onFocusSurePaw:function(){this.soltSurePaw="请重复您上面输入的密码以确认输入正确",this.surePawSolActivet=!1},getroleUserId:function(){},checkAllGroupChange:function(s){console.log(s);for(var t="",e=0;e<s.length;e++)e==s.length-1?t+=s[e]:t+=s[e]+",";this.roleIdChild=t,console.log(t)},getSysUserById:function(s){var t=this;this.sysUserId=s;var e="/user/getSysUserById.json?sysUserId="+s;this.$Http.get(e,{}).then(function(s){if(t.roleIds=[],console.log(s),0===s.body.status){t.name=s.body.data.name,t.userName=s.body.data.userName;for(var e="",a=0;a<s.body.data.roles.length;a++)t.roleIds.push(s.body.data.roles[a].id),a==s.body.data.roles.length-1?e+=s.body.data.roles[a].id:e+=s.body.data.roles[a].id+",",t.roleIdChild=e;console.log(t.roleIdChild),console.log(t.roleIds)}})}}},o={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"form-wrap"},[e("Modal",{attrs:{title:"修改账号",styles:{width:"100%"},"class-name":"modal-box"},model:{value:s.modal,callback:function(t){s.modal=t},expression:"modal"}},[e("Form",[e("ul",{staticClass:"form-full"},[e("li",[e("span",{staticClass:"label-left"},[s._v("姓名：")]),s._v(" "),e("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入姓名"},on:{"on-blur":s.userDataNum,"on-focus":s.onFocusName},model:{value:s.name,callback:function(t){s.name=t},expression:"name"}}),s._v(" "),e("span",{staticClass:"label-right",class:{"label-right-active":s.isAtive}},[s._v(s._s(s.soltNameLen))])],1),s._v(" "),e("li",[e("span",{staticClass:"label-left"},[s._v("用户名：")]),s._v(" "),e("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入用户名"},on:{"on-blur":s.userUserName,"on-focus":s.onFocusUsername},model:{value:s.userName,callback:function(t){s.userName=t},expression:"userName"}}),s._v(" "),e("span",{staticClass:"label-right",class:{"label-right-active":s.isUserAtive}},[s._v(s._s(s.soltUserName))])],1),s._v(" "),e("li",[e("span",{staticClass:"label-left"},[s._v("密码：")]),s._v(" "),e("Input",{staticStyle:{width:"300px"},attrs:{type:"password",placeholder:"请输入密码："},on:{"on-blur":s.passwordSolt,"on-focus":s.onFocusPaw},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),s._v(" "),e("span",{staticClass:"label-right",class:{"label-right-active":s.passwordActive}},[s._v(s._s(s.soltPaw))])],1),s._v(" "),e("li",[e("span",{staticClass:"label-left"},[s._v("确认密码：")]),s._v(" "),e("Input",{staticStyle:{width:"300px"},attrs:{type:"password",placeholder:"清再次输入密码"},on:{"on-blur":s.surePawSolt,"on-focus":s.onFocusSurePaw},model:{value:s.surePaw,callback:function(t){s.surePaw=t},expression:"surePaw"}}),s._v(" "),e("span",{staticClass:"label-right",class:{"label-right-active":s.surePawSolActivet}},[s._v(s._s(s.soltSurePaw))])],1),s._v(" "),e("li",[e("span",{staticClass:"label-left"},[s._v("权限角色：")]),s._v(" "),s._l(s.getRoleListarr,function(t,a){return e("CheckboxGroup",{key:a,staticStyle:{display:"inline-block"},on:{"on-change":s.checkAllGroupChange},model:{value:s.roleIds,callback:function(t){s.roleIds=t},expression:"roleIds"}},[e("Checkbox",{attrs:{value:t.roleId,label:t.roleId}},[s._v(s._s(t.roleName))])],1)})],2)])]),s._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{staticStyle:{"margin-right":"20px"},on:{click:s.cancel}},[s._v("取消")]),s._v(" "),e("Button",{staticClass:"btnColor",attrs:{type:"primary"},on:{click:s.setUser}},[s._v("修改并保存")])],1)],1)],1)},staticRenderFns:[]};var i=e("vSla")(a,o,!1,function(s){e("YWeA")},"data-v-76b3dc0f",null);t.default=i.exports},L75E:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("KYCO");var a=e("Ldyx"),o=e("KGmi"),i=e("Kdzy"),l={components:{topTitle:a.a,setFolder:o.default,recomposeRole:i.default},data:function(){var s=this;return{value:"",status:"1",modal:!1,loading:!0,data1:[],routeParams:"",pageSize:0,pageNo:"",modal1:!1,bolOk:null,paramsIndex:"",dataSysUserId:"",isFilterShow:!1,isAdds:!0,isDeletes:!0,addCustomParams:[],deleteCustomParams:[],columns:[{title:"姓名",key:"name"},{title:"用户名",key:"userName"},{title:"权限角色",key:"rolePermission"},{title:"状态",key:"status",render:function(s,t){return s("span",1==t.row.status?"正常":"已删除")}},{title:"操作",key:"operate",width:150,align:"center",render:function(t,e){if(0!=e.row.status)return t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px",backgroundColor:"#1fa2fd",borderColor:"#1fa2fd"},on:{click:function(){s.$refs.recomposeRole.beforeLoad(),s.$refs.recomposeRole.getSysUserById(e.row.sysUserId)}}},"修改"),t("Button",{props:{type:"error",size:"small"},style:{backgroundColor:"#ea0b00",borderColor:"#ea0b00"},on:{click:function(){var t=[];t.push(e.row),s.deleteBox(t)}}},"删除")])}}]}},created:function(){this.roleList()},methods:{showFilter:function(){this.isFilterShow=!this.isFilterShow},selectData:function(s){console.log(s);var t=s.filter(function(s){return 1==s.status}),e=s.filter(function(s){return 0==s.status});console.log(e),this.isAdds=!e.length>0,alert(this.isAdds),this.addCustomParams=e,this.isDeletes=!t.length>0,this.deleteCustomParams=t},deleteBox:function(s){var t=this;console.log(s);var e=s.map(function(s,t){return s.name}),a=s.map(function(s,t){return s.sysUserId});this.$Modal.confirm({title:"删除账号",content:"你确定要删除"+e.join(","),onOk:function(){t.deleteMaterialData(a.join(",")),console.log(a.join(","))}})},deleteMaterialData:function(s){var t=this,e="/user/deleteSysUser.json?sysUserId="+s;console.log(s),this.$Http.get(e,{}).then(function(s){console.log(s),t.$Message.info(s.body.data),t.roleList()})},show:function(s){this.$Modal.info({title:"User Info",content:"Name："+this.data1[s].name+"<br>Age："+this.data1[s].age+"<br>Address："+this.data1[s].address})},remove:function(s){this.data1.splice(s,1)},roleList:function(){var s=this,t=sessionStorage.getItem("userName"),e="/user/getSysUserList.json?userName="+encodeURIComponent(t)+"&userNameOrNameLike="+encodeURIComponent(this.value)+"&status="+this.status+"&pageSize=10&pageNo="+this.pageNo;this.$Http.get(e,{}).then(function(t){console.log(t.body.data);var e=t.body.data.result,a=[];for(var o in s.pageSize=t.body.data.totalCount,s.loading=!1,s.data1=[],e){var i=e[o].roles;for(var l in console.log(i),i)console.log(i[l].id);a={name:e[o].name,userName:e[o].userName,rolePermission:e[o].rolesDisp,sysUserId:e[o].sysUserId,status:e[o].status},s.data1.push(a)}})},asyncOK:function(){var s=this;setTimeout(function(){s.modal=!1},2e3)},thisRouter:function(){this.$refs.setFolder.beforeLoad()},clickPage:function(s){console.log(s),this.loading=!0,this.pageNo=s,this.data1=[],this.roleList()},search:function(){this.loading=!0,this.data1=[],this.roleList()},ok:function(){var s=this,t="/user/deleteSysUser.json?sysUserId="+this.dataSysUserId;console.log(t),this.$Http.get(t,{}).then(function(t){console.log(t),0==t.body.status?(s.$Message.info(t.body.msg),s.data1.splice(s.paramsIndex,1)):200==t.body.status?(s.$router.push({name:"login"}),s.$Message.info(t.body.msg)):s.$Message.info(t.body.msg)})},cancel:function(){this.$Message.info("已取消删除")}}},r={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",[e("top-title",{attrs:{title:"账号管理"}}),s._v(" "),e("div",{staticClass:"fu"},[e("div",{staticClass:"btn-wrap"},[e("div",[e("Button",{staticClass:"btnColor",attrs:{icon:"plus",type:"primary"},on:{click:s.thisRouter}},[s._v("新建账号")]),s._v(" "),e("Button",{attrs:{type:"text"},on:{click:s.showFilter}},[s._v("筛选  "),e("Icon",{attrs:{type:"arrow-down-b"}})],1)],1),s._v(" "),e("div",[e("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入姓名或用户名"},model:{value:s.value,callback:function(t){s.value=t},expression:"value"}}),s._v(" "),e("Button",{staticClass:"btnColor",attrs:{type:"primary",icon:"search"},on:{click:s.search}},[s._v("搜索")])],1)]),s._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.isFilterShow,expression:"isFilterShow"}],staticClass:"master-content-middle"},[e("div",{staticClass:"label"},[s._v("\n        状态：\n      ")]),s._v(" "),e("div",{staticClass:"label-value"},[e("Select",{staticStyle:{width:"200px"},on:{"on-change":s.search},model:{value:s.status,callback:function(t){s.status=t},expression:"status"}},[e("Option",{attrs:{value:"-99"}},[s._v("全部")]),s._v(" "),e("Option",{attrs:{value:"1"}},[s._v("正常")]),s._v(" "),e("Option",{attrs:{value:"0"}},[s._v("已删除")])],1)],1)]),s._v(" "),e("div",{staticClass:"master-content-content",staticStyle:{"margin-top":"10px"}},[e("Table",{ref:"selection",attrs:{loading:s.loading,border:"",columns:s.columns,data:s.data1},on:{"on-selection-change":s.selectData}}),s._v(" "),e("Page",{attrs:{total:s.pageSize,"show-total":""},on:{"on-change":s.clickPage}})],1),s._v(" "),e("Modal",{attrs:{title:"删除用户？"},on:{"on-ok":s.ok,"on-cancel":s.cancel},model:{value:s.modal1,callback:function(t){s.modal1=t},expression:"modal1"}},[e("p",[s._v("确定要删除此条内容吗？")])])],1),s._v(" "),e("set-Folder",{ref:"setFolder",on:{filterParent:s.roleList}}),s._v(" "),e("recompose-Role",{ref:"recomposeRole",on:{filterParent:s.roleList}})],1)},staticRenderFns:[]};var n=e("vSla")(l,r,!1,function(s){e("/2Th")},"data-v-60b660bb",null);t.default=n.exports},YWeA:function(s,t){},v8cT:function(s,t){}});
//# sourceMappingURL=8.4fbaf310c4cc13221c4a.js.map