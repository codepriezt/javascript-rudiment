// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
 
    //initializing a variable
    let tasks;
  
    //checking if the task array is empty...if not empty set into the tasks array
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasks.push(task);
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
    alert('Task saved');
  
    e.preventDefault();
  });
  
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  
  tasks.forEach(function(task){
    console.log(task);
  });