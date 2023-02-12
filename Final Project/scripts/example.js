import products from "./products.js";

const shopContent = document.querySelector("#shopContent");
const productInfo = document.querySelector(".product_info");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const shoppingCartModal = document.getElementById("shopping-cart-modal");
const removeFromCartBtn = document.getElementById("remove-from-cart-btn");
const continueShoppingBtn = document.getElementById("continue-shopping-btn");
const goToCheckoutBtn = document.getElementById("go-to-checkout-btn");

let cart = [];
let addedProducts = [];
let totalCart = 0;

// Crear productos en la página
function createProducts() {
  products.forEach((product) => {
    const content = document.createElement("div");
    content.className = `product_card producto-card-${product.id}`;
    content.innerHTML = `
    <div class="image_box">
      <img class="image-${product.id}" alt="Image ${product.name}" src="${product.img}">
    </div>
    <div class="text_product_container">
      <h3 class="product_name">${product.name}</h3>
      <p class="product_price">$${product.price.toFixed(2)}</p>  
    </div>
    `;
    shopContent.appendChild(content);
    const buyButton = document.createElement("button");
    buyButton.className = "button_buy btn btn-outline-primary";
    buyButton.innerHTML = "Buy Now";
    buyButton.addEventListener("click", () => {
      addToCart(product);
    });
    content.appendChild(buyButton);
  });
}

// Añadir producto al carrito
function addToCart(product) {
  cart.push({
    id: product.id,
    img: product.img,
    name: product.name,
    price: product.price,
    stock: product.stock,
  });
  console.log(cart);
}

// Mostrar carrito de compras
function showShoppingCart() {
  shoppingCartModal.style.display = "block";
  if (cart.length === 0) {
    const messageCartEmpty = document.createElement("div");
    messageCartEmpty.className = "message_empty";
    messageCartEmpty.innerHTML = `
      <h2>You Cart is Empty</h2>
      <p>Please add products!!</p>
    `;
    productInfo.appendChild(messageCartEmpty);
  }
  cart.forEach((product) => {
    if (!addedProducts.includes(product.id)) {
      addedProducts.push(product.id);
      const cartCard = document.createElement("div");
      cartCard.className = "content_product_card";
      cartCard.innerHTML =  `
      <h4 class="nameproducto_card">${product.name}</h4>
      <p class="nameproducto_price">$${product.price.toFixed(2)}</p>
      <div class="quantity-selector">
        <input type="number" value="1" min="1" max="${product.stock}">
      </div>
      <div class="remove-button-box">
        <button class"remove-button">Remover</button>
      </div>
      `;
      productInfo.appendChild(cartCard);

      // Actualizar el total del carrito
      totalCart += product.price;
      const totalBuy = document.createElement("div");
      totalBuy.className ="total_cart";
      totalBuy.innerHTML = `Total: $${totalCart.toFixed(2)}`;

      // Remover producto del carrito
      const removeBtn = cartCard.querySelector(".remove-button");
      removeBtn.addEventListener("click", () => {
        removeFromCart(product.id);
      });
    }
  });
}

// Remover producto del carrito
function removeFromCart(id) {
  const productIndex = cart.findIndex((product) => product.id === id);
  totalCart -= cart[productIndex].price;
  cart.splice(productIndex, 1);
  const productToRemove = document.querySelector(`.producto-card-${id}`);
  productInfo.removeChild(productToRemove);
  document.querySelector(".total_cart").innerHTML = `Total: $${totalCart.toFixed(2)}`;

  // Mostrar mensaje si el carrito está vacío
  if (cart.length === 0) {
    const messageCartEmpty = document.createElement("div");
    messageCartEmpty.className = "message_empty";
    messageCartEmpty.innerHTML = `
      <h2>You Cart is Empty</h2>
      <p>Please add products!!</p>
    `;
    productInfo.appendChild(messageCartEmpty);
  }
}

// Cerrar modal de carrito de compras
function closeModal() {
  shoppingCartModal.style.display = "none";
}

// Abrir modal de carrito de compras
openModalBtn.addEventListener("click", showShoppingCart);

// Cerrar modal de carrito de compras
closeModalBtn.addEventListener("click", closeModal);

createProducts();
