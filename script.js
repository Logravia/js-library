let myLibrary = [];

function Book(data) {
  this.id = data.id;
  this.title = data.title;
  this.author = data.author;
  this.year = data.year;
  this.read = data.read;
}

function getBookIndex(id) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].id == id) return i;
  }
}

function deleteBook(id) {
  indexOfBook = getBookIndex;
  myLibrary.splice(indexOfBook, 1);
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
  let table = document.querySelector("tbody");
  table.appendChild(row);
}

function resetTableBody(){
  document.querySelector("tbody").remove()
  table = document.querySelector("#book-table")
  tbody = document.createElement("tbody")
  table.appendChild(tbody)
}


function displayBooks() {
  resetTableBody()
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

let submitButton = document.querySelector("#submit-book")

submitButton.addEventListener('click', () => {
  addBookToLibrary(gatherBookData())
  displayBooks()
});
