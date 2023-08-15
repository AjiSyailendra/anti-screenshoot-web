window.addEventListener(
  "keydown",
  (e) => {
    console.log(e);
    if (e.metaKey && e.key == 'Shift' || e.metaKey) {
      let body = document.getElementById('black')
      body.classList.remove('hidden')
    }
    navigator.clipboard.writeText('')
  }
);

window.addEventListener(
  "keyup",
  (e) => {
    console.log(e);
    if (e.key == 'PrintScreen' && !e.metaKey) {
      let body = document.getElementById('black')
      body.classList.remove('hidden')

      setTimeout(() => {
        body.classList.add('hidden')
      }, 2000);
    }
    navigator.clipboard.writeText('')
  }
);