var app = function(){

  var initialCurrency = new Currency("GBP")
  var initialCurrencyView = new CurrencyView(document.querySelector("#input-currency"))


  initialCurrency.getData(function(currency){
    console.log(currency)
    initialCurrencyView.render(currency)
    initialCurrencyView.createOption(currency)
    initialCurrencyView.createTargetOption(currency)
    initialCurrencyView.selectElement.addEventListener("change",function(){
    initialCurrencyView.updateView(currency,this.value)
    })
    initialCurrencyView.inputButton.addEventListener("click",function(){
    initialCurrencyView.printConvertedValue(initialCurrencyView.inputValue.value)
    })
   
  })
   
}


window.onload = app