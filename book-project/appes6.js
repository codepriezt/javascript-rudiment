class Book{
    constructor(title , author , isbn){
                this.title = title
                this.author = author
                this.isbn = isbn
    }

}

class UI {
    addBookToList(book){
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

    deleteBook(target){
        if(target.className == 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    showAlert(message , className){
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

    clearField(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
         document.getElementById('isbn').value = '';
   
    }
}
class Store{

    static getBooks(){
        //init 
        let books;
        if(localStorage.getItem('books') ===  null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books;
    }

    static addBook(book){
        let books = Store.getBooks();

        books.push(book);
        localStorage.setItem('books' , JSON.stringify(book));
    }

    static displayBooks(){
        const books =  Store.getBooks();

       books.forEach(function(book){
            //init
            const ui = new UI;
            ui.addBookToList(book); 
       });

        
    }

     static removeBook(isbn){
        const books = Store.getBooks()
        books.forEach(function(book , index){
            if(book.isbn === isbn){
                book.splice(index , 1)
            }
        });
        localStorage.setItem('books' , JSON.stringify(book)); 
    }

}

//eventlistener to dom loaded
document.addEventListener('DOMContentLoaded' , Store.displayBooks)


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


   Store.addBook(book);

   ui.showAlert('Book added !' , 'success');

   //clear ui field
   ui.clearField();
e.preventDefault();
})


const list = document.getElementById('list').addEventListener('click' , function(e){

       const ui = new UI;
        ui.deleteBook(e.target);

        //remove book from laocal host
       Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

       ui.showAlert('book deleted' ,'success');

    e.preventDefault();
})

