function criarSonar() {
      
      window.open("https://blog.myscrumhalf.com/sonar-apoiando-a-qualidade-do-desenvolvimento-de-software/","_blank");
      
}
    var botoes = document.querySelectorAll('button.sonar');
    for(var i = 0; i < botoes.length ; i++) {
      botoes[i].addEventListener('click', criarSonar);
}