var CurrencyView = function(divElement){
  this.divElement = divElement
}

CurrencyView.prototype = {

  render: function(currency){
    // console.log(this)
    var currencyStatement = document.createElement("p")
    var currencyCode = currency.base
    currencyStatement.innerText = "Starting currency: " + currencyCode
    this.divElement.appendChild(currencyStatement)
    },
  
    createOption: function(currency){
      var selectElement = document.createElement("select")
      var otherCurrencies = Object.keys(currency.rates)
      console.log(otherCurrencies)
      otherCurrencies.forEach(function(currency){
        var optionElement = document.createElement("option")
        optionElement.text = currency
        selectElement.appendChild(optionElement)
      })
      this.divElement.appendChild(selectElement)
    }

}