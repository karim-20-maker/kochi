(function(){"use strict";
const ADMIN="karim.ledoyen@gmail.com";
const $=s=>document.querySelector(s),root=$("#root");
const esc=t=>String(t==null?"":t).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const GOALS={cut:"تنشيف",keep:"محافظة",bulk:"تضخيم"};
let db,auth,rows=[],q="",confirmId=null,msg="",lastMsg="";
const fmt=t=>t?new Date(t).toLocaleString("ar-EG",{dateStyle:"short",timeStyle:"short"}):"-";
function coachCode(n,p,u){const j=JSON.stringify({n:n,p:p,u:u||""});return "K"+btoa(unescape(encodeURIComponent(j))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}
function head(sub){return '<div class="card"><h1>كوتشي - لوحة الأدمن</h1>'+(sub||"")+'</div>'}
function login(m){root.innerHTML=head('<p class="sub">للأدمن بس. سجّل دخول بحساب جوجل بتاعك.</p>'+(m?'<p class="msg">'+esc(m)+'</p>':"")+'<button class="btn" id="g">الدخول بحساب جوجل</button>');
  $("#g").onclick=()=>{auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(e=>login("فشل الدخول: "+(e.code||e.message)))}}
async function load(){
  root.innerHTML=head('<p class="sub">بحمّل المستخدمين...</p>');
  try{const sn=await db.collection("users").get();rows=sn.docs.map(d=>Object.assign({id:d.id},d.data()));msg=""}
  catch(e){msg="مقدرتش أقرأ: "+(e.code||e.message)+". اتأكد إن الـ rules الجديدة اتنشرت."}
  draw()}
function draw(){
  const f=rows.filter(r=>!q||[r.email,r.name,r.id,r.asCoach&&r.asCoach.n].join(" ").toLowerCase().indexOf(q.toLowerCase())>=0).sort((a,b)=>(b.seen||0)-(a.seen||0));
  const coaches=rows.filter(r=>r.asCoach).length,linked=rows.filter(r=>r.myCoach).length;
  let h=head('<p class="sub">'+esc(auth.currentUser.email)+' <button class="btn ghost sm" id="out">خروج</button></p>'
   +'<div class="row"><span class="tag">الإجمالي: '+rows.length+'</span><span class="tag">كوتشات: '+coaches+'</span><span class="tag">مشتركين مربوطين بكوتش: '+linked+'</span></div>'
   +'<input class="inp" id="q" placeholder="دوّر بالإيميل أو الاسم" value="'+esc(q)+'">'+(msg?'<p class="msg">'+esc(msg)+'</p>':"")
   +'<div class="row"><button class="btn sm" id="rl">تحديث</button><a class="btn ghost sm" target="_blank" rel="noopener" href="https://console.firebase.google.com/project/'+esc((window.FIREBASE_CONFIG||{}).projectId)+'/authentication/users">حذف الحساب نفسه (Firebase)</a></div>');
  h+='<div class="card scroll"><table class="tbl"><thead><tr><th>الإيميل / الاسم</th><th>النوع</th><th>الكوتش</th><th>الهدف</th><th>سجّل</th><th>آخر دخول</th><th></th></tr></thead><tbody>'+f.map(r=>{
    const role=r.asCoach?'<span class="tag">كوتش</span><br><small>'+esc(r.asCoach.p)+'</small><span class="code" title="كود الدعوة">'+esc(r.asCoach.code||'(بدون كود)')+'</span>':'مستخدم';
    const mc=r.myCoach?esc(r.myCoach.n)+'<br><small>'+esc(r.myCoach.p)+'</small>':"-";
    const del=confirmId===r.id?'<b class="msg">متأكد؟</b> <button class="btn danger sm" data-del="'+esc(r.id)+'">اه امسح</button> <button class="btn ghost sm" data-no="1">لأ</button>':'<button class="btn ghost sm" data-ask="'+esc(r.id)+'">مسح البيانات</button>';
    return '<tr><td>'+esc(r.email||"(بدون إيميل: لسه ما دخلش بعد التحديث)")+'<br><small>'+esc(r.name||"")+(r.onboarded?"":" (ما كمّلش التسجيل)")+'</small></td><td>'+role+'</td><td>'+mc+'</td><td>'+esc(GOALS[r.goal]||"-")+'</td><td>'+fmt(r.created)+'</td><td>'+fmt(r.seen)+'</td><td>'+del+'</td></tr>'}).join("")+'</tbody></table></div>';
  root.innerHTML=h;
  $("#out").onclick=()=>auth.signOut();$("#rl").onclick=load;
  $("#q").oninput=e=>{q=e.target.value;const p=e.target.selectionStart;draw();const n=$("#q");n.focus();n.setSelectionRange(p,p)};
  root.querySelectorAll("[data-ask]").forEach(b=>b.onclick=()=>{confirmId=b.dataset.ask;draw()});
  root.querySelectorAll("[data-no]").forEach(b=>b.onclick=()=>{confirmId=null;draw()});
  root.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>wipe(b.dataset.del));
}
async function wipe(id){
  try{
    for(const c of ["days","body","photos"]){const sn=await db.collection("users/"+id+"/"+c).get();for(const d of sn.docs)await d.ref.delete()}
    try{const sn=await db.collection("shares/"+id+"/msgs").get();for(const d of sn.docs)await d.ref.delete()}catch(e){}
    try{await db.doc("shares/"+id).delete()}catch(e){}
    await db.doc("users/"+id).delete();confirmId=null;msg="اتمسحت بيانات المستخدم وظهوره عند الكوتش. الحساب نفسه لسه موجود في Firebase Authentication: لو الشخص لسه داخل من موبايله هيرجّع بياناته لوحده، فامسحه كمان من Firebase ← Authentication ← Users.";
  }catch(e){msg="فشل المسح: "+(e.code||e.message)}
  await load()}
function start(){
  const cfg=window.FIREBASE_CONFIG;if(!cfg||!cfg.apiKey){root.innerHTML=head('<p class="msg">إعدادات Firebase ناقصة.</p>');return}
  firebase.initializeApp(cfg);auth=firebase.auth();db=firebase.firestore();
  auth.onAuthStateChanged(u=>{
    if(!u){const m=lastMsg;lastMsg="";return login(m)}
    if(u.email!==ADMIN||!u.emailVerified){lastMsg="الحساب ده مش أدمن.";auth.signOut();return}
    load()});
}
start();
})();
