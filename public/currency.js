var Currency = function(){
}

Currency.prototype = {

  getData: function(callback){
    var key = "88c0871b1c32feaf2082dc168d45b14e"
    var request = new XMLHttpRequest()
    request.open("GET","http://data.fixer.io/api/latest?access_key="+key) 
    request.onload = function(){
      if(request.status === 200){
        var jsonString = request.responseText
        var rates = JSON.parse(jsonString)
        callback(rates)
      }
    }.bind(this)
    request.send()
  }

}