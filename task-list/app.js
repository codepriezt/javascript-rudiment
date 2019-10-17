//Defining ui variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//load all event listener
loadEventListener();

//load all event listener
function loadEventListener(){
    //DOM load event ... to load event from the dom
    document.addEventListener('DOMContentLoaded' , getTasks);


    //Add task event
    form.addEventListener('submit' , addTask);

    //remove task event
    taskList.addEventListener('click' , removeTask);

    //clear task event 
    clearBtn.addEventListener('click' , clearTasks);

    //filter task event 
    filter.addEventListener('keyup' , filterTasks);
}



//add task
function addTask(e){

e.preventDefault();

const empty = taskInput.value == '';
if(empty){
    alert('add a Task'); 
}

    //create li Element
    const  li = document.createElement('li');
    li.className = 'collection-item';
    li.id = 'new-item';
    li.setAttribute('title' , 'new-title');

    //create text nodes and append to child
    li.appendChild(document.createTextNode(taskInput.value))
    
    //create a new link element
    const link = document.createElement('a')

    //add className
    link.className = 'delete-item secondary-content'

    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //append link to li 
    li.appendChild(link)

    //appending li to ul 
    taskList.appendChild(li);

    //store value in local storage
    storeTaskInLocalStorage(taskInput.value);

 
    //clear input 
    taskInput.value = '';
}


//remove task event 
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure'))
        e.target.parentElement.parentElement.remove();

        //remove task from local storage
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }

}


//clear task 
function clearTasks(){
    //there are two methods to clearing the li 


    //method one .. using innerhtml
    // taskList.innerHTML = '';

    //method two .. this method is actually better and faster 
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
    //https://jsperf.com/innerhtml-vs-removechild .. this link show the faster method


    //remove all items from the local storage
    clearAllTaskFromLocalStorage();

    
    
}


//filter through task 
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    //looping through all the li to check if there is a match to the filter text

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block' ;
        }else{
            task.style.display = 'none';
        }
    })
}

//store input value in local storage
function storeTaskInLocalStorage(task){
let tasks;

if(localStorage.getItem('tasks') === null){
    tasks = [];
}else{
     tasks = JSON.parse(localStorage.getItem('tasks'));
}
tasks.push(task);

 localStorage.setItem('tasks' , JSON.stringify(tasks));
}


//get Task from local storage
function getTasks(){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
         tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.forEach(function(task){
    //create li Element
    const  li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //add id
    li.id = 'new-item';
    //set attribute
    li.setAttribute('title' , 'new-title');
    //create text nodes and append to child
    li.appendChild(document.createTextNode(task))
    
    //create a new link element
    const link = document.createElement('a')

    //add className
    link.className = 'delete-item secondary-content'

    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //append link to li 
    li.appendChild(link)

    //appending li to ul 
    taskList.appendChild(li); 
     })
}

function removeTaskFromLocalStorage(taskItem){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
         tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task,index){
        if(taskItem.textContent === task){
            tasks.splice(index,1)
        }
    });

    localStorage.setItem('tasks' , JSON.stringify(tasks))
}


function clearAllTaskFromLocalStorage(){
    localStorage.clear();
}