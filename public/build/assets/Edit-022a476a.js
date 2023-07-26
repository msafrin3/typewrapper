import{r as S,k as j,c as r,a as u,u as s,w as v,F as p,O as k,o as n,X as V,b as t,d as w,e as h,j as x,i as y,t as l,f,v as N,n as O,g as m}from"./app-a78d849f.js";import{_ as B}from"./AuthenticatedLayout-c9c7c268.js";import K from"./ContentHeader-777d0e8b.js";import{S as C}from"./sweetalert2.all-3a9002d3.js";const D={class:"row justify-content-center"},F={class:"col-md-4"},U={class:"card"},$=t("div",{class:"card-header"},[t("h3",{class:"card-title mb-0"},"Kemaskini Mukim")],-1),E={class:"card-body"},P={class:"form-group mb-3"},T=t("label",null,[m("Negeri "),t("span",{class:"text-danger"},"*")],-1),L=t("option",{value:""},"-- Pilih Negeri --",-1),X=["value"],q={key:0,class:"text-danger"},z={class:"form-group mb-3"},A=t("label",null,[m("Daerah "),t("span",{class:"text-danger"},"*")],-1),G=["value"],H={key:0,class:"text-danger"},I={class:"form-group"},J=t("label",null,[m("Mukim "),t("span",{class:"text-danger"},"*")],-1),Q={key:0,class:"text-danger"},R={class:"card-footer d-grid gap-2"},W=t("button",{type:"submit",class:"btn btn-success btn-sm"},"Simpan",-1),st={__name:"Edit",props:{states:Object,districts:Object,errors:Object,parish:Object},setup(i){const d=i,M=[{title:"Settings",active:!0},{title:"Pengurusan Mukim",active:!1,link:route("setting.parish.index")},{title:"Kemaskini",active:!0}];let o=S({state_id:d.parish.state_id,district_id:d.parish.district_id,name:d.parish.name}),_={},b=()=>{k.get(route("setting.parish.edit",d.parish),_,{preserveState:!0,replace:!0})},g=()=>{k.put(route("setting.parish.update",d.parish),o,{onSuccess:c=>{c.props.response.success&&C.fire("Berjaya!",c.props.response.success,"success")}})};return j(()=>{_.state_id=d.parish.state_id,b()}),(c,a)=>(n(),r(p,null,[u(s(V),{title:"Kemaskini Mukim"}),u(B,null,{default:v(()=>[u(K,{title:"Kemaskini Mukim",breadcrumbs:M}),t("div",D,[t("div",F,[t("div",U,[$,t("form",{onSubmit:a[4]||(a[4]=w((...e)=>s(g)&&s(g)(...e),["prevent"]))},[t("div",E,[t("div",P,[T,h(t("select",{class:"form-control","onUpdate:modelValue":a[0]||(a[0]=e=>s(o).state_id=e),onChange:a[1]||(a[1]=e=>{s(_).state_id=i.parish.state_id,s(b)()})},[L,(n(!0),r(p,null,y(i.states,e=>(n(),r("option",{key:e.id,value:e.id},l(e.name),9,X))),128))],544),[[x,s(o).state_id]]),i.errors.state_id?(n(),r("span",q,l(i.errors.state_id),1)):f("",!0)]),t("div",z,[A,h(t("select",{class:"form-control","onUpdate:modelValue":a[2]||(a[2]=e=>s(o).district_id=e)},[(n(!0),r(p,null,y(i.districts,e=>(n(),r("option",{key:e.id,value:e.id},l(e.name),9,G))),128))],512),[[x,s(o).district_id]]),i.errors.district_id?(n(),r("span",H,l(i.errors.district_id),1)):f("",!0)]),t("div",I,[J,h(t("input",{type:"text",class:"form-control",placeholder:"Masukkan nama mukim","onUpdate:modelValue":a[3]||(a[3]=e=>s(o).name=e)},null,512),[[N,s(o).name]]),i.errors.name?(n(),r("span",Q,l(i.errors.name),1)):f("",!0)])]),t("div",R,[W,u(s(O),{href:c.route("setting.parish.index"),class:"btn btn-light btn-sm"},{default:v(()=>[m("Batal")]),_:1},8,["href"])])],32)])])])]),_:1})],64))}};export{st as default};