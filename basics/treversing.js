/*
treversing the dom actually means the moving up and down in a page
*/



let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes.... this return  a node collection
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;


/*figures for all nodetypes when console.. which is useful to know which nodetype you working with..
1 - Element
2 - Attribute (deprecated)
3 - Text node
8 - Comment
9 - Document itself
10 - Doctype
*/

// Get children element nodes .. this return a html collection.. also return all a element which is type 1
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';


// Children of children
list.children[3].children[0].id = 'test-link'; //assign an id to the  child index 0 of third child of the ul.collection
val = list.children[3].children[0]; // get the  child index 0 of third child of the ul.collection

// First child .. this will return the first text node..
val = list.firstChild;

//to get the actual first element child
val = list.firstElementChild;

// Last child ... this will also return the last node type.
val = list.lastChild;

//to get the actual the last element child
val = list.lastElementChild;

// Count child elements... this will count the number of child element 
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;

//getting the parent element
val = listItem.parentElement;

//getting the parent of a parent element
val = listItem.parentElement.parentElement;

// Get next sibling ... this will also return the node type 
val = listItem.nextSibling;

//this is to get the next sibling
val = listItem.nextElementSibling;

//this will get the next next sibling that is it will move tow steps ahead
val = listItem.nextElementSibling.nextElementSibling

//this will move two step forward and a step backward,,
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling... this also will return the previous node type
val = listItem.previousSibling;

//this will return the previous element sibling... but there is no previous li since the listItem is the first child
val = listItem.previousElementSibling;
console.log(val);