import{T as m,o as i,c as d,a as h,u as e,b as s,t as l,f as v,d as _,e as p,v as u,F as g,p as c,Z as w}from"./app-f3c3a795.js";const b={class:"auth-page-wrapper pt-5"},x=s("div",{class:"auth-one-bg-position auth-one-bg",id:"auth-particles"},[s("div",{class:"bg-overlay"}),s("div",{class:"shape"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1440 120"},[s("path",{d:"M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"})])])],-1),f={class:"auth-page-content"},y={class:"container"},k=c('<div class="row"><div class="col-lg-12"><div class="text-center mt-sm-5 mb-4 text-white-50"><div><a href="index.html" class="d-inline-block auth-logo"><img src="assets/images/logo-light.png" alt="" height="20"></a></div><p class="mt-3 fs-15 fw-medium">Premium Admin &amp; Dashboard Template</p></div></div></div>',1),E={class:"row justify-content-center"},V={class:"col-md-8 col-lg-6 col-xl-5"},P={class:"card mt-4"},S={class:"card-body p-4"},B=s("div",{class:"text-center mt-2"},[s("h5",{class:"text-primary"},"Reset Password"),s("p",{class:"text-muted"},"Enter registered email address.")],-1),C={class:"p-2 mt-4"},F={key:0,class:"alert alert-success mb-3"},N=["onSubmit"],T={class:"mb-3"},D=s("label",{for:"email",class:"form-label"},"Email",-1),L={class:"text-danger"},M=s("div",{class:"mt-4"},[s("button",{class:"btn btn-success w-100",type:"submit"},"Email Password Reset Link")],-1),z=c('<footer class="footer"><div class="container"><div class="row"><div class="col-lg-12"><div class="text-center"><p class="mb-0 text-muted">© 2023 Velzon. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand </p></div></div></div></div></footer>',1),j={__name:"ForgotPassword",props:{status:String},setup(a){const t=m({email:""}),r=()=>{t.post(route("password.email"))};return(A,o)=>(i(),d(g,null,[h(e(w),{title:"Forgot Password"}),s("div",b,[x,s("div",f,[s("div",y,[k,s("div",E,[s("div",V,[s("div",P,[s("div",S,[B,s("div",C,[a.status?(i(),d("div",F,l(a.status),1)):v("",!0),s("form",{onSubmit:_(r,["prevent"])},[s("div",T,[D,p(s("input",{type:"text",class:"form-control",id:"email",placeholder:"Enter Email Address","onUpdate:modelValue":o[0]||(o[0]=n=>e(t).email=n)},null,512),[[u,e(t).email]]),s("span",L,l(e(t).errors.email),1)]),M],40,N)])])])])])])]),z])],64))}};export{j as default};