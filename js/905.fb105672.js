"use strict";(self["webpackChunkdecent_forum_fe"]=self["webpackChunkdecent_forum_fe"]||[]).push([[905],{8269:(t,e,n)=>{n.d(e,{Mt:()=>a,Kh:()=>i});const a=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint64",name:"_id",type:"uint64"}],name:"SendId",type:"event"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"content",type:"string"},{internalType:"string",name:"banner",type:"string"},{internalType:"string",name:"cardBg",type:"string"}],name:"postBlog",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"newAmount",type:"uint256"}],name:"changeDonateAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getDonateAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint64",name:"id",type:"uint64"}],name:"hidePost",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"id",type:"uint64"}],name:"showPost",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"avatar",type:"string"}],name:"addAuthor",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"payable",type:"function",payable:!0},{inputs:[{internalType:"uint64",name:"id",type:"uint64"},{internalType:"string",name:"avatar",type:"string"}],name:"changeAvatar",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint64",name:"id",type:"uint64"},{internalType:"string",name:"name",type:"string"}],name:"changeNickName",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"deactivateAuthor",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"authorAddress",type:"address"}],name:"activateAuthor",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"authorAddress",type:"address"}],name:"getAuthor",outputs:[{components:[{internalType:"string",name:"name",type:"string"},{internalType:"bool",name:"active",type:"bool"},{internalType:"string",name:"avatar",type:"string"},{internalType:"address",name:"authorAddress",type:"address"}],internalType:"struct BlogStorage.Author",name:"",type:"tuple"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint64",name:"_id",type:"uint64"}],name:"getPost",outputs:[{components:[{internalType:"uint64",name:"id",type:"uint64"},{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"content",type:"string"},{internalType:"string",name:"cardBg",type:"string"},{internalType:"uint64",name:"timestamp",type:"uint64"},{internalType:"string",name:"banner",type:"string"},{internalType:"address",name:"authorAddress",type:"address"},{internalType:"bool",name:"visible",type:"bool"}],internalType:"struct BlogStorage.Post",name:"",type:"tuple"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"pageSize",type:"uint256"},{internalType:"uint256",name:"currentPage",type:"uint256"},{internalType:"uint256",name:"skipped",type:"uint256"}],name:"getPostList",outputs:[{components:[{internalType:"uint64",name:"id",type:"uint64"},{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"content",type:"string"},{internalType:"string",name:"cardBg",type:"string"},{internalType:"uint64",name:"timestamp",type:"uint64"},{internalType:"string",name:"banner",type:"string"},{internalType:"address",name:"authorAddress",type:"address"},{internalType:"bool",name:"visible",type:"bool"}],internalType:"struct BlogStorage.Post[]",name:"",type:"tuple[]"},{internalType:"uint256[]",name:"",type:"uint256[]"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],i=[{contractAddress:"0x153FCd155EE78E8A0069c9236D9a1BcFAa3a6E78",chainId:137},{contractAddress:"0xDc6ad8D06d2C093598207B47C3eEACd826ED866b",chainId:80001}]},8657:(t,e,n)=>{n.d(e,{u:()=>a});const a=(t,e)=>{const n=t.filter((t=>t.chainId===e));return n.length>0&&n[0]}},905:(t,e,n)=>{n.r(e),n.d(e,{default:()=>I});var a=n(3673),i=n(2323);const o={class:"editor-container"},r={class:"editor-top"},s={class:"operations",style:{"text-align":"center",padding:"1rem"}},u=(0,a.Uk)("Save");function l(t,e,n,l,p,d){const m=(0,a.up)("q-ajax-bar"),y=(0,a.up)("q-input"),c=(0,a.up)("q-item"),h=(0,a.up)("q-select"),b=(0,a.up)("q-editor"),g=(0,a.up)("q-btn"),f=(0,a.up)("q-form"),T=(0,a.up)("q-card-section"),w=(0,a.up)("q-card"),v=(0,a.up)("q-dialog");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(m,{ref:"bar",position:"bottom",color:"accent",size:"10px","skip-hijack":""},null,512),(0,a._)("div",r,[(0,a.Wm)(y,{label:"title",modelValue:t.title,"onUpdate:modelValue":e[0]||(e[0]=e=>t.title=e)},null,8,["modelValue"]),(0,a.Wm)(h,{modelValue:t.backgroundColor,"onUpdate:modelValue":e[1]||(e[1]=e=>t.backgroundColor=e),options:t.options,label:"card background"},{option:(0,a.w5)((t=>[(0,a.Wm)(c,(0,a.dG)(t.itemProps,{class:`bg-${t.opt}`}),{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.opt),1)])),_:2},1040,["class"])])),_:1},8,["modelValue","options"]),(0,a.Wm)(y,{label:"banner image",modelValue:t.bannerImage,"onUpdate:modelValue":e[2]||(e[2]=e=>t.bannerImage=e)},null,8,["modelValue"])]),(0,a.Wm)(b,{modelValue:t.editorContent,"onUpdate:modelValue":e[3]||(e[3]=e=>t.editorContent=e),"min-height":"15rem"},null,8,["modelValue"]),(0,a._)("div",s,[(0,a.Wm)(g,{color:"primary",onClick:t.saveBlog},{default:(0,a.w5)((()=>[u])),_:1},8,["onClick"])]),(0,a.Wm)(v,{modelValue:t.addAuthor,"onUpdate:modelValue":e[6]||(e[6]=e=>t.addAuthor=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(T,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{onSubmit:t.createAuthor,onReset:t.resetAuthorField,class:"q-gutter-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{filled:"",modelValue:t.authorForm.name,"onUpdate:modelValue":e[4]||(e[4]=e=>t.authorForm.name=e),label:"Author name *",hint:"Nick name or real name","lazy-rules":"",rules:[t=>t&&t.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,a.Wm)(y,{filled:"",modelValue:t.authorForm.avatar,"onUpdate:modelValue":e[5]||(e[5]=e=>t.authorForm.avatar=e),label:"Avatar link"},null,8,["modelValue"]),(0,a._)("div",null,[(0,a.Wm)(g,{label:"Submit",type:"submit",color:"primary"}),(0,a.Wm)(g,{label:"Reset",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1},8,["onSubmit","onReset"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}var p=n(8657),d=n(8269),m=function(t,e,n,a){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function r(t){try{u(a.next(t))}catch(e){o(e)}}function s(t){try{u(a["throw"](t))}catch(e){o(e)}}function u(t){t.done?n(t.value):i(t.value).then(r,s)}u((a=a.apply(t,e||[])).next())}))};const y=n(1830),c=(0,a.aZ)({data(){return{web3:new y,etherAccount:[],authorForm:{name:"",avatar:""},addAuthor:!1,title:"",bannerImage:"",editorContent:"",backgroundColor:"",options:["light-green-6","deep-purple-6","light-blue-8","blue-grey-9","grey-8","cyan-8"]}},methods:{initEthereum(){if(void 0!==typeof window.ethereum){this.web3=new y(window.ethereum);const t=this.$refs["bar"];t.start(),this.web3.eth.getAccounts().then((e=>{e&&(this.etherAccount=e,this.web3.eth.net.getId().then((n=>{const a=(0,p.u)(d.Kh,Number(n));if(!a)return void alert("Please switch to polygon main net or mumbai test net");const i=new this.web3.eth.Contract(d.Mt,a.contractAddress);i.methods.getAuthor(e[0]).call().then((e=>{console.log("author",e),this.authorForm.name=e["name"],this.authorForm.avatar=e["avatar"],t.stop()})).catch((e=>{console.log(e),this.addAuthor=!0,t.stop()}))})))}))}else alert("Please install MetaMask to use this dApp.")},resetAuthorField(){this.authorForm={name:"",avatar:""}},createAuthor(){return m(this,void 0,void 0,(function*(){const t=yield this.web3.eth.net.getId(),e=(0,p.u)(d.Kh,Number(t));if(!e)return void alert("Please switch to polygon main net or mumbai test net");const n=new this.web3.eth.Contract(d.Mt,e.contractAddress),a=yield n.methods.getDonateAmount().call(),i=this.$refs["bar"];i.start();const o=yield n.methods.addAuthor(this.authorForm.name,this.authorForm.avatar).send({from:this.etherAccount[0],value:a});o&&(alert("Successfully added you as a new author."),this.addAuthor=!1,i.stop())}))},saveBlog(){return m(this,void 0,void 0,(function*(){const t=yield this.web3.eth.net.getId(),e=(0,p.u)(d.Kh,Number(t));if(!e)return void alert("Please switch to polygon main net or mumbai test net");const n=new this.web3.eth.Contract(d.Mt,e.contractAddress),a=this.$refs["bar"];a.start();const i=yield n.methods.postBlog(this.title,this.editorContent,this.bannerImage,this.backgroundColor).send({from:this.etherAccount[0]});console.log("upload receipt",i);const o=i["events"]["SendId"]["returnValues"][0];o>=0?(alert("Successfully uploaded to chain"),a.stop(),this.$router.push({name:"blog",params:{id:o}})):(alert("Something went wrong..."),a.stop())}))}},mounted(){this.initEthereum()}});var h=n(4260),b=n(614),g=n(4842),f=n(1935),T=n(3414),w=n(1592),v=n(2165),A=n(6778),M=n(151),V=n(5589),C=n(5269),k=n(7518),_=n.n(k);const F=(0,h.Z)(c,[["render",l],["__scopeId","data-v-488b733b"]]),I=F;_()(c,"components",{QAjaxBar:b.Z,QInput:g.Z,QSelect:f.Z,QItem:T.Z,QEditor:w.Z,QBtn:v.Z,QDialog:A.Z,QCard:M.Z,QCardSection:V.Z,QForm:C.Z})}}]);