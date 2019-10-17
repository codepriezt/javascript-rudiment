//loops
 for(let i = 0; i < 10 ; i++){
    if(i == 3){
        // do something;
        continue;
    }

    if(i == 8){
        // do something
        break;
    }

    console.log('number '+ i);
 }

 // while loop 
 //define the  i outsdie the loop 

 let i = 0;

 while(1 < 10){
     i++
     console.log('number' + i);
 }

 //do while loop 
 do{
     //do xomethin;
     i++;
 }
     while(i < 10){
         //do xomrthing;
     }
 

     // Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

// test();

// if(true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// for(var a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }

console.log('Global Scope: ', a, b, c);

     //foreach loop for array
     //it can take three argument , first th iterator , 
    //  seconfd the index of the values in the array , third it takes the array it self
     cars = [benz , toyota , honda];

     cars.foreach(function(car , index ,){
        console.log(`${index} : ${car}` )
        console.log(array)
     })

     //map
      const users = [
          {id:1 , name:'tobex'},
          {id:2 , name:'toyin'},
          {id:3 , name:'toto'},
          {id:4 , name:'tobe'}

      ]

      const id = user.map(function(user){
          return user.id;
      });


      //for in loop 
      //this help for lopping in object

      const user = {
          firstName:"john",
          lastName:"doe",
          age:30,

      }
      //the x in this argument represent the key  in the object .. eg firstName
      for(x in user){
          console.log(`${x} :${user[x]}`);
      }
