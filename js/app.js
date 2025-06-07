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


let respostas = {
    '1C': true,
    '2C': true,
    '3B': true,
    '4A': true,
    '5B': true,
    '6B': true,
    '7C': true,
    '8A': true,
    '9C': true,
    '10D': true
};

let numeroPergunta = 1;
let totalAcertos = 0;


let opcoes = document.querySelectorAll('.opcao_quiz');
for (let i = 0; i < opcoes.length; i++) {
  opcoes[i].addEventListener('click', function () {
      let todasOpcoes = this.parentElement.querySelectorAll('.opcao_quiz');
      for (let x = 0; x < todasOpcoes.length; x++) {
        todasOpcoes[x].setAttribute('data-selecionado', 'nao');
      }
      this.setAttribute('data-selecionado', 'sim');
  });
} // deixa as alternativas clicaveis

//função de verificar a resposta quando clicado no botão de verificar
function verificar() {
    let perguntaAtual = document.getElementById('?' + numeroPergunta);
    let botoes = perguntaAtual.querySelectorAll('button');

    let respostaCorreta = null;
    let respostaUsuario = null;

    for (let i = 0; i < botoes.length; i++) {
        let botao = botoes[i];
        if (respostas[botao.id]) {
            respostaCorreta = botao;
        }
        if (botao.getAttribute('data-selecionado') === 'sim') {
            respostaUsuario = botao;
        }
    }

    if (!respostaUsuario) {
        alert("Por favor, selecione uma alternativa!");
      return;
    }

    respostaCorreta.classList.add('opcao_quiz-correto');

    if (respostaUsuario !== respostaCorreta) {
        respostaUsuario.classList.add('opcao_quiz-errado');
    } else {
        totalAcertos++;
    }

    setTimeout(function () {
        perguntaAtual.classList.remove('quiz_conteudo');
        perguntaAtual.classList.add('quiz_conteudo-oculto');

        numeroPergunta++;
        let proximaPergunta = document.getElementById('?' + numeroPergunta);

        if (proximaPergunta) {
            proximaPergunta.classList.remove('quiz_conteudo-oculto');
            proximaPergunta.classList.add('quiz_conteudo');
        } else {
            mostrarResultadoFinal();
        }
    }, 1000);
}

//mostra a quantidade de acertos que o usuario teve
function mostrarResultadoFinal() {
    let resultado = document.querySelector('.quiz_qtd_acertos-desabilitado');

    if (resultado) {
        resultado.classList.remove('quiz_qtd_acertos-desabilitado');
        resultado.classList.add('quiz_qtd_acertos');
        resultado.innerText = "Acertou: " + totalAcertos + " de 10 questões!";
    }

    document.getElementById('btn-verificar').style.display = 'none';
    alterarStatusBotao();
}
