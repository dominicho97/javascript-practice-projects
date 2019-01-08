// Book class: Represents a Book

class Book {
  constructor(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}





// UI class: Handle UI Tasks


class UI{
  static displayBooks(){
    const StoredBooks = [
      
      {
      title:'Sapiens',
      author: "Yuval Noah Harrari",
      isbn: "1234567"
    },
    {
      title:'Sapiens2',
      author: "Yuval Noah Harrari",
      isbn: "1234567"

    }
  ];

  const books = StoredBooks;

  books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book){
    const  list = document.querySelector('#book-list');

    const row = document.createElement('tr');
    
    row.innerHTML = 
    `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm 
    delete">X</a></td>
    `;

    list.appendChild(row);
  }

}




// Storage class: Handles Storage


// Event: Displays Book
  document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book

document.querySelector('#book-form').addEventListener('submit', (e)
 => {
   // prevent actual submit 
   e.preventDefault();
  //Get form values
  const title= document.querySelector('#title').Value;
  const title= document.querySelector('#author').Value;
  const title= document.querySelector('#isbn').Value;
});



//instatiate book
const book = new Book (title,author,isbn);




// Event: Remove a Book