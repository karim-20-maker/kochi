/* Kochi: Egypt food prices (EGP, mid Nov 2026, approximate retail) + static meal suggester + diet hacks. No AI, no network. */
(function(){
var EN=!!(window.KI18N&&KI18N.lang&&KI18N.lang()==="en");
function L(a){return typeof a==="string"?a:(EN?a[1]:a[0])}
var DATE=["نوفمبر 2026","November 2026"];
var CATS=[["لحوم","Red meat"],["فراخ وبيض","Chicken & eggs"],["سمك وجمبري","Fish & shrimp"],["ألبان وجبن","Dairy & cheese"],["نشويات وبقوليات","Carbs & legumes"],["خضار وفاكهة","Veg & fruit"],["دهون ومكسرات","Fats & nuts"]];
var P={};
/* I(id,cat,[ar,en],EGP per kg (edible), kcal,p,c,f per 100g raw/as bought, estimated?, unit[ar,en], unit grams) */
function I(id,cat,n,kg,k,p,c,f,e,u,ug){P[id]={id:id,cat:cat,n:n,kg:kg,k:k,p:p,c:c,f:f,e:!!e,u:u||null,ug:ug||0}}
I("beefm",0,["لحمة مفرومة","Ground beef"],400,190,17,0,13,1);
I("beefc",0,["لحمة كندوز (مكعبات)","Beef cubes"],450,150,20,0,7);
I("liver",0,["كبدة بقري","Beef liver"],420,135,20,4,3.6);
I("chb",1,["صدور فراخ","Chicken breast"],140,110,23,0,1.5,1);
I("cht",1,["أوراك فراخ بدون جلد","Skinless chicken thigh"],100,120,19,0,5,1);
I("egg",1,["بيض","Eggs"],95,143,12.5,.7,9.5,0,["بيضة","egg"],50);
I("bolti",2,["بلطي (صافي بعد العضم)","Tilapia (edible weight)"],160,96,20,0,1.7,1);
I("sard",2,["سردين مجمد (صافي)","Frozen sardines (edible)"],70,135,19,0,6,1);
I("mack",2,["ماكريل مجمد (صافي)","Frozen mackerel (edible)"],260,205,19,0,14,1);
I("shr",2,["جمبري مقشر","Peeled shrimp"],300,85,18,1,1,1);
I("tuna",2,["تونة معلبة (مصفاة)","Canned tuna (drained)"],280,116,26,0,1,1,["علبة","can"],120);
I("milk",3,["لبن","Milk"],38,61,3.2,4.8,3.3,1,["كوباية","glass"],240);
I("greek",3,["زبادي يوناني","Greek yogurt"],120,73,10,4,2,1,["علبة","tub"],150);
I("cott",3,["جبنة قريش","Cottage cheese"],110,95,11,3,4,1);
I("feta",3,["جبنة بيضاء","White cheese"],130,260,16,2,21,1);
I("whey",3,["واي بروتين","Whey protein"],900,400,80,8,6,1,["سكوب","scoop"],30);
I("rice",4,["رز أبيض (نيّ)","Rice (raw)"],36,360,7,79,.6);
I("pasta",4,["مكرونة (نيّة)","Pasta (raw)"],31,360,12,73,1.5);
I("oats",4,["شوفان","Oats"],70,389,17,66,7,1);
I("lent",4,["عدس (نيّ)","Lentils (raw)"],65,350,25,60,1);
I("foul",4,["فول ناشف","Dried fava"],57,340,26,58,1.5);
I("bread",4,["عيش بلدي","Baladi bread"],20,270,9,55,1.5,1,["رغيف","loaf"],90);
I("fino",4,["عيش فينو","Fino bread"],50,280,8,56,2,1,["رغيفة","roll"],60);
I("pot",4,["بطاطس","Potatoes"],20,77,2,17,.1);
I("spot",4,["بطاطا","Sweet potato"],25,86,1.6,20,.1,1);
I("tom",5,["طماطم","Tomatoes"],20,18,.9,3.9,.2);
I("cuc",5,["خيار","Cucumber"],15,15,.7,3.6,.1);
I("zuc",5,["كوسة","Zucchini"],18,17,1.2,3.1,.3);
I("pep",5,["فلفل أخضر","Green pepper"],15,20,.9,4.6,.2);
I("onion",5,["بصل","Onion"],20,40,1,9,.1);
I("let",5,["خس","Lettuce"],25,15,1.4,2.9,.2,1);
I("ban",5,["موز","Banana"],28,89,1.1,23,.3,0,["موزة","banana"],120);
I("apple",5,["تفاح","Apple"],65,52,.3,14,.2,0,["تفاحة","apple"],180);
I("orange",5,["برتقال","Orange"],12,47,.9,12,.1,0,["برتقالة","orange"],200);
I("dates",5,["تمر","Dates"],90,280,2.5,75,.4,1,["تمرة","date"],8);
I("oil",6,["زيت","Oil"],110,884,0,0,100,0,["معلقة صغيرة","tsp"],5);
I("pnb",6,["زبدة فول سوداني","Peanut butter"],160,590,25,20,50,1,["معلقة","tbsp"],16);
I("pean",6,["فول سوداني","Peanuts"],90,580,26,16,49,1);
I("alm",6,["لوز","Almonds"],600,579,21,22,50,1);
I("wal",6,["عين جمل","Walnuts"],500,654,15,14,65,1);
I("cash",6,["كاجو","Cashews"],650,553,18,30,44,1);
/* reference prices without macros: [cat, ar, en, price text ar, en, estimated] */
var REF=[
[0,"لحمة ضاني","Lamb","430 جنيه/كجم","430 EGP/kg",0],
[0,"لحمة بتلو","Veal","350 إلى 860 جنيه/كجم (حسب القطعة)","350 to 860 EGP/kg (by cut)",0],
[1,"فراخ بيضا كاملة","Whole white chicken","85 إلى 90 جنيه/كجم","85 to 90 EGP/kg",0],
[1,"فراخ ساسو","Sasso chicken","92 جنيه/كجم","92 EGP/kg",0],
[1,"كرتونة بيض (30)","Egg carton (30)","120 إلى 138 جنيه (جملة)","120 to 138 EGP (wholesale)",0],
[2,"بوري","Mullet","100 إلى 250 جنيه/كجم","100 to 250 EGP/kg",0],
[2,"دنيس","Sea bream","275 إلى 525 جنيه/كجم","275 to 525 EGP/kg",0],
[4,"سكر","Sugar","33 جنيه/كجم","33 EGP/kg",0],
[4,"دقيق","Flour","27 جنيه/كجم","27 EGP/kg",0],
[6,"زيت عباد الشمس","Sunflower oil","99 جنيه/لتر","99 EGP/litre",0]
];
var SW={b:.26,p:.1,l:.34,d:.24,s:.12};
/* meals: [slot, [ar,en], [[id,grams],...]] raw weights */
var M=[
["b",["بيض بالطماطم وعيش","Eggs with tomato and bread"],[["egg",150],["tom",150],["oil",5],["bread",90]]],
["b",["فول بالزيت وبيضة","Foul with oil and an egg"],[["foul",50],["oil",10],["egg",50],["bread",90],["tom",100]]],
["b",["شوفان باللبن والموز","Oats with milk and banana"],[["oats",60],["milk",240],["ban",120],["pnb",16]]],
["b",["زبادي يوناني بالشوفان والتفاح","Greek yogurt, oats and apple"],[["greek",150],["oats",40],["apple",180]]],
["b",["أومليت بالقريش وخيار","Omelette with cottage cheese and cucumber"],[["egg",150],["cott",100],["bread",90],["cuc",100]]],
["b",["ساندوتش تونة فينو","Tuna fino sandwich"],[["tuna",120],["fino",120],["tom",80],["greek",30]]],
["p",["موزة وزبدة فول سوداني وعيش","Banana, peanut butter and bread"],[["ban",120],["pnb",16],["bread",45]]],
["p",["تمر ولبن","Dates and milk"],[["dates",40],["milk",240]]],
["p",["شوفان بالموز","Banana oats"],[["oats",40],["ban",120],["milk",150]]],
["p",["زبادي يوناني وتفاحة","Greek yogurt and an apple"],[["greek",150],["apple",180]]],
["p",["بطاطا وبيضتين","Sweet potato and two eggs"],[["spot",200],["egg",100]]],
["l",["فراخ مشوية ورز وسلطة","Grilled chicken, rice and salad"],[["chb",200],["rice",80],["cuc",100],["tom",100],["let",50],["oil",10]]],
["l",["كفتة ومكرونة بالصلصة","Kofta with pasta and tomato sauce"],[["beefm",150],["pasta",80],["tom",150],["onion",50],["oil",10]]],
["l",["سمك بلطي مشوي ورز","Grilled tilapia and rice"],[["bolti",250],["rice",80],["tom",100],["cuc",100],["oil",10]]],
["l",["كبدة إسكندراني وعيش","Alexandrian-style liver and bread"],[["liver",200],["pep",100],["onion",50],["oil",10],["bread",90]]],
["l",["كشري دايت (عدس ورز)","Diet koshary (lentils and rice)"],[["lent",70],["rice",50],["onion",50],["tom",100],["oil",10]]],
["l",["لحمة طبيخ وبطاطس","Beef stew with potatoes"],[["beefc",150],["pot",250],["onion",50],["oil",10],["tom",100]]],
["l",["جمبري ورز وكوسة","Shrimp, rice and zucchini"],[["shr",200],["rice",80],["zuc",150],["oil",10]]],
["l",["تونة ومكرونة سلطة","Tuna pasta salad"],[["tuna",240],["pasta",80],["cuc",100],["tom",100],["oil",10]]],
["l",["أوراك فراخ وبطاطس في الفرن","Oven chicken thighs and potatoes"],[["cht",250],["pot",200],["onion",50],["oil",10]]],
["d",["فراخ مشوية وخضار سوتيه","Grilled chicken and sautéed veggies"],[["chb",200],["zuc",150],["pep",100],["onion",50],["oil",10],["bread",45]]],
["d",["بيض وجبنة بيضا وخضار","Eggs, white cheese and veggies"],[["egg",150],["feta",40],["cuc",100],["tom",100],["bread",90]]],
["d",["سلطة تونة وبيض","Tuna and egg salad"],[["tuna",120],["egg",100],["let",80],["tom",100],["cuc",100],["oil",10],["fino",60]]],
["d",["سردين وسلطة","Sardines and salad"],[["sard",250],["tom",150],["cuc",100],["oil",5],["bread",90]]],
["d",["زبادي يوناني وقريش وخيار","Greek yogurt, cottage cheese and cucumber"],[["greek",150],["cott",100],["cuc",150],["bread",90]]],
["d",["لحمة مفرومة وكوسة","Ground beef and zucchini"],[["beefm",150],["zuc",200],["tom",100],["oil",10]]],
["d",["ماكريل مشوي وسلطة","Grilled mackerel and salad"],[["mack",200],["tom",150],["cuc",100],["bread",45]]],
["d",["كفتة مشوية وسلطة","Grilled kofta and salad"],[["beefm",150],["tom",150],["cuc",100],["onion",30],["bread",45]]],
["d",["كبدة بالبصل وسلطة","Liver with onions and salad"],[["liver",200],["onion",80],["tom",100],["cuc",100],["oil",5],["bread",45]]],
["d",["أوراك فراخ بالفرن وسلطة","Oven chicken thighs and salad"],[["cht",250],["tom",150],["cuc",100],["let",50],["bread",45]]],
["l",["ماكريل ورز وسلطة","Mackerel, rice and salad"],[["mack",200],["rice",80],["tom",100],["cuc",100],["oil",5]]],
["l",["صدور فراخ ومكرونة بالصلصة","Chicken breast with pasta and sauce"],[["chb",200],["pasta",80],["tom",150],["onion",40],["oil",10]]],
["s",["لوز وتفاحة","Almonds and an apple"],[["alm",25],["apple",180]]],
["s",["فول سوداني وبرتقالة","Peanuts and an orange"],[["pean",40],["orange",200]]],
["s",["زبادي يوناني وعين جمل","Greek yogurt and walnuts"],[["greek",150],["wal",20]]],
["s",["بيضتين مسلوقين وخيار","Two boiled eggs and cucumber"],[["egg",100],["cuc",150]]],
["s",["كاجو وموزة","Cashews and a banana"],[["cash",25],["ban",120]]],
["s",["تونة وخيار","Tuna and cucumber"],[["tuna",120],["cuc",150]]],
["s",["شيك واي بالموز","Whey banana shake"],[["whey",30],["milk",240],["ban",120]]]
];
function ing(id,g,s){var x=P[id],gg=g*s,n=null;
  if(x.u){n=Math.max(1,Math.round(gg/x.ug*(x.ug>=100?2:1))/(x.ug>=100?2:1));gg=n*x.ug}
  else gg=Math.max(5,Math.round(gg/5)*5);
  return{id:id,g:gg,n:n,k:x.k*gg/100,p:x.p*gg/100,c:x.c*gg/100,f:x.f*gg/100,cost:x.kg*gg/1000}}
function calcMeal(m,s){var it=m[2].map(function(a){return ing(a[0],a[1],s)}),t={k:0,p:0,c:0,f:0,cost:0};
  it.forEach(function(i){t.k+=i.k;t.p+=i.p;t.c+=i.c;t.f+=i.f;t.cost+=i.cost});
  t.items=it;t.m=m;t.s=s;return t}
var SC=[.5,.75,1,1.25,1.5,1.75];
function best(m,T,B){var r=null,i;
  for(i=0;i<SC.length;i++){var c=calcMeal(m,SC[i]);
    if(B>0&&c.cost>B)continue;
    if(!r||Math.abs(c.k-T)<Math.abs(r.k-T))r=c}
  if(!r){r=calcMeal(m,SC[0]);r.over=true}
  return r}
/* ranked options for a slot: target kcal T, budget B (0 = free) */
var PR={beefm:"meat",beefc:"meat",liver:"meat",chb:"chicken",cht:"chicken",bolti:"fish",sard:"fish",mack:"fish",shr:"fish",tuna:"fish"};
function prots(m){var o={};m[2].forEach(function(a){if(PR[a[0]])o[PR[a[0]]]=1});return o}
function options(slot,T,B,pf){
  var all=M.filter(function(m){return m[0]===slot}),a=all;
  if(pf&&pf.length){var sub=all.filter(function(m){var o=prots(m),ks=Object.keys(o);return ks.every(function(x){return pf.indexOf(x)>=0})&&((slot!=="l"&&slot!=="d")||ks.length)});if(sub.length)a=sub}
  a=a.map(function(m){return best(m,T,B)});
  var ok=a.filter(function(x){return !x.over});
  if(!ok.length){a.sort(function(x,y){return x.cost-y.cost});return a}
  ok.forEach(function(x){x.score=x.p/Math.max(x.k,1)*100-Math.abs(x.k-T)/Math.max(T,1)*12});
  ok.sort(function(x,y){return y.score-x.score});return ok}
function itemText(i){var x=P[i.id];
  if(i.n!=null){var u=L(x.u);if(EN&&i.n>1&&u!=="tsp"&&u!=="tbsp")u+="s";
    return i.n+" "+u+(NU[i.id]?"":" "+L(x.n))}
  return L(x.n)+" "+i.g+" "+(EN?"g":"جم")}
var NU={egg:1,ban:1,apple:1,orange:1,dates:1};
/* diet hacks: [ar,en], time, ingredients [ar,en][], steps [ar,en][], macros */
var H=[
{n:["سحلب دايت","Diet sahlab"],t:["5 دقايق","5 min"],k:100,p:7,c:17,f:.5,
 i:[["لبن خالي الدسم: 200 مل","Skimmed milk: 200 ml"],["نشا ذرة: معلقة صغيرة مليانة (8 جم)","Cornstarch: a heaped teaspoon (8 g)"],["محلي سكرالوز أو ستيفيا نقط: حسب الذوق","Sucralose or stevia drops: to taste"],["فانيليا وقرفة وجوز هند (اختياري)","Vanilla, cinnamon and a little coconut (optional)"]],
 s:[["دوّب النشا في ربع كوباية لبن بارد.","Dissolve the starch in a quarter glass of cold milk."],["سخّن باقي اللبن لحد ما يسخن وصب عليه خليط النشا وقلّب على نار هادية 2 إلى 3 دقايق لحد ما يتقل.","Heat the rest of the milk, pour in the starch mix and stir on low heat 2 to 3 minutes until it thickens."],["شيل من على النار وحلّي بالمحلي وحط الفانيليا. ورش قرفة.","Take it off the heat, sweeten it and add the vanilla. Sprinkle cinnamon."]]},
{n:["حواوشي دايت","Diet hawawshi"],t:["25 دقيقة","25 min"],k:410,p:35,c:31,f:15,
 i:[["لحمة مفرومة قليلة الدهن: 150 جم","Lean ground beef: 150 g"],["بصل مبشور: 50 جم وفلفل أخضر مفروم: 30 جم","Grated onion: 50 g and chopped green pepper: 30 g"],["نص رغيف عيش بلدي (45 جم)","Half a baladi loaf (45 g)"],["بقدونس وملح وفلفل وكمون وبهارات","Parsley, salt, pepper, cumin and spices"]],
 s:[["اخلط اللحمة مع البصل والفلفل والبقدونس والتوابل كويس من غير زيت.","Mix the beef with the onion, pepper, parsley and spices well, with no oil."],["افتح نص الرغيف زي الجيب وافرد الحشو جواه رقيق.","Open the half loaf like a pocket and spread the filling thin inside."],["فرن 220 درجة أو اير فراير 200 درجة 12 إلى 15 دقيقة وقلّبه مرة.","Oven at 220 degrees or air fryer at 200 degrees for 12 to 15 minutes, flipping once."],["اللحمة لازم تستوي خالص ومفيش لون وردي جواها.","The meat must be cooked all the way, no pink inside."]]},
{n:["بيتزا دايت على رغيف بلدي","Diet pizza on baladi bread"],t:["15 دقيقة","15 min"],k:510,p:45,c:57,f:14,
 i:[["رغيف عيش بلدي: 90 جم (نصه لو عايزها أخف)","1 baladi loaf: 90 g (half for a lighter one)"],["صلصة طماطم من غير سكر: 3 معالق","Sugar-free tomato sauce: 3 tablespoons"],["موتزاريلا لايت أو ريد: 40 جم","Light mozzarella: 40 g"],["صدر فراخ مطبوخ مقطع: 80 جم","Cooked chicken breast, diced: 80 g"],["فلفل ألوان وزيتون ومشروم وأوريجانو","Bell peppers, olives, mushrooms and oregano"]],
 s:[["افتح الرغيف نصين رقيقين، وحمّص الوش في الفرن 3 دقايق عشان يبقى مقرمش.","Split the loaf into two thin rounds and toast the inside 3 minutes so it's crisp."],["افرد الصلصة وحط الفراخ والخضار وبعدين الجبنة والأوريجانو.","Spread the sauce, then add the chicken, veggies, then the cheese and oregano."],["فرن 220 درجة 6 إلى 8 دقايق لحد ما الجبنة تدوب وتاخد لون.","Oven at 220 degrees 6 to 8 minutes until the cheese melts and browns."]]},
{n:["ورق عنب دايت","Diet stuffed grape leaves"],t:["60 دقيقة","60 min"],k:305,p:18,c:42,f:7,
 i:[["ورق عنب: 60 جم (حوالي 20 ورقة)","Grape leaves: 60 g (about 20 leaves)"],["رز مصري نيّ: 40 جم","Raw rice: 40 g"],["لحمة مفرومة قليلة الدهن: 60 جم","Lean ground beef: 60 g"],["بقدونس وشبت وبصل وطماطم مفرومين وتوابل وملح","Chopped parsley, dill, onion and tomato, spices and salt"],["صلصة طماطم من غير سكر","Sugar-free tomato sauce"]],
 s:[["اغسل ورق العنب وانقعه في ميه سخنة 5 دقايق عشان يلين.","Rinse the grape leaves and soak in hot water 5 minutes to soften."],["اخلط الرز النيّ مع اللحمة والخضرة والتوابل والصلصة.","Mix the raw rice with the beef, herbs, spices and sauce."],["حط معلقة صغيرة حشو على كل ورقة ولفها سيجار وماتضغطش عشان الرز بيكبر.","Put a small spoon of filling on each leaf and roll it like a cigar, not too tight because the rice expands."],["رصّها في حلة وحط فوقها طبق مقلوب وغطيها بميه وعصير ليمونة وسيبها 45 دقيقة على نار هادية.","Pack them in a pot with an upside-down plate on top, cover with water and lemon juice and simmer 45 minutes."]],
 nt:["ورق العنب المعلب فيه ملح، اشطفه كويس.","Canned grape leaves are salty, rinse them well."]},
{n:["باذنجان محشي دايت","Diet stuffed eggplant"],t:["55 دقيقة","55 min"],k:310,p:17,c:47,f:7,
 i:[["باذنجان رفيع صغير: 250 جم","Small thin eggplants: 250 g"],["رز مصري نيّ: 40 جم","Raw rice: 40 g"],["لحمة مفرومة قليلة الدهن: 60 جم","Lean ground beef: 60 g"],["بقدونس وشبت وبصل وطماطم مفرومين وتوابل وملح","Chopped parsley, dill, onion and tomato, spices and salt"],["صلصة طماطم من غير سكر","Sugar-free tomato sauce"]],
 s:[["فرّغ الباذنجان بالمعلقة وسيب جدار رفيع، وحطه في الفرن 10 دقايق من غير زيت عشان يطري.","Hollow the eggplants with a spoon leaving a thin wall, and bake 10 minutes with no oil to soften."],["اخلط الحشو (رز نيّ ولحمة وخضرة وتوابل) واحشي بيه من غير ما تملا لآخر.","Mix the filling (raw rice, beef, herbs, spices) and stuff without filling to the top."],["رصّه في صينية وصب الصلصة المخففة بميه وغطيها بقصدير.","Pack in a tray, pour in the thinned sauce and cover with foil."],["فرن 190 درجة 40 دقيقة.","Oven at 190 degrees for 40 minutes."]],
 nt:["الباذنجان بيشرب زيت لو اتقلى، فخليه في الفرن عشان السعرات.","Eggplant soaks up oil if fried, so bake it to keep the calories down."]},
{n:["فلفل محشي دايت","Diet stuffed peppers"],t:["50 دقيقة","50 min"],k:290,p:17,c:41,f:7,
 i:[["فلفل أخضر أو ألوان كبير: 200 جم","Large green or colored peppers: 200 g"],["رز مصري نيّ: 40 جم","Raw rice: 40 g"],["لحمة مفرومة قليلة الدهن: 60 جم","Lean ground beef: 60 g"],["بقدونس وشبت وبصل وطماطم مفرومين وتوابل وملح","Chopped parsley, dill, onion and tomato, spices and salt"],["صلصة طماطم من غير سكر","Sugar-free tomato sauce"]],
 s:[["قص غطا الفلفلة وفرّغها من البذر.","Cut off the pepper tops and remove the seeds."],["اخلط الحشو (رز نيّ ولحمة وخضرة وتوابل) واحشي الفلفل لتلتين.","Mix the filling (raw rice, beef, herbs, spices) and fill the peppers two thirds."],["رصّه واقف في حلة وغطيه بالصلصة المخففة ومعاها شوية ميه.","Stand them in a pot and cover with the thinned sauce and some water."],["سيبه على نار هادية 35 إلى 40 دقيقة أو فرن 190 درجة بغطا.","Simmer on low heat 35 to 40 minutes, or oven at 190 degrees covered."]],
 nt:["الفلفل الألوان أحلى وفيه فيتامين سي أكتر.","Colored peppers are sweeter and have more vitamin C."]},
{n:["بطاطس محشية دايت","Diet stuffed potatoes"],t:["50 دقيقة","50 min"],k:390,p:25,c:48,f:11,
 i:[["بطاطس متوسطة: 250 جم","Medium potatoes: 250 g"],["بصل وطماطم مفرومين وتوم وتوابل","Chopped onion and tomato, garlic and spices"],["لحمة مفرومة قليلة الدهن: 100 جم","Lean ground beef: 100 g"],["بقدونس وشبت وبصل وطماطم مفرومين وتوابل وملح","Chopped parsley, dill, onion and tomato, spices and salt"],["صلصة طماطم من غير سكر","Sugar-free tomato sauce"]],
 s:[["اسلق البطاطس نص سلقة 15 دقيقة بقشرها، وبعدين فرّغ نصها بالمعلقة.","Half-boil the potatoes in their skins 15 minutes, then scoop out the middle."],["قلّب اللحمة مع البصل والتوم والتوابل في طاسة من غير زيت لحد ما تستوي، وضيف الطماطم.","Sauté the beef with the onion, garlic and spices in a dry pan until cooked, then add the tomato."],["احشي البطاطس وحطها في صينية مع الصلصة المخففة.","Stuff the potatoes and put them in a tray with the thinned sauce."],["فرن 200 درجة 25 دقيقة.","Oven at 200 degrees for 25 minutes."]],
 nt:["بطاطس بالفرن من غير تحمير، وده اللي بيفرق في السعرات.","Baked, not fried, and that's what keeps the calories down."]},
{n:["كوسة أو كرنب محشي دايت","Diet stuffed zucchini or cabbage"],t:["50 دقيقة","50 min"],k:290,p:18,c:40,f:7,
 i:[["كوسة صغيرة أو ورق كرنب: 250 جم","Small zucchini or cabbage leaves: 250 g"],["رز مصري نيّ: 40 جم","Raw rice: 40 g"],["لحمة مفرومة قليلة الدهن: 60 جم","Lean ground beef: 60 g"],["بقدونس وشبت وبصل وطماطم مفرومين","Chopped parsley, dill, onion and tomato"],["صلصة طماطم وتوابل وملح","Tomato sauce, spices and salt"]],
 s:[["اخلط الرز والحشو والخضرة والتوابل (الرز نيّ).","Mix the raw rice, beef, herbs and spices."],["احشي الكوسة المفرّغة أو لف الكرنب وماتملاش لحد الآخر عشان الرز بيكبر.","Stuff the hollowed zucchini or roll the cabbage and don't fill to the top because the rice expands."],["رصّها في حلة وغطيها بالصلصة المخففة بميه وسيبها على نار هادية 40 دقيقة.","Pack them in a pot, cover with thinned sauce and simmer 40 minutes."]],
 nt:["لو عايزه أخف: بدل الرز بقرنبيط مفروم (بيوفّر حوالي 130 سعر).","To go lighter: swap the rice for grated cauliflower (saves about 130 calories)."]},
{n:["ملوخية دايت","Diet molokhia"],t:["25 دقيقة","25 min"],k:460,p:47,c:52,f:8,
 i:[["ملوخية خضرا (طازة أو مجمدة): 200 جم","Green molokhia (fresh or frozen): 200 g"],["شوربة فراخ أو ميه، وتقلية: توم وكسبرة وزيت معلقة صغيرة","Chicken broth or water, and a garlic and coriander sauté in a teaspoon of oil"],["صدر فراخ نيّ: 150 جم، مسلوق","Raw chicken breast: 150 g, boiled"],["رز نيّ: 50 جم، مسلوق","Raw rice: 50 g, cooked"]],
 s:[["اسلق الفراخ في ميه وبصلة وحبهان وطلّعها وقطّعها، واحتفظ بالشوربة.","Boil the chicken in water with an onion and cardamom, take it out and shred it, and keep the broth."],["سخّن الشوربة وضيف الملوخية وقلّب على نار هادية 3 دقايق من غير ما تغلي جامد.","Heat the broth, add the molokhia and stir on low heat 3 minutes without boiling hard."],["قلّي التوم والكسبرة في الزيت وحطهم على الملوخية.","Fry the garlic and coriander in the oil and pour over the molokhia."],["قدّمها على الرز مع الفراخ.","Serve it over the rice with the chicken."]],
 nt:["الرقم ده للطبق كله (ملوخية + فراخ + رز). الملوخية لوحدها حوالي 115 سعر.","These numbers are for the whole plate (molokhia + chicken + rice). The molokhia alone is about 115 calories."]},
{n:["فتة دايت","Diet fatta"],t:["30 دقيقة (واللحمة مسلوقة قبلها)","30 min (with pre-boiled meat)"],k:500,p:38,c:63,f:12,
 i:[["نص رغيف عيش بلدي: 45 جم، محمّص في الفرن من غير زيت","Half a baladi loaf: 45 g, toasted in the oven with no oil"],["رز نيّ: 40 جم","Raw rice: 40 g"],["لحمة كندوز نيّة: 150 جم، مسلوقة","Raw beef cubes: 150 g, boiled"],["صلصة: طماطم 100 جم + توم وخل وملح","Sauce: 100 g tomato, garlic, vinegar and salt"],["شوربة اللحمة","The meat broth"]],
 s:[["اسلق اللحمة لحد ما تستوي (ساعة ونص، أو 30 دقيقة في ضغط) واحتفظ بالشوربة.","Boil the beef until tender (an hour and a half, or 30 minutes in a pressure cooker) and keep the broth."],["قطّع العيش وحمّصه في الفرن 8 دقايق لحد ما يبقى مقرمش.","Cut the bread and toast it in the oven 8 minutes until crisp."],["اسلق الرز، وسوّي الصلصة: توم وخل وطماطم مبشورة 5 دقايق.","Cook the rice, and make the sauce: garlic, vinegar and grated tomato for 5 minutes."],["رص العيش وبعدين الرز وبلّلهم بمعلقتين شوربة، وحط اللحمة والصلصة فوق.","Layer the bread then the rice, moisten with two spoons of broth, and top with the meat and sauce."]]},
{n:["جيلي زيرو شوجر بالزبادي","Sugar-free jelly with Greek yogurt"],t:["10 دقايق + تلات ساعات تلج","10 min + 3 hours chilling"],k:85,p:10,c:5,f:2,
 i:[["كيس جيلي زيرو شوجر (أي نكهة)","1 sachet sugar-free jelly (any flavour)"],["ميه سخنة حسب العلبة (حوالي 250 مل)","Hot water as on the pack (about 250 ml)"],["زبادي يوناني: 100 جم","Greek yogurt: 100 g"]],
 s:[["دوّب الجيلي في الميه السخنة وقلّب كويس.","Dissolve the jelly in the hot water and stir well."],["صب نص الكمية في كوباية وسيبها تتجمد في التلاجة ساعة.","Pour half into a cup and let it set in the fridge for an hour."],["اخلط الزبادي مع الباقي وصبه فوق الطبقة الأولى وسيبه ساعتين.","Mix the yogurt into the rest, pour it over the first layer and leave it two hours."]]},
{n:["جيلاتي بروتين (ستايل جيلاتي دايت)","Protein gelato (diet gelato style)"],t:["10 دقايق + 4 ساعات فريزر","10 min + 4 hours freezer"],k:265,p:42,c:13,f:5,
 i:[["زبادي يوناني: 150 جم","Greek yogurt: 150 g"],["واي بروتين فانيليا أو شوكولاتة: سكوب","Whey, vanilla or chocolate: 1 scoop"],["لبن خالي الدسم: 100 مل","Skimmed milk: 100 ml"],["محلي حسب الذوق","Sweetener to taste"]],
 s:[["اخلط كل المكونات في الخلاط لحد ما تبقى ناعمة.","Blend everything until smooth."],["صبها في علبة وحطها في الفريزر 4 ساعات، وقلّبها كل ساعة في أول ساعتين عشان ماتبقاش تلجية.","Pour it in a tub and freeze 4 hours, stirring every hour for the first two so it doesn't turn icy."],["طلّعها قبل الأكل 10 دقايق. لو معاك جهاز آيس كريم بروتين اعمل بيه تقيل أكتر.","Take it out 10 minutes before eating. A protein ice cream machine makes it creamier."]],
 nt:["ده تقليد منزلي لطعم الجيلاتي الدايت. أرقام أي منتج جاهز (زي وندر فيت) من الملصق عليه، مش مضمونة هنا.","This is a home version of the diet gelato taste. For any ready-made product (like Wonder Fit) go by its own label, I haven't verified its numbers here."]},
{n:["آيس كريم موز وكاكاو","Banana cocoa ice cream"],t:["5 دقايق (الموزة متجمدة قبلها)","5 min (freeze the banana first)"],k:190,p:12,c:34,f:3,
 i:[["موزة متقطعة ومتجمدة: 120 جم","1 banana, sliced and frozen: 120 g"],["زبادي يوناني: 100 جم","Greek yogurt: 100 g"],["كاكاو غير محلى: معلقة صغيرة","Unsweetened cocoa: 1 tsp"]],
 s:[["اخلط الموز المتجمد مع الزبادي والكاكاو في الخلاط أو الكبّاية.","Blend the frozen banana with the yogurt and cocoa."],["اضرب لحد ما تبقى زي الآيس كريم وكُلها على طول.","Blend until it looks like ice cream and eat right away."]]},
{n:["شوكولاتة ساخنة دايت","Diet hot chocolate"],t:["5 دقايق","5 min"],k:85,p:8,c:12,f:1,
 i:[["لبن خالي الدسم: 200 مل","Skimmed milk: 200 ml"],["كاكاو غير محلى: معلقة كبيرة","Unsweetened cocoa: 1 tbsp"],["محلي حسب الذوق وقرفة","Sweetener to taste and cinnamon"]],
 s:[["اخلط الكاكاو مع شوية لبن بارد عشان ماتكوّنش كتل.","Mix the cocoa with a little cold milk so it doesn't clump."],["سخّن باقي اللبن وضيف الخليط وقلّب ودوّب المحلي.","Heat the rest of the milk, add the mix, stir and dissolve the sweetener."]]},
{n:["بودينج شيا","Chia pudding"],t:["5 دقايق + ليلة في التلاجة","5 min + overnight"],k:150,p:8,c:15,f:6,
 i:[["شيا: 20 جم (حوالي معلقتين)","Chia: 20 g (about 2 tablespoons)"],["لبن خالي الدسم: 150 مل","Skimmed milk: 150 ml"],["محلي وفانيليا","Sweetener and vanilla"]],
 s:[["اخلط الشيا واللبن والمحلي والفانيليا في برطمان.","Mix the chia, milk, sweetener and vanilla in a jar."],["قلّب بعد 10 دقايق عشان ماتتجمعش، وحطه في التلاجة ليلة.","Stir after 10 minutes so it doesn't clump, and chill overnight."],["كُله بارد، وممكن تحط فوقه نص تفاحة مقطعة.","Eat it cold, with half a chopped apple on top if you like."]]},
{n:["بان كيك شوفان وبيض","Oat and egg pancakes"],t:["10 دقايق","10 min"],k:340,p:21,c:39,f:12,
 i:[["شوفان: 40 جم","Oats: 40 g"],["بيضتين","2 eggs"],["نص موزة","Half a banana"],["بيكنج باودر: رشة، وقرفة ومحلي","Pinch of baking powder, cinnamon and sweetener"]],
 s:[["اخلط الكل في الخلاط لحد ما يبقى سايل متجانس.","Blend everything into a smooth batter."],["سخّن طاسة غير لاصقة وقطرة زيت، وصب معلقة كبيرة وكبيرة لكل بان كيك.","Heat a non-stick pan with a drop of oil and pour a ladle per pancake."],["اقلبها لما تظهر فقاقيع على الوش، دقيقة ونص كل ناحية.","Flip when bubbles show on top, about 1.5 minutes a side."]]},
{n:["لاتيه مثلج دايت","Iced diet latte"],t:["3 دقايق","3 min"],k:60,p:5,c:8,f:.3,
 i:[["نسكافيه أو قهوة: معلقة صغيرة","Instant coffee: 1 tsp"],["لبن خالي الدسم: 150 مل","Skimmed milk: 150 ml"],["تلج ومحلي","Ice and sweetener"]],
 s:[["دوّب القهوة في شوية ميه سخنة.","Dissolve the coffee in a little hot water."],["املا الكوباية تلج وصب اللبن والقهوة وحلّي.","Fill a glass with ice, pour in the milk and coffee and sweeten."]]}
];
window.KP={L:L,DATE:DATE,CATS:CATS,P:P,REF:REF,M:M,SW:SW,calcMeal:calcMeal,options:options,itemText:itemText,H:H,EN:EN};
})();
