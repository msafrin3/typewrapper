import{p as d,l as u,w as i,o as m,a,u as e,X as c,c as _,t as f,f as p,b as t,g as w,m as g,d as b}from"./app-a78d849f.js";import{_ as y}from"./GuestLayout-6a485066.js";import{_ as x,a as k,b as h}from"./TextInput-d342ce5d.js";import{_ as v}from"./PrimaryButton-33938928.js";import"./_plugin-vue_export-helper-c27b6911.js";const V=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],B={class:"flex items-center justify-end mt-4"},q={__name:"ForgotPassword.old",props:{status:String},setup(o){const s=d({email:""}),r=()=>{s.post(route("password.email"))};return(S,l)=>(m(),u(y,null,{default:i(()=>[a(e(c),{title:"Forgot Password"}),V,o.status?(m(),_("div",N,f(o.status),1)):p("",!0),t("form",{onSubmit:b(r,["prevent"])},[t("div",null,[a(x,{for:"email",value:"Email"}),a(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":l[0]||(l[0]=n=>e(s).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(h,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",B,[a(v,{class:g({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:i(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{q as default};
