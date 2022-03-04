(self["webpackChunkdecent_forum_fe"]=self["webpackChunkdecent_forum_fe"]||[]).push([[954],{8269:(t,e,n)=>{"use strict";n.d(e,{Mt:()=>i,Kh:()=>a});const i=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint64",name:"_id",type:"uint64"}],name:"SendId",type:"event"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"content",type:"string"},{internalType:"string",name:"banner",type:"string"},{internalType:"string",name:"cardBg",type:"string"}],name:"postBlog",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"newAmount",type:"uint256"}],name:"changeDonateAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getDonateAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint64",name:"id",type:"uint64"}],name:"hidePost",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"id",type:"uint64"}],name:"showPost",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"avatar",type:"string"}],name:"addAuthor",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"payable",type:"function",payable:!0},{inputs:[{internalType:"uint64",name:"id",type:"uint64"},{internalType:"string",name:"avatar",type:"string"}],name:"changeAvatar",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"id",type:"uint64"},{internalType:"string",name:"name",type:"string"}],name:"changeNickName",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"deactivateAuthor",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"authorAddress",type:"address"}],name:"activateAuthor",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"authorAddress",type:"address"}],name:"getAuthor",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"bool",name:"active",type:"bool"},{internalType:"string",name:"avatar",type:"string"},{internalType:"address",name:"authorAddress",type:"address"}],internalType:"struct BlogStorage.Author",name:"",type:"tuple"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint64",name:"_id",type:"uint64"}],name:"getPost",outputs:[{components:[{internalType:"uint64",name:"id",type:"uint64"},{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"content",type:"string"},{internalType:"string",name:"cardBg",type:"string"},{internalType:"uint64",name:"timestamp",type:"uint64"},{internalType:"string",name:"banner",type:"string"},{internalType:"address",name:"authorAddress",type:"address"},{internalType:"bool",name:"visible",type:"bool"}],internalType:"struct BlogStorage.Post",name:"",type:"tuple"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"pageSize",type:"uint256"},{internalType:"uint256",name:"currentPage",type:"uint256"},{internalType:"uint256",name:"skipped",type:"uint256"}],name:"getPostList",outputs:[{components:[{internalType:"uint64",name:"id",type:"uint64"},{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"content",type:"string"},{internalType:"string",name:"cardBg",type:"string"},{internalType:"uint64",name:"timestamp",type:"uint64"},{internalType:"string",name:"banner",type:"string"},{internalType:"address",name:"authorAddress",type:"address"},{internalType:"bool",name:"visible",type:"bool"}],internalType:"struct BlogStorage.Post[]",name:"",type:"tuple[]"},{internalType:"uint256[]",name:"",type:"uint256[]"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],a=[{contractAddress:"0x153FCd155EE78E8A0069c9236D9a1BcFAa3a6E78",chainId:137},{contractAddress:"0xDc6ad8D06d2C093598207B47C3eEACd826ED866b",chainId:80001}]},8657:(t,e,n)=>{"use strict";n.d(e,{u:()=>i});const i=(t,e)=>{const n=t.filter((t=>t.chainId===e));return n.length>0&&n[0]}},7166:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>q});var i=n(3673),a=n(2323),o=n(8880);const s={class:"blog-container"},r={key:0,class:"operations"},l={class:"text-h2"},u={class:"text-subtitle1"},p={class:"blog-content"},y=["innerHTML"],d={class:"blog-footer"},c=(0,i._)("div",{class:"text-h6"},"The blog ID you wish to show",-1);function m(t,e,n,m,g,h){const b=(0,i.up)("q-ajax-bar"),w=(0,i.up)("q-btn"),T=(0,i.up)("q-skeleton"),f=(0,i.up)("q-card-section"),v=(0,i.up)("q-input"),A=(0,i.up)("q-card-actions"),B=(0,i.up)("q-card"),M=(0,i.up)("q-dialog"),k=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(b,{ref:"bar",position:"bottom",color:"accent",size:"10px","skip-hijack":""},null,512),t.isAuthor?((0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(w,{color:"secondary",onClick:t.hideBlog,label:"Hide this blog"},null,8,["onClick"]),(0,i.Wm)(w,{color:"secondary",onClick:t.restoreBlog,label:"Show a hidden blog"},null,8,["onClick"])])):(0,i.kq)("",!0),t.loading?((0,i.wg)(),(0,i.j4)(T,{key:1,height:"150px"})):((0,i.wg)(),(0,i.iD)("div",{key:2,class:"blog-banner",style:(0,a.j5)({backgroundImage:`url(${t.blogPost.bannerImage})`})},[(0,i._)("div",l,(0,a.zw)(t.blogPost.title),1),(0,i._)("div",u,(0,a.zw)(t.blogPost.author),1)],4)),(0,i._)("div",p,[t.loading?((0,i.wg)(),(0,i.j4)(T,{key:0,height:"350px"})):((0,i.wg)(),(0,i.iD)("div",{key:1,class:"text-body2",innerHTML:t.sanitizedHTML()},null,8,y))]),(0,i._)("div",d,"This blog id is "+(0,a.zw)(t.blogPost.id),1),(0,i.Wm)(M,{modelValue:t.showBlogDialog,"onUpdate:modelValue":e[1]||(e[1]=e=>t.showBlogDialog=e),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(B,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[c])),_:1}),(0,i.Wm)(f,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{dense:"",modelValue:t.restoreBlogId,"onUpdate:modelValue":e[0]||(e[0]=e=>t.restoreBlogId=e),autofocus:"",onKeyup:(0,o.D2)(t.showBlog,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,i.Wm)(A,{align:"right",class:"text-primary"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(w,{flat:"",label:"Cancel"},null,512),[[k]]),(0,i.wy)((0,i.Wm)(w,{flat:"",label:"Show blog",onClick:t.showBlog},null,8,["onClick"]),[[k]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}var g=n(5610),h=n.n(g),b=n(8269),w=n(8657),T=function(t,e,n,i){function a(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{l(i.next(t))}catch(e){o(e)}}function r(t){try{l(i["throw"](t))}catch(e){o(e)}}function l(t){t.done?n(t.value):a(t.value).then(s,r)}l((i=i.apply(t,e||[])).next())}))};const f=n(1830),v=(0,i.aZ)({props:{id:String},data(){return{web3:new f,etherAccount:[],isAuthor:!1,showBlogDialog:!1,loading:!1,restoreBlogId:0,blogPost:{title:"",author:"",bannerImage:"",backgroundColor:"",content:"",id:""}}},methods:{sanitizedHTML(){return String(h()(this.blogPost.content))},initEthereum(){void 0!==typeof window.ethereum?(this.web3=new f(window.ethereum),this.web3.eth.getAccounts().then((t=>{t&&(this.etherAccount=t)}))):alert("Please install MetaMask to use this dApp.")},getBlog(){return T(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.web3.eth.net.getId(),e=this.$refs["bar"];e.start();const n=(0,w.u)(b.Kh,Number(t));if(!n)return void alert("Please switch to polygon main net or mumbai test net");const i=new this.web3.eth.Contract(b.Mt,n.contractAddress),a=yield i.methods.getPost(this.id).call();console.log(a),a["authorAddress"]===this.etherAccount[0]&&(this.isAuthor=!0);const o=yield i.methods.getAuthor(a["authorAddress"]).call(),s=o["name"];e.stop(),this.blogPost={title:a["title"],author:s,bannerImage:a["banner"],backgroundColor:a["cardBg"],content:a["content"],id:this.id?this.id:""},this.loading=!1}))},hideBlog(){return T(this,void 0,void 0,(function*(){const t=yield this.web3.eth.net.getId(),e=this.$refs["bar"];e.start();const n=(0,w.u)(b.Kh,Number(t));if(!n)return void alert("Please switch to polygon main net or mumbai test net");const i=new this.web3.eth.Contract(b.Mt,n.contractAddress),a=yield i.methods.hidePost(this.id).send({from:this.etherAccount[0]});e.stop(),a?alert("Blog has been hidden."):alert("Something went wrong.")}))},restoreBlog(){this.showBlogDialog=!0},showBlog(){return T(this,void 0,void 0,(function*(){const t=yield this.web3.eth.net.getId(),e=this.$refs["bar"];e.start();const n=(0,w.u)(b.Kh,Number(t));if(!n)return void alert("Please switch to polygon main net or mumbai test net");const i=new this.web3.eth.Contract(b.Mt,n.contractAddress),a=yield i.methods.showPost(this.restoreBlogId).send({from:this.etherAccount[0]});e.stop(),a?alert("Blog has been shown."):alert("Something went wrong.")}))}},mounted(){this.initEthereum(),this.getBlog()}});var A=n(4260),B=n(614),M=n(2165),k=n(4103),P=n(6778),C=n(151),x=n(5589),D=n(4842),I=n(9367),_=n(677),S=n(7518),W=n.n(S);const Z=(0,A.Z)(v,[["render",m]]),q=Z;W()(v,"components",{QAjaxBar:B.Z,QBtn:M.Z,QSkeleton:k.ZP,QDialog:P.Z,QCard:C.Z,QCardSection:x.Z,QInput:D.Z,QCardActions:I.Z}),W()(v,"directives",{ClosePopup:_.Z})},2868:()=>{},4777:()=>{},9830:()=>{},209:()=>{},7414:()=>{}}]);