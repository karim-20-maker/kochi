/* Kochi: cartoon art (inline SVG, no external images) + quick tips data */
(function(){
var EN=!!(window.KI18N&&KI18N.lang&&KI18N.lang()==="en");
function L(a){return typeof a==="string"?a:(EN?a[1]:a[0])}
var star='<path d="M0-9L2.6-2.6 9 0 2.6 2.6 0 9-2.6 2.6-9 0-2.6-2.6z"/>';
var mascot='<svg class="mscot" viewBox="0 0 200 200" aria-hidden="true"><defs><linearGradient id="mgS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b82f6"/><stop offset="1" stop-color="#1d4ed8"/></linearGradient><radialGradient id="mgK" cx="40%" cy="30%" r="80%"><stop offset="0" stop-color="#ffd9ad"/><stop offset="1" stop-color="#eaa66b"/></radialGradient></defs>'
+'<ellipse cx="100" cy="190" rx="70" ry="9" fill="#000" opacity=".2"/>'
+'<g class="mbob"><path d="M34 196q4-56 66-58q62 2 66 58z" fill="url(#mgS)" stroke="#1e40af" stroke-width="3"/><path d="M84 140l16 20 16-20" fill="#fff" stroke="#c7d2fe" stroke-width="2"/>'
+'<rect x="86" y="118" width="28" height="26" rx="10" fill="#e7a66d"/>'
+'<ellipse cx="54" cy="84" rx="8" ry="12" fill="#eaa66b" stroke="#c98351" stroke-width="2"/><ellipse cx="146" cy="84" rx="8" ry="12" fill="#eaa66b" stroke="#c98351" stroke-width="2"/>'
+'<ellipse cx="100" cy="82" rx="47" ry="52" fill="url(#mgK)" stroke="#c98351" stroke-width="3"/>'
+'<path d="M52 70q-6-44 48-46q54 0 48 46q-14-26-48-26q-34 0-48 26z" fill="#2b1b12" stroke="#170d08" stroke-width="2.5" stroke-linejoin="round"/>'
+'<g class="mbrow"><path d="M66 62q12-10 26-2" stroke="#2b1b12" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M108 60q14-8 26 2" stroke="#2b1b12" stroke-width="6" fill="none" stroke-linecap="round"/></g>'
+'<g class="meye"><ellipse cx="79" cy="78" rx="14" ry="16" fill="#fff" stroke="#6b4a33" stroke-width="2.5"/><ellipse cx="121" cy="78" rx="14" ry="16" fill="#fff" stroke="#6b4a33" stroke-width="2.5"/>'
+'<g class="mpup"><circle cx="79" cy="80" r="9" fill="#3a2414"/><circle cx="121" cy="80" r="9" fill="#3a2414"/><circle cx="75" cy="76" r="3.4" fill="#fff"/><circle cx="117" cy="76" r="3.4" fill="#fff"/><circle cx="83" cy="84" r="1.8" fill="#fff"/><circle cx="125" cy="84" r="1.8" fill="#fff"/></g></g>'
+'<circle cx="62" cy="102" r="9" fill="#ff7a8a" opacity=".5"/><circle cx="138" cy="102" r="9" fill="#ff7a8a" opacity=".5"/>'
+'<path d="M96 88q4 8 8 0" stroke="#c98351" stroke-width="3" fill="none" stroke-linecap="round"/>'
+'<path d="M72 108q28 38 56 0z" fill="#7a1f1f" stroke="#4a1010" stroke-width="3" stroke-linejoin="round"/><path d="M84 122q16 14 32 0q-16-9-32 0z" fill="#ff7f9e"/><path d="M76 109h48" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".9"/>'
+'<path class="mdrool" d="M126 112q6 8 2 16q-6-2-4-10z" fill="#9fd8ff" stroke="#5aaeea" stroke-width="2" stroke-linejoin="round"/></g>'
+'<g class="mfork"><path d="M26 130V96M18 96v12q0 8 8 8t8-8V96" stroke="#e5e7eb" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="26" cy="140" r="11" fill="#eaa66b" stroke="#c98351" stroke-width="2.5"/></g>'
+'<g class="mknife"><path d="M176 132V92q10 4 8 22q-2 12-8 18z" fill="#e5e7eb" stroke="#9ca3af" stroke-width="2.5" stroke-linejoin="round"/><circle cx="174" cy="142" r="11" fill="#eaa66b" stroke="#c98351" stroke-width="2.5"/></g>'
+'<g class="mplate"><ellipse cx="100" cy="184" rx="42" ry="10" fill="#fff" stroke="#d1d5db" stroke-width="2.5"/><ellipse cx="100" cy="180" rx="30" ry="6.5" fill="#f3f4f6"/><ellipse cx="86" cy="177" rx="13" ry="6" fill="#a35a2a" stroke="#7a3f18" stroke-width="2"/><ellipse cx="112" cy="177" rx="13" ry="6" fill="#b86a35" stroke="#7a3f18" stroke-width="2"/><path d="M76 173q6-6 12 0q6-6 12 0q6-6 12 0q6-6 12 0" stroke="#4caf50" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="100" cy="172" r="4" fill="#ef4444"/></g>'
+'<g class="mstm" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".85"><path d="M88 166q-5-8 0-14q5-6 0-12"/><path d="M104 166q-5-8 0-14q5-6 0-12"/><path d="M118 168q-5-8 0-14q5-6 0-12"/></g></svg>';
var anime='<svg class="anm" viewBox="0 0 200 200" aria-hidden="true"><defs>'
+'<linearGradient id="agH" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b3f8f"/><stop offset="1" stop-color="#1e1b5e"/></linearGradient>'
+'<linearGradient id="agE" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#14532d"/><stop offset="1" stop-color="#16a34a"/></linearGradient>'
+'<linearGradient id="agB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7dd3fc"/><stop offset="1" stop-color="#0ea5e9"/></linearGradient></defs>'
+'<ellipse cx="100" cy="192" rx="62" ry="7" fill="#000" opacity=".18"/>'
+'<g class="ag-bob">'
+'<path d="M36 200Q40 150 100 146Q160 150 164 200Z" fill="url(#agB)" stroke="#0369a1" stroke-width="3" stroke-linejoin="round"/>'
+'<path d="M86 150v24M114 150v24" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>'
+'<rect x="88" y="124" width="24" height="26" rx="9" fill="#f6cfae"/>'
+'<ellipse cx="53" cy="106" rx="7" ry="10" fill="#fbd9bd" stroke="#dc9a6c" stroke-width="2.5"/><ellipse cx="147" cy="106" rx="7" ry="10" fill="#fbd9bd" stroke="#dc9a6c" stroke-width="2.5"/>'
+'<ellipse cx="100" cy="102" rx="46" ry="48" fill="#fbd9bd" stroke="#dc9a6c" stroke-width="3"/>'
+'<g class="ag-eo"><ellipse cx="78" cy="106" rx="12" ry="14" fill="#fff" stroke="#14301f" stroke-width="2.5"/><ellipse cx="122" cy="106" rx="12" ry="14" fill="#fff" stroke="#14301f" stroke-width="2.5"/><ellipse cx="78" cy="108" rx="8" ry="10" fill="url(#agE)"/><ellipse cx="122" cy="108" rx="8" ry="10" fill="url(#agE)"/><ellipse cx="78" cy="109" rx="4" ry="5.5" fill="#052e16"/><ellipse cx="122" cy="109" rx="4" ry="5.5" fill="#052e16"/><circle cx="74" cy="103" r="3.6" fill="#fff"/><circle cx="118" cy="103" r="3.6" fill="#fff"/><circle cx="81" cy="113" r="1.8" fill="#fff"/><circle cx="125" cy="113" r="1.8" fill="#fff"/></g>'
+'<g class="ag-ec"><path d="M66 108q12-14 24 0M110 108q12-14 24 0" stroke="#14301f" stroke-width="5" fill="none" stroke-linecap="round"/></g>'
+'<path d="M64 88q12-8 24-3M112 85q12-5 24 3" stroke="#1e1b5e" stroke-width="5" fill="none" stroke-linecap="round"/>'
+'<path d="M98 118q2 3 4 0" stroke="#c98558" stroke-width="2.5" fill="none" stroke-linecap="round"/>'
+'<g class="ag-ch"><circle cx="64" cy="126" r="10" fill="#ff8a8a" opacity=".42"/><circle cx="136" cy="126" r="10" fill="#ff8a8a" opacity=".42"/></g>'
+'<g class="ag-mo"><ellipse cx="100" cy="133" rx="9" ry="6" fill="#7f1d1d" stroke="#450a0a" stroke-width="2"/><ellipse cx="100" cy="136" rx="5" ry="2.6" fill="#fb7185"/></g>'
+'<path d="M51 98Q44 42 100 34Q156 42 149 98Q146 76 132 70Q124 84 116 68Q104 80 98 64Q88 80 78 68Q70 82 66 72Q54 78 51 98Z" fill="url(#agH)" stroke="#12103d" stroke-width="3" stroke-linejoin="round"/>'
+'<path d="M96 36Q88 16 108 10Q100 20 112 24Q104 28 108 36Z" fill="url(#agH)" stroke="#12103d" stroke-width="2.5" stroke-linejoin="round"/>'
+'<path d="M70 52q14-12 32-10" stroke="#6366f1" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7"/>'
+'<g class="ag-food"><g transform="rotate(-6 100 164)"><rect x="66" y="146" width="68" height="34" rx="17" fill="#f6d9a0" stroke="#c28a3a" stroke-width="3"/><path d="M72 150q10-12 20-4q8-10 18-2q10-8 20 2q-4 8-14 6q-8 4-16 0q-10 4-18-2z" fill="#4ade80" stroke="#15803d" stroke-width="2" stroke-linejoin="round"/><circle cx="90" cy="148" r="4" fill="#ef4444"/><circle cx="112" cy="147" r="4" fill="#ef4444"/><path d="M80 164h42M84 172h34" stroke="#a16207" stroke-width="3" stroke-linecap="round" opacity=".55"/></g>'
+'<circle cx="64" cy="168" r="11" fill="#fbd9bd" stroke="#dc9a6c" stroke-width="2.5"/><circle cx="136" cy="168" r="11" fill="#fbd9bd" stroke="#dc9a6c" stroke-width="2.5"/></g></g>'
+'<g class="ag-cr" fill="#d9a441"><circle cx="92" cy="144" r="2.6"/><circle cx="108" cy="146" r="2.2"/><circle cx="100" cy="148" r="2"/></g>'
+'<g class="ag-sp" fill="#fff"><g transform="translate(26 80) scale(.9)">'+star+'</g><g class="s2" transform="translate(176 96) scale(.7)">'+star+'</g><g class="s3" transform="translate(168 30) scale(.55)">'+star+'</g></g>'
+'<text class="mhrt" x="22" y="130" font-size="18">❤</text><text class="mhrt h2" x="170" y="150" font-size="14">❤</text></svg>';
function g(id,a,b){return '<linearGradient id="'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+a+'"/><stop offset="1" stop-color="'+b+'"/></linearGradient>'}
var sh='<ellipse cx="60" cy="110" rx="34" ry="6" fill="#000" opacity=".18"/>';
var PROD={
tips:'<svg viewBox="0 0 120 120" aria-hidden="true"><defs>'+g("pd7","#fff3b0","#ffc933")+'</defs>'+sh+'<path d="M60 18a28 28 0 0 0-16 51c4 4 6 8 6 14h20c0-6 2-10 6-14A28 28 0 0 0 60 18z" fill="url(#pd7)" stroke="#d99a00" stroke-width="2.5"/><rect x="48" y="86" width="24" height="8" rx="3" fill="#9aa5b1"/><rect x="52" y="96" width="16" height="7" rx="3" fill="#6b7a8d"/></svg>'};
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
["القهوة والمشروبات المحلاة بتتحسب. اشرب القهوة والشاي من غير سكر أو بمحلي زيرو.","Coffee and sweetened drinks count. Have coffee and tea unsweetened or with a zero-calorie sweetener."]]}
];
var SLUG=['sahlab', 'hawawshi', 'pizza', 'grape-leaves', 'eggplant', 'pepper', 'potato', 'zucchini', 'molokhia', 'fatta', 'jelly', 'gelato', 'ice-cream', 'hot-choc', 'chia', 'pancakes', 'latte'];
window.KA={anime:anime,SLUG:SLUG,L:L,mascot:mascot,PROD:PROD,HA:HA,TIPS:TIPS};
})();
