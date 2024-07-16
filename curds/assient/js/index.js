let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let category = document.getElementById("category");
let count = document.getElementById("count");
let submet = document.getElementById("submet");
let update = document.getElementById("update");
let btnSearch = document.getElementById("search");
let mode = "creat";
let index;
let modeSearch = "title";

function getTotle() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.background = "#040";
  } else {
    total.innerHTML = "";
    total.style.background = "#a00d02";
  }
}
// -- CREAT ELEMENT

let dataPro;
if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.product);
} else {
  dataPro = [];
}

submet.addEventListener("click", function () {
  let newProduct = {
    title: title.value.toLowerCase(),
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    category: category.value.toLowerCase(),
    count: count.value,
  };
  if (
    price.value != "" &&
    category.value != "" &&
    newProduct.count < 100 &&
    title.value != ""
    // typeof title.value != "number"
  ) {
    if (mode === "creat") {
      if (newProduct.count > 1) {
        for (let i = 0; i < newProduct.count; i++) {
          dataPro.push(newProduct);
        }
      } else {
        dataPro.push(newProduct);
      }
    } else {
      dataPro[index] = newProduct;
      submet.innerHTML = "Creat";
      count.style.display = "block";
    }
  }

  localStorage.setItem("product", JSON.stringify(dataPro));
  clearData();
  showData();
});
// --clearData                                    -
function clearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
}
//-- SHOW OR READ DATA                            -
function showData() {
  let table = "";
  for (let i = 0; i < dataPro.length; i++) {
    table += `           
    <tr>
      <td>${i + 1}</td>
      <td>${dataPro[i].title}</td>
      <td>${dataPro[i].price}</td>
      <td>${dataPro[i].taxes}</td>
      <td>${dataPro[i].ads}</td>
      <td>${dataPro[i].discount}</td>
      <td>${dataPro[i].total}</td>
      <td>${dataPro[i].category}</td>
      <td><button id="update" onclick= 'updateData(${i})'>update</button></td>
      <td><button id="delete" onclick= 'deletData(${i})'>delete</button></td>
    </tr>`;
  }
  document.getElementById("tbody").innerHTML = table;
  let btndelete = document.getElementById("deletAll");
  if (dataPro.length > 0) {
    btndelete.innerHTML = `<button onclick='deletAll()'>Delet All</button>`;
  } else {
    btndelete.innerHTML = "";
  }
  getTotle();
}
showData();
// -- DELETE DATA                                         -
function deletData(i) {
  dataPro.splice(i, 1);
  localStorage.product = JSON.stringify(dataPro);
  showData();
}
// -- DELET ALL DATA                                      -
function deletAll() {
  localStorage.clear();
  dataPro.splice(0);
  showData();
}
// -- UPDATE DATA                                         -

function updateData(i) {
  title.value = dataPro[i].title;
  price.value = dataPro[i].price;
  taxes.value = dataPro[i].taxes;
  ads.value = dataPro[i].ads;
  discount.value = dataPro[i].discount;
  getTotle();
  category.value = dataPro[i].category;
  submet.innerHTML = "Update";
  count.style.display = "none";
  mode = "update";
  index = i;
  scroll({
    top: 0,
    behavior: "smooth",
  });
}

// -- SEARCH                                              -

function serach(id) {
  if (id == "searchTitle") {
    modeSearch = "title";
  } else {
    modeSearch = "category";
  }
  btnSearch.placeholder = "search by" + " " + modeSearch;
  btnSearch.focus();
  btnSearch.value = "";
  showData();
}
function SerchBtn(value) {
  let table = "";
  for (let i = 0; i < dataPro.length; i++) {
    if (modeSearch == "title") {
      if (dataPro[i].title.includes(value.toLowerCase())) {
        table += `           
        <tr>
          <td>${i + 1}</td>
          <td>${dataPro[i].title}</td>
          <td>${dataPro[i].price}</td>
          <td>${dataPro[i].taxes}</td>
          <td>${dataPro[i].ads}</td>
          <td>${dataPro[i].discount}</td>
          <td>${dataPro[i].total}</td>
          <td>${dataPro[i].category}</td>
          <td><button id="update" onclick= 'updateData(${i})'>update</button></td>
          <td><button id="delete" onclick= 'deletData(${i})'>delete</button></td>
        </tr>`;
      }
    } else {
      if (dataPro[i].category.includes(value.toLowerCase())) {
        table += `
        <tr>
          <td>${i + 1}</td>
          <td>${dataPro[i].title}</td>
          <td>${dataPro[i].price}</td>
          <td>${dataPro[i].taxes}</td>
          <td>${dataPro[i].ads}</td>
          <td>${dataPro[i].discount}</td>
          <td>${dataPro[i].total}</td>
          <td>${dataPro[i].category}</td>
          <td><button id="update" onclick= 'updateData(${i})'>update</button></td>
          <td><button id="delete" onclick= 'deletData(${i})'>delete</button></td>
        </tr>`;
      }
    }
    document.getElementById("tbody").innerHTML = table;
  }
}
