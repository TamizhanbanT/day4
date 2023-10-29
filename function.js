 //adding elements in an array
 let e=0;
 const c=(function (a){
     
     a.forEach(x=>e=e+x)
     return e;
 })([12,13,25,14,78]);
console.log(c);




 //filter odd numbers
 let f=[];

  const odd = (function(a){
     a.forEach(x=>{if(x%2!=0){
         f.push(x)}
     })
     return f;
  })([12,13,25,14,78]);

  console.log(odd)