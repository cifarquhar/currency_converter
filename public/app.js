var app = function(){

  var initialCurrency = new Currency("GBP")
  var initialCurrencyView = new CurrencyView(document.querySelector("#input-currency"))
  var targetCurrencyView = new CurrencyView(document.querySelector("#target-currency"))


  initialCurrency.getData(function(currency){
    console.log(currency)
  })


}


window.onload = app