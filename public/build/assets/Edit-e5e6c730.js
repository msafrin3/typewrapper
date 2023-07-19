import{r as v,c,a as l,u as t,w as u,F as y,o as d,X as g,b as e,d as x,e as p,v as _,t as f,f as b,n as N,g as M,O as w}from"./app-410e8898.js";import{_ as C}from"./AuthenticatedLayout-7ad1fa16.js";import S from"./ContentHeader-62e4186a.js";import{S as V}from"./sweetalert2.all-5f77ceb2.js";const k={class:"row justify-content-center"},D={class:"col-md-4"},E={class:"card"},O=e("div",{class:"card-header"},[e("h3",{class:"card-title mb-0"},"Create Meta")],-1),j={class:"card-body"},B={class:"form-group mb-3"},F=e("label",null,"Name",-1),T={key:0,class:"text-danger"},U={class:"form-group"},$=e("label",null,"Display Name",-1),A={key:0,class:"text-danger"},X={class:"card-footer"},q={class:"d-grid gap-2"},z=e("button",{type:"submit",class:"btn btn-success"},"Save",-1),K={__name:"Edit",props:{meta:Object,errors:Object},setup(a){const n=a,h=[{title:"Administrator",active:!0},{title:"Meta Management",active:!1,link:route("admin.meta.index")},{title:"Create",active:!0}];let o=v({name:n.meta.name,display_name:n.meta.display_name});console.log(n.meta);let m=()=>{w.put(route("admin.meta.update",n.meta),o,{onSuccess:i=>{i.props.response.success&&V.fire("Success!",i.props.response.success,"success")}})};return(i,s)=>(d(),c(y,null,[l(t(g),{title:"Create New Meta"}),l(C,null,{default:u(()=>[l(S,{title:"Create New Meta",breadcrumbs:h}),e("div",k,[e("div",D,[e("div",E,[O,e("form",{onSubmit:s[2]||(s[2]=x((...r)=>t(m)&&t(m)(...r),["prevent"]))},[e("div",j,[e("div",B,[F,p(e("input",{type:"text",class:"form-control",placeholder:"Enter Meta Name","onUpdate:modelValue":s[0]||(s[0]=r=>t(o).name=r)},null,512),[[_,t(o).name]]),a.errors.name?(d(),c("span",T,f(a.errors.name),1)):b("",!0)]),e("div",U,[$,p(e("input",{type:"text",class:"form-control",placeholder:"Enter Display Meta Name","onUpdate:modelValue":s[1]||(s[1]=r=>t(o).display_name=r)},null,512),[[_,t(o).display_name]]),a.errors.display_name?(d(),c("span",A,f(a.errors.display_name),1)):b("",!0)])]),e("div",X,[e("div",q,[z,l(t(N),{href:i.route("admin.meta.index"),class:"btn btn-light"},{default:u(()=>[M("Cancel")]),_:1},8,["href"])])])],32)])])])]),_:1})],64))}};export{K as default};
