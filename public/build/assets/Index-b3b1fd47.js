import{c as o,a,u as s,w as i,F as m,h as k,o as d,X as y,b as t,n as f,g as u,i as P,t as l,O as v}from"./app-410e8898.js";import{_ as C}from"./AuthenticatedLayout-7ad1fa16.js";import x from"./ContentHeader-62e4186a.js";import B from"./Table-2adbaeb9.js";import{S as h}from"./sweetalert2.all-5f77ceb2.js";import{f as M}from"./index-a664f95c.js";import"./Pagination-bb14e405.js";import"./_plugin-vue_export-helper-c27b6911.js";const w={class:"mb-3"},S=t("i",{class:"ri-add-circle-fill align-bottom me-1"},null,-1),N={class:"card"},$=t("div",{class:"card-header"},[t("h3",{class:"card-title mb-0"},"Senarai Mukim")],-1),O={class:"card-body"},T=t("tr",null,[t("th",null,"#"),t("th",null,"Negeri"),t("th",null,"Daerah"),t("th",null,"Mukim"),t("th",null,"Tarikh Kemaskini"),t("th",null,"Tindakan")],-1),j={class:"d-flex gap-2"},D=t("i",{class:"ri-edit-2-fill align-bottom me-1"},null,-1),V=["onClick"],A=t("i",{class:"ri-delete-bin-fill align-bottom me-1"},null,-1),G={__name:"Index",props:{filters:Object,parishes:Object},setup(r){const _=k().appContext.config.globalProperties.$iterationPaginated,p=[{title:"Setting",active:!0},{title:"Pengurusan Mukim",active:!1,link:route("setting.parish.index")}];let b=n=>{h.fire({title:"Adakah anda pasti untuk padam maklumat mukim ini?",html:"",showCancelButton:!0,confirmButtonText:"Padam",confirmButtonColor:"Red"}).then(c=>{c.isConfirmed&&v.delete(route("setting.parish.destroy",n),{onSuccess:e=>{e.props.response.success&&h.fire("Berjaya!",e.props.response.success,"success")}})})};return(n,c)=>(d(),o(m,null,[a(s(y),{title:"Pengurusan Mukim"}),a(C,null,{default:i(()=>[a(x,{title:"Pengurusan Mukim",breadcrumbs:p}),t("div",w,[a(s(f),{href:n.route("setting.parish.create"),class:"btn btn-success"},{default:i(()=>[S,u(" Add New ")]),_:1},8,["href"])]),t("div",N,[$,t("div",O,[a(B,{"data-route":n.route("setting.parish.index"),filters:r.filters,data:r.parishes},{thead:i(()=>[T]),default:i(()=>[t("tbody",null,[(d(!0),o(m,null,P(r.parishes.data,(e,g)=>(d(),o("tr",{key:e.id},[t("td",null,l(s(_)(r.parishes,g)),1),t("td",null,l(e.state.name),1),t("td",null,l(e.district.name),1),t("td",null,l(e.name),1),t("td",null,l(s(M)(new Date(e.updated_at),"yyyy-MM-dd HH:mm:ss")),1),t("td",null,[t("div",j,[a(s(f),{href:n.route("setting.parish.edit",e),class:"btn btn-info btn-sm"},{default:i(()=>[D,u(" Kemaskini ")]),_:2},1032,["href"]),t("button",{type:"button",class:"btn btn-danger btn-sm",onClick:H=>s(b)(e)},[A,u(" Padam ")],8,V)])])]))),128))])]),_:1},8,["data-route","filters","data"])])])]),_:1})],64))}};export{G as default};
