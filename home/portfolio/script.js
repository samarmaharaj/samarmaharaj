const layers = document.querySelectorAll('.layer');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const yPos = -(scrollY * speed);
    layer.style.transform = `translateX(-50%) translateY(${yPos}px)`;
  });
});