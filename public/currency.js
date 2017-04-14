var Currency = function(start_currency){
  this.start_currency = start_currency
}

Currency.prototype = {

  getData: function(callback){
    var request = new XMLHttpRequest()
    request.open("GET","http://api.fixer.io/latest?base="+this.start_currency)
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