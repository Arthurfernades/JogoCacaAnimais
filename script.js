// Seletor de cada animal //
let cachorro = document.querySelector(".cachorro");

let coelho = document.querySelector(".coelho");

let louvaDeus = document.querySelector(".louvaDeus");

let raposa = document.querySelector(".raposa");

let ganso = document.querySelector(".ganso");

let pato = document.querySelector(".pato");

let pato2 = document.querySelector(".pato2");

let jacare = document.querySelector(".jacare");

let castor = document.querySelector(".castor");

let tartaruga = document.querySelector(".tartaruga");

let tucano = document.querySelector(".tucano");

let lesma = document.querySelector(".lesma");

let joaninha = document.querySelector(".joaninha");

// Seletor todos os animais //
let animais = document.querySelectorAll(".animais");

// Manipulação botão iniciar //
let iniciar = document.querySelector(".inicio");

let reiniciar = document.querySelector(".reiniciar");

let final = document.querySelector(".final");

// Clique botão iniciar/reinciar //

iniciar.addEventListener("click", iniciarJogo);

reiniciar.addEventListener("click",reiniciarJogo)

// Instruções do Jogo //

let fecharManual = document.querySelector(".fecharManual");

let manual = document.querySelector(".manualJogo");

fecharManual.addEventListener("click",fechaManual)

function fechaManual()
{
  manual.innerText = null;
  manual.style.padding = "0px";
  fecharManual.innerText = null;
  iniciar.innerText = "Iniciar";
}

// Função iniciar/reinciar o jogo //

function iniciarJogo()
{
  timer();
  posicionaIcones();
  iniciar.innerText = null;
  reiniciar.innerText = "Reiniciar";
}

function reiniciarJogo(){
    document.querySelector(".tempoEsgotado").innerText = null;
    final.innerText = null;
    final.style.padding = null;
    clearInterval(intervalo);
    timer();
    posicionaIcones();
    aux = 0;
}

// Adicona os animais a serem procurados //

let animaisEscolha = ["./Imagens/Escolha/cachorro.png", "./Imagens/Escolha/castor.png", "./Imagens/Escolha/coelho.png", "./Imagens/Escolha/ganso.png", "./Imagens/Escolha/lesma.png","./Imagens/Escolha/jacare.png", "./Imagens/Escolha/joaninha.png", "./Imagens/Escolha/louva_deus.png", "./Imagens/Escolha/pato.png", "./Imagens/Escolha/pato_2.png", "./Imagens/Escolha/raposa.png", "./Imagens/Escolha/tartaruga.png", "./Imagens/Escolha/tucano.png"]

let animaisEscolhaCerta = ["./Imagens/Escolha_certa/cachorro.png", "./Imagens/Escolha_certa/castor.png", "./Imagens/Escolha_certa/coelho.png", "./Imagens/Escolha_certa/ganso.png", "./Imagens/Escolha_certa/lesma.png","./Imagens/Escolha_certa/jacare.png", "./Imagens/Escolha_certa/joaninha.png", "./Imagens/Escolha_certa/louva_deus.png", "./Imagens/Escolha_certa/pato.png", "./Imagens/Escolha_certa/pato_2.png", "./Imagens/Escolha_certa/raposa.png", "./Imagens/Escolha_certa/tartaruga.png", "./Imagens/Escolha_certa/tucano.png"]

//Troncos de madeira onde vão ser colocados os animais procurados.
let busca1 = document.querySelector(".busca1");
let busca2 = document.querySelector(".busca2");
let busca3 = document.querySelector(".busca3");
let busca4 = document.querySelector(".busca4");

function posicionaIcones()
{
    numeroAleatorio =  getRandomInt();

    //Coloca as imagens dos animais que devem ser procurados.
    busca1.setAttribute("src", animaisEscolha[numeroAleatorio[0]]);
    busca2.setAttribute("src", animaisEscolha[numeroAleatorio[1]]);
    busca3.setAttribute("src", animaisEscolha[numeroAleatorio[2]]);
    busca4.setAttribute("src", animaisEscolha[numeroAleatorio[3]]);

    //Coloca as imagens após ser clicado no animal correto.
    objetoProcurado[0] = vetorAniamais[numeroAleatorio[0]];
    objetoProcurado[1] = vetorAniamais[numeroAleatorio[1]];
    objetoProcurado[2] = vetorAniamais[numeroAleatorio[2]];
    objetoProcurado[3] = vetorAniamais[numeroAleatorio[3]];
};

 function getRandomInt() 
{
    var numeros = [];
    while (numeros.length < 4) 
    {
        var numeroAleatorio = Math.floor(Math.random() * 12) + 0;
        if (numeros.indexOf(numeroAleatorio) === -1) 
        {
            numeros.push(numeroAleatorio);
        }
    }
    return numeros;
};

// Clique nos animais //

let numeroAleatorio = [], objetoProcurado = [];

let aux = 0;

//Vetor que armazena os animaos exatamente na mesma posição para serem localizados pelo índice do vetor.
let vetorAniamais = [cachorro, castor, coelho, ganso, lesma, jacare, joaninha, louvaDeus, pato, pato2, raposa, tartaruga, tucano]; 

// Adiciona evento de clique em todos os animais.
animais.forEach(element => {
  element.addEventListener("click",verificaAnimal);
});

//Função que vai verificar se o elemento clicado corresponde ao elemento procurado pelo índice do vetor.
function verificaAnimal(event) {

  let objetoClicado = event.target;

  for(let i = 0; i < 4; i++)
  {
    if(objetoClicado == objetoProcurado[i])
      {
        aux++;
        switch (i) {
          case 0:
            busca1.setAttribute("src", animaisEscolhaCerta[numeroAleatorio[0]]);
            objetoProcurado[i] = null;
            break;
          case 1:
            busca2.setAttribute("src", animaisEscolhaCerta[numeroAleatorio[1]]);
            objetoProcurado[i] = null;
            break;
          case 2:
            busca3.setAttribute("src", animaisEscolhaCerta[numeroAleatorio[2]]);
            objetoProcurado[i] = null;
            break;
          case 3:
            busca4.setAttribute("src", animaisEscolhaCerta[numeroAleatorio[3]]);
            objetoProcurado[i] = null;
            break;
          default:
            break;
        }
        if(aux == 4){
          aux = 0;
          finalizaJogo();
        }
      }
  }
}

// Timer //

let intervalo;

function timer(){
  let tempoInicial = 10 * 1000; 
  let tempoAtual = tempoInicial;

  intervalo = setInterval(function() {
    tempoAtual -= 1000; 
    let tempoRestante = tempoAtual;

    if (tempoRestante > 0) { 
      let segundos = Math.floor((tempoRestante / 1000) % 60);
      let minutos = Math.floor((tempoRestante / (1000 * 60)) % 60);
      if(segundos > 9){
        document.querySelector(".timer").innerText = `${segundos}`;
        
      }
      else{
        document.querySelector(".timer").innerText = `0${segundos}`;
        
      }
    } else {
      clearInterval(intervalo);
      document.querySelector(".timer").innerText = null;
      document.querySelector(".timer").style.padding = null;
      document.querySelector(".tempoEsgotado").innerText = "Tempo esgotado";
      finalizaJogoPorTempo();
    }
  }, 1000);
}

// Finaliza o jogo //

function finalizaJogo (){
  final.innerText = "Voce ganhou";
  final.style.padding = "50px";
  clearInterval(intervalo);
  aux = 0;
}

function finalizaJogoPorTempo (){
  final.innerText = "Voce perdeu";
  final.style.padding = "50px";
  objetoProcurado = [];
  aux = 0;
}