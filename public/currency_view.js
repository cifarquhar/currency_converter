var CurrencyView = function(divElement){
  this.divElement = divElement
}

CurrencyView.prototype = {


  updateView: function(currency,index){
    var currencyStatement = document.querySelector("#input-code")
    var exchangeStatement = document.querySelector("#input-rate")
    var currencyCode = currency.base
    var exchangeCodes = Object.keys(currency.rates)
    var exchangeRates = Object.values(currency.rates)
    var exchangeCode = exchangeCodes[index]
    var exchangeRate = exchangeRates[index]
    currencyStatement.innerText = "Currency: " + currencyCode
    exchangeStatement.innerText = "Exchange Rate (" + exchangeCode + "): " + exchangeRate
    this.exchangeRate = exchangeRate
  },
  
  createOption: function(currency){
    var selectElement = document.querySelector("#input-selector")
    var otherCurrencies = Object.keys(currency.rates)
    while (selectElement.hasChildNodes()) {
      selectElement.removeChild(selectElement.lastChild);
    }
    var defaultOption = document.createElement("option")
    defaultOption.value = 0
    defaultOption.text = "select"
    defaultOption.selected = "selected"
    selectElement.appendChild(defaultOption)
    otherCurrencies.forEach(function(currency,index){
      var optionElement = document.createElement("option")
      optionElement.value = index+1
      optionElement.text = currency
      selectElement.appendChild(optionElement)
    })
    var inputSection = document.querySelector("#input-code-container")
    this.otherCurrencies = otherCurrencies
    this.currencySelectElement = selectElement
  },

  createTargetOption: function(currency){
    var selectElement = document.querySelector("#target-selector")
    var otherCurrencies = Object.keys(currency.rates)
    while (selectElement.hasChildNodes()) {
      selectElement.removeChild(selectElement.lastChild);
    }
    otherCurrencies.forEach(function(currency,index){
      var optionElement = document.createElement("option")
      optionElement.value = index
      optionElement.text = currency
      selectElement.appendChild(optionElement)
    })
    this.targetSelectElement = selectElement
    this.inputButton = this.divElement.querySelector("#input-button")
    this.inputValue = this.divElement.querySelector("#input-value")
  },

  printConvertedValue: function(input){
    var convertedAmount = (input * this.exchangeRate).toFixed(2)
    var outputP = document.querySelector("#result-text")
    outputP.innerText = "Value: " + convertedAmount
  }

}