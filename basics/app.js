//to append to a string 
var firstName = 'primitive';
let lastName = 'destiny';
var str = "hello there please how are you doing. i trust you doing good"

dey = firstName + ' ' + lastName;

dey = 'free';
dey += 'life';  //freelife


//indexOf
dey = firstName.indexOf('o'); //1

day = firstName.charAt('2'); //e

//to get the last char of  string
day = firstName.charAt(firstName.length -1);

//substring
day = firstName.substring(0 ,4);//prim

//slice
day = firstName.slice(0 ,3); //prim
day = firstName.slice(-3); //ive

//split
/**
 * this is used to split string into array..
 *  which can be handy when saving information in the dd
 */
dey = str.split(' '); // return array of each word in index starting from 0

//replace
dey = str.replace('hello' , 'awayu');

//includes
/*
to test or check if a particular vale exist in a string.. by return true or false..
*/

dey = str.includes('hello');


/**
 * TEMPLATING LITERALS IN JS
 */

 const name = 'job';
 const age = 45;
 const job = 'backend developer and data analyst';
 const city = "maimi";
 let html;

 //templating literal with es6
html = `
 <ul>
    <li>Name: ${name}</li>
    <li>Age:${age}</li>
    <li>Job:${job}</li>
    <li>City:${city}</li>        
</ul>
 
 `;
 document.body.innerHTML = html;


 //ARRAY 

 /**
  * looking at creating and mutatng arrays
  */

// to get the length of an array 

const number = [23,345,897,09,77685,34];
const number2 = [23,4,5,65,234,232,34,2];
const fruit = ['apple','orange' ,'banana' , 'pear']

let val;
val = number.length; //6

// to check if it is aray type

val = Array.isArray(number);//true

//changing single values

number[4] = 35;

//get  the value of a particular undex
van = number.indexOf(09); // 3

//mutuation of array
//adding to the front
number.unshift(345);  //add to the first index of  the array

//adding to the last index of the array 
number.push(12);

//deleting from the front
number.pop();

//take out from the front
number.shift();

//to take out more than one values in index 
number.splice(1,3);

//reverse an array
number.reverse;

//concat
number.concat(number2)

//sorting array 
fruit.sort()


//sortignthe array in ascending order
 val = number2.sort(function (x,y){
    return x - y;
 });


 //sort in descending order
 val = number2.sort(function (x,y){
    return y - x;
 });

 //find number less than 50

 function under50($num){{
     return num < 50;
 }}


 function over50($num){{
    return num > 50;
}}


 

const num = '500';
//equal to and type
if(num === 500){
    console.log('correct')
}else{
    console.log('correct') //incorrect cos number is a string not a number data type
}
//to check if it is equal to 
if(num == 500){
    console.log('correct')
}else{
    console.log('incorrect'); //correct cos number value is 100 but not checking the data type
}

//to check if a value is defined or not

if(typeof id == 'undefined'){
    console.log('No id')
}else{
    console.log(`this is id:${id}`)
}


// //switch
// const color = "red"
// switch(color){
//     case 1:
//         color = blue;
//     break;
//     case 2:
//         color = green
//     break;
//     default:
//         console.log(`this is not available : ${color}`)

// }


//function decleration
function sweet(){
    return "life is sweet";
}
console.log(sweet());

//function expression

const square = function(x)
{
    return x*x;
};

console.log(square(x));

// immediately invokable function expression also called IIFE's
//they are function that run immediately you declare them;

(function(name){
    console.log('my name is' + name);
})(brad);


//PROPERTY FUNCTION
//when a function is put inside of a object is called property function

const todo ={
    add:function(d){
        return d+d;
    },
    edit:function($id){
        return `i can be editted + ${id}`;
    },
}

todo.add(5);
todo.edit(3);
todo.delete() = function($id){
    let = $id.delete()
};
todo.delete(3)
