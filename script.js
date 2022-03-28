let myLibrary = [];

function Book(data) {
  this.id = data.id;
  this.title = data.title;
  this.author = data.author;
  this.year = data.year;
  this.read = data.read;
}

function addBookToLibrary(data) {
  myLibrary.push(new Book(data))
}

function generateRow(book){
  let row = document.createElement("tr");

  Object.values(book).forEach((value)=>{
    cell = document.createElement("td");
    cell.textContent = value;
    row.appendChild(cell);
  })

  return row;
}

function appendRow(row) {
  let table = document.querySelector("#book-table");
  table.appendChild(row);
}

function resetTableBody(){
  document.querySelector("tbody").remove()
  table = document.querySelector("#book-table")
  tbody = document.createElement("tbody")
  table.appendChild(tbody)
}


function displayBooks() {
  myLibrary.forEach((book)=>{
    appendRow(generateRow(book))
  })
}

function gatherBookData(){
  data = {}
  data.title = document.querySelector("#title").value
  data.author = document.querySelector("#author").value
  data.year = document.querySelector("#year").value
  data.read = document.querySelector("#read").checked
  data.id = myLibrary.size
  return data
}

book = {id: 0, title: "The Hobbit", author: "J.R.R Tolkien", year: 1930, read: false}

addBookToLibrary(book)
displayBooks()
