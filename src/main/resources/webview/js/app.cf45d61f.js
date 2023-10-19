(function(){"use strict";var e={61222:function(e,t,n){var i=n(20144),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("MainPage")],1)},o=[],a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container",staticStyle:{height:"100vh"}},[t("div",{staticClass:"container-head"},[t("el-popover",{attrs:{placement:"left",trigger:"hover"}},[t("span",[e._v("添加新会话")]),t("span",{staticClass:"el-icon-plus addHistory",attrs:{slot:"reference"},on:{click:e.addChart},slot:"reference"})])],1),t("div",{ref:"mainRef",staticClass:"container-main"},[e.dataList?.length&&e.dataList?.length>0?t("div",e._l(e.dataList,(function(n,i){return t("div",{key:i},[t("div",{staticClass:"main-title"},[t("QuestionComponent",{attrs:{question:n.question}})],1),t("div",{staticClass:"main-title"},[t("div",{staticStyle:{display:"flex","justify-content":"space-between","padding-left":"8px","margin-bottom":"5px"}},[t("div",{staticStyle:{"font-weight":"bold","font-size":"14px"}},[e._v("Answer：")]),t("div",[n.refresh?t("span",{staticClass:"el-icon-refresh-right",staticStyle:{"margin-right":"8px",cursor:"pointer","font-size":"16px"},on:{click:function(t){return e.onRefresh(n.question)}}}):e._e(),n.success?t("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:n.answer,expression:"item.answer",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onCopyError,expression:"onCopyError",arg:"error"}],staticClass:"el-icon-document-copy",staticStyle:{cursor:"pointer","font-size":"16px"}}):e._e()])]),t("div",{directives:[{name:"loading",rawName:"v-loading",value:i===e.dataList?.length-1&&e.loading,expression:"index === dataList?.length - 1 && loading"}],staticStyle:{"background-color":"#303943","border-radius":"8px",padding:"8px"},attrs:{"element-loading-background":"rgb(255 255 255 / 28%)","element-loading-spinner":"el-icon-loading"}},[t("div",{staticClass:"markdown-body",staticStyle:{"min-height":"24px","font-size":"14px"}},[t("vue-markdown",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{source:n.answer}})],1)])]),i!==e.dataList?.length-1?t("el-divider"):e._e()],1)})),0):e._e(),e.dataList?.length&&0!==e.dataList?.length?e._e():t("div",{staticStyle:{margin:"auto",width:"80%","text-align":"center","padding-top":"100px"}},[t("QuickSearch",{on:{quickSend:e.quickSend}})],1)]),t("div",{staticClass:"container-foot"},[t("div",{staticStyle:{"margin-bottom":"10px"}},[t("div",{staticStyle:{display:"flex","justify-content":"center",height:"20px"}},[e.stopVisible?t("button",{staticClass:"stopStyle",on:{click:e.stop}},[e._v("stop generating")]):e._e()]),t("el-input",{staticStyle:{width:"100%",display:"flex","justify-content":"center"},attrs:{placeholder:"请输入内容",type:"textarea",resize:"none",id:"textArea",contenteditable:"true"},model:{value:e.sendMessage,callback:function(t){e.sendMessage=t},expression:"sendMessage"}})],1),t("div",{staticStyle:{display:"flex","justify-content":"end",color:"#777777",width:"97%",height:"20px"},attrs:{id:"sendContainer"}},[t("div",[e._v("Enter 发送")]),e.loading?e._e():t("div",{staticClass:"sendIcon",on:{click:e.send}},[t("div",{staticClass:"el-icon-position",staticStyle:{rotate:"45deg","font-size":"16px"}})]),e.loading?t("div",{staticClass:"loadingIcon"},[t("div",{staticClass:"el-icon-loading",staticStyle:{"font-size":"16px"}})]):e._e()])])])},r=[],l=(n(57658),n(89296)),c=n.n(l),d=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{"text-indent":"8px","margin-bottom":"5px","font-weight":"bold","font-size":"14px"}},[e._v("Question：")]),t("div",{staticClass:"markdown-body",staticStyle:{"font-size":"14px"}},[t("vue-markdown",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{source:e.question}})],1)])},u=[],p={components:{VueMarkdown:c()},props:["question"],name:"questionComponent"},h=p,g=n(1001),f=(0,g.Z)(h,d,u,!1,null,"0784d80e",null),m=f.exports,v=function(){var e=this,t=e._self._c;return t("div",e._l(e.list,(function(n,i){return t("div",{key:i,staticStyle:{color:"white"}},[t("div",{staticClass:"aaa",staticStyle:{border:"1px solid rgba(147,146,146,0.8)","margin-bottom":"8px","border-radius":"16px",padding:"8px 0",cursor:"pointer"},on:{click:function(t){return e.quickSend(n)}}},[e._v(" "+e._s(n)+" ")])])})),0)},y=[],b={name:"quickSearch",data(){return{list:["Generate code in Java to convert a number from one base to another","Generate code to implement a simple REST API in go","How to set global variables in git","Create an encrypted s3 bucket using the AWS CLI","Explain B+ trees, give an example with code"]}},methods:{quickSend(e){this.$emit("quickSend",e)}}},x=b,S=(0,g.Z)(x,v,y,!1,null,"d3949b08",null),w=S.exports,C=n(96486),k=n.n(C),_=n(20637),T=n(1375),M={name:"MainPage",components:{"vue-markdown":c(),QuestionComponent:m,QuickSearch:w},data(){return{loading:!1,inputs:"",sendMessage:"",dataList:[],res:"",range:null,inputHeight:"",messageType:"",answer:"",delay:50,stopStatus:!1,stopVisible:!1,ideaSelect:null,sendUrl:null,maxToken:"",controller:new AbortController}},methods:{addChart(){this.$confirm("确定要清空所有对话记录？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((()=>{this.dataList=[]})).catch((e=>{console.debug(e)}))},send(){if(k().isEmpty(k().trim(this.sendMessage)))return void this.$message({message:"message is empty",type:"warning"});this.loading=!0,this.dataList.push({question:this.ideaSelect??this.sendMessage,answer:""});const e=this.sendMessage;this.sendMessage="",this.stopStatus=!1,this.$refs.mainRef.scrollTop=this.$refs.mainRef.scrollHeight;const t=this;t.stopVisible=!0,(0,T.L)(t.sendUrl,{method:"POST",signal:t.controller.signal,headers:{"Content-Type":"application/json"},body:JSON.stringify({frequency_penalty:1.2,n_predict:t.maxToken,prompt:`|<end>|## human:${e}|<end>|## assistant:`,temperature:.2,stream:!0,stop:["|<end>|"]}),onerror(){t.ideaSelect=null,t.loading=!1,t.ideaSelect=null,t.stopVisible=!1,t.controller.abort("onerror"),t.controller=new AbortController,this.onclose()},onmessage({data:e}){if(e){t.stopVisible=!0,t.loading=!1;const{content:n,stop:i}=JSON.parse(e)??{};if(i)return t.ideaSelect=null,t.stopVisible=!1,t.controller.abort(),void(t.controller=new AbortController);t.dataList=k().map(t.dataList,((e,i)=>k().size(t.dataList)-1===i?{...e,refresh:!0,success:!0,answer:e.answer+n}:e)),t.$refs.mainRef.scrollTop=t.$refs.mainRef.scrollHeight}},onclose(){}})},async stop(){await this.controller.abort(),this.controller=new AbortController,this.loading=!1,this.stopStatus=!0,this.stopVisible=!1},quickSend(e){this.sendMessage=e},onCopy(){this.$message.success("已复制到剪贴板")},onCopyError(){this.$message.success("复制失败")},onRefresh(e){this.sendMessage=e,this.send()}},mounted(){window.addEventListener("message",(e=>{const{data:t}=e?.data;if(k().isString(t)){const n=JSON.parse(t)??{},{range:i,sendText:s,sendUrl:o,maxToken:a}={...n};this.sendUrl=o,console.debug("IDEA JSON","-------\x3e",e),console.debug("IDEA MESSAGE",n,"-------\x3e",i,s,o);const{inputs:r}={...s},{selectedText:l,end:c,start:d}={...i};console.debug("range ----\x3e",d,c,"selectedText -----\x3e",l),this.ideaSelect=l,this.sendMessage=r,this.maxToken=a?k().toNumber(a):1024,s&&this.send()}})),document.getElementById("textArea").addEventListener("keydown",(e=>{13!==e.keyCode||e.shiftKey||(e.preventDefault(),this.send())}))},updated(){console.log(this.controller),this.$el.querySelectorAll("pre").forEach((e=>{_.Z.highlightBlock(e)}))}},O=M,L=(0,g.Z)(O,a,r,!1,null,"57036748",null),q=L.exports,E={name:"App",components:{MainPage:q},data(){return{test:""}}},A=E,j=(0,g.Z)(A,s,o,!1,null,null,null),$=j.exports,N=n(64720),z=n.n(N),P=n(6154),R=n(72268),V=n.n(R);n(34457);i["default"].prototype.$axios=P.Z,i["default"].prototype.$hljs=_.Z,i["default"].directive("highlight",(e=>{let t=e.querySelectorAll("pre code");t.forEach((e=>{_.Z.highlightBlock(e)}))})),i["default"].config.productionTip=!1,i["default"].use(z()),i["default"].use(V()),new i["default"]({render:e=>e($)}).$mount("#app")}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,i,s,o){if(!i){var a=1/0;for(d=0;d<e.length;d++){i=e[d][0],s=e[d][1],o=e[d][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(r=!1,o<a&&(a=o));if(r){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,s,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,o,a=i[0],r=i[1],l=i[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(l)var d=l(n)}for(t&&t(i);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},i=self["webpackChunkCodeShell"]=self["webpackChunkCodeShell"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(61222)}));i=n.O(i)})();
//# sourceMappingURL=app.cf45d61f.js.map