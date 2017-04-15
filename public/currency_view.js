var CurrencyView = function(divElement){
  this.divElement = divElement
}

CurrencyView.prototype = {

  getObject: function(currency){
    this.currency = currency
  },

  render: function(currency){
    var currencyStatement = document.querySelector("#input-code")
    var exchangeStatement = document.querySelector("#input-rate")
    var currencyCode = currency.base
    var exchangeCodes = Object.keys(currency.rates)
    var exchangeRates = Object.values(currency.rates)
    var defaultExchangeCode = exchangeCodes[0]
    var defaultExchangeRate = exchangeRates[0]
    currencyStatement.innerText = "Currency: " + currencyCode
    exchangeStatement.innerText = "Exchange Rate (" + defaultExchangeCode + "): " + defaultExchangeRate
    // this.divElement.appendChild(currencyStatement)
    // this.divElement.appendChild(exchangeStatement)
    },
  
    createOption: function(currency){
      var selectElement = document.createElement("select")
      // var otherCurrencies = Object.keys(currency.rates)
      // this.otherCurrencies = otherCurrencies
      // console.log(this.otherCurrencies)
      otherCurrencies.forEach(function(currency,index){
        var optionElement = document.createElement("option")
        optionElement.value = index
        optionElement.text = currency
        selectElement.appendChild(optionElement)
      })
      this.divElement.appendChild(selectElement)
      this.selectElement = selectElement
      // console.log(this.selectElement)
    },
    createTargetOption: function(currency){
      var selectElement = document.createElement("select")
      var otherCurrencies = Object.keys(currency.rates)
      // this.otherCurrencies = otherCurrencies
      // console.log(this.otherCurrencies)
      otherCurrencies.forEach(function(currency,index){
        var optionElement = document.createElement("option")
        optionElement.value = index
        optionElement.text = currency
        selectElement.appendChild(optionElement)
      })
      this.divElement.appendChild(selectElement)
      this.selectElement = selectElement
      console.log(currency.rates)
    },
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
    }

}