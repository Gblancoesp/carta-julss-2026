/* Carta para Julss: sobre, carta y detalles */
(() => {
  const $ = id => document.getElementById(id);
  const env = $('envelope'), stage = $('stage'), hint = $('hint');
  const wrap = $('letterWrap'), heart = $('heart'), secret = $('secret');

  /* Pétalos: pocos y lentos para no distraer de la lectura */
  const petals = $('petals');
  for (let i = 0; i < 14; i++) {
    const p = document.createElement('i');
    const s = 10 + Math.random() * 12;
    p.className = 'petal';
    p.style.cssText = `left:${Math.random()*100}%;width:${s}px;height:${s}px;` +
      `animation-duration:${16 + Math.random()*14}s;animation-delay:${-Math.random()*26}s`;
    petals.appendChild(p);
  }

  /* Apertura: solapa -> carta asoma -> sobre baja -> carta se despliega */
  let opened = false;
  env.addEventListener('click', () => {
    if (opened) return;
    opened = true;
    env.classList.add('open');
    hint.classList.add('hide');
    setTimeout(() => {
      wrap.classList.add('show');
      wrap.setAttribute('aria-hidden', 'false');
      document.body.classList.add('reading');
      stage.classList.add('gone');
      window.scrollTo(0, 0);
    }, 1300);
    setTimeout(() => stage.style.display = 'none', 2300);
  });

  /* Sorpresa: el corazón final lanza corazones; a la tercera aparece un mensaje */
  const msgs = ['', '', 'Te aprecio muchisimo ♥'];
  let clicks = 0;
  heart.addEventListener('click', () => {
    const r = heart.getBoundingClientRect();
    for (let i = 0; i < 14; i++) {
      const b = document.createElement('span');
      b.className = 'burst';
      b.textContent = '♥';
      const a = Math.random() * Math.PI * 2, d = 70 + Math.random() * 120;
      b.style.cssText = `left:${r.left + r.width/2}px;top:${r.top + r.height/2}px;` +
        `--x:${Math.cos(a)*d}px;--y:${Math.sin(a)*d - 60}px;--r:${(Math.random()-.5)*120}deg`;
      document.body.appendChild(b);
      setTimeout(() => b.remove(), 1700);
    }
    if (++clicks === 3) { secret.textContent = msgs[2]; secret.classList.add('on'); }
  });
})();
