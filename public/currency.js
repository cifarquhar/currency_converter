var Currency = function(currency){
  this.currency = currency
}

Currency.prototype = {

  getData: function(callback){
    var key = "88c0871b1c32feaf2082dc168d45b14e"
    var request = new XMLHttpRequest()
    request.open("GET","http://data.fixer.io/api/latest?access_key="+key) //?base="+this.currency)
    request.onload = function(){
      if(request.status === 200){
        var jsonString = request.responseText
        var oldCode = this.currency
        this.currency = JSON.parse(jsonString)
        console.log(this.currency.rates[oldCode])
        callback(this.currency)
      }
    }.bind(this)
    request.send()
  }

}