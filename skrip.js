const toggleButton = document.getElementB
yId('toggleMode');
const body = document.body;

toggleButton.addEventListener('click', fu
nction() {
    body.classList.toggle('dark-mode');
    const currentMode = body.classList.cont
ains('dark-mode') ?  'Terang' : 'Gelap';
toggleButton.textContent= `Mode ${curr
    entMode}`;
});






