let valorDolarElement = document.querySelector("#valorDolar")
let valorRealElement = document.querySelector("#valorReal")
let botaoConverterElement = document.querySelector("#botaoConverter")


function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}


function converte(){

    let dolar = valorDolarElement.value;

    if(dolar < 0){
        return
    }

    const url = "http://economia.awesomeapi.com.br/json/last/USD-BRL"
    let info = fazGet(url)
    let dolarEmRealAgora = JSON.parse(info).USDBRL.bid

    valorRealElement.textContent = (dolar*dolarEmRealAgora).toFixed(2)
    
}

function main(){
    converte()
    botaoConverterElement.addEventListener("click",converte)
}

main()