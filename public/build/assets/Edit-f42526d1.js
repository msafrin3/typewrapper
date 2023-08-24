import{r as _,o as d,c as l,a as r,u as s,w as u,F as f,Z as b,b as e,d as h,e as v,v as g,t as x,f as w,i as N,g as P,O as S}from"./app-6c5ca036.js";import y from"./ContentHeader-1398ee93.js";import{_ as k}from"./AuthenticatedLayout-b6bee240.js";import{S as C}from"./sweetalert2.all-54d6c8c6.js";import"./avatar-1-5707a8d9.js";const V={class:"row justify-content-center"},B={class:"col-sm-4"},E={class:"card"},O=e("div",{class:"card-header"},[e("h3",{class:"card-title"},"Create New Permission")],-1),j={class:"card-body"},D={class:"form-group"},F=e("label",{class:"form-label"},"Permission Name",-1),M={key:0,class:"text-danger"},T={class:"card-footer d-grid gap-2"},$=e("button",{type:"submit",class:"btn btn-success"},"Save",-1),G={__name:"Edit",props:{permission:Object,errors:Object},setup(o){const c=o,p=[{title:"Administrator",active:!0},{title:"Permission management",active:!1,link:route("admin.permission.index")},{title:"Edit Permission",active:!0}];let a=_({name:c.permission.name}),m=()=>{S.put(route("admin.permission.update",c.permission),a,{onSuccess:t=>{t.props.response.success&&C.fire("Success!",t.props.response.succes,"success")}})};return(t,i)=>(d(),l(f,null,[r(s(b),{title:"Create Permission"}),r(k,null,{default:u(()=>[r(y,{title:"Create Permission",breadcrumbs:p}),e("div",V,[e("div",B,[e("div",E,[O,e("form",{onSubmit:i[1]||(i[1]=h((...n)=>s(m)&&s(m)(...n),["prevent"]))},[e("div",j,[e("div",D,[F,v(e("input",{type:"text",class:"form-control",placeholder:"Enter Permission Name","onUpdate:modelValue":i[0]||(i[0]=n=>s(a).name=n)},null,512),[[g,s(a).name]]),o.errors.name?(d(),l("span",M,x(o.errors.name),1)):w("",!0)])]),e("div",T,[$,r(s(N),{href:t.route("admin.permission.index"),class:"btn btn-light"},{default:u(()=>[P("Back")]),_:1},8,["href"])])],32)])])])]),_:1})],64))}};export{G as default};
