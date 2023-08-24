import{h as g,o as l,c as d,a as s,u as a,w as n,F as u,Z as y,b as e,i as m,g as w,j as C,t as o,O as v}from"./app-6c5ca036.js";import{_ as P}from"./AuthenticatedLayout-b6bee240.js";import k from"./ContentHeader-1398ee93.js";import x from"./Table-52bd81ae.js";import{S as f}from"./sweetalert2.all-54d6c8c6.js";import{f as B}from"./index-ba42aa01.js";import"./avatar-1-5707a8d9.js";import"./Pagination-8d16b1c9.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={class:"mb-3"},A=e("i",{class:"ri-add-circle-fill align-bottom me-1"},null,-1),M={class:"card"},S=e("div",{class:"card-header"},[e("h3",{class:"card-title mb-0"},"List Permission")],-1),$={class:"card-body"},O=e("tr",null,[e("td",null,"#"),e("th",null,"Name"),e("th",null,"Guard Name"),e("th",null,"Created At"),e("th",null,"Action")],-1),j={class:"d-flex flex-wrap gap-2"},D=e("i",{class:"ri-edit-2-line fs-17"},null,-1),V=["onClick"],F=e("i",{class:"ri-delete-bin-line fs-17"},null,-1),I=[F],R={__name:"Index",props:{permissions:Object,filters:Object},setup(r){const _=g().appContext.config.globalProperties.$iterationPaginated,h=[{title:"Administrator",active:!0},{title:"Permission Management",active:!0}];let p=i=>{f.fire({title:"Are you sure want to delete this permission?",icon:"warning",html:"",showCancelButton:!0,confirmButtonText:"Delete",confirmButtonColor:"red"}).then(c=>{c.isConfirmed&&v.delete(route("admin.permission.destroy",i),{onSuccess:t=>{t.props.response.success&&f.fire("Success!",t.props.response.success,"success")}})})};return(i,c)=>(l(),d(u,null,[s(a(y),{title:"Permission Management"}),s(P,null,{default:n(()=>[s(k,{title:"Permission Management",breadcrumbs:h}),e("div",N,[s(a(m),{href:i.route("admin.permission.create"),class:"btn btn-success"},{default:n(()=>[A,w(" Add New ")]),_:1},8,["href"])]),e("div",M,[S,e("div",$,[s(x,{"data-route":i.route("admin.permission.index"),filters:r.filters,data:r.permissions},{thead:n(()=>[O]),default:n(()=>[e("tbody",null,[(l(!0),d(u,null,C(r.permissions.data,(t,b)=>(l(),d("tr",{key:t.id},[e("td",null,o(a(_)(r.permissions,b)),1),e("td",null,o(t.name),1),e("td",null,o(t.guard_name),1),e("td",null,o(a(B)(new Date(t.created_at),"yyyy-MM-dd H:m:ss")),1),e("td",null,[e("div",j,[s(a(m),{href:i.route("admin.permission.edit",t),class:"link-success"},{default:n(()=>[D]),_:2},1032,["href"]),e("a",{href:"#",class:"link-danger",onClick:T=>a(p)(t)},I,8,V)])])]))),128))])]),_:1},8,["data-route","filters","data"])])])]),_:1})],64))}};export{R as default};
