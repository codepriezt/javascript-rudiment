 function Book(title , author ,isbn){
         this.title = title;
         this.author = author;
         this.isbn = isbn;
 }   
 
 //insistate UI
function UI(){}

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('list');

    const row  = document.createElement('tr');
    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class = "delete">X</a></td>    
    `;
    list.appendChild(row);
}
 
UI.prototype.clearField = function(){
    document.getElementById('title').value = '';
     document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';

}

UI.prototype.showAlert = function(message ,className){
    const div = document.createElement('div')
        //add class
    div.className = `alert ${className}`;
        //add text
    div.appendChild(document.createTextNode(message))

    //get the parent conatiner 
    const container = document.querySelector('.container');

    //get form
    const form  = document.querySelector('#book-list');

    //displaying the error message below the container on top of the form
    container.insertBefore(div,form);

    //set timeout 
    setTimeout(function(){
        document.querySelector('.alert').remove();
    } ,3000);
}

UI.prototype.deleteBook = function(target){
        if(target.className == 'delete'){
            target.parentElement.parentElement.remove();
        }
}

 const form  = document.getElementById('book-list').addEventListener('submit' ,function(e){
     //gettting to input values
   const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
     const  isbn = document.getElementById('isbn').value;

    const  ui = new  UI;

    if(title == '' || author == '' || isbn == '' ){
        ui.showAlert('Please  fill in the neccessary field' , 'error')
    }

    const book = new Book(title , author , isbn);

    //instisiate the ui
    
    ui.addBookToList(book);

    ui.showAlert('Book added !' , 'success');

    //clear ui field
    ui.clearField();
e.preventDefault();
 })


 const list = document.getElementById('list').addEventListener('click' , function(e){

        const ui = new UI;

        ui.deleteBook(e.target);

        ui.showAlert('book deleted' ,'success');

     e.preventDefault();
 })

