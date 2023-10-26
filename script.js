let valorDolarElement = document.querySelector("#valorDolar");
let valorRealElement = document.querySelector("#valorReal");
let botaoConverterElement = document.querySelector("#botaoConverter");

function converte() {
  let dolar = valorDolarElement.value;

  if (dolar < 0) {
    valorRealElement.textContent = "0.00";
    return;
  }

  // Fazendo a solicitação GET à API usando fetch
  fetch("http://economia.awesomeapi.com.br/json/last/USD-BRL")
    .then((response) => {
      // Verifica se a resposta da API está OK (código 200)
      if (!response.ok) {
        throw new Error("Erro na solicitação à API");
      }
      // Converte a resposta em formato JSON
      return response.json();
    })
    .then((data) => {
      // Faça o que você quiser com os dados da API
      valorRealElement.textContent = (dolar * data.USDBRL.bid).toFixed(2);
    })
    .catch((error) => {
      // Trate erros, se houver algum
      console.error("Ocorreu um erro:", error);
    });
}

function main() {
  converte();
  botaoConverterElement.addEventListener("click", converte);
}

main();
