function criarJenkins() {
       window.open("https://www.gocache.com.br/dicas/o-que-e-jenkins-para-iniciantes/")
}
    var botoes = document.querySelectorAll('button.jenkins');
    for(var i = 0; i < botoes.length ; i++) {
      botoes[i].addEventListener('click', criarJenkins);
}