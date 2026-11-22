/* Lógica de la Góndola. El contenido de cada pasillo está en temas/. */
T.sort((a,b)=>a.n-b.n);
/* ===================== ESTADO ===================== */
const KEY = "gondola-mkt-v1";
const LEVELS = [[0,"Practicante"],[150,"Asistente de marketing"],[400,"Analista"],[800,"Brand Manager"],[1400,"Gerente de Marketing"],[2200,"CMO"]];
function fresh(){ return {xp:0,best:{},known:{},streak:0,last:null,flash:0}; }
let S = fresh();
try{ const raw = localStorage.getItem(KEY); if(raw) S = Object.assign(fresh(), JSON.parse(raw)); }catch(e){}
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} }

function levelOf(xp){ let i=0; for(let k=0;k<LEVELS.length;k++) if(xp>=LEVELS[k][0]) i=k; return i; }
function today(){ const d=new Date(); return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate(); }
function yesterday(){ const d=new Date(Date.now()-864e5); return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate(); }
function addXP(n){
  if(n<=0) return;
  const before = levelOf(S.xp);
  S.xp += n;
  const t = today();
  if(S.last !== t){ S.streak = (S.last === yesterday()) ? S.streak+1 : 1; S.last = t; }
  save(); toast("+"+n+" XP");
  const after = levelOf(S.xp);
  if(after > before){ toast("¡Subiste a "+LEVELS[after][1]+"!", true); confetti(); }
  renderBar();
}
function setBest(tid, k, v){ S.best[tid] = S.best[tid] || {}; if(v > (S.best[tid][k]||0)){ S.best[tid][k] = v; save(); } }
function mastery(t){
  const b = S.best[t.id] || {}, kn = (S.known[t.id]||[]).length;
  const parts = [b.quiz||0, b.pairs||0, Math.min(1, kn/t.cards.length)];
  if(t.order.length) parts.push(b.order||0);
  if(t.sort.length) parts.push(b.sort||0);
  return Math.round(100*parts.reduce((a,c)=>a+c,0)/parts.length);
}
function starsOf(f){ return f>=.9?3:f>=.7?2:f>=.5?1:0; }
function starHTML(n){ let s=""; for(let i=0;i<3;i++) s += i<n ? "★" : '<span class="off">★</span>'; return '<span class="stars" aria-label="'+n+' de 3 estrellas">'+s+"</span>"; }
/* ===================== UTILIDADES ===================== */
const $ = (s,r=document)=>r.querySelector(s);
const app = $("#app");
const esc = s => String(s).replace(/[&<>"]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function topic(id){ return T.find(t=>t.id===id); }
function toast(msg, lv){ const d=document.createElement("div"); d.textContent=msg; if(lv) d.className="lv"; $("#toast").appendChild(d); setTimeout(()=>d.remove(),1700); }
function shakeEl(el){ el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake"); }
let cleanup = null, restart = null;
function view(html, c){ if(cleanup){ cleanup(); cleanup=null; } restart = null; app.innerHTML = html; if(c) app.style.setProperty("--c", c); else app.style.removeProperty("--c"); window.scrollTo(0,0); }

function renderBar(){
  const i = levelOf(S.xp), lo = LEVELS[i][0], hi = LEVELS[i+1] ? LEVELS[i+1][0] : lo;
  const pct = hi>lo ? Math.round(100*(S.xp-lo)/(hi-lo)) : 100;
  $("#lvl").innerHTML = '<span class="lvl-name">'+LEVELS[i][1]+'</span><span class="xpbar" title="'+S.xp+' XP"><b style="width:'+pct+'%"></b></span>'
    + '<span class="pill">'+S.xp+' XP</span>' + (S.streak ? '<span class="pill fire" title="Días seguidos estudiando">'+S.streak+(S.streak===1?" día":" días")+'</span>' : "");
}

/* ===================== CONFETI ===================== */
function confetti(){
  if(matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cv = $("#confetti"), ctx = cv.getContext("2d");
  cv.width = innerWidth; cv.height = innerHeight;
  const cs = getComputedStyle(document.documentElement);
  const cols = ["--tag","--t-marca","--t-ciclo","--t-perfil","--t-viaje"].map(v=>cs.getPropertyValue(v).trim());
  const P = Array.from({length:120},()=>({x:Math.random()*cv.width,y:-20-Math.random()*cv.height*.3,vx:(Math.random()-.5)*4,vy:2+Math.random()*4,r:Math.random()*6.28,s:5+Math.random()*6,c:cols[Math.floor(Math.random()*cols.length)]}));
  let f=0; (function tick(){ ctx.clearRect(0,0,cv.width,cv.height);
    P.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; p.vy+=.06; p.r+=.12; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.r); ctx.fillStyle=p.c; ctx.fillRect(-p.s/2,-p.s/4,p.s,p.s/2); ctx.restore(); });
    if(++f<150) requestAnimationFrame(tick); else ctx.clearRect(0,0,cv.width,cv.height); })();
}

/* ===================== VISTAS ===================== */
const MODES = [
  {k:"tarjetas",ic:"⇄",n:"Tarjetas",d:"Da vuelta y repasa definiciones"},
  {k:"quiz",ic:"?",n:"Quiz",d:"10 preguntas con combos"},
  {k:"parejas",ic:"⋈",n:"Parejas",d:"Une concepto con definición"},
  {k:"ordena",ic:"1→",n:"Ordena",d:"Arma la secuencia correcta"},
  {k:"clasifica",ic:"▦",n:"Clasifica",d:"Lleva cada idea a su caja"}
];

function home(){
  const total = Math.round(T.reduce((a,t)=>a+mastery(t),0)/T.length);
  let lines = T.map(t=>'<div class="rl"><span>'+String(t.n).padStart(2,"0")+" "+esc(t.name)+'</span><span>'+mastery(t)+'%</span></div>').join("");
  let tags = T.map(t=>{
    const b=S.best[t.id]||{};
    return '<a class="tag" href="#'+t.id+'" style="--c:'+t.color+'"><span class="tag-cat">Pasillo '+t.n+'</span><span class="tag-name">'+esc(t.name)+'</span>'
      + starHTML(starsOf(b.quiz||0)) + '<span class="tag-price">'+mastery(t)+'<small>% dominado</small></span></a>';
  }).join("");
  view(`
  <section class="hero">
    <div>
      <p class="eyebrow">DIS8011 · Repaso para la prueba</p>
      <h1>Llena tu carro de <em>conceptos</em>.</h1>
      <p class="lead">Cada pasillo es un tema de tus apuntes. Lee el resumen, voltea tarjetas, responde quizzes y juega a ordenar y clasificar. Ganas XP, subes de cargo y tu boleta muestra cuánto dominas de cada tema.</p>
    </div>
    <aside class="receipt" aria-label="Tu progreso">
      <h3>BOLETA DE ESTUDIO</h3>
      <p class="c">${new Date().toLocaleDateString("es-CL",{day:"2-digit",month:"short",year:"numeric"})} · ${S.streak||0} ${S.streak===1?"día":"días"} de racha</p>
      ${lines}
      <div class="rdash"></div>
      <div class="rl"><span>Récord relámpago</span><span>${S.flash||0} pts</span></div>
      <div class="rl"><span>XP acumulada</span><span>${S.xp}</span></div>
      <div class="rdash"></div>
      <div class="rl rtotal"><span>DOMINIO TOTAL</span><span>${total}%</span></div>
    </aside>
  </section>
  <div class="sec-h"><h2>El estante</h2><span class="eyebrow">Toca una etiqueta para entrar al pasillo</span></div>
  <div class="shelf">${tags}</div>
  <div class="flash">
    <div class="grow"><h3>Desafío relámpago</h3><p>60 segundos, preguntas de todos los pasillos mezcladas. Cada acierto suma un punto. ¿Superas tu récord de ${S.flash||0}?</p></div>
    <a class="btn tagc" href="#relampago">Empezar</a>
  </div>
  <div class="sec-h"><h2>Cómo se juega</h2></div>
  <div class="how">
    <div><b>Tarjetas</b><span>Lee el concepto, piensa la respuesta y voltea. Las que no sabías vuelven al final del mazo.</span></div>
    <div><b>Quiz</b><span>Responde seguido sin errores para armar combos y ganar más XP. Usa las teclas 1–4.</span></div>
    <div><b>Parejas, Ordena y Clasifica</b><span>Juegos cortos para fijar relaciones, secuencias y categorías.</span></div>
    <div><b>Dominio</b><span>Se calcula con tu mejor resultado en cada juego del pasillo. Apunta al 100%.</span></div>
  </div>
  <div class="foot"><span>Tu progreso se guarda en este navegador.</span><span class="foot-btns"><button id="cookies-show" type="button">Aviso sobre cookies</button><button id="reset" type="button">Reiniciar progreso</button></span></div>`);
  $("#reset").addEventListener("click", askReset);
  $("#cookies-show").addEventListener("click", showCookies);
}

function topicView(t){
  const b = S.best[t.id]||{}, kn=(S.known[t.id]||[]).length;
  const st = {tarjetas: kn+"/"+t.cards.length+" sabidas", quiz: b.quiz? "Mejor: "+Math.round(b.quiz*100)+"%" : "Sin jugar", parejas: b.pairs? "Mejor: "+Math.round(b.pairs*100)+"%" : "Sin jugar",
    ordena: b.order? "Mejor: "+Math.round(b.order*100)+"%" : "Sin jugar", clasifica: b.sort? "Mejor: "+Math.round(b.sort*100)+"%" : "Sin jugar"};
  const modes = MODES.filter(m=>!(m.k==="ordena"&&!t.order.length) && !(m.k==="clasifica"&&!t.sort.length))
    .map(m=>'<a class="mode" href="#'+t.id+'-'+m.k+'"><span class="ic">'+m.ic+'</span><b>'+m.n+'</b><span>'+m.d+'</span><span class="st">'+st[m.k]+'</span></a>').join("");
  view(`
  <a class="back" href="#">← Volver al estante</a>
  <header class="thead">
    <div class="grow"><p class="eyebrow">Pasillo ${t.n}</p><h1>${esc(t.name)}</h1><p>${esc(t.tagline)}</p></div>
    <div class="gauge"><b>${mastery(t)}%</b><span>dominado</span></div>
  </header>
  <div class="modes">${modes}</div>
  <div class="sec-h"><h2>Apuntes</h2><span class="eyebrow">Léelos antes de jugar</span></div>
  <div class="notes">${t.notes}</div>`, t.color);
}
/* ---------- Piezas compartidas por todos los juegos ---------- */

function gameShell(t, title, statId){
  return '<div class="game"><div class="gtop"><a class="back" href="#'+(t?t.id:"")+'">← Salir</a><span class="gt">'+esc(title)+'</span><button type="button" class="btn ghost sm" id="g-restart">Empezar de nuevo</button><span class="pill" id="'+(statId||"gstat")+'"></span></div><div class="prog"><b id="gprog" style="width:0%"></b></div><div id="stage"></div></div>';
}
function setProg(f){ const p=$("#gprog"); if(p) p.style.width=Math.round(f*100)+"%"; }
function endScreen(o){
  const s = starsOf(o.frac);
  $("#stage").innerHTML = '<div class="panel end"><div class="big">'+starHTML(s)+'</div><h2>'+esc(o.title)+'</h2><p>'+o.detail+'</p><p><b>+'+o.xp+' XP</b></p><div class="btns">'
    + (o.next? '<button class="btn c" id="e-next">'+esc(o.next)+'</button>' : "")
    + '<button class="btn '+(o.next?"ghost":"c")+'" id="e-again">Jugar otra vez</button><a class="btn ghost" href="#'+(o.back||"")+'">Volver</a></div></div>';
  setProg(1);
  $("#e-again").addEventListener("click", o.again);
  if(o.next) $("#e-next").addEventListener("click", o.onNext);
  addXP(o.xp);
  if(s===3) confetti();
}
const praise = f => f>=.9?"¡Excelente!":f>=.7?"¡Muy bien!":f>=.5?"Vas bien":"Sigue practicando";

/* Referencia para profundizar: la primera entrada de t.refs que calce con la pregunta o su respuesta correcta */
function refFor(t, q){
  const text = q.q+" "+q.o[0];
  const r = t.refs.find(r=>new RegExp(r[0],"i").test(text)) || ["", t.wiki];
  const keys = (r[2] ? [r[2]] : []).concat(r[0] ? r[0].split("|") : [], q.o[0]);
  return {term:r[1], keys};
}
function wikiURL(term){ return "https://es.wikipedia.org/w/index.php?search="+encodeURIComponent(term); }
function noteFor(t, keys){
  const tpl = document.createElement("template"); tpl.innerHTML = t.notes;
  const notes = [...tpl.content.querySelectorAll(".note")];
  for(const k of keys){ const n = notes.find(n=>n.textContent.toLowerCase().includes(k.toLowerCase())); if(n) return n; }
  return notes[0];
}
/* Enlaces "Ver en los apuntes" y "Profundizar"; bindRefs se llama después de insertar refsHTML en la página */
function refsHTML(r){
  return '<div class="refs"><button type="button" class="linkbtn" id="ref-note" aria-expanded="false">Ver en los apuntes</button>'
    + '<a href="'+wikiURL(r.term)+'" target="_blank" rel="noopener">Profundizar en Wikipedia: '+esc(r.term)+' ↗</a></div>';
}
function bindRefs(t, r){
  $("#ref-note").addEventListener("click",e=>{
    const box = $("#ref-notebox"), b = e.currentTarget;
    if(!box.firstChild) box.appendChild(noteFor(t, r.keys));
    box.hidden = !box.hidden; b.setAttribute("aria-expanded", !box.hidden);
    b.textContent = box.hidden ? "Ver en los apuntes" : "Ocultar apunte";
  });
}

/* ---------- Tarjetas ---------- */
function cardsGame(t){
  view(gameShell(t,"Tarjetas · "+t.name), t.color); restart = ()=>cardsGame(t);
  const known = new Set(S.known[t.id]||[]);
  let deck = shuffle(t.cards.map((_,i)=>i)), seen=0, gained=0, total=deck.length;
  function draw(){
    $("#gstat").textContent = "Quedan "+deck.length;
    setProg(1 - deck.length/total);
    if(!deck.length){
      S.known[t.id] = [...known]; save();
      $("#stage").innerHTML = '<div class="panel end"><div class="big">'+starHTML(3)+'</div><h2>¡Mazo completo!</h2><p>Repasaste las '+total+' tarjetas de este pasillo.</p><p><b>+'+gained+' XP</b></p><div class="btns"><button class="btn c" id="e-again">Barajar de nuevo</button><a class="btn ghost" href="#'+t.id+'">Volver</a></div></div>';
      $("#e-again").addEventListener("click",()=>cardsGame(t)); addXP(gained); return;
    }
    const i = deck[0], [f,b] = t.cards[i], r = refFor(t, {q:f, o:[b]});
    $("#stage").innerHTML = '<div class="card3d" id="cd" role="button" tabindex="0" aria-label="Voltear tarjeta"><div class="in"><div class="face front"><h3>'+esc(f)+'</h3><small>Toca o presiona espacio para voltear</small></div><div class="face back"><p>'+esc(b)+'</p><small>'+esc(f)+'</small></div></div></div>'
      + '<div class="cardbtns"><button class="btn nob" id="c-no">Otra vez</button><button class="btn okb" id="c-ok">Lo sabía</button></div>'
      + '<div class="cardrefs" id="c-refs" hidden>'+refsHTML(r)+'<div id="ref-notebox" class="notes inline" hidden></div></div>';
    bindRefs(t, r);
    const cd = $("#cd"); cd.addEventListener("click",flip);
    $("#c-ok").addEventListener("click",()=>{ deck.shift(); if(!known.has(i)){ known.add(i); gained+=3; } S.known[t.id]=[...known]; save(); draw(); });
    $("#c-no").addEventListener("click",()=>{ deck.push(deck.shift()); draw(); });
    cd.focus({preventScroll:true});
  }
  /* Las referencias aparecen recién al voltear, para no adelantar la respuesta */
  function flip(){ const cd=$("#cd"); if(!cd) return; cd.classList.toggle("flip"); $("#c-refs").hidden = false; }
  function key(e){ if(e.target.tagName==="BUTTON" || e.target.tagName==="A") return; if(e.key===" "){ e.preventDefault(); flip(); } if(e.key==="ArrowRight") $("#c-ok")?.click(); if(e.key==="ArrowLeft") $("#c-no")?.click(); }
  document.addEventListener("keydown",key); cleanup=()=>document.removeEventListener("keydown",key);
  draw();
}

/* ---------- Quiz ---------- */
function prepQ(q, tid){ const o = shuffle(q.o.map((x,i)=>({x,ok:i===0}))); return {q:q.q, o, w:q.w, tid, src:q}; }
function quizGame(t){
  view(gameShell(t,"Quiz · "+t.name), t.color); restart = ()=>quizGame(t);
  const qs = shuffle(t.quiz).slice(0,10).map(q=>prepQ(q,t.id));
  let i=0, right=0, combo=0, xp=0, locked=false;
  function draw(){
    locked=false; setProg(i/qs.length);
    $("#gstat").textContent = (i+1)+" / "+qs.length;
    const q = qs[i];
    $("#stage").innerHTML = '<div class="panel"><div class="combo">'+(combo>=2? "Combo ×"+combo : "&nbsp;")+'</div><p class="qtext">'+esc(q.q)+'</p><div class="opts">'
      + q.o.map((o,k)=>'<button class="opt" data-k="'+k+'"><kbd>'+(k+1)+'</kbd><span>'+esc(o.x)+'</span></button>').join("") + '</div><div id="after"></div></div>';
    app.querySelectorAll(".opt").forEach(b=>b.addEventListener("click",()=>pick(+b.dataset.k)));
  }
  function pick(k){
    if(locked) return; locked=true;
    const q=qs[i], btns=app.querySelectorAll(".opt");
    btns.forEach((b,j)=>{ b.disabled=true; if(q.o[j].ok) b.classList.add("ok"); });
    const ok = q.o[k].ok;
    if(ok){ right++; combo++; const g = 10 + 2*Math.min(combo-1,5); xp+=g; } else { combo=0; btns[k].classList.add("no"); shakeEl(btns[k]); }
    const r = refFor(t, q.src);
    $("#after").innerHTML = '<div class="why"><b>'+(ok?"¡Correcto! ":"No era esa. ")+'</b>'+esc(q.w)+refsHTML(r)+'</div>'
      + '<div id="ref-notebox" class="notes inline" hidden></div><div class="grow-row"><span class="combo">'+right+' aciertos</span><button class="btn c" id="q-next">'+(i+1<qs.length?"Siguiente →":"Ver resultado")+'</button></div>';
    bindRefs(t, r);
    $("#q-next").addEventListener("click",next); $("#q-next").focus({preventScroll:true});
  }
  function next(){
    i++;
    if(i<qs.length) return draw();
    const frac = right/qs.length; setBest(t.id,"quiz",frac);
    endScreen({title:praise(frac), frac, detail: right+" de "+qs.length+" correctas.", xp, again:()=>quizGame(t), back:t.id});
  }
  function key(e){ if(/^[1-4]$/.test(e.key) && !locked){ const b=app.querySelectorAll(".opt")[+e.key-1]; if(b) b.click(); } }
  document.addEventListener("keydown",key); cleanup=()=>document.removeEventListener("keydown",key);
  draw();
}

/* ---------- Parejas ---------- */
function pairsGame(t){
  view(gameShell(t,"Parejas · "+t.name), t.color); restart = ()=>pairsGame(t);
  const set = shuffle(t.pairs).slice(0,5);
  const L = shuffle(set.map((p,i)=>({x:p[0],i}))), R = shuffle(set.map((p,i)=>({x:p[1],i})));
  let sel=null, done=0, errors=0, t0=Date.now();
  $("#stage").innerHTML = '<div class="panel"><p class="qtext" style="font-size:1.1rem;margin-bottom:14px">Toca un concepto y luego su definición.</p><div class="pairs"><div class="col">'
    + L.map(o=>'<button class="pc term" data-s="L" data-i="'+o.i+'">'+esc(o.x)+'</button>').join("") + '</div><div class="col">'
    + R.map(o=>'<button class="pc" data-s="R" data-i="'+o.i+'">'+esc(o.x)+'</button>').join("") + '</div></div></div>';
  const tick = setInterval(()=>{ const s=Math.floor((Date.now()-t0)/1000); $("#gstat").textContent = s+" s · "+errors+" errores"; },500);
  cleanup = ()=>clearInterval(tick);
  app.querySelectorAll(".pc").forEach(b=>b.addEventListener("click",()=>{
    if(b.classList.contains("done")) return;
    if(!sel || sel.dataset.s===b.dataset.s){ if(sel) sel.classList.remove("sel"); sel=b; b.classList.add("sel"); return; }
    if(sel.dataset.i===b.dataset.i){
      [sel,b].forEach(x=>{ x.classList.remove("sel"); x.classList.add("done"); x.disabled=true; });
      done++; setProg(done/set.length);
      if(done===set.length){
        clearInterval(tick);
        const secs = Math.floor((Date.now()-t0)/1000), frac = Math.max(0, 1-errors*.12);
        setBest(t.id,"pairs",frac);
        endScreen({title:praise(frac), frac, detail:"Uniste las 5 parejas en "+secs+" s con "+errors+(errors===1?" error.":" errores."), xp: Math.round(15+25*frac), again:()=>pairsGame(t), back:t.id});
      }
    } else { errors++; shakeEl(sel); shakeEl(b); sel.classList.remove("sel"); sel=null; }
    sel = (sel && !sel.classList.contains("done") && sel!==b) ? sel : null;
  }));
  $("#gstat").textContent = "0 s · 0 errores";
}

/* ---------- Ordena ---------- */
function orderGame(t, si=0){
  const set = t.order[si];
  view(gameShell(t,"Ordena · "+t.name), t.color); restart = ()=>orderGame(t,si);
  let pos=0, errors=0;
  const picker = t.order.length>1 ? '<div class="setpick" role="group" aria-label="Elegir secuencia">'+t.order.map((s,k)=>'<button aria-pressed="'+(k===si)+'" data-k="'+k+'">'+esc(s.t)+'</button>').join("")+'</div>' : "";
  $("#stage").innerHTML = picker + '<div class="panel"><p class="qtext" style="font-size:1.2rem">'+esc(set.t)+'</p><p class="eyebrow" style="margin-bottom:12px">Toca los elementos en el orden correcto</p><div class="slots">'
    + set.i.map(()=>'<div class="slot"></div>').join("") + '</div><div class="chipbank">'
    + shuffle(set.i.map((x,k)=>({x,k}))).map(o=>'<button class="chip" data-k="'+o.k+'">'+esc(o.x)+'</button>').join("") + '</div></div>';
  app.querySelectorAll(".setpick button").forEach(b=>b.addEventListener("click",()=>orderGame(t,+b.dataset.k)));
  const slots = app.querySelectorAll(".slot");
  $("#gstat").textContent = "0 errores";
  app.querySelectorAll(".chip").forEach(c=>c.addEventListener("click",()=>{
    if(+c.dataset.k===pos){
      slots[pos].textContent = set.i[pos]; slots[pos].classList.add("f"); c.remove(); pos++; setProg(pos/set.i.length);
      if(pos===set.i.length){
        const frac = Math.max(0, 1-errors/set.i.length); setBest(t.id,"order",frac);
        const nx = si+1<t.order.length;
        setTimeout(()=>endScreen({title:praise(frac), frac, detail:"Secuencia completa con "+errors+(errors===1?" error.":" errores."), xp:Math.round(10+20*frac),
          again:()=>orderGame(t,si), back:t.id, next: nx? "Siguiente secuencia" : null, onNext:()=>orderGame(t,si+1)}), 500);
      }
    } else { errors++; shakeEl(c); $("#gstat").textContent = errors+(errors===1?" error":" errores"); }
  }));
}

/* ---------- Clasifica ---------- */
function sortGame(t, si=0){
  const set = t.sort[si];
  view(gameShell(t,"Clasifica · "+t.name), t.color); restart = ()=>sortGame(t,si);
  const items = shuffle(set.i);
  let i=0, right=0, busy=false;
  const picker = t.sort.length>1 ? '<div class="setpick" role="group" aria-label="Elegir juego">'+t.sort.map((s,k)=>'<button aria-pressed="'+(k===si)+'" data-k="'+k+'">'+esc(s.t)+'</button>').join("")+'</div>' : "";
  $("#stage").innerHTML = picker + '<p class="eyebrow" style="margin-bottom:10px">'+esc(set.t)+' · ¿a qué caja va?</p><div class="sortcard" id="sc"></div><div class="fb" id="fb" aria-live="polite"></div><div class="buckets">'
    + set.b.map((b,k)=>'<button class="bucket" data-k="'+k+'">'+esc(b)+'</button>').join("") + '</div>';
  app.querySelectorAll(".setpick button").forEach(b=>b.addEventListener("click",()=>sortGame(t,+b.dataset.k)));
  const bks = app.querySelectorAll(".bucket");
  function draw(){ busy=false; $("#sc").className="sortcard"; $("#sc").textContent = items[i][0]; $("#fb").textContent=""; $("#fb").className="fb"; bks.forEach(b=>b.classList.remove("hint")); $("#gstat").textContent=(i+1)+" / "+items.length; setProg(i/items.length); }
  bks.forEach(b=>b.addEventListener("click",()=>{
    if(busy) return; busy=true;
    const ok = +b.dataset.k === items[i][1];
    if(ok){ right++; $("#sc").classList.add("ok"); $("#fb").textContent="¡Bien!"; $("#fb").className="fb ok"; }
    else { $("#sc").classList.add("no"); shakeEl($("#sc")); bks[items[i][1]].classList.add("hint"); $("#fb").textContent="Va en: "+set.b[items[i][1]]; $("#fb").className="fb no"; }
    setTimeout(()=>{ i++; if(i<items.length) draw(); else {
      const frac = right/items.length; setBest(t.id,"sort",frac);
      const nx = si+1<t.sort.length;
      endScreen({title:praise(frac), frac, detail:right+" de "+items.length+" bien clasificadas.", xp:right*4, again:()=>sortGame(t,si), back:t.id,
        next: nx? "Siguiente juego" : null, onNext:()=>sortGame(t,si+1)});
    }}, ok?650:1500);
  }));
  draw();
}

/* ---------- Relámpago ---------- */
function flashGame(){
  view(gameShell(null,"Desafío relámpago"), "var(--accent)"); restart = flashGame;
  let pool = shuffle(T.flatMap(t=>t.quiz.map(q=>prepQ(q,t.id)))), i=0, score=0, end=Date.now()+60000, locked=false, over=false;
  const tick = setInterval(()=>{
    const left = Math.max(0, end-Date.now()); $("#gstat").innerHTML = '<span class="timer">'+Math.ceil(left/1000)+'</span>'; setProg(1-left/60000);
    if(!left) finish();
  },200);
  cleanup = ()=>clearInterval(tick);
  function draw(){
    locked=false; if(i>=pool.length){ pool=shuffle(pool); i=0; }
    const q=pool[i], t=topic(q.tid);
    $("#stage").innerHTML = '<div class="panel" style="--c:'+t.color+'"><div class="grow-row" style="margin:0 0 6px"><span class="topicchip">'+esc(t.name)+'</span><span class="combo">'+score+' pts</span></div><p class="qtext">'+esc(q.q)+'</p><div class="opts">'
      + q.o.map((o,k)=>'<button class="opt" data-k="'+k+'"><kbd>'+(k+1)+'</kbd><span>'+esc(o.x)+'</span></button>').join("") + '</div></div>';
    app.querySelectorAll(".opt").forEach(b=>b.addEventListener("click",()=>pick(+b.dataset.k)));
  }
  function pick(k){
    if(locked||over) return; locked=true;
    const q=pool[i], btns=app.querySelectorAll(".opt");
    btns.forEach((b,j)=>{ b.disabled=true; if(q.o[j].ok) b.classList.add("ok"); });
    if(q.o[k].ok) score++; else btns[k].classList.add("no");
    setTimeout(()=>{ if(over) return; i++; draw(); }, q.o[k].ok?450:1100);
  }
  function finish(){
    if(over) return; over=true; clearInterval(tick);
    const rec = score > (S.flash||0); if(rec){ S.flash = score; save(); }
    const frac = Math.min(1, score/15);
    endScreen({title: rec? "¡Nuevo récord!" : "Se acabó el tiempo", frac, detail: score+" respuestas correctas en 60 segundos. Récord: "+S.flash+".", xp: score*5, again: flashGame, back:""});
    if(rec && starsOf(frac)<3) confetti();
  }
  function key(e){ if(/^[1-4]$/.test(e.key)){ const b=app.querySelectorAll(".opt")[+e.key-1]; if(b) b.click(); } }
  document.addEventListener("keydown",key);
  const c0 = cleanup; cleanup=()=>{ c0(); document.removeEventListener("keydown",key); };
  draw();
}

/* ===================== RUTAS ===================== */
function route(){
  const h = location.hash.slice(1);
  if(h==="relampago") return flashGame();
  const [id, mode] = h.split("-"), t = topic(id);
  if(!t) return home();
  if(mode==="tarjetas") return cardsGame(t);
  if(mode==="quiz") return quizGame(t);
  if(mode==="parejas") return pairsGame(t);
  if(mode==="ordena" && t.order.length) return orderGame(t);
  if(mode==="clasifica" && t.sort.length) return sortGame(t);
  topicView(t);
}
addEventListener("hashchange", route);
app.addEventListener("click", e=>{ if(e.target.closest("#g-restart") && restart) restart(); });

/* ===================== REINICIO DEL PROGRESO ===================== */
const modal = $("#modal");
function askReset(){ modal.hidden = false; $("#modal-no").focus(); }
function closeReset(){ modal.hidden = true; }
$("#reset-all").addEventListener("click", askReset);
$("#modal-no").addEventListener("click", closeReset);
modal.addEventListener("click", e=>{ if(e.target === modal) closeReset(); });
document.addEventListener("keydown", e=>{ if(e.key === "Escape" && !modal.hidden) closeReset(); });
$("#modal-yes").addEventListener("click", ()=>{
  S = fresh(); save(); closeReset(); renderBar(); toast("Progreso reiniciado");
  if(location.hash) location.hash = ""; else route();
});

/* ===================== AVISO SOBRE COOKIES =====================
   La web no usa cookies; el aviso lo explica y se cierra para siempre con "Entendido".
   Se recuerda en su propia clave, así que "Reiniciar progreso" no lo vuelve a mostrar. */
const COOKIES_KEY = "gondola-aviso-cookies-v1";
const cookiesBox = $("#cookies");
function showCookies(){ cookiesBox.hidden = false; $("#cookies-ok").focus(); }
$("#cookies-ok").addEventListener("click", ()=>{ cookiesBox.hidden = true; try{ localStorage.setItem(COOKIES_KEY, "1"); }catch(e){} });
try{ if(!localStorage.getItem(COOKIES_KEY)) cookiesBox.hidden = false; }catch(e){ cookiesBox.hidden = false; }

renderBar(); route();
