let foto1Page9 = document.querySelector(".foto9_1");
let foto2Page9 = document.querySelector(".foto9_2");
let foto3Page9 = document.querySelector(".foto9_3");

let btns = document.querySelectorAll(".optionOrderBtn");
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
