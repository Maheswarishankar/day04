
var request= new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all');

request.send();

request.onload=function(){
    
// all countries flags 
var countrydata = JSON.parse(this.responseText)

for (let i of countrydata){

    console.log(i.flags)

  
        
  }
}

