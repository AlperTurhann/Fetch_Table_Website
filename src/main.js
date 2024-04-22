import { getData } from "./utils/fetchUtil.js";
import { setProducts } from "./services/ProductService.js"

const url = 'https://dummyjson.com/products';
const table = document.getElementById('table-products').getElementsByTagName('tbody')[0];
const columnCount = document.getElementById('table-products').rows[0].cells.length;

async function setTable() {
  const data = await getData(url);
  if(data) setProducts(data, table);
}

if(table) {
  if(columnCount > 0) setTable();
  else console.error('Rows are missing');
} else console.error('Table is missing');