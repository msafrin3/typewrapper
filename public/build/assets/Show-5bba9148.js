import{o as i,c as d,a as s,u as c,w as l,F as u,Z as _,b as t,t as r,i as a,g as n}from"./app-2d475620.js";import{_ as h}from"./MainLayout-c65338c4.js";import"./avatar-1-5707a8d9.js";const m={class:"row justify-content-center"},b={class:"col-md-3"},g={class:"card"},f=t("div",{class:"card-header"},[t("h3",{class:"card-title mb-0"},"Result")],-1),y={class:"card-body"},p={class:"text-center"},w=t("div",{class:"text-center"},[t("small",null,"(words per minute)")],-1),x={class:"table"},v=t("th",null,"Correct Words",-1),W={align:"right",class:"text-success"},k=t("th",null,"Wrong Words",-1),B={align:"right",class:"text-danger"},F={class:"d-grid gap-2 mt-4"},M=t("div",null,"Share your result with others: ",-1),N=t("i",{class:"ri-facebook-circle-fill align-bottom fs-15"},null,-1),P=t("i",{class:"ri-twitter-fill align-bottom fs-15"},null,-1),I={__name:"Show",props:{result:Object},setup(e){const o=e;return $("meta[name='image]").attr("content",route("type.index")+o.result.screenshot),$("meta[property='og:title']").attr("content","Wow I can type "+o.result.correct+" WPM. How about you?"),$("meta[property='og:image']").attr("content",route("type.index")+o.result.screenshot),(S,V)=>(i(),d(u,null,[s(c(_),{title:"Wow I can type "+e.result.correct+" WPM. How about you?"},null,8,["title"]),s(h,null,{default:l(()=>[t("div",m,[t("div",b,[t("div",g,[f,t("div",y,[t("h1",p,r(e.result.correct)+" WPM",1),w,t("table",x,[t("tbody",null,[t("tr",null,[v,t("td",W,r(e.result.correct),1)]),t("tr",null,[k,t("td",B,r(e.result.incorrect),1)])])]),t("div",F,[M,s(c(a),{class:"btn btn-secondary"},{default:l(()=>[N,n(" Facebook")]),_:1}),s(c(a),{class:"btn btn-info"},{default:l(()=>[P,n(" Twitter")]),_:1})])])])])])]),_:1})],64))}};export{I as default};
