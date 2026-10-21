// Loads each section file (listed in index.html) in order, then starts the page effects.
async function loadSections(){
  const slots=document.querySelectorAll('[data-include]');
  const html=await Promise.all([...slots].map(s=>fetch(s.dataset.include).then(r=>r.text())));
  slots.forEach((s,i)=>s.outerHTML=html[i]);
}

function initPage(){
  // circular economy nodes
    const stages=[["🔁","Reuse"],["✏️","Design"],["🏭","Produce"],["🛒","Buy & Lease"],["♻️","Recycle"],["✂️","Upcycle"]];
    const cycle=document.getElementById('cycle');
    stages.forEach(([e,t],i)=>{
      const a=(i/stages.length)*2*Math.PI-Math.PI/2, d=document.createElement('div');
      d.className='node';
      d.style.left=(50+42*Math.cos(a))+'%'; d.style.top=(50+42*Math.sin(a))+'%';
      d.innerHTML=`<div><span>${e}</span>${t}</div>`;
      cycle.appendChild(d);
    });
  
    // reveal + counters
    const io=new IntersectionObserver(es=>es.forEach(en=>{
      if(!en.isIntersecting)return;
      en.target.classList.add('show');
      en.target.querySelectorAll('[data-count]').forEach(el=>{
        const end=+el.dataset.count, suf=el.dataset.suffix||'M'; let n=0;
        const t=setInterval(()=>{n+=Math.ceil(end/40); if(n>=end){n=end;clearInterval(t)} el.textContent=n+suf},30);
      });
      io.unobserve(en.target);
    }),{threshold:.15});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
    document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.links').classList.remove('open')));
}

loadSections().then(initPage);
