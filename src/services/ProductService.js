const Row = {
  Title: 0,
  Brand: 1,
  Category: 2,
  Description: 3
};

async function setProducts(data, table) {
    const products = data.products;
    console.log(products);
    var fragment = document.createDocumentFragment();
    for(let productNo = 0; productNo < products.length; productNo++) {
        const { title, brand, category, description } = products[productNo];
        var product = document.createElement("tr");
        product.insertCell(Row.Title).innerHTML = title;
        product.insertCell(Row.Brand).innerHTML = brand;
        product.insertCell(Row.Category).innerHTML = category;
        product.insertCell(Row.Description).innerHTML = description;
        for(let cellNo = 0; cellNo < Object.keys(Row).length; cellNo++) product.cells[cellNo].className = "attribute";
        fragment.appendChild(product);
    }
    table.appendChild(fragment);
}

export { setProducts };