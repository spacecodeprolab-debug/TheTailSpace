(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const P=$$('.pg'),multi=P.length>1,pages=[['home','index.html','Home'],['menu','menu.html','Menu'],['about','about.html','Our Story'],['contact','contact.html','Visit']];
const cur=()=>multi?(location.hash.slice(1)||'home'):P[0].dataset.k,href=(k,f)=>multi?'#'+k:f;
$('#hd').innerHTML=`<a class="logo" href="${href('home','index.html')}" aria-label="The Tail Space, home"><svg viewBox="0 0 206 50" role="img" aria-hidden="true"><path d="M4 46V10l12 10q8-3 16 0l12-10v36z" fill="currentColor"/><circle cx="17" cy="33" r="3.2" fill="#f3f2dc"/><circle cx="31" cy="33" r="3.2" fill="#f3f2dc"/><path d="M20.5 39h7l-3.5 4z" fill="#f3f2dc"/><text x="56" y="18" font-family="Kanit,sans-serif" font-weight="800" font-size="14" fill="currentColor">The</text><text x="56" y="44" font-family="Kanit,sans-serif" font-weight="800" font-size="29" fill="currentColor" textLength="126" lengthAdjust="spacingAndGlyphs">Tail Space</text><path d="M187 30q10-9 1-17-7-4-11 3" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/></svg></a><button id="bg" aria-label="Menu" aria-expanded="false"><i></i><i></i></button><nav>${pages.map(([k,f,n])=>`<a href="${href(k,f)}" data-k="${k}">${n}</a>`).join('')}</nav>`;
$('#ft').innerHTML=`<div class="fg"><div><h2>The Tail Space</h2><p class="hw">for good humans &amp; happy tails</p></div><div><p>32, Umashankar Joshi Marg, Vasant Vihar,<br>Navrangpura, Ahmedabad, Gujarat 380006</p><p style="margin-top:.8rem">Open daily, 9:00 am to 11:00 pm</p></div><div class="fn">${pages.map(([k,f,n])=>`<a href="${href(k,f)}">${n}</a>`).join('')}</div></div><p class="s">Made with love, claws and caffeine.</p>`;
let seen=0;try{seen=sessionStorage.getItem('ts')}catch(e){}
document.documentElement.style.setProperty('--ld',seen?'0s':'2.8s');
if(!seen){document.body.insertAdjacentHTML('afterbegin',`<div id="pre"><svg viewBox="0 0 220 150" fill="none"><path class="sk" d="M14 130V76Q14 60 30 60H100Q116 60 116 76V130M14 130H116M26 104H104M26 130v8M104 130v8"/><path class="sk" d="M150 132Q134 96 160 84Q186 78 190 110L198 132M4 134H216"/><circle class="sk" cx="166" cy="64" r="18"/><path class="sk" d="M152 52 148 34 162 46M180 50 186 34 172 44"/><circle class="sk" cx="160" cy="62" r="1.5"/><circle class="sk" cx="172" cy="62" r="1.5"/><g class="tw"><path class="sk" d="M198 130Q218 124 212 98"/></g></svg><b>The Tail Space</b><small>for good humans &amp; happy tails</small></div>`);
setTimeout(()=>$('#pre').classList.add('x'),2700);setTimeout(()=>$('#pre')&&$('#pre').remove(),3800);try{sessionStorage.setItem('ts',1)}catch(e){}}
$$('svg').forEach(s=>$$('.sk',s).forEach((p,i)=>{p.setAttribute('pathLength',1);p.style.setProperty('--d',i*.12+'s')}));
const count=e=>{const n=+e.dataset.n;if(!n)return;let t0;const s=t=>{t0=t0||t;const r=Math.min((t-t0)/1600,1);e.textContent=Math.round(n*(1-Math.pow(1-r,3)))+(e.dataset.s||'');if(r<1)requestAnimationFrame(s)};requestAnimationFrame(s)};
const ob=new IntersectionObserver(l=>l.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');ob.unobserve(x.target);count(x.target)}}),{threshold:.15});
const io=()=>$$('.pg.on .rv').forEach(e=>{e.classList.remove('in');ob.observe(e)});
const show=()=>{const k=cur();let f=0;P.forEach(p=>{const o=p.dataset.k===k;p.classList.toggle('on',o);f|=o});if(!f)P[0].classList.add('on');$$('nav a').forEach(a=>a.classList.toggle('on',a.dataset.k===k));$('nav').classList.remove('o');document.body.classList.remove('mo');scrollTo(0,0);io()};
addEventListener('hashchange',()=>{const c=$('#cur');if(c&&multi){c.classList.remove('go');c.offsetWidth;c.classList.add('go');setTimeout(show,520);setTimeout(()=>c.classList.remove('go'),1150)}else show()});show();
$('#bg').onclick=()=>{const o=$('nav').classList.toggle('o');document.body.classList.toggle('mo',o);$('#bg').setAttribute('aria-expanded',o)};
addEventListener('scroll',()=>$('#hd').classList.toggle('sm',scrollY>40),{passive:true});
const tb=$('#tb');if(tb)tb.onclick=e=>{const c=e.target.dataset.c;if(!c)return;$$('#tb button').forEach(x=>x.classList.toggle('on',x===e.target));const pet=c==='cat'||c==='pup';$$('.ms').forEach(m=>{m.classList.toggle('x',pet?m.dataset.c==='cover':(c!=='all'&&m.dataset.c!==c));let hd=null,n=0;const fin=()=>{if(hd)hd.classList.toggle('x',pet&&!n)};[...m.children].forEach(k=>{if(k.tagName==='H2'){fin();hd=k;n=0}else if(k.classList.contains('mi')){const v=!pet||k.dataset.k===c;k.classList.toggle('x',!v);n+=v}});fin();if(pet&&!m.querySelector('.mi:not(.x)'))m.classList.add('x');if(!m.classList.contains('x'))m.classList.add('in')})};
const q=$$('.q');if(q.length){let i=0;setInterval(()=>{q[i].classList.remove('on');i=(i+1)%q.length;q[i].classList.add('on')},3800)}
const f=$('#rf');if(f)f.onsubmit=e=>{e.preventDefault();$('#fm').textContent=f.checkValidity()?'Table noted! We will confirm shortly.':'Please fill in every field correctly.';if(f.checkValidity())f.reset()};

})();

(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const PAW='<svg viewBox="0 0 64 64" fill="currentColor"><ellipse cx="32" cy="43" rx="15" ry="12"/><ellipse cx="11" cy="28" rx="6" ry="8" transform="rotate(-20 11 28)"/><ellipse cx="24" cy="15" rx="6" ry="9"/><ellipse cx="40" cy="15" rx="6" ry="9"/><ellipse cx="53" cy="28" rx="6" ry="8" transform="rotate(20 53 28)"/></svg>';
const B=document.body,fine=matchMedia('(pointer:fine)').matches;
B.insertAdjacentHTML('beforeend',`<div id="cur" aria-hidden="true">${PAW}</div><button id="cup" aria-label="Back to top"><svg viewBox="0 0 48 48"><defs><clipPath id="cc"><rect id="cf" x="0" y="38" width="48" height="48"/></clipPath></defs><path d="M10 14h24v14q0 10-12 10t-12-10zM34 18h3q5 0 5 4.5T37 27h-3" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M10 14h24v14q0 10-12 10t-12-10z" fill="currentColor" clip-path="url(#cc)"/></svg></button><div id="tr"><span><b id="tn">0</b> picks · from Rs. <b id="tt">0</b><small>Show this list at the counter</small></span><button class="bt" id="tx">Clear</button></div>`);
const cf=$('#cf'),sc=()=>{const m=document.documentElement.scrollHeight-innerHeight,p=m>0?Math.min(scrollY/m,1):0;cf.setAttribute('y',38-p*24);$('#cup').classList.toggle('v',scrollY>300)};addEventListener('scroll',sc,{passive:true});sc();$('#cup').onclick=()=>scrollTo({top:0,behavior:'smooth'});




$$('.ttl h1,.ph h1').forEach(h=>{let n=0;h.setAttribute('aria-label',h.textContent);h.innerHTML=h.textContent.split(' ').map(w=>`<span class="wd" aria-hidden="true">${[...w].map(c=>`<span class="lt" style="--i:${n++}">${c}</span>`).join('')}</span>`).join(' ')});
const mm=$$('.pg').length>1?'#menu':'menu.html';
const MD=[['Tail Space Sandwich','340','A hearty, flavour-packed sandwich for the pup who believes good things should come in big bites.','Big bites only.'],['P&amp;C Cheese Melt Pizza','430','A gooey, cheesy melt for the pup who hears the word cheese and forgets every command.','Cheese. Nothing else matters.'],['Veg Grilled Sandwich','230','Toasty bread packed with veggie goodness for the good pup who actually eats their greens.','Greens, but make it toasty.'],['Avocado &amp; Orange Cucumber Sushi','245 / 480','Creamy avocado, refreshing cucumber and bright orange notes for the fancy feline with a colourful palate.','Zoomies approved.']];
const mc=$('#mc');if(mc)mc.onclick=e=>{const i=e.target.dataset.m;if(i==null)return;$$('#mc button').forEach(b=>b.classList.toggle('on',b===e.target));const[n,p,d,q]=MD[i],o=$('#mp');o.innerHTML=`<em>“${q}”</em><h3>${n}</h3><p>${d}</p><b>Rs. ${p}</b><a class="bt" href="${mm}">See the full menu</a>`;o.classList.remove('pop');o.offsetWidth;o.classList.add('pop')};

const pk=new Map(),H='<svg viewBox="0 0 24 24"><path d="M12 21s-8-5.2-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 5.8-8 11-8 11z"/></svg>',up=()=>{$('#tn').textContent=pk.size;$('#tt').textContent=[...pk.values()].reduce((a,c)=>a+c,0);$('#tr').classList.toggle('v',pk.size>0)};
$$('.mi').forEach(m=>{const b=document.createElement('button');b.className='hr';b.setAttribute('aria-label','Add to my table');b.setAttribute('aria-pressed','false');b.innerHTML=H;m.append(b);b.onclick=()=>{const on=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',on);on?pk.set(m,parseInt($('b',m).textContent)):pk.delete(m);up()}});
$('#tx').onclick=()=>{pk.clear();$$('.hr').forEach(b=>b.setAttribute('aria-pressed','false'));up()};
setInterval(()=>B.classList.toggle('mnu',!!$('.pg.on[data-k="menu"]')),300);
})();

(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
$$('.mi').forEach(i=>{const k=/\b(cat|feline)\b/i.test($('p',i).textContent)?'cat':'pup';i.dataset.k=k;$('h3',i).dataset.k=k});
const nw=new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'})),mn=nw.getHours()*60+nw.getMinutes(),op=mn>=540&&mn<1380;
$$('.ttl p,.hrs').forEach(p=>{const s=document.createElement('span');s.className='live'+(op?' on':'');s.textContent=op?'Open now · until 11 pm':'Closed · opens 9 am';p.append(s)});
const GR=104,CX=68,cl=(v,a,b)=>Math.max(a,Math.min(b,v));
const fmt=p=>p.map(q=>q[0].toFixed(1)+' '+q[1].toFixed(1)).join('L');
const rib=(p,w)=>{const L=[],R=[];p.forEach((q,i)=>{const a=p[Math.max(0,i-1)],b=p[Math.min(p.length-1,i+1)],dx=b[0]-a[0],dy=b[1]-a[1],l=Math.hypot(dx,dy)||1,nx=-dy/l*w[i]/2,ny=dx/l*w[i]/2;L.push([q[0]+nx,q[1]+ny]);R.push([q[0]-nx,q[1]-ny])});return'M'+fmt(L)+'L'+fmt(R.reverse())+'Z'};
const ik=(hx,hy,tx,ty,a,b,s)=>{const dx=tx-hx,dy=ty-hy,m=Math.min(Math.hypot(dx,dy),a+b-.05),an=Math.atan2(dy,dx),q=Math.acos(cl((a*a+m*m-b*b)/(2*a*m),-1,1)),k=an+s*q;return[[hx+Math.cos(k)*a,hy+Math.sin(k)*a],[hx+Math.cos(an)*m,hy+Math.sin(an)*m]]};
const rot=(x,y,a,cx,cy)=>{const r=a*Math.PI/180,c=Math.cos(r),s=Math.sin(r),dx=x-cx,dy=y-cy;return[cx+dx*c-dy*s,cy+dx*s+dy*c]};
const HEAD=p=>`<g data-r="${p}hd"><path data-r="${p}e1" d="M112 33L108 12L124 25Z" fill="url(#kg1)"/><path d="M113 29L111 19L119 25Z" fill="#c88a92"/><path data-r="${p}e2" d="M130 25L140 11L143 34Z" fill="url(#kg1)"/><path d="M132 27L139 17L141 31Z" fill="#c88a92"/><path d="M107 51C105 36 112 26 126 26C139 26 145 36 143 47C141 57 128 62 116 59Z" fill="url(#kg1)"/><path d="M127 50C131 45 142 45 144 52C142 59 133 61 126 58Z" fill="url(#kg2)"/><path d="M141.5 47.5l4 1-2.6 3.4z" fill="#d98a96"/><path d="M143 53q-3 2-6 1" stroke="#6b4a4f" stroke-width=".8" fill="none"/><ellipse data-r="${p}mo" cx="137" cy="55.5" rx="5" ry="0" fill="#7a2f3a"/><g data-r="${p}ey"><ellipse cx="133.5" cy="39" rx="4.6" ry="3.6" fill="url(#kg3)"/><ellipse cx="134" cy="39" rx="1.3" ry="3.3" fill="#0b0b0b"/><circle cx="135.2" cy="37.6" r="1" fill="#fff"/></g><path data-r="${p}ld" d="M129 40q4.5 3.6 9 0" stroke="#eee8dc" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0"/><path d="M140 52L158 49M140 54L158 58M139 50L156 43" stroke="#cfc9bf" stroke-width=".7" fill="none"/><g data-r="${p}gl" display="none"><path d="M127 34h13q4 0 4 4v2q-9 6-17 1z" fill="#0b0b0b"/><path d="M127 36L109 32" stroke="#0b0b0b" stroke-width="1.7"/></g></g>`;
const legM=(id,dk)=>`<path data-r="${id}u" fill="${dk?'#2e2c33':'url(#kg1)'}" stroke="${dk?'#2e2c33':'#141216'}" stroke-width="1.1" stroke-linejoin="round"/><path data-r="${id}s" fill="${dk?'#bdb7ab':'url(#kg2)'}" stroke="${dk?'#bdb7ab':'#efe9dd'}" stroke-width=".6" stroke-linejoin="round"/><ellipse data-r="${id}p" rx="5.8" ry="3.2" fill="${dk?'#c9c3b7':'url(#kg2)'}"/>`;
const TW=[7.5,7.4,7,6.4,5.8,5,3.6];
const MARK=`<defs><linearGradient id="kg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3740"/><stop offset=".5" stop-color="#19171c"/><stop offset="1" stop-color="#0c0b0e"/></linearGradient><linearGradient id="kg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fffdf8"/><stop offset="1" stop-color="#d4cec2"/></linearGradient><radialGradient id="kg3"><stop offset="0" stop-color="#d4ee7a"/><stop offset="1" stop-color="#5d9b2a"/></radialGradient></defs><ellipse data-r="sh" cx="80" cy="104" rx="50" ry="4" fill="#000" opacity=".2"/><g data-r="fl"><g data-r="pw">${legM('bf',1)}${legM('ff',1)}<path data-r="tl" fill="url(#kg1)" stroke="#17151a" stroke-width="1" stroke-linejoin="round"/><g data-r="bd"><path d="M24 56C24 46 36 40 52 40C68 38 84 38 98 40C110 42 116 52 112 64C108 76 94 80 80 80C64 82 48 82 38 78C28 74 24 66 24 56Z" fill="url(#kg1)"/><path d="M26 50C32 42 42 40 52 40C68 38 84 38 98 40" fill="none" stroke="#5a5762" stroke-width=".9" opacity=".55"/><ellipse cx="43" cy="66" rx="13" ry="15" fill="#26232b" opacity=".55"/><ellipse cx="97" cy="64" rx="9" ry="13" fill="#26232b" opacity=".55"/><path d="M104 50C114 54 116 68 108 76C102 80 94 78 90 74C98 70 102 62 104 50Z" fill="url(#kg2)"/><path d="M92 42C100 36 112 38 118 46L114 64L92 62Z" fill="url(#kg1)"/>${HEAD('w')}</g>${legM('bn',0)}${legM('fn',0)}</g><g data-r="ps"><path d="M88 76L88 101" stroke="#2e2c33" stroke-width="8" stroke-linecap="round"/><ellipse cx="90" cy="102" rx="6" ry="3.2" fill="#c9c3b7"/><g data-r="sbd"><path d="M92 40C80 40 64 46 54 60C42 74 32 90 30 102L104 102C104 90 106 76 102 64C100 54 98 46 92 40Z" fill="url(#kg1)"/><path d="M93 46C103 54 105 76 101 100L89 100C93 82 93 62 93 46Z" fill="url(#kg2)"/><ellipse cx="58" cy="82" rx="14" ry="17" fill="#26232b" opacity=".5"/></g><ellipse cx="74" cy="102" rx="11" ry="3.4" fill="url(#kg2)"/><g data-r="sgp"><path d="M94 70L96 98" stroke="#141216" stroke-width="9" stroke-linecap="round"/><path d="M96 92L97 100" stroke="#efe9dd" stroke-width="8" stroke-linecap="round"/><ellipse cx="98" cy="102" rx="7" ry="3.4" fill="url(#kg2)"/></g><path data-r="stl" fill="url(#kg1)" stroke="#17151a" stroke-width="1" stroke-linejoin="round"/><g transform="translate(-20 -12)">${HEAD('s')}</g></g><g data-r="pz"><g data-r="zbd"><path d="M22 104C18 82 40 66 72 66C104 66 128 80 126 104Z" fill="url(#kg1)"/><path d="M30 84C44 72 70 68 96 72" fill="none" stroke="#5a5762" stroke-width=".9" opacity=".5"/></g><ellipse cx="110" cy="102" rx="10" ry="3.8" fill="url(#kg2)"/><ellipse cx="124" cy="102" rx="8" ry="3.6" fill="url(#kg2)"/><path data-r="ztl" fill="url(#kg1)" stroke="#17151a" stroke-width="1" stroke-linejoin="round"/><g transform="translate(-6 38) rotate(14 120 40)">${HEAD('z')}</g></g></g>`;
const GAITS={walk:{st:70,du:.65,li:8,off:[0,.25,.5,.75]},trot:{st:105,du:.5,li:12,off:[0,.5,.5,0]}};
const LEGS=[{id:'bn',f:0,hx:42,hy:62,nx:-4},{id:'fn',f:1,hx:98,hy:62,nx:3},{id:'bf',f:0,hx:50,hy:62,nx:8},{id:'ff',f:1,hx:92,hy:62,nx:-6}];
const foot=(p,g,bl,nx)=>{p=((p%1)+1)%1;let gx,l=0;const T=g.st*g.du;if(p<g.du){gx=T/2-T*p/g.du}else{const s=(p-g.du)/(1-g.du),e=s*s*(3-2*s);gx=-T/2+T*e;l=Math.sin(Math.PI*s)*g.li}return[nx+(gx-nx)*bl,l*bl]};
const tailPts=(rx,ry,tb,tc,ta,tf,t)=>{const p=[[rx,ry]];for(let i=0;i<6;i++){const a=(tb+tc*(i+1)+ta*Math.sin(t*tf-i*.7)*(1+i*.2))*Math.PI/180,q=p[p.length-1];p.push([q[0]+Math.cos(a)*8,q[1]+Math.sin(a)*8])}return p};
const headApply=(ap,p,P,eye,S)=>{ap.tf(p+'e1',`rotate(${P.earA.toFixed(1)} 118 30)`);ap.tf(p+'e2',`rotate(${(-P.earA*.6).toFixed(1)} 136 28)`);ap.tf(p+'ey',`translate(133.5 39) scale(1 ${Math.max(.04,eye).toFixed(2)}) translate(-133.5 -39)`);ap.at(p+'ld',{opacity:eye<.25?1:0});ap.at(p+'mo',{ry:(P.jaw*4.5).toFixed(2)});ap.at(p+'gl',{display:S.cool?'inline':'none'})};
const rigWalk=(ap,S,P,t,eye)=>{const bl=S.bl,g=GAITS[S.gait],air=S.air,ph=S.ph,dy=P.crouch*7-(air>.3?0:Math.abs(Math.sin(Math.PI*ph))*1.4*bl)+S.br*20,pit=P.pitch+Math.sin(4*Math.PI*ph)*1.1*bl;
const Wp=(x,y)=>{const q=rot(x,y,pit,CX,60);return[q[0],q[1]+dy]};
LEGS.forEach((L,i)=>{const[hx,hy]=Wp(L.hx,L.hy+(L.f?P.shy:-P.shy*.3)),[ox,lift]=foot(ph+g.off[i],g,bl,L.nx);
const fx=L.hx+ox+(L.f?P.fnx:0)+air*(L.f?16:-14),fy=GR-3.2-lift-air*(L.f?(S.u<.5?14:4):(S.u<.5?8:3));
let tx,ty,a,b,s;if(L.f){tx=fx-1;ty=fy-9;a=b=21;s=1}else{tx=fx-3;ty=fy-13;a=b=22;s=-1}
const[kn,an]=ik(hx,hy,tx,ty,a,b,s);ap.d(L.id+'u',rib([[hx,hy],kn,an],L.f?[9.5,6.5,4.8]:[13,7.5,4.8]));ap.d(L.id+'s',rib([an,[fx,fy-1]],[4.8,4.6]));ap.at(L.id+'p',{cx:(fx+2).toFixed(1),cy:(fy+.3).toFixed(1)})});
const r=Wp(26,52);ap.d('tl',rib(tailPts(r[0],r[1],P.tb,P.tc,P.ta,P.tf,t),TW));
ap.tf('bd',`translate(0 ${dy.toFixed(2)}) rotate(${pit.toFixed(2)} 68 60) translate(68 80) scale(1 ${(1+S.br).toFixed(4)}) translate(-68 -80)`);
ap.tf('whd',`rotate(${(P.headA+Math.sin(4*Math.PI*ph)*1.8*bl).toFixed(2)} 110 54)`);headApply(ap,'w',P,eye,S)};
const rigSit=(ap,S,P,t,eye)=>{ap.tf('sbd',`translate(70 102) scale(1 ${(1+S.br).toFixed(4)}) translate(-70 -102)`);ap.d('stl',rib(tailPts(33,100,-4+Math.sin(t*.7)*3,-3,P.ta*.6,P.tf*.8,t),TW));ap.tf('sgp',`rotate(${(-P.groom*118+Math.sin(t*9)*5*P.groom).toFixed(1)} 95 68)`);ap.tf('shd',`rotate(${(P.headA+P.groom*10).toFixed(2)} 110 54)`);headApply(ap,'s',P,eye,S)};
const rigLoaf=(ap,S,P,t,eye)=>{ap.tf('zbd',`translate(74 104) scale(1 ${(1+S.br).toFixed(4)}) translate(-74 -104)`);ap.d('ztl',rib(tailPts(26,100,-2,-4,P.ta*.4,P.tf*.6,t),TW));ap.tf('zhd',`rotate(${P.headA.toFixed(2)} 110 54)`);headApply(ap,'z',P,eye,S)};

const B=document.body,rm=matchMedia('(prefers-reduced-motion:reduce)').matches,W=104,PX=W/160,FT=112*PX;
const rnd=(a,b)=>a+Math.random()*(b-a),pick=a=>a[Math.random()*a.length|0],wait=ms=>new Promise(r=>setTimeout(r,ms));
B.insertAdjacentHTML('beforeend',`<div id="cat" aria-hidden="true"><svg viewBox="0 -8 160 118" overflow="visible">${MARK}</svg><i class="zz">z</i><i class="zz z2">z</i></div>`);
const cat=$('#cat'),R={};$$('[data-r]',cat).forEach(e=>R[e.dataset.r]=e);
const ap={d:(i,v)=>R[i].setAttribute('d',v),tf:(i,v)=>R[i].setAttribute('transform',v),at:(i,o)=>{for(const k in o)R[i].setAttribute(k,o[k])}};
const S={x:120,y:0,f:1,tf:1,v:0,ph:0,bl:0,pose:'stand',gait:'walk',air:0,u:0,br:0,rise:0,task:null,busy:0,int:0,cool:0,sleep:0,inair:0,nb:2,b0:-9,ne:4};
const D0={pitch:0,headA:0,earA:0,tb:190,tc:10,ta:11,tf:1.5,shy:0,fnx:0,crouch:0,groom:0,jaw:0,eye:1},P=Object.assign({},D0),T=Object.assign({},D0),RATE={crouch:14,pitch:7,earA:18,eye:12,jaw:10,groom:5};
const standUp=()=>{S.pose='stand';S.sleep=0;Object.assign(T,D0)};
const jumpStep=(tk,dt)=>{tk.t+=dt;S.tf=tk.x1<tk.x0?-1:1;S.v=0;
if(tk.ph==='crouch'){T.crouch=1;T.pitch=-4;if(tk.t>.3){tk.ph='air';tk.t=0;S.inair=1;T.crouch=0}}
else if(tk.ph==='air'){const u=Math.min(1,tk.t/tk.T);S.u=u;S.x=tk.x0+(tk.x1-tk.x0)*u;S.y=tk.y0+(tk.y1-tk.y0)*u;S.rise=4*tk.hh*u*(1-u);T.pitch=u<.45?-16:u<.7?0:10;if(u>=1){S.inair=0;S.rise=0;S.x=tk.x1;S.y=tk.y1;tk.ph='land';tk.t=0;P.crouch=1;T.crouch=0;T.pitch=0}}
else if(tk.t>.22){S.task=null;tk.res(true)}};
const upd=(dt,t)=>{const k=(a,b,r)=>a+(b-a)*(1-Math.exp(-dt*r)),tk=S.task;
if(tk&&tk.type==='walk'){const dx=tk.tx-S.x,dir=dx<0?-1:1,rem=Math.abs(dx);S.tf=dir;
if(S.f*dir<.7)S.v=k(S.v,0,14);else{const vm=Math.min(tk.v,Math.sqrt(2*tk.a*Math.max(rem-.5,0)));S.v+=cl(vm-S.v,-tk.a*1.6*dt,tk.a*dt);S.x+=dir*S.v*dt}
if(rem<1.2&&S.v<14){S.x=tk.tx;S.task=null;S.v=0;tk.res(true)}}
else if(tk&&tk.type==='jump')jumpStep(tk,dt);else S.v=k(S.v,0,9);
const g=GAITS[S.gait];S.bl=k(S.bl,cl(S.v/(S.gait==='trot'?50:22),0,1),10);S.ph=(S.ph+(S.v/PX)/g.st*dt)%1000;S.f=k(S.f,S.tf,16);S.air=k(S.air,S.inair?1:0,14);
S.br=Math.sin(t*(S.pose==='loaf'?1.7:2.3))*(S.pose==='loaf'?.022:S.pose==='sit'?.012:.008);
for(const n in T)P[n]=k(P[n],T[n],RATE[n]||6);
if(t>S.ne){S.ne=t+rnd(3,9);P.earA=-rnd(10,18)}
if(t>S.nb){S.b0=t;S.nb=t+rnd(2.4,6.5)}
const bt=t-S.b0,eye=Math.max(.04,P.eye*(bt<.15?1-Math.sin(Math.PI*bt/.15)*.94:1)),E=Object.assign({},P);E.headA=P.headA+S.bl*5+(P.headA>18?Math.sin(t*14)*1.6:0);E.tb=P.tb+S.bl*6;E.ta=P.ta+S.bl*3;
cat.style.transform=`translate(${(S.x-W/2).toFixed(1)}px,${(S.y-S.rise-FT).toFixed(1)}px)`;
ap.at('sh',{cy:(104+S.rise/PX).toFixed(1),opacity:(.2*(1-Math.min(.7,S.rise/80))).toFixed(2)});ap.tf('fl',`translate(80 0) scale(${S.f.toFixed(3)} 1) translate(-80 0)`);
ap.at('pw',{display:S.pose==='stand'?'inline':'none'});ap.at('ps',{display:S.pose==='sit'?'inline':'none'});ap.at('pz',{display:S.pose==='loaf'?'inline':'none'});
cat.classList.toggle('sleep',!!S.sleep&&S.pose==='loaf');
(S.pose==='stand'?rigWalk:S.pose==='sit'?rigSit:rigLoaf)(ap,S,E,t,eye)};
const drive=t=>new Promise(r=>{if(S.task&&S.task.res)S.task.res(false);t.res=r;S.task=t;if(t.g)S.gait=t.g});
const walk=(tx,o={})=>drive({type:'walk',tx:cl(tx,W/2,innerWidth-W/2),v:o.v||rnd(64,88),a:o.a||150,g:o.g||'walk'});
const jump=(x1,y1)=>drive({type:'jump',ph:'crouch',t:0,x0:S.x,y0:S.y,x1:cl(x1,W/2,innerWidth-W/2),y1,T:.4+Math.abs(x1-S.x)/760+Math.max(0,S.y-y1)/950,hh:24+Math.max(0,S.y-y1)/2});
const rest=async ms=>{const e=Date.now()+ms;while(Date.now()<e&&!S.int)await wait(100)};
const bub=t=>{const b=document.createElement('span');b.className='cb';b.textContent=t;cat.append(b);b.onanimationend=()=>b.remove()};
const heart=()=>{const h=document.createElement('i');h.className='ht';h.style.setProperty('--hx',(Math.random()*40-20)|0);h.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-8-5.2-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 5.8-8 11-8 11z"/></svg>';cat.append(h);h.onanimationend=()=>h.remove()};
const spots=()=>$$('.pg.on .cd,.pg.on .mi,.pg.on .ms,.pg.on .pick,.pg.on .chips,.pg.on .tm,.pg.on .rl div,.pg.on .ttl,.pg.on .mq,.pg.on .cta,#ft').map(e=>e.getBoundingClientRect()).filter(r=>r.width>150&&r.top>80&&r.top<innerHeight-40);
const ledges=()=>[{l:0,r:innerWidth,y:scrollY+innerHeight-12},...spots().map(r=>({l:r.left,r:r.right,y:r.top+scrollY+4}))];
const here=L=>L.find(e=>Math.abs(e.y-S.y)<14&&S.x>=e.l-6&&S.x<=e.r+6)||{l:0,r:innerWidth,y:S.y,v:1};
const reach=(h,e)=>e!==h&&Math.abs(e.y-h.y)>=14&&Math.max(0,e.l-h.r,h.l-e.r)<200&&e.y-h.y>-170;
const sniff=async()=>{T.headA=26;T.pitch=3;await rest(rnd(1100,1900));T.headA=0;T.pitch=0};
const walkN=async tx=>{const d=Math.abs(tx-S.x);if(d>420&&Math.random()<.45){await walk(tx,{v:rnd(190,230),a:420,g:'trot'});return}
if(d>220&&Math.random()<.4){await walk(S.x+(tx-S.x)*rnd(.35,.6));if(S.int)return;await sniff();if(S.int)return}await walk(tx)};
const hop=async(h,e)=>{let lx,ax;if(e.r<h.l){lx=h.l+24;ax=e.r-24}else if(e.l>h.r){lx=h.r-24;ax=e.l+24}else{const a=Math.max(e.l,h.l)+24,b=Math.min(e.r,h.r)-24;lx=ax=rnd(a,Math.max(a,b))}
await walkN(lx);if(S.int)return false;await jump(ax,e.y);if(S.int)return false;await walk(cl(ax+rnd(-70,70),e.l+W/2,Math.max(e.l+W/2,e.r-W/2)));return true};
const relocate=async(x,y)=>{if(S.task){S.task.res(false);S.task=null}S.v=0;cat.style.opacity=0;await wait(650);standUp();S.x=cl(x==null?rnd(W,innerWidth-W):x,W/2,innerWidth-W/2);S.y=y==null?scrollY+innerHeight-12:y;S.f=S.tf=Math.random()<.5?1:-1;cat.style.opacity=1};
const wander=async()=>{standUp();await rest(150);const L=ledges(),h=here(L),ok=L.filter(e=>reach(h,e));if(ok.length&&Math.random()<.65){await hop(h,pick(ok))}else await walkN(rnd(h.l+W/2,Math.max(h.l+W/2,h.r-W/2)))};
const sitDown=async()=>{if(S.task){S.task.res(false);S.task=null}S.pose='sit';P.crouch=.6;await rest(900);for(let i=0,n=2+(Math.random()*2|0);i<n&&!S.int;i++){const r=Math.random();
if(r<.5){T.groom=1;await rest(rnd(2600,4200));T.groom=0;await rest(700)}else if(r<.8){T.headA=rnd(-14,6);await rest(rnd(1200,2400));T.headA=0}else{T.eye=.3;await rest(1300);T.eye=1;await rest(500)}}standUp()};
const stretchIt=async()=>{standUp();await rest(250);T.shy=14;T.fnx=26;T.headA=20;T.tb=232;T.tc=5;await rest(rnd(2000,2600));T.shy=0;T.fnx=0;T.headA=0;T.pitch=-5;await rest(700);standUp()};
const nap=async()=>{if(S.task){S.task.res(false);S.task=null}S.pose='loaf';P.crouch=.5;T.headA=6;T.eye=.05;S.sleep=1;T.ta=2;T.tf=.6;await rest(rnd(9000,16000));if(S.int)return;S.sleep=0;T.eye=1;await rest(500);T.jaw=1;T.eye=.15;T.headA=-14;await rest(1500);T.jaw=0;T.eye=1;standUp();await stretchIt()};
const lookAbout=async()=>{standUp();for(let i=0,n=2+(Math.random()*3|0);i<n&&!S.int;i++){T.headA=rnd(-16,10);if(Math.random()<.3)S.tf=-S.f;await rest(rnd(1100,2300))}if(Math.random()<.5&&!S.int){T.jaw=1;await rest(450);T.jaw=0;bub(pick(['mrrp?','mew','prrr']))}standUp()};
const zoomies=async()=>{const h=here(ledges());if(!h.v&&h.l!==0){return wander()}standUp();const a=rnd(60,innerWidth*.35),b=rnd(innerWidth*.6,innerWidth-60);T.tb=245;T.tc=3;T.ta=5;T.tf=3;for(let i=0;i<3&&!S.int;i++)await walk(i%2?a:b,{v:rnd(280,340),a:650,g:'trot'});await rest(400);standUp()};
const vis=()=>S.y>scrollY+50&&S.y<scrollY+innerHeight+20;
const brain=async()=>{for(;;){await wait(rnd(500,1500));if(document.hidden||S.busy)continue;S.int=0;if(!vis())await relocate();const r=Math.random();
try{if(r<.42)await wander();else if(r<.58)await sitDown();else if(r<.68)await nap();else if(r<.80)await lookAbout();else if(r<.88)await stretchIt();else await zoomies()}catch(e){}}};
const goTo=async(x,y,text,ms)=>{S.busy=1;S.int=1;if(S.task){S.task.res(false);S.task=null}await wait(80);S.int=0;standUp();const h=here(ledges());try{if(Math.abs(y-S.y)<14)await walk(x);else{const e={l:x-70,r:x+70,y};if(reach(h,e))await hop(h,e);else await relocate(x,y)}}catch(_){}bub(text);setTimeout(()=>S.busy=0,ms)};
let pets=0;cat.addEventListener('click',e=>{e.stopPropagation();S.int=1;S.busy=1;if(S.task){S.task.res(false);S.task=null}S.pose='sit';T.groom=0;T.eye=.15;T.headA=-10;T.ta=3;pets++;const c=pets%5===0;if(c)S.cool^=1;bub(c?(S.cool?'deal with it.':'ok, off they go'):pick(['mrrp!','purr…','meow','*headbutt*','mew?']));heart();setTimeout(()=>{T.eye=1;T.headA=0;T.ta=D0.ta;S.busy=0},2400)});
document.addEventListener('click',e=>{if(e.target.closest('#cat'))return;const hr=e.target.closest('.hr'),mc=e.target.closest('#mc button');
if(hr&&hr.getAttribute('aria-pressed')==='true'){const r=hr.getBoundingClientRect();goTo(r.left+scrollX-40,r.bottom+scrollY,'good pick!',2400);return}
if(mc)setTimeout(()=>{const p=$('#mp').getBoundingClientRect();goTo(p.left+60,p.top+scrollY+4,'yes. that one.',2600)},700)});
let last=performance.now();const tick=n=>{const dt=Math.min(.05,(n-last)/1000);last=n;try{upd(dt,n/1000)}catch(e){console.error(e)}requestAnimationFrame(tick)};
addEventListener('hashchange',()=>{if(rm)return;S.int=1;setTimeout(()=>{S.int=0;relocate()},700)});
if(rm){S.x=70;S.y=scrollY+innerHeight-12;S.pose='loaf';S.sleep=1;P.eye=T.eye=.05;cat.style.opacity=1;upd(.016,0)}
else setTimeout(()=>{S.x=rnd(W,innerWidth-W);S.y=scrollY+innerHeight-12;cat.style.opacity=1;requestAnimationFrame(tick);brain()},$('#pre')?3700:800);

})();
(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];const stg=$('#stg');if(!stg)return;
const sc=$$('.sc',stg),dots=$('#dots'),cap=$('#cap');let i=-1,t,w;
dots.innerHTML=sc.map((_,k)=>`<button aria-label="Show sketch ${k+1}"></button>`).join('');
const go=n=>{clearTimeout(t);clearTimeout(w);const cur=sc[i];const sw=()=>{sc.forEach(s=>s.classList.remove('on','out'));i=n;const s=sc[i];s.classList.add('on');stg.style.background=s.dataset.bg;cap.textContent=s.dataset.cap;cap.classList.remove('in');cap.offsetWidth;cap.classList.add('in');$$('button',dots).forEach((b,k)=>{b.classList.remove('on');b.offsetWidth;b.classList.toggle('on',k===i)});t=setTimeout(()=>go((i+1)%sc.length),9000)};
if(cur&&cur.classList.contains('on')){cur.classList.add('out');stg.style.background=sc[n].dataset.bg;w=setTimeout(sw,650)}else sw()};
$$('button',dots).forEach((b,k)=>b.onclick=e=>{e.stopPropagation();go(k)});stg.addEventListener('click',()=>go((i+1)%sc.length));
setTimeout(()=>go(0),$('#pre')?3000:300);
})();
