import{c as o,a,u as s,w as i,F as m,h as k,o as d,X as y,b as t,n as f,g as c,i as v,t as l,O as C}from"./app-5ddeb4cf.js";import{_ as D}from"./AuthenticatedLayout-738a20d3.js";import P from"./ContentHeader-b774e2bd.js";import x from"./Table-c90ed4bc.js";import{S as h}from"./sweetalert2.all-9a6cc583.js";import{f as B}from"./index-a664f95c.js";import"./Pagination-0817ee3b.js";import"./_plugin-vue_export-helper-c27b6911.js";const w={class:"mb-3"},S=t("i",{class:"ri-add-circle-fill align-bottom me-1"},null,-1),N={class:"card"},$=t("div",{class:"card-header"},[t("h3",{class:"card-title mb-0"},"Senarai Daerah")],-1),O={class:"card-body"},T=t("tr",null,[t("th",null,"#"),t("th",null,"Negeri"),t("th",null,"Daerah"),t("th",null,"Tarikh Kemaskini"),t("th",null,"Tindakan")],-1),j={class:"d-flex gap-2"},V=t("i",{class:"ri-edit-2-fill align-bottom me-1"},null,-1),A=["onClick"],F=t("i",{class:"ri-delete-bin-fill align-bottom me-1"},null,-1),G={__name:"Index",props:{filters:Object,districts:Object},setup(r){const _=k().appContext.config.globalProperties.$iterationPaginated,b=[{title:"Settings",active:!0},{title:"Pengurusan Daerah",active:!1,link:route("setting.district.index")}];let p=n=>{h.fire({title:"Adakah anda pasti untuk padam maklumat daerah?",html:"",showCancelButton:!0,confirmButtonText:"Padam",confirmButtonColor:"Red"}).then(u=>{u.isConfirmed&&C.delete(route("setting.district.destroy",n),{onSuccess:e=>{e.props.response.success&&h.fire("Berjaya!",e.props.response.success,"success")}})})};return(n,u)=>(d(),o(m,null,[a(s(y),{title:"Pengurusan Daerah"}),a(D,null,{default:i(()=>[a(P,{title:"Pengurusan Daerah",breadcrumbs:b}),t("div",w,[a(s(f),{href:n.route("setting.district.create"),class:"btn btn-success"},{default:i(()=>[S,c(" Add New ")]),_:1},8,["href"])]),t("div",N,[$,t("div",O,[a(x,{"data-route":n.route("setting.district.index"),filters:r.filters,data:r.districts},{thead:i(()=>[T]),default:i(()=>[t("tbody",null,[(d(!0),o(m,null,v(r.districts.data,(e,g)=>(d(),o("tr",{key:e.id},[t("td",null,l(s(_)(r.districts,g)),1),t("td",null,l(e.state.name),1),t("td",null,l(e.name),1),t("td",null,l(s(B)(new Date(e.updated_at),"yyyy-MM-dd HH:mm:ss")),1),t("td",null,[t("div",j,[a(s(f),{href:n.route("setting.district.edit",e),class:"btn btn-info btn-sm"},{default:i(()=>[V,c(" Kemaskini ")]),_:2},1032,["href"]),t("button",{type:"button",class:"btn btn-danger btn-sm",onClick:I=>s(p)(e)},[F,c(" Padam ")],8,A)])])]))),128))])]),_:1},8,["data-route","filters","data"])])])]),_:1})],64))}};export{G as default};