function sortear(){
  let quantidade = document.getElementById('quantidade').value;
  let doNumero = parseInt(document.getElementById('de').value);
  let ateNumero = parseInt(document.getElementById('ate').value);
  
  let sorteados = [];
  let numero;

  for(i = 0 ; i < quantidade ; i++){
    numero = obterNumeroAleatorio(doNumero,ateNumero);

    while(sorteados.includes(numero)){
      numero = obterNumeroAleatorio(doNumero,ateNumero);
    }
    sorteados.push(numero);
  }

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
  alterarStatusBotao();
  
}

function reiniciar(){

  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`
}

function obterNumeroAleatorio(min,max){

  return Math.floor(Math.random() * (max - min + 1)) + min;

}

function alterarStatusBotao(){
  let botao = document.getElementById('btn-reiniciar');
  if(botao.classList.contains('container__botao-desabilitado')){
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');

  } else {

    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }

}
