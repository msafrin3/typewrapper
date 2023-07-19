import{q as w,e as k,s as x,u as s,o as d,c as b,x as v,p as y,m as u,w as i,a,X as V,t as $,f as c,b as r,n as B,g as p,l as C,d as q}from"./app-410e8898.js";import{_ as N}from"./GuestLayout-19e82b18.js";import{_ as f,a as _,b as g}from"./TextInput-f60737e8.js";import{_ as R}from"./PrimaryButton-88b604d3.js";import"./_plugin-vue_export-helper-c27b6911.js";const S=["value"],U={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const m=l,n=w({get(){return m.checked},set(t){e("update:checked",t)}});return(t,o)=>k((d(),b("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":o[0]||(o[0]=h=>v(n)?n.value=h:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,S)),[[x,s(n)]])}},L={key:0,class:"mb-4 font-medium text-sm text-green-600"},P=["onSubmit"],D={class:"mt-4"},E={class:"block mt-4"},F={class:"flex items-center"},M=r("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),j={class:"flex items-center justify-end mt-4"},H={__name:"Login-backup",props:{canResetPassword:Boolean,status:String},setup(l){const e=y({email:"",password:"",remember:!1}),m=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,t)=>(d(),u(N,null,{default:i(()=>[a(s(V),{title:"Log in"}),l.status?(d(),b("div",L,$(l.status),1)):c("",!0),r("form",{onSubmit:q(m,["prevent"])},[r("div",null,[a(f,{for:"email",value:"Email"}),a(_,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=o=>s(e).email=o),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(g,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",D,[a(f,{for:"password",value:"Password"}),a(_,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=o=>s(e).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(g,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",E,[r("label",F,[a(U,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=o=>s(e).remember=o)},null,8,["checked"]),M])]),r("div",j,[l.canResetPassword?(d(),u(s(B),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:i(()=>[p(" Forgot your password? ")]),_:1},8,["href"])):c("",!0),a(R,{class:C(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:i(()=>[p(" Log in ")]),_:1},8,["class","disabled"])])],40,P)]),_:1}))}};export{H as default};
