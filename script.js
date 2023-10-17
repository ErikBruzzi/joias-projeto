const box = document.querySelector(".container-carrossel");
const imagens = document.querySelectorAll(".container-carrossel img");

let contador = 0;

function slider() {
  contador++;

  if (contador > imagens.length - 1) {
    contador = 0;
  }

  box.style.transform = `translateX(${-contador * 50}%)`;
}

setInterval(slider, 6000);