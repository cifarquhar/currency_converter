var app = function(){

  var initialCurrency = new Currency("GBP")
  var targetCurrency = new Currency("USD")
  var initialCurrencyView = new CurrencyView(document.querySelector("#input-currency"))
  var targetCurrencyView = new CurrencyView(document.querySelector("#target-currency"))


  initialCurrency.getData(function(currency){
    console.log(currency)
  initialCurrencyView.render(currency)
  initialCurrencyView.createOption(currency)
  })

  targetCurrency.getData(function(currency){
    console.log(currency)
  targetCurrencyView.render(currency)
  targetCurrencyView.createOption(currency)
  })


}


window.onload = app