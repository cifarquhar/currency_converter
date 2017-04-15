var app = function(){

  var initialCurrency = new Currency("GBP")
  // var targetCurrency = new Currency("USD")
  var initialCurrencyView = new CurrencyView(document.querySelector("#input-currency"))
  // var targetCurrencyView = new CurrencyView(document.querySelector("#target-currency"))


  initialCurrency.getData(function(currency){
    console.log(currency)
    initialCurrencyView.render(currency)
    // initialCurrencyView.getObject(currency)
    initialCurrencyView.createTargetOption(currency)
    initialCurrencyView.selectElement.addEventListener("change",function(){
    initialCurrencyView.updateView(currency,this.value)
    })
   
  })
    // console.log(initialCurrency)
    
  // targetCurrency.getData(function(currency){
  //   console.log(currency)
  //   targetCurrencyView.render(currency)
  //   // targetCurrencyView.createOption(currency)
  // })

  // var exchangeView = new ExchangeView(document.querySelector("#rate"),initialCurrency,targetCurrency)
  // exchangeView.render()


}


window.onload = app