function Book(data) {
  this.id = data.id;
  this.title = data.title;
  this.author = data.author;
  this.year = data.year;
  this.read = data.read;
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
