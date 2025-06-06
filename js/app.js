// slideshow
let nmr_slide = 0;
mostrarSlide(nmr_slide);

function trocarSlide(n) {
  nmr_slide = nmr_slide + n;
  mostrarSlide(nmr_slide);
}

function mostrarSlide(n) {
    let slides = document.getElementsByClassName("img_slideshow");

    if (n < 0) { 
      nmr_slide = slides.length - 1; 
    }
    if (n >= slides.length) { 
      nmr_slide = 0; 
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    slides[nmr_slide].style.display = "block";
}



// Quiz
function alterarStatusBotao() {
  let botao = document.getElementById('btn-recomecar');
  if (botao.classList.contains('btn_quiz-desabilitado')) {
    botao.classList.remove('btn_quiz-desabilitado');
    botao.classList.add('btn_quiz');
  } else {
    botao.classList.remove('btn_quiz');
    botao.classList.add('btn_quiz-desabilitado');
  }
}

let respostasCorretas = {'1C': true,'2C': true,'3B': true,'4A': true,'5B': true, '6B': true,'7C': true, '8A': true, '9C': true, '10D': true};

let perguntaAtual = 1;
let acertos = 0;

