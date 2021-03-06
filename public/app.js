var app = function(){

  var initialCurrency = new Currency("GBP")
  console.log(initialCurrency)
  var currencyView = new CurrencyView(document.querySelector("#input-currency"))


  initialCurrency.getData(function(currency){
    setup(currency)
  })
  

  var setup = function(currency){
    currencyView.updateView(currency,0)
    currencyView.createOption(currency)
    currencyView.createTargetOption(currency)
    currencyView.currencySelectElement.addEventListener("change",function(){
      var newCurrencyCode = currencyView.otherCurrencies[this.value - 1]
      var newCurrency = new Currency(newCurrencyCode)
      newCurrency.getData(function(currency){
        setup(currency)
      })
    })
    currencyView.targetSelectElement.addEventListener("change",function(){
      currencyView.updateView(currency,this.value)
    })
    currencyView.inputButton.addEventListener("click",function(){
      currencyView.printConvertedValue(currencyView.inputValue.value)
    })
  }
}


window.onload = app