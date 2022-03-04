"use strict";(self["webpackChunkdecent_forum_fe"]=self["webpackChunkdecent_forum_fe"]||[]).push([[775],{8269:(t,e,n)=>{n.d(e,{Mt:()=>a,Kh:()=>i});const a=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint64",name:"_id",type:"uint64"}],name:"SendId",type:"event"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"content",type:"string"},{internalType:"string",name:"banner",type:"string"},{internalType:"string",name:"cardBg",type:"string"}],name:"postBlog",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"newAmount",type:"uint256"}],name:"changeDonateAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getDonateAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint64",name:"id",type:"uint64"}],name:"hidePost",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"id",type:"uint64"}],name:"showPost",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"avatar",type:"string"}],name:"addAuthor",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"payable",type:"function",payable:!0},{inputs:[{internalType:"uint64",name:"id",type:"uint64"},{internalType:"string",name:"avatar",type:"string"}],name:"changeAvatar",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"id",type:"uint64"},{internalType:"string",name:"name",type:"string"}],name:"changeNickName",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"deactivateAuthor",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"authorAddress",type:"address"}],name:"activateAuthor",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"authorAddress",type:"address"}],name:"getAuthor",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"bool",name:"active",type:"bool"},{internalType:"string",name:"avatar",type:"string"},{internalType:"address",name:"authorAddress",type:"address"}],internalType:"struct BlogStorage.Author",name:"",type:"tuple"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint64",name:"_id",type:"uint64"}],name:"getPost",outputs:[{components:[{internalType:"uint64",name:"id",type:"uint64"},{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"content",type:"string"},{internalType:"string",name:"cardBg",type:"string"},{internalType:"uint64",name:"timestamp",type:"uint64"},{internalType:"string",name:"banner",type:"string"},{internalType:"address",name:"authorAddress",type:"address"},{internalType:"bool",name:"visible",type:"bool"}],internalType:"struct BlogStorage.Post",name:"",type:"tuple"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"pageSize",type:"uint256"},{internalType:"uint256",name:"currentPage",type:"uint256"},{internalType:"uint256",name:"skipped",type:"uint256"}],name:"getPostList",outputs:[{components:[{internalType:"uint64",name:"id",type:"uint64"},{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"content",type:"string"},{internalType:"string",name:"cardBg",type:"string"},{internalType:"uint64",name:"timestamp",type:"uint64"},{internalType:"string",name:"banner",type:"string"},{internalType:"address",name:"authorAddress",type:"address"},{internalType:"bool",name:"visible",type:"bool"}],internalType:"struct BlogStorage.Post[]",name:"",type:"tuple[]"},{internalType:"uint256[]",name:"",type:"uint256[]"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],i=[{contractAddress:"0x153FCd155EE78E8A0069c9236D9a1BcFAa3a6E78",chainId:137},{contractAddress:"0xDc6ad8D06d2C093598207B47C3eEACd826ED866b",chainId:80001}]},8657:(t,e,n)=>{n.d(e,{u:()=>a});const a=(t,e)=>{const n=t.filter((t=>t.chainId===e));return n.length>0&&n[0]}},4775:(t,e,n)=>{n.r(e),n.d(e,{default:()=>B});var a=n(3673),i=n(2323);const s=t=>((0,a.dD)("data-v-608696b9"),t=t(),(0,a.Cn)(),t),o={class:"container"},r={class:"row"},p={class:"text-h6"},u={class:"text-subtitle2"},l={class:"abstractContent"},y={class:"col-md-4 col-sm-6 col-xs-12 blog-card-container"},d=s((()=>(0,a._)("div",{class:"text-subtitle2"},"Add a new blog",-1))),c={class:"paginationContainer"};function m(t,e,n,s,m,g){const b=(0,a.up)("q-card-section"),h=(0,a.up)("q-card"),T=(0,a.up)("q-icon"),w=(0,a.up)("q-pagination");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.blogPost,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n,class:"col-md-4 col-sm-6 col-xs-12 blog-card-container"},[(0,a.Wm)(h,{class:(0,i.C_)(`bg-${e.backgroundColor} blog-card`),onClick:n=>t.navToBlog(e.id)},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{class:"titleContainer",style:(0,i.j5)({backgroundImage:`url(${e.bannerImage})`})},{default:(0,a.w5)((()=>[(0,a._)("div",p,(0,i.zw)(e.title),1),(0,a._)("div",u,(0,i.zw)(`by ${e.author}`),1)])),_:2},1032,["style"]),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a._)("div",l,(0,i.zw)(`${e.abstract}...`),1)])),_:2},1024)])),_:2},1032,["class","onClick"])])))),128)),(0,a._)("div",y,[(0,a.Wm)(h,{class:(0,i.C_)("bg-light-blue-8 blog-card edit-card"),onClick:t.navToEdit},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{style:{"text-align":"center"}},{default:(0,a.w5)((()=>[(0,a.Wm)(T,{name:"add",size:"5rem"}),d])),_:1})])),_:1},8,["onClick"])])]),(0,a._)("div",c,[(0,a.Wm)(w,{modelValue:t.pagination.currentPage,"onUpdate:modelValue":e[0]||(e[0]=e=>t.pagination.currentPage=e),max:Math.floor(t.pagination.total/t.pagination.pageSize)+1,"direction-links":""},null,8,["modelValue","max"])])])}var g=n(8269),b=n(8657),h=function(t,e,n,a){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,s){function o(t){try{p(a.next(t))}catch(e){s(e)}}function r(t){try{p(a["throw"](t))}catch(e){s(e)}}function p(t){t.done?n(t.value):i(t.value).then(o,r)}p((a=a.apply(t,e||[])).next())}))};const T=n(1830),w=(0,a.aZ)({data(){return{web3:new T,pagination:{currentPage:1,pageSize:9,total:0,skipped:0},contractConfig:{contractAddress:"",chainId:0},blogPost:new Array,etherAccount:[]}},methods:{navToBlog(t){return h(this,void 0,void 0,(function*(){try{const e=yield this.$router.push({name:"blog",params:{id:t}});console.log(e)}catch(e){console.error(e)}}))},navToEdit(){this.$router.push({name:"editor"})},initEthereum(){void 0!==typeof window.ethereum?(this.web3=new T(window.ethereum),this.web3.eth.getAccounts().then((t=>{t&&(this.etherAccount=t)}))):alert("Please install MetaMask to use this dApp.")},getBlogList(){return h(this,void 0,void 0,(function*(){const t=yield this.web3.eth.net.getId(),e=(0,b.u)(g.Kh,Number(t));if(!e)return void alert("Please switch to polygon main net or mumbai test net");const n=new this.web3.eth.Contract(g.Mt,e.contractAddress),a=yield n.methods.getPostList(this.pagination.pageSize,this.pagination.currentPage-1,this.pagination.skipped).call();if(console.info("Bloglist",a),this.pagination.skipped=a[2],this.pagination.total=a[3],a[0].length>0){this.blogPost=[];const t=a[1],e=a[0];e.forEach(((e,a)=>h(this,void 0,void 0,(function*(){const i=yield n.methods.getAuthor(e["authorAddress"]).call(),s=i["name"],o={id:t[a],title:e.title,author:s,bannerImage:e.banner,backgroundColor:e.cardBg,abstract:e.content.replace(/<[^>]*>/g,"").slice(0,100)};this.blogPost.push(o)}))))}}))}},mounted(){this.initEthereum(),this.getBlogList().then((()=>{console.log("done")}))},watch:{pagination:{handler(t,e){t.currentPage!==e.currentPage&&this.getBlogList()},deep:!0}}});var f=n(4260),v=n(151),A=n(5589),M=n(4554),C=n(7300),P=n(7518),_=n.n(P);const k=(0,f.Z)(w,[["render",m],["__scopeId","data-v-608696b9"]]),B=k;_()(w,"components",{QCard:v.Z,QCardSection:A.Z,QIcon:M.Z,QPagination:C.Z})}}]);