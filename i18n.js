/* i18n: Arabic (default) <-> casual English. English is applied by translating the rendered DOM against KOCHI_EN. */
(function(){
"use strict";
var LANG="ar";try{LANG=localStorage.getItem("kochi-lang")==="en"?"en":"ar"}catch(e){}
var AR=/[\u0600-\u06FF]/,MAP=null,RX=null,TPL=null;
function esc(s){return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}
function build(){
  var P=window.KOCHI_EN||[],plain=[],tpl=[];MAP=new Map();
  P.forEach(function(p){if(/\{\w\}/.test(p[0]))tpl.push(p);else{MAP.set(p[0],p[1]);plain.push(p[0])}});
  plain.sort(function(a,b){return b.length-a.length});
  var C="\\u0621-\\u063A\\u0641-\\u064A\\u064B-\\u0652\\u0670",L="(?<!["+C+"])",R="(?!["+C+"])",CT=new RegExp("["+C+"]");
  RX=new RegExp(plain.map(function(s){return (CT.test(s.charAt(0))?L:"")+esc(s)+(CT.test(s.charAt(s.length-1))?R:"")}).join("|"),"g");
  tpl.sort(function(a,b){return b[0].length-a[0].length});
  TPL=tpl.map(function(p){var names=[];var src=esc(p[0]).replace(/\\\{(\w)\\\}/g,function(m,n){names.push(n);return "(.+?)"});return {rx:new RegExp(src,"g"),names:names,en:p[1]}});
}
function tr(s){
  if(LANG!=="en"||typeof s!=="string"||!AR.test(s))return s;
  if(!MAP)build();
  TPL.forEach(function(t){s=s.replace(t.rx,function(){var g=arguments,out=t.en,seen={};t.names.forEach(function(n,i){if(!(n in seen))seen[n]=tr(g[i+1])});for(var n in seen)out=out.split("{"+n+"}").join(seen[n]);return out})});
  return s.replace(RX,function(m){return MAP.get(m)});
}
var ATTRS=["placeholder","aria-label","title","alt"];
function fixText(n){var v=n.nodeValue;if(v&&AR.test(v)){var t=tr(v);if(t!==v)n.nodeValue=t}}
function fixAttrs(el){if(el.nodeType!==1)return;for(var i=0;i<ATTRS.length;i++){var v=el.getAttribute(ATTRS[i]);if(v&&AR.test(v)){var t=tr(v);if(t!==v)el.setAttribute(ATTRS[i],t)}}}
function walk(root){
  if(!root)return;
  if(root.nodeType===3){if(!root.parentNode||!/^(TEXTAREA|SCRIPT|STYLE)$/.test(root.parentNode.nodeName))fixText(root);return}
  if(root.nodeType!==1||/^(SCRIPT|STYLE)$/.test(root.nodeName))return;
  fixAttrs(root);
  var els=root.querySelectorAll("*");for(var i=0;i<els.length;i++)fixAttrs(els[i]);
  var w=document.createTreeWalker(root,4),n;
  while((n=w.nextNode())){if(!/^(TEXTAREA|SCRIPT|STYLE)$/.test(n.parentNode.nodeName))fixText(n)}
}
function apply(){
  var d=document.documentElement;d.lang=LANG==="en"?"en":"ar";d.dir=LANG==="en"?"ltr":"rtl";
  if(LANG==="en"){document.title="Kochi";var m=document.querySelector('meta[name="description"]');if(m)m.setAttribute("content","Your personal nutrition and training coach. Log your food and workouts and get your plan every day.")}
}
function start(){
  apply();if(LANG!=="en")return;
  walk(document.body);
  new MutationObserver(function(ms){
    for(var i=0;i<ms.length;i++){var m=ms[i];
      if(m.type==="childList"){for(var j=0;j<m.addedNodes.length;j++)walk(m.addedNodes[j])}
      else if(m.type==="characterData"){if(!/^(TEXTAREA|SCRIPT|STYLE)$/.test(m.target.parentNode&&m.target.parentNode.nodeName||""))fixText(m.target)}
      else if(m.type==="attributes")fixAttrs(m.target)}
  }).observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:ATTRS});
}
window.KI18N={tr:tr,lang:function(){return LANG},locale:function(){return LANG==="en"?"en-GB":"ar-EG"},
  set:function(l){try{localStorage.setItem("kochi-lang",l)}catch(e){}location.reload()}};
apply();
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();
