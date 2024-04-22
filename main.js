const Row = {
  ProductName: 0,
  Brand: 1,
  Category: 2,
  Description: 3
};

const url = 'https://dummyjson.com/products';
const table = document.getElementById('table-products').getElementsByTagName('tbody')[0];
const columnCount = document.getElementById('table-products').rows[0].cells.length;

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  const products = data.products;

  for(let productNo = 0; productNo < products.length; productNo++) {
    var newRow = table.insertRow(table.rows.length);
    var productName = newRow.insertCell(Row.ProductName);
    var brand = newRow.insertCell(Row.Brand);
    var category = newRow.insertCell(Row.Category);
    var description = newRow.insertCell(Row.Description);

    for(let cellNo = 0; cellNo < columnCount; cellNo++) {
      newRow.cells[cellNo].classList.add("p-2");
      newRow.cells[cellNo].classList.add("border");
      newRow.cells[cellNo].classList.add("border-white");
    }

    productName.innerHTML = products[productNo].title;
    brand.innerHTML = products[productNo].brand;
    category.innerHTML = products[productNo].category;
    description.innerHTML = products[productNo].description;
  }
}

getData();