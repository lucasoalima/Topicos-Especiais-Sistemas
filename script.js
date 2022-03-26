// function criarParagrafo() {
//       let para = document.createElement('p');
//       para.textContent = 'Você clicou no botão!';
//       document.body.appendChild(para);
//     }
//     const botoes = document.querySelectorAll('button');
//     for(var i = 0; i < botoes.length ; i++) {
//       botoes[i].addEventListener('click', criarParagrafo);
//     }

function criarContador() {

          let para = document.createElement('p');
        if(i<=10){
          para.textContent = i++;
          document.body.appendChild(para);}
    }
        var botoes = document.querySelectorAll('button');

        while(i < 10) {
          botoes[i].addEventListener('click', criarParagrafo);
        }