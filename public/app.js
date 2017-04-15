var app = function(){

  var initialCurrency = new Currency("GBP")
  console.log(initialCurrency)
  var initialCurrencyView = new CurrencyView(document.querySelector("#input-currency"))


  initialCurrency.getData(function(currency){
    console.log(currency)
    initialCurrencyView.render(currency)
    initialCurrencyView.createOption(currency)
    initialCurrencyView.createTargetOption(currency)
    initialCurrencyView.currencySelectElement.addEventListener("change",function(){
    var newCurrencyCode = initialCurrencyView.otherCurrencies[this.value]
    console.log(newCurrencyCode)
    var newCurrency = new Currency(newCurrencyCode)

    console.log(newCurrency)
    // initialCurrencyView.render(newCurrency)
    })
    initialCurrencyView.targetSelectElement.addEventListener("change",function(){
    initialCurrencyView.updateView(currency,this.value)
    })
    initialCurrencyView.inputButton.addEventListener("click",function(){
    initialCurrencyView.printConvertedValue(initialCurrencyView.inputValue.value)
    })
   
  })
   
}


window.onload = app