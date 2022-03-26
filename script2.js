function criarDebito() {
      let para = document.createElement('p');
      para.textContent = 'Também conhecido como dívida técnica, o débito técnico é um conceito no desenvolvimento de software utilizado para representar o custo implícito de uma implementação ou solução pensada somente no agora, elaborada para suprir demandas atuais, em vez fazer uso de uma abordagem de melhor qualidade. O motivo por trás de tudo isso? Diminuir o tempo de lançamento de determinado produto de software.';
      document.body.appendChild(para);
}
    var botoes = document.querySelectorAll('button.debito');
    for(var i = 0; i < botoes.length ; i++) {
      botoes[i].addEventListener('click', criarParagrafo);
}