let cart = 0;

const products = [
  { name: "Classic T-Shirt", price: 25, category: "T-Shirts", image: "https://via.placeholder.com/300" },
  { name: "Denim Jacket", price: 60, category: "Jackets", image: "https://via.placeholder.com/300" },
  { name: "Slim Fit Jeans", price: 45, category: "Jeans", image: "https://via.placeholder.com/300" },
  { name: "Hoodie", price: 40, category: "Hoodies", image: "https://via.placeholder.com/300" }
];

const productDiv = document.getElementById("products");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("categoryFilter");

function displayProducts(list) {
  productDiv.innerHTML = "";

  list.forEach(p => {
    productDiv.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart() {
  cart++;
  document.getElementById("cartCount").innerText = cart;
}

function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = products.filter(p =>
    (category === "All" || p.category === category) &&
    p.name.toLowerCase().includes(searchText)
  );

  displayProducts(filtered);
}

searchInput.addEventListener("keyup", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

displayProducts(products);
