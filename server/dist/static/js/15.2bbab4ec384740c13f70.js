webpackJsonp([15],{Kdzy:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{modal:!1,name:"",userName:"",password:"",surePaw:"",textArea:"",soltNameLen:"最多可输入100个字符",soltUserName:"至少4位，最长16位，允许使用大小写英文字母、中文、数字",soltPaw:"至少6位，最长32位，必须包含小写字母、大写字母和阿拉伯数字三种字符",soltSurePaw:"请重复您上面输入的密码以确认输入正确",isAtive:!1,isUserAtive:!1,passwordActive:!1,surePawSolActivet:!1,radiaData1:1,radiaData2:2,radiaData3:3,radiaData4:4,radiaData5:5,getRoleListarr:[],checkedNames:[],checked:!0,testv:"ssss",roleIdChild:"",roleIds:[],sysUserId:""}},created:function(){this.getRoleList(),this.getroleUserId()},methods:{beforeLoad:function(){this.name="",this.userName="",this.roleIds=[],this.soltNameLen="最多可输入100个字符",this.soltUserName="至少4位，最长16位，允许使用大小写英文字母、中文、数字",this.soltPaw="至少6位，最长32位，必须包含小写字母、大写字母和阿拉伯数字三种字符",this.soltSurePaw="请重复您上面输入的密码以确认输入正确",this.isAtive=!1,this.isUserAtive=!1,this.passwordActive=!1,this.surePawSolActivet=!1,this.modal=!0},cancel:function(){this.roleIdArr=[],this.userName="",this.password="",this.surePaw="",this.name="",this.roleIdChild="",this.soltNameLen="最多可输入100个字符",this.soltUserName="至少4位，最长16位，允许使用大小写英文字母、中文、数字",this.soltPaw="至少6位，最长32位，必须包含小写字母、大写字母和阿拉伯数字三种字符",this.soltSurePaw="请重复您上面输入的密码以确认输入正确",this.isAtive=!1,this.isUserAtive=!1,this.passwordActive=!1,this.surePawSolActivet=!1,this.modal=!1},setUser:function(){var s=this,t="/user/updateSysUser.json?userName="+encodeURIComponent(this.userName)+"&password="+encodeURIComponent(this.password)+"&passwordConfirm="+encodeURIComponent(this.surePaw)+"&roleIds="+this.roleIdChild+"&sysUserId="+this.sysUserId+"&name="+encodeURIComponent(this.name);this.$Http.get(t,{}).then(function(t){0===t.body.status&&(s.modal=!1,s.$emit("filterParent"),console.log(t.body))})},getRoleList:function(){var s=this;this.$Http.get("/common/getRoleList.json?",{}).then(function(t){console.log(t.body.data.roleList),s.getRoleListarr=t.body.data.roleList,console.log(s.getRoleListarr)})},userDataNum:function(){if(this.name){null==this.name.match(/^[\s\S]{1,100}$/)&&(this.soltNameLen="姓名长度超过一百个字符",this.isAtive=!0)}else this.soltNameLen="姓名不能为空",this.isAtive=!0},userUserName:function(){if(this.userName){console.log(this.soltUserName);var s=this.userName.match(/^[a-zA-Z0-9_-]{4,16}$/);console.log(s),null==s&&(this.soltUserName="用户名不符合标准",this.isUserAtive=!0)}else this.soltUserName="用户名不能为空",this.isUserAtive=!0},passwordSolt:function(){if(this.password){null==this.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,32}$/gm)&&(this.soltPaw="密码格式不正确",this.passwordActive=!0),this.password==this.surePaw?(this.soltSurePaw="密码确认正确",this.surePawSolActivet=!1):(this.soltSurePaw="两次密码输入不同",this.surePawSolActivet=!0)}else this.soltPaw="密码不能为空",this.passwordActive=!0},surePawSolt:function(){this.surePaw?this.surePaw==this.password?this.soltSurePaw="密码确认正确":(this.soltSurePaw="两次密码输入不同",this.surePawSolActivet=!0):(this.soltSurePaw="密码不能为空",this.surePawSolActivet=!0)},onFocusName:function(){this.soltNameLen="最多可输入100个字符",this.isAtive=!1},onFocusUsername:function(){this.soltUserName="至少4位，最长16位，允许使用大小写英文字母、中文、数字",this.isUserAtive=!1},onFocusPaw:function(){this.soltPaw="至少6位，最长32位，必须包含小写字母、大写字母和阿拉伯数字三种字符",this.passwordActive=!1},onFocusSurePaw:function(){this.soltSurePaw="请重复您上面输入的密码以确认输入正确",this.surePawSolActivet=!1},getroleUserId:function(){},checkAllGroupChange:function(s){console.log(s);for(var t="",e=0;e<s.length;e++)e==s.length-1?t+=s[e]:t+=s[e]+",";this.roleIdChild=t,console.log(t)},getSysUserById:function(s){var t=this;this.sysUserId=s;var e="/user/getSysUserById.json?sysUserId="+s;this.$Http.get(e,{}).then(function(s){if(t.roleIds=[],console.log(s),0===s.body.status){t.name=s.body.data.name,t.userName=s.body.data.userName;for(var e="",a=0;a<s.body.data.roles.length;a++)t.roleIds.push(s.body.data.roles[a].id),a==s.body.data.roles.length-1?e+=s.body.data.roles[a].id:e+=s.body.data.roles[a].id+",",t.roleIdChild=e;console.log(t.roleIdChild),console.log(t.roleIds)}})}}},o={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"form-wrap"},[e("Modal",{attrs:{title:"修改账号",styles:{width:"100%"},"class-name":"modal-box"},model:{value:s.modal,callback:function(t){s.modal=t},expression:"modal"}},[e("Form",[e("ul",{staticClass:"form-full"},[e("li",[e("span",{staticClass:"label-left"},[s._v("姓名：")]),s._v(" "),e("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入姓名"},on:{"on-blur":s.userDataNum,"on-focus":s.onFocusName},model:{value:s.name,callback:function(t){s.name=t},expression:"name"}}),s._v(" "),e("span",{staticClass:"label-right",class:{"label-right-active":s.isAtive}},[s._v(s._s(s.soltNameLen))])],1),s._v(" "),e("li",[e("span",{staticClass:"label-left"},[s._v("用户名：")]),s._v(" "),e("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入用户名"},on:{"on-blur":s.userUserName,"on-focus":s.onFocusUsername},model:{value:s.userName,callback:function(t){s.userName=t},expression:"userName"}}),s._v(" "),e("span",{staticClass:"label-right",class:{"label-right-active":s.isUserAtive}},[s._v(s._s(s.soltUserName))])],1),s._v(" "),e("li",[e("span",{staticClass:"label-left"},[s._v("密码：")]),s._v(" "),e("Input",{staticStyle:{width:"300px"},attrs:{type:"password",placeholder:"请输入密码："},on:{"on-blur":s.passwordSolt,"on-focus":s.onFocusPaw},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),s._v(" "),e("span",{staticClass:"label-right",class:{"label-right-active":s.passwordActive}},[s._v(s._s(s.soltPaw))])],1),s._v(" "),e("li",[e("span",{staticClass:"label-left"},[s._v("确认密码：")]),s._v(" "),e("Input",{staticStyle:{width:"300px"},attrs:{type:"password",placeholder:"清再次输入密码"},on:{"on-blur":s.surePawSolt,"on-focus":s.onFocusSurePaw},model:{value:s.surePaw,callback:function(t){s.surePaw=t},expression:"surePaw"}}),s._v(" "),e("span",{staticClass:"label-right",class:{"label-right-active":s.surePawSolActivet}},[s._v(s._s(s.soltSurePaw))])],1),s._v(" "),e("li",[e("span",{staticClass:"label-left"},[s._v("权限角色：")]),s._v(" "),s._l(s.getRoleListarr,function(t,a){return e("CheckboxGroup",{key:a,staticStyle:{display:"inline-block"},on:{"on-change":s.checkAllGroupChange},model:{value:s.roleIds,callback:function(t){s.roleIds=t},expression:"roleIds"}},[e("Checkbox",{attrs:{value:t.roleId,label:t.roleId}},[s._v(s._s(t.roleName))])],1)})],2)])]),s._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{staticStyle:{"margin-right":"20px"},on:{click:s.cancel}},[s._v("取消")]),s._v(" "),e("Button",{staticClass:"btnColor",attrs:{type:"primary"},on:{click:s.setUser}},[s._v("修改并保存")])],1)],1)],1)},staticRenderFns:[]};var l=e("vSla")(a,o,!1,function(s){e("YWeA")},"data-v-76b3dc0f",null);t.default=l.exports},YWeA:function(s,t){}});
//# sourceMappingURL=15.2bbab4ec384740c13f70.js.map