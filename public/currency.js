var Currency = function(currency){
  this.currency = currency
}

Currency.prototype = {

  getData: function(callback){
    var request = new XMLHttpRequest()
    request.open("GET","http://api.fixer.io/latest?base="+this.currency)
    request.onload = function(){
      if(request.status === 200){
        var jsonString = request.responseText
        this.currency = JSON.parse(jsonString)
        callback(this.currency)
      }
    }.bind(this)
    request.send()
  }

}