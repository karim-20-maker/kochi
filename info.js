/* Kochi: cartoon art (inline SVG, no external images) + quick tips data */
(function(){
var EN=!!(window.KI18N&&KI18N.lang&&KI18N.lang()==="en");
function L(a){return typeof a==="string"?a:(EN?a[1]:a[0])}
var star='<path d="M0-9L2.6-2.6 9 0 2.6 2.6 0 9-2.6 2.6-9 0-2.6-2.6z"/>';
var mascot='<svg class="mscot" viewBox="0 0 200 200" aria-hidden="true"><defs><radialGradient id="mgF" cx="40%" cy="32%" r="75%"><stop offset="0" stop-color="#ffe08a"/><stop offset="1" stop-color="#ff9f3a"/></radialGradient></defs>'
+'<ellipse class="msh" cx="100" cy="186" rx="52" ry="8" fill="#000" opacity=".18"/>'
+'<g class="mbob"><path d="M58 62q-6-30 16-34 8-22 30-14 20-8 30 12 24 2 20 30z" fill="#fff" stroke="#e5e7eb" stroke-width="2"/><rect x="62" y="58" width="76" height="14" rx="6" fill="#f3f4f6"/>'
+'<circle cx="100" cy="115" r="66" fill="url(#mgF)" stroke="#e8841a" stroke-width="3"/>'
+'<g class="meye"><path d="M66 100q11-16 22 0" stroke="#5a2d0c" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M112 100q11-16 22 0" stroke="#5a2d0c" stroke-width="6" fill="none" stroke-linecap="round"/></g>'
+'<circle cx="58" cy="124" r="10" fill="#ff6b8b" opacity=".55"/><circle cx="142" cy="124" r="10" fill="#ff6b8b" opacity=".55"/>'
+'<path d="M68 122q32 46 64 0z" fill="#7a1f1f" stroke="#5a2d0c" stroke-width="3" stroke-linejoin="round"/><path d="M82 140q18 14 36 0q-18-10-36 0z" fill="#ff7f9e"/>'
+'<g class="mlick"><path d="M128 124q26-4 30 10q-2 14-22 8q-8-6-8-18z" fill="#ff5c85" stroke="#d63b66" stroke-width="2.5" stroke-linejoin="round"/><path d="M142 128q6 4 8 10" stroke="#d63b66" stroke-width="2" fill="none" stroke-linecap="round"/></g></g>'
+'<g class="mspk" fill="#fff"><g transform="translate(34 60)">'+star+'</g><g class="s2" transform="translate(170 78) scale(.8)">'+star+'</g><g class="s3" transform="translate(158 36) scale(.6)">'+star+'</g></g>'
+'<text class="mhrt" x="22" y="108" font-size="20">❤</text><text class="mhrt h2" x="172" y="150" font-size="16">❤</text></svg>';
function g(id,a,b){return '<linearGradient id="'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+a+'"/><stop offset="1" stop-color="'+b+'"/></linearGradient>'}
var sh='<ellipse cx="60" cy="110" rx="34" ry="6" fill="#000" opacity=".18"/>';
var PROD={
drops:'<svg viewBox="0 0 120 120" aria-hidden="true"><defs>'+g("pd1","#9bd4ff","#3a8fe0")+'</defs>'+sh+'<rect x="40" y="46" width="40" height="60" rx="12" fill="url(#pd1)" stroke="#2a6fb8" stroke-width="2.5"/><rect x="46" y="28" width="28" height="22" rx="6" fill="#fff" stroke="#c9d3df" stroke-width="2.5"/><path d="M54 28V16q6-8 12 0v12" fill="#f1f5f9" stroke="#c9d3df" stroke-width="2.5"/><rect x="46" y="62" width="28" height="30" rx="6" fill="#fff" opacity=".92"/><circle cx="60" cy="72" r="6" fill="#3a8fe0"/><path d="M60 62q5 7 0 10q-5-3 0-10z" fill="#fff" opacity=".0"/><text x="60" y="88" font-size="11" font-weight="800" text-anchor="middle" fill="#2a6fb8">0</text></svg>',
stevia:'<svg viewBox="0 0 120 120" aria-hidden="true"><defs>'+g("pd2","#b7f0a8","#3fae4a")+'</defs>'+sh+'<rect x="36" y="30" width="48" height="76" rx="8" fill="url(#pd2)" stroke="#2d8a38" stroke-width="2.5"/><path d="M36 38h48" stroke="#2d8a38" stroke-width="2.5" stroke-dasharray="4 3"/><path d="M60 98q-22-8-22-30q20-2 22 30z" fill="#fff" opacity=".95"/><path d="M60 98q22-8 22-30q-20-2-22 30z" fill="#e8ffe0" opacity=".95"/><path d="M60 98V62" stroke="#2d8a38" stroke-width="2.5" stroke-linecap="round"/></svg>',
ery:'<svg viewBox="0 0 120 120" aria-hidden="true"><defs>'+g("pd3","#ffffff","#dbe4ee")+'</defs>'+sh+'<rect x="34" y="44" width="52" height="62" rx="12" fill="url(#pd3)" stroke="#9fb0c4" stroke-width="2.5"/><rect x="38" y="28" width="44" height="18" rx="6" fill="#64748b"/><circle cx="48" cy="70" r="2.6" fill="#9fb0c4"/><circle cx="62" cy="64" r="2.6" fill="#9fb0c4"/><circle cx="74" cy="76" r="2.6" fill="#9fb0c4"/><circle cx="56" cy="84" r="2.6" fill="#9fb0c4"/><circle cx="72" cy="94" r="2.6" fill="#9fb0c4"/><circle cx="46" cy="94" r="2.6" fill="#9fb0c4"/></svg>',
monk:'<svg viewBox="0 0 120 120" aria-hidden="true"><defs>'+g("pd4","#ffd27a","#f08a1c")+'</defs>'+sh+'<circle cx="56" cy="70" r="30" fill="url(#pd4)" stroke="#c46a0c" stroke-width="2.5"/><path d="M56 40q4-12 16-12q-2 12-16 12z" fill="#4caf50" stroke="#2d8a38" stroke-width="2"/><path d="M42 62q4-10 14-10" stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none" opacity=".6"/><rect x="82" y="64" width="22" height="38" rx="5" fill="#fff6e0" stroke="#c46a0c" stroke-width="2"/></svg>',
zero:'<svg viewBox="0 0 120 120" aria-hidden="true"><defs>'+g("pd5","#e9eef5","#a9b6c6")+'</defs>'+sh+'<rect x="38" y="26" width="44" height="80" rx="10" fill="url(#pd5)" stroke="#6b7a8d" stroke-width="2.5"/><rect x="38" y="36" width="44" height="6" fill="#6b7a8d" opacity=".4"/><circle cx="60" cy="68" r="15" fill="#ef4444"/><text x="60" y="75" font-size="19" font-weight="800" text-anchor="middle" fill="#fff">0</text></svg>',
bar:'<svg viewBox="0 0 120 120" aria-hidden="true"><defs>'+g("pd6","#a0663a","#5c3318")+'</defs>'+sh+'<rect x="24" y="38" width="72" height="56" rx="8" fill="url(#pd6)" stroke="#3b200e" stroke-width="2.5"/><path d="M48 38v56M72 38v56M24 66h72" stroke="#3b200e" stroke-width="2" opacity=".6"/><circle cx="90" cy="34" r="14" fill="#facc15" stroke="#b45309" stroke-width="2.5"/><text x="90" y="40" font-size="18" font-weight="800" text-anchor="middle" fill="#7c2d12">!</text></svg>',
tips:'<svg viewBox="0 0 120 120" aria-hidden="true"><defs>'+g("pd7","#fff3b0","#ffc933")+'</defs>'+sh+'<path d="M60 18a28 28 0 0 0-16 51c4 4 6 8 6 14h20c0-6 2-10 6-14A28 28 0 0 0 60 18z" fill="url(#pd7)" stroke="#d99a00" stroke-width="2.5"/><rect x="48" y="86" width="24" height="8" rx="3" fill="#9aa5b1"/><rect x="52" y="96" width="16" height="7" rx="3" fill="#6b7a8d"/></svg>'};
var SWA=["drops","stevia","ery","monk","zero","bar","tips"];
/* hack card art: [emoji, c1, c2, group s=savory d=sweet] aligned to KP.H order */
var HA=[["🥛","#fde68a","#f59e0b","d"],["🥙","#fecaca","#ef4444","s"],["🍕","#fed7aa","#f97316","s"],["🌿","#bbf7d0","#16a34a","s"],["🍆","#ddd6fe","#7c3aed","s"],["🫑","#bbf7d0","#22c55e","s"],["🥔","#fde68a","#d97706","s"],["🥬","#d9f99d","#65a30d","s"],["🥣","#a7f3d0","#059669","s"],["🍲","#fed7aa","#ea580c","s"],["🍮","#fecdd3","#e11d48","d"],["🍨","#fbcfe8","#db2777","d"],["🍦","#e9d5ff","#9333ea","d"],["☕","#d6bcab","#7c4a2b","d"],["🫐","#c7d2fe","#4f46e5","d"],["🥞","#fde68a","#ca8a04","d"],["🧋","#e7d3c0","#a16207","d"]];
var TIPS=[
{e:"🍕",c1:"#fecaca",c2:"#ef4444",n:["بوظت الأكل؟ ارجع على طول","Blew the diet? Get right back on it"],p:[
["وجبة كبيرة أو يوم بايظ مش هيمحي أسابيع من الالتزام. الميزان بيتحرك على المتوسط مش على وجبة.","One big meal or a bad day won't erase weeks of effort. Weight follows the average, not one meal."],
["ماتجوّعش نفسك ولا تعمل كارديو عقاب. كمّل الوجبة الجاية في ميعادها وبحجمها العادي.","Don't starve yourself or do punishment cardio. Have the next meal on time at its normal size."],
["سجّل اللي أكلته تقديري. اللي مش مسجّل بيتحول لخوف وبيبعدك عن الخطة.","Log what you ate, roughly. What you don't log turns into guilt and pulls you away from the plan."],
["اشرب مياه واتمشى 20 إلى 30 دقيقة، وده بيهدّي الإحساس بالذنب والانتفاخ.","Drink water and walk 20 to 30 minutes, it eases the guilt and bloating."],
["اسأل نفسك إيه اللي حصل: جوع زيادة ولا ضغط ولا قلة نوم؟ وظبّط ده عشان ماتتكررش.","Ask what happened: too hungry, stress or little sleep? Fix that so it doesn't repeat."]]},
{e:"🚭",c1:"#e2e8f0",c2:"#64748b",n:["إزاي أبطّل سجاير","How to quit smoking"],p:[
["حدد يوم تبطل فيه وقوله لحد قريب منك. وارمي السجاير والولاعات والمنفضة قبله.","Pick a quit day and tell someone close. Throw out cigarettes, lighters and ashtrays before it."],
["رغبة السجارة بتعدّي في دقايق قليلة. اتأخر، خد نفس عميق، اشرب مياه، واعمل أي حاجة بإيدك لحد ما تعدّي.","A craving passes in a few minutes. Delay, breathe deep, drink water and keep your hands busy until it passes."],
["بدائل النيكوتين (لزق أو علكة أو أقراص) بتزوّد فرصة النجاح. اسأل صيدلي أو دكتور، وفي أدوية بروشتة بس بمعرفة دكتور.","Nicotine replacement (patches, gum, lozenges) improves your odds. Ask a pharmacist or doctor, and some medicines are prescription-only with a doctor."],
["اتجنب الأماكن والأوقات اللي بتدخن فيها: القهوة بعد الأكل، السواقة، القعدة مع المدخنين. غيّر الروتين ده.","Avoid the places and times you smoked: coffee after meals, driving, sitting with smokers. Change the routine."],
["لو وزنك زاد شوية فده طبيعي ومؤقت. زوّد المشي ومياه وخضار ولا ترجع للسجاير عشانه. وأي انتكاسة مش فشل، ابدأ تاني.","A little weight gain is common and temporary. Add walking, water and veggies and don't go back to smoking over it. A slip isn't failure, start again."]]},
{e:"🏋️",c1:"#ddd6fe",c2:"#7c3aed",n:["إزاي ألتزم بالتمرين","How to stick to training"],p:[
["ثبّت أيام وميعاد في الأسبوع زي ميعاد شغل. القرار اللي بيتاخد كل يوم بيضيع.","Fix days and a time each week like a work meeting. A decision made daily gets lost."],
["ابدأ بقليل: 3 أيام كفاية. الأحسن تلتزم بحاجة صغيرة من إنك تبدأ بخطة كبيرة وتسيبها.","Start small: 3 days is enough. Sticking to something small beats starting big and quitting."],
["قاعدة العشر دقايق: لو مش عايز تتمرن، ابدأ 10 دقايق بس. غالبا هتكمّل.","The ten-minute rule: if you don't feel like it, start with just 10 minutes. You'll usually keep going."],
["جهّز هدومك وشنطتك من الليلة اللي قبلها، ولا تفوّت يومين ورا بعض.","Pack your gear the night before, and never miss two days in a row."],
["تمرين أقصر أحسن من الغيا. سجّل كل تمرين في كوتشي وشوف سلسلة الأيام بتكبر.","A shorter session beats skipping. Log every workout in Kochi and watch your streak grow."]]},
{e:"🌙",c1:"#c7d2fe",c2:"#4338ca",n:["جوع بالليل","Late-night hunger"],p:[
["خلي عشاك فيه بروتين وخضار وكمية كفاية، ومتنامش جعان.","Make dinner protein, veggies and enough volume, and don't go to bed hungry."],
["جهّز سناك خفيف: زبادي يوناني أو جيلي زيرو من هاكرز الدايت.","Keep a light snack ready: Greek yogurt or the zero jelly from the diet hacks."],
["اغسل سنانك أو اشرب شاي من غير سكر، وده بيقفل الشهية عند ناس كتير.","Brush your teeth or have sugar-free tea, which switches off appetite for a lot of people."],
["الجوع بالليل غالبا من قلة نوم أو ملل. لو مش جعان بجد، استنى 15 دقيقة.","Night hunger is often from little sleep or boredom. If you're not truly hungry, wait 15 minutes."],
["ماتشتريش السناكس اللي بتضعفك. اللي مش في البيت مش هتاكله.","Don't buy the snacks that tempt you. What isn't at home won't get eaten."]]},
{e:"⚖️",c1:"#bbf7d0",c2:"#16a34a",n:["الميزان واقف","The scale won't move"],p:[
["الوزن بيتأرجح 1 إلى 2 كيلو من المياه والملح والأكل. بصّ على متوسط الأسبوع مش على يوم.","Weight swings 1 to 2 kg from water, salt and food. Look at the weekly average, not one day."],
["استنى 2 إلى 3 أسابيع قبل ما تغيّر حاجة. وصوّر نفسك وقيس الوسط، لأن العضل ممكن يزيد والدهون تقل.","Give it 2 to 3 weeks before changing anything. Take photos and measure your waist, since muscle can rise as fat drops."],
["راجع تسجيلك: الزيت والصوصات والمشروبات والعزومات هما أكتر حاجة بتتنسي.","Check your logging: oil, sauces, drinks and invitations are what get forgotten most."],
["لو فعلا واقف 3 أسابيع، زوّد المشي أو قلّل 100 إلى 150 سعر. ماتعملش تخفيض حاد.","If truly stuck for 3 weeks, add steps or cut 100 to 150 calories. No crash cuts."],
["النوم 7 إلى 8 ساعات والمياه كفاية، لأنهم بيأثروا على الجوع والوزن.","Sleep 7 to 8 hours and drink enough water, they affect hunger and weight."]]},
{e:"💻",c1:"#bae6fd",c2:"#0284c7",n:["شغلك قدام الشاشة","Desk job tips"],p:[
["قوم كل ساعة 5 دقايق. اشرب كوباية مياه وإنت واقف.","Stand up every hour for 5 minutes. Drink a glass of water while standing."],
["ثبّت ميعاد للغدا، ولا تاكل قدام الكمبيوتر. الأكل وإنت مشتت بيزوّد الكمية.","Set a lunch time and don't eat at the computer. Distracted eating adds portions."],
["جهّز سناك في الشنطة أو التلاجة: مكسرات (حفنة صغيرة) أو فاكهة أو زبادي.","Keep a snack in your bag or fridge: a small handful of nuts, fruit or yogurt."],
["الهدف 8000 إلى 10000 خطوة. مكالمات الشغل ممكن تتعمل وإنت ماشي.","Aim for 8000 to 10000 steps. Work calls can be taken while walking."],
["القهوة والمشروبات المحلاة بتتحسب. استعمل المحلي من دليل المحليات.","Coffee and sweetened drinks count. Use sweeteners from the sweetener guide."]]}
];
window.KA={L:L,mascot:mascot,PROD:PROD,SWA:SWA,HA:HA,TIPS:TIPS};
})();
