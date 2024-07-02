let cartProduct = [];

let addToCartButtons = document.querySelectorAll("#addCartProduct");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});
function addToCart(event) {
  let productName = event.target.getAttribute("data-name");
  let productPrice = parseFloat(event.target.getAttribute("data-price"));

  let product = {
    name: productName,
    price: productPrice,
  };

  cartProduct.push(product);
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
  cart.style.display = "block";
  cartContent.innerHTML = "";
  let sum = 0;
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

      cartItems.innerHTML += `<p> ${itemName} - ${itemPrice} $  </p>`;
    }

    const orderBtn = document.createElement("button");
    const sumContainer = document.createElement("p");

    sumContainer.innerHTML = sum.toFixed(2) + "$";
    orderBtn.textContent = "Order";
    orderBtn.addEventListener("click", function () {
      alert("Замовлення оформлено!");
      clearCart();
      openCartBtn.click();
    });

    cartContent.appendChild(cartItems);
    cartContent.appendChild(sumContainer);
    cartContent.appendChild(orderBtn);
    cartContent.appendChild(closeBtn);
  }
};

closeBtn.onclick = function () {
  cart.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == cart) {
    cart.style.display = "none";
  }
};
