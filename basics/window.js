//window  / object / properties 
 
alert();
prompt()

confirm
if(confirm('Are you Sure')){
    //do something
}else{
    //do something
}

//ro get the outer height and width 
let val;
val = window.outerHeight;
val = window.outerWidth;

//to get the inner height and width 
val = window.innerHeight;
val = window.innerWidth;

//to get the scroll pointer 
val = window.scrollY; //get the vertical axis 
val = window.scrollX;  //get the horizontal axis


//LOCATION OBJECT

let val = window.location;

val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//Redirect
window.location.href = "http://goggle.com";

//Reload
window.location.reload();


/*
HISTORY OBJECT 
This will redirect us to the page we have been before ... -1 means a page visited before your recent page
-2 two pages back before your recent page 
*/

window.history.go(-1);

// to get the history length

window.history.length;

//NAVIGATOR OBJECT

val  = window.navigator;

val  = window.navigator.geolocation;
val  = window.navigator.appName;
val  = window.navigator.appVersion;
val  = window.navigator.userAgent;
val  = window.navigator.platform;
val  = window.navigator.language;
val  = window.navigator.vendor;


//document object

let val ;

//form
val = document.forms;
val = document.form.action;
val = document.form.method;




val = document.title;
val = document.all.length;
val = document.body;
val = document.domain;
val = document.URL;
val = document.doctype;
val = document.head;
val = document.all;


//link
val = document.links; // gives all thelink in the document
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;

//script
val = document.scripts;

//get attributes of a specific script
val = document.scripts[2].getAttributes('src'); 

//image
val = document.images;

//converting a script collection to array 

let scripts = document.scripts;

let Arrscript = Array.from('scripts');

Arrscript.forEach(function(script){
    //to get the attributes of this scripts
    console.log(script.getAttributes('src'));
});

console.log(val);



