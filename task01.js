

var object1 = {
    name: "person 1",
    age: 5
  };    
  var object2 = {
    age: 30,
    name:"person 1"
  };
  if ((object1).length==(object2).length) {
  
    for(let key  in object1){

    if (object1[key]==object2[key]){
        continue
        
    } else 
    {
        flag=false;
       break;
         }
} 
} 
else
{
    flag=false
}
console.log(flag);
  