
function calcularMedia() {
  
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);

  const media = (nota1 + nota2 + nota3 + nota4) / 4;
  
  let mensagem = "";

  if (media === 0) {
    mensagem = "Infelizmente você zerou a prova :(";
  } else if (media > 0 && media <= 3) {
    mensagem = `Caramba, deu ruim, você obteve média ${media}! Estude mais e tente novamente!`;
  } else if (media >= 3.1 && media <= 5.9) {
    mensagem = `Você obteve média ${media}! Falta pouco para a média.`;
  } else if (media >= 6 && media <= 7) {
    mensagem = `Você está na média com ${media}`;
  } else if (media >= 7.1 && media <= 9.9) {
    mensagem = `Notão! Sua média é ${media}!`;
  } else if (media === 10) {
    mensagem = "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média";
  }
  



  document.getElementById("situacaoAluno").innerHTML = mensagem;
}





