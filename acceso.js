/* Pantalla de acceso: pide el código y redirige a la carta */
(() => {
  const $ = id => document.getElementById(id);
  const DESTINO = 'carta.html';              // página de la carta
  // (día de él + día de ella) × (mes de él + mes de ella) = (9 + 27) × (1 + 9) = 360
  const CODE = String((9 + 27) * (1 + 9));

  /* Pétalos suaves de fondo */
  const petals = $('petals');
  for (let i = 0; i < 14; i++) {
    const p = document.createElement('i');
    const s = 10 + Math.random() * 12;
    p.className = 'petal';
    p.style.cssText = `left:${Math.random()*100}%;width:${s}px;height:${s}px;` +
      `animation-duration:${16 + Math.random()*14}s;animation-delay:${-Math.random()*26}s`;
    petals.appendChild(p);
  }

  const padlock = $('padlock'), lock = $('lock'), form = $('lockForm'), code = $('code'), msg = $('lockMsg');
  code.focus();
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (code.value.trim() === CODE) {
      msg.textContent = 'Vaya peruana mas lista no? ♥';
      padlock.classList.add('open');
      setTimeout(() => lock.classList.add('gone'), 1000);
      setTimeout(() => { window.location.href = DESTINO; }, 1700);
    } else {
      msg.textContent = 'Te vas a tener que esforzar un poco mas eh panchita ♥';
      form.classList.remove('shake'); void form.offsetWidth; form.classList.add('shake');
      padlock.classList.remove('shake'); void padlock.offsetWidth; padlock.classList.add('shake');
      code.select();
    }
  });
})();
