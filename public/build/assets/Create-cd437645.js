import{r as p,o as m,c as l,a,u as s,w as d,F as _,Z as f,b as e,d as b,e as h,v,t as g,f as x,i as w,g as C,O as N}from"./app-2d475620.js";import P from"./ContentHeader-4607ef97.js";import{_ as S}from"./AuthenticatedLayout-0dae1bc3.js";import{S as y}from"./sweetalert2.all-dcd5d5e7.js";import"./avatar-1-5707a8d9.js";const k={class:"row justify-content-center"},V={class:"col-sm-4"},B={class:"card"},O=e("div",{class:"card-header"},[e("h3",{class:"card-title"},"Create New Permission")],-1),j={class:"card-body"},D={class:"form-group"},E=e("label",{class:"form-label"},"Permission Name",-1),F={key:0,class:"text-danger"},M={class:"card-footer d-grid gap-2"},T=e("button",{type:"submit",class:"btn btn-success"},"Save",-1),z={__name:"Create",props:{errors:Object},setup(n){const u=[{title:"Administrator",active:!0},{title:"Permission management",active:!1,link:route("admin.permission.index")},{title:"Create Permission",active:!0}];let o=p({name:null}),c=()=>{N.post(route("admin.permission.store"),o,{onSuccess:t=>{t.props.response.success&&y.fire("Success!",t.props.response.succes,"success")}})};return(t,r)=>(m(),l(_,null,[a(s(f),{title:"Create Permission"}),a(S,null,{default:d(()=>[a(P,{title:"Create Permission",breadcrumbs:u}),e("div",k,[e("div",V,[e("div",B,[O,e("form",{onSubmit:r[1]||(r[1]=b((...i)=>s(c)&&s(c)(...i),["prevent"]))},[e("div",j,[e("div",D,[E,h(e("input",{type:"text",class:"form-control",placeholder:"Enter Permission Name","onUpdate:modelValue":r[0]||(r[0]=i=>s(o).name=i)},null,512),[[v,s(o).name]]),n.errors.name?(m(),l("span",F,g(n.errors.name),1)):x("",!0)])]),e("div",M,[T,a(s(w),{href:t.route("admin.permission.index"),class:"btn btn-light"},{default:d(()=>[C("Back")]),_:1},8,["href"])])],32)])])])]),_:1})],64))}};export{z as default};