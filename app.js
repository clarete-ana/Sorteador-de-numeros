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

  
}

function obterNumeroAleatorio(min,max){

  return Math.floor(Math.random() * (max - min + 1)) + min;

}
