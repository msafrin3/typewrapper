import{r as E,c as d,a as w,u as s,w as O,F as p,y as F,o as n,X as z,b as t,d as I,e as c,j as v,i as x,t as m,f as g,v as b,n as J,g as u,O as N}from"./app-410e8898.js";import{_ as R}from"./AuthenticatedLayout-7ad1fa16.js";import X from"./ContentHeader-62e4186a.js";import{S as Z}from"./sweetalert2.all-5f77ceb2.js";import"./leaflet-bbc446f3.js";const q={class:"row justify-content-center"},G={class:"col-md-8"},H={class:"card"},Q=t("div",{class:"card-header"},[t("h3",{class:"card-title mb-0"},"Kemaskini Maklumat Bencana")],-1),W={class:"card-body"},Y={class:"row mb-3"},tt=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},[u("Jenis Bencana "),t("span",{class:"text-danger"},"*")])],-1),et={class:"col-md-6"},st=["value"],at={key:0,class:"text-danger"},ot={class:"row mb-3"},it=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},[u("Nama Bencana "),t("span",{class:"text-danger"},"*")])],-1),lt={class:"col-md-9"},dt={key:0,class:"text-danger"},nt={class:"row mb-3"},rt=t("div",{class:"col-md-3"},[t("label",{classs:"form-label"},"Keterangan")],-1),ct={class:"col-md-9"},mt={key:0,class:"text-danger"},ut={class:"row mb-3"},_t=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},[u("Level "),t("span",{class:"text-danger"},"*")])],-1),pt={class:"col-md-4"},vt=["value"],gt={class:"row mb-3"},bt=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},[u("Tarikh Mula & Akhir "),t("span",{class:"text-danger"},"*")])],-1),ht={class:"col-md-9"},ft={class:"input-group"},kt={class:"row mb-3"},yt=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},[u("Negeri "),t("span",{class:"text-danger"},"*")])],-1),xt={class:"col-md-6"},wt=t("option",{value:""},"-- Pilih Negeri --",-1),Lt=["value"],Vt={key:0,class:"text-danger"},Bt={class:"row mb-3"},Mt=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},[u("Daerah "),t("span",{class:"text-danger"},"*")])],-1),Ut={class:"col-md-6"},St=t("option",{value:""},"-- Pilih Daerah --",-1),Tt=["value"],jt={key:0,class:"text-danger"},Ot={class:"row mb-3"},Nt=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Mukim")],-1),At={class:"col-md-6"},Ct=["value"],Kt={class:"row mb-3"},Pt=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},"Lokasi")],-1),Dt={class:"col-md-9"},$t={class:"input-group"},Et=t("i",{class:"ri-map-pin-fill fs-17"},null,-1),Ft=[Et],zt={class:"row mb-3"},It=t("div",{class:"col-md-3"},[t("label",{class:"form-label"},[u("Status "),t("span",{class:"text-danger"},"*")])],-1),Jt={class:"col-md-3"},Rt=t("option",{value:"Aktif"},"Aktif",-1),Xt=t("option",{value:"Tidak Aktif"},"Tidak Aktif",-1),Zt=[Rt,Xt],qt={key:0,class:"text-danger"},Gt={class:"card-footer"},Ht={class:"d-flex gap-2 justify-content-end"},Qt=t("button",{type:"submit",class:"btn btn-success"},"Simpan",-1),Wt=F('<div id="mapModal" class="modal fade"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="myModalLabel">Peta Lokasi</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body" style="position:relative;"><div class="form-group mb-3"><input id="searchbox" type="text" class="form-control" placeholder="Carian tempat" style="width:40%;"></div><div id="map" style="width:100%;height:600px;"></div></div><div class="modal-footer"><button type="button" class="btn btn-light" data-bs-dismiss="modal">Batal</button><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Set Lokasi</button></div></div></div></div>',1),oe={__name:"Edit",props:{disaster:Object,types:Object,states:Object,districts:Object,parishes:Object,errors:Object,levels:Object},setup(l){const i=l,A=[{title:"Pengurusan Bencana",active:!1,link:route("disaster.index")},{title:"Tambah Baru",active:!0}];let C=i.disaster.latitude==null?4.4594095:i.disaster.latitude,K=i.disaster.longitude==null?102.2309874:i.disaster.longitude,P=i.disaster.latitude==null?8:18,V=(r,a)=>{o.latitude=r,o.longitude=a},o=E({kategori_id:i.disaster.kategori_id,name:i.disaster.name,description:i.disaster.description,level_id:i.disaster.level_id,datetime_start:i.disaster.datetime_start,datetime_end:i.disaster.datetime_end,state_id:i.disaster.state_id,district_id:i.disaster.district_id,parish_id:i.disaster.parish_id,latitude:i.disaster.latitude,longitude:i.disaster.longitude,status:i.disaster.status}),h={},B=()=>{N.get(route("disaster.edit",i.disaster),h,{preserveState:!0,replace:!0})},M=()=>{N.post(route("disaster.update",i.disaster),o,{onSuccess:r=>{r.props.response.success&&Z.fire("Berjaya!",r.props.response.success,"success")}})},_,U=L.icon({iconUrl:"/images/marker-icon.png",shadowUrl:"/images/marker-shadow.png"}),S=()=>{setTimeout(function(){const r=L.map("map").setView([C,K],P);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(r);const a=document.getElementById("searchbox"),e={types:["geocode"],componentRestrictions:{country:"my"}},T=new google.maps.places.Autocomplete(a,e);i.disaster.latitude!=null&&(_=L.marker([i.disaster.latitude,i.disaster.longitude],{draggable:!0,icon:U}).addTo(r),_.on("dragend",function(f){var k=f.target.getLatLng().lat,y=f.target.getLatLng().lng;V(k,y)})),T.addListener("place_changed",()=>{_!=null&&r.removeLayer(_);const f=T.getPlace();var k=f.geometry.location.lat(),y=f.geometry.location.lng();V(k,y),r.setView([k,y],18),_=L.marker([k,y],{draggable:!0,icon:U}).addTo(r),_.on("dragend",function(j){var D=j.target.getLatLng().lat,$=j.target.getLatLng().lng;V(D,$)})})},500)};return(r,a)=>(n(),d(p,null,[w(s(z),{title:"Kemaskini Maklumat Bencana"}),w(R,null,{default:O(()=>[w(X,{title:"Kemaskini Maklumat Bencana",breadcrumbs:A}),t("div",q,[t("div",G,[t("div",H,[Q,t("form",{onSubmit:a[15]||(a[15]=I((...e)=>s(M)&&s(M)(...e),["prevent"]))},[t("div",W,[t("div",Y,[tt,t("div",et,[c(t("select",{class:"form-control","onUpdate:modelValue":a[0]||(a[0]=e=>s(o).kategori_id=e)},[(n(!0),d(p,null,x(l.types,e=>(n(),d("option",{key:e.id,value:e.id},m(e.name),9,st))),128))],512),[[v,s(o).kategori_id]]),l.errors.kategori_id?(n(),d("span",at,m(l.errors.kategori_id),1)):g("",!0)])]),t("div",ot,[it,t("div",lt,[c(t("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Bencana","onUpdate:modelValue":a[1]||(a[1]=e=>s(o).name=e)},null,512),[[b,s(o).name]]),l.errors.name?(n(),d("span",dt,m(l.errors.name),1)):g("",!0)])]),t("div",nt,[rt,t("div",ct,[c(t("textarea",{rows:"5",class:"form-control",placeholder:"Ketarangan Bencana","onUpdate:modelValue":a[2]||(a[2]=e=>s(o).description=e)},null,512),[[b,s(o).description]]),l.errors.description?(n(),d("span",mt,m(l.errors.description),1)):g("",!0)])]),t("div",ut,[_t,t("div",pt,[c(t("select",{class:"form-control","onUpdate:modelValue":a[3]||(a[3]=e=>s(o).level_id=e)},[(n(!0),d(p,null,x(l.levels,e=>(n(),d("option",{value:e.id},m(e.name),9,vt))),256))],512),[[v,s(o).level_id]])])]),t("div",gt,[bt,t("div",ht,[t("div",ft,[c(t("input",{type:"datetime-local",step:"any",class:"form-control",placeholder:"Tarikh Mula","onUpdate:modelValue":a[4]||(a[4]=e=>s(o).datetime_start=e)},null,512),[[b,s(o).datetime_start]]),c(t("input",{type:"datetime-local",step:"any",class:"form-control",placeholder:"Tarikh Akhir","onUpdate:modelValue":a[5]||(a[5]=e=>s(o).datetime_end=e)},null,512),[[b,s(o).datetime_end]])])])]),t("div",kt,[yt,t("div",xt,[c(t("select",{class:"form-control","onUpdate:modelValue":a[6]||(a[6]=e=>s(o).state_id=e),onChange:a[7]||(a[7]=e=>{s(h).state_id=s(o).state_id,s(h).district_id=null,s(h).parish_id=null,s(B)()})},[wt,(n(!0),d(p,null,x(l.states,e=>(n(),d("option",{key:e.id,value:e.id},m(e.name),9,Lt))),128))],544),[[v,s(o).state_id]]),l.errors.state_id?(n(),d("span",Vt,m(l.errors.state_id),1)):g("",!0)])]),t("div",Bt,[Mt,t("div",Ut,[c(t("select",{class:"form-control","onUpdate:modelValue":a[8]||(a[8]=e=>s(o).district_id=e),onChange:a[9]||(a[9]=e=>{s(h).district_id=s(o).district_id,s(B)()})},[St,(n(!0),d(p,null,x(l.districts,e=>(n(),d("option",{key:e.id,value:e.id},m(e.name),9,Tt))),128))],544),[[v,s(o).district_id]]),l.errors.district_id?(n(),d("span",jt,m(l.errors.district_id),1)):g("",!0)])]),t("div",Ot,[Nt,t("div",At,[c(t("select",{class:"form-control","onUpdate:modelValue":a[10]||(a[10]=e=>s(o).parish_id=e)},[(n(!0),d(p,null,x(l.parishes,e=>(n(),d("option",{key:e.id,value:e.id},m(e.name),9,Ct))),128))],512),[[v,s(o).parish_id]])])]),t("div",Kt,[Pt,t("div",Dt,[t("div",$t,[c(t("input",{type:"text",class:"form-control",placeholder:"Latitude","onUpdate:modelValue":a[11]||(a[11]=e=>s(o).latitude=e)},null,512),[[b,s(o).latitude]]),c(t("input",{type:"text",class:"form-control",placeholder:"Longitude","onUpdate:modelValue":a[12]||(a[12]=e=>s(o).longitude=e)},null,512),[[b,s(o).longitude]]),t("button",{class:"btn btn-info",type:"button","data-bs-toggle":"modal","data-bs-target":"#mapModal",onClick:a[13]||(a[13]=(...e)=>s(S)&&s(S)(...e))},Ft)])])]),t("div",zt,[It,t("div",Jt,[c(t("select",{class:"form-control","onUpdate:modelValue":a[14]||(a[14]=e=>s(o).status=e)},Zt,512),[[v,s(o).status]]),l.errors.status?(n(),d("span",qt,m(l.errors.status),1)):g("",!0)])])]),t("div",Gt,[t("div",Ht,[w(s(J),{href:r.route("disaster.show",l.disaster),class:"btn btn-light"},{default:O(()=>[u("Batal")]),_:1},8,["href"]),Qt])])],32)])])])]),_:1}),Wt],64))}};export{oe as default};
