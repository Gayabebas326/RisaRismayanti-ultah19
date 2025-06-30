// Bunga Emoji 🌸 Jatuh
const totalBunga = 25;

for (let i = 0; i < totalBunga; i++) {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.textContent = '🌸';
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.fontSize = (16 + Math.random() * 24) + 'px';
  flower.style.animationDuration = (5 + Math.random() * 5) + 's';
  document.body.appendChild(flower);
}
