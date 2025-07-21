const bola = document.getElementById('pokebola');
let reverse = false;

bola.addEventListener('click', () => {
  bola.classList.remove('spin-cw', 'spin-ccw');
  void bola.offsetWidth;
  reverse = !reverse;
  bola.classList.add(reverse ? 'spin-ccw' : 'spin-cw');
});