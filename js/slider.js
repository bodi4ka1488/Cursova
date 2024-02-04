let pages = document.querySelectorAll(".page");
let currentPageIndex = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    if (i === index) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });
}

function changePage() {
  currentPageIndex = (currentPageIndex + 1) % pages.length;
  showPage(currentPageIndex);
}

setInterval(changePage, 5000);
// ========================
let foto1Page9 = document.querySelector(".foto9_1");
let foto2Page9 = document.querySelector(".foto9_2");
let foto3Page9 = document.querySelector(".foto9_3");

let btns = document.querySelectorAll(".page9Btns");
let btnCart = document.querySelectorAll(".btnCart");
let names = document.querySelectorAll(".name");
let prices = document.querySelectorAll(".price");

const products = [
  {
    foto: "./images/pizza-1.jpg",
    name: "Ittalian Pizza",
    price: "3.90",
  },
  {
    foto: "./images/pizza-2.jpg",
    name: "Greek Pizza",
    price: "1.90",
  },
  {
    foto: "./images/pizza-3.jpg",
    name: "Mardharita",
    price: "2.90",
  },
  {
    foto: "./images/Gin.jpg",
    name: "Tanqueray",
    price: "55.90",
  },
  {
    foto: "./images/Rum.jpg",
    name: "Bacardi",
    price: "44.20",
  },
  {
    foto: "./images/Viski.jpg",
    name: "Johnnie Walker",
    price: "32.90",
  },
  {
    foto: "./images/bigTasty.jpg",
    name: "Big Tasty",
    price: "5.90",
  },
  {
    foto: "./images/BigMac.jpg",
    name: "BigMac",
    price: "4.20",
  },
  {
    foto: "./images/Cheaseburger.jpg",
    name: "Cheesburger",
    price: "2.30",
  },
  {
    foto: "./images/image_1.jpg",
    name: "Pasta Carbonara",
    price: "3.20",
  },
  {
    foto: "./images/image_2.jpg",
    name: "Pasta Pora",
    price: "2.41",
  },
  {
    foto: "./images/image_30.jfif",
    name: "Pasta Gora",
    price: "8.90",
  },
];

function createBox(btn, fotoElement, nameElement, priceElement, product) {
  fotoElement.style.backgroundImage = `url(${product.foto})`;
  nameElement.innerHTML = product.name;
  priceElement.innerHTML = product.price;

  // Оновлення атрибутів data-name та data-price на кнопці
  btn.setAttribute("data-name", product.name);
  btn.setAttribute("data-price", product.price);
}

// Викликаємо createBox для перших трьох елементів при завантаженні сторінки
createBox(btnCart[0], foto1Page9, names[0], prices[0], products[0]);
createBox(btnCart[1], foto2Page9, names[1], prices[1], products[1]);
createBox(btnCart[2], foto3Page9, names[2], prices[2], products[2]);

// Додаємо обробник подій для кожної кнопки
btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    createBox(btnCart[0], foto1Page9, names[0], prices[0], products[index * 3]);
    createBox(
      btnCart[1],
      foto2Page9,
      names[1],
      prices[1],
      products[index * 3 + 1]
    );
    createBox(
      btnCart[2],
      foto3Page9,
      names[2],
      prices[2],
      products[index * 3 + 2]
    );
  });
});

let center = [50.402270061694075, 30.37076258590746];
let map2 = L.map("map").setView(center, 30);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 8,
}).addTo(map2);

L.marker(center).addTo(map2);
(latitude = 50.402270061694075), (longitude = 30.37076258590746);

// Змінна для збереження товарів у корзині
let cartProduct = [];

// Знаходимо всі кнопки з класом 'add-to-cart'
let addToCartButtons = document.querySelectorAll("#addCartProduct");

// Додаємо обробник події для кожної кнопки
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

// Функція для додавання товару в корзину
function addToCart(event) {
  let productName = event.target.getAttribute("data-name");
  let productPrice = parseFloat(event.target.getAttribute("data-price"));

  let product = {
    name: productName,
    price: productPrice,
  };

  cartProduct.push(product);
  console.log(cartProduct);
}

function clearCart() {
  cartProduct = [];
}

// ++++++++++++++++++++++++++++++++++++
const cart = document.getElementById("myCart");
const openCartBtn = document.getElementById("openCartBtn");
const cartContent = document.querySelector(".cart-content");
const closeBtn = document.getElementsByClassName("close")[0];
let sum = 0;

openCartBtn.onclick = function () {
  cartContent.innerHTML = "";
  if (Object.keys(cartProduct).length === 0) {
    cartContent.innerHTML = "<p>Ви ще нічого не додали до корзини.</p>";
    cartContent.appendChild(closeBtn);
  } else {
    const cartItems = document.createElement("div");
    cartItems.innerHTML += "<h3>Товари в корзині:</h3>";

    for (const item in cartProduct) {
      const itemName = cartProduct[item].name;
      const itemPrice = cartProduct[item].price;
      sum += itemPrice;

      cartItems.innerHTML += "<p>" + itemName + " - " + itemPrice + "</p>";
    }
    var orderBtn = document.createElement("button");
    var sumContainer = document.createElement("p");
    sumContainer.innerHTML = sum.toFixed(2) + "$";
    orderBtn.textContent = "Order";
    orderBtn.addEventListener("click", function () {
      alert("Замовлення оформлено!");
      clearCart();
      openCartBtn.click();
    });

    cartContent.appendChild(cartItems);
    cartContent.appendChild(orderBtn);
    cartContent.appendChild(sumContainer);
    cartContent.appendChild(closeBtn);
  }
  cart.style.display = "block";
};

closeBtn.onclick = function () {
  cart.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == cart) {
    cart.style.display = "none";
  }
};
function removeProductByName(products, name) {
  var indexToRemove = products.findIndex(function (product) {
    return product.name === name;
  });
  if (indexToRemove !== -1) {
    products.splice(indexToRemove, 1);
  }
}
