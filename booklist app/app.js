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

    list.appendChild('row');
  }

}







// Storage class: Handles Storage


// Eevent: Displays Book


// Event: Add a Book



// Event: Remove a Book