/* =========================
   NAVBAR TOGGLE (Mobile)
========================= */
const menuToggle = document.querySelector(".navbar-menu-toggle");
const navLinks = document.querySelector(".navbar-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* =========================
   SHOP NOW BUTTON REDIRECT
========================= */
const shopButtons = document.querySelectorAll(".header-button, .new-arrival button");

shopButtons.forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = "collection.html";
  });
});

/* =========================
   PRODUCT SEARCH (Collection Page)
========================= */
const searchInput = document.getElementById("search");
const productContainer = document.getElementById("product");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const searchValue = searchInput.value.toLowerCase();
    const products = productContainer.getElementsByClassName("products-box");

    for (let product of products) {
      const productName = product.textContent.toLowerCase();

      if (productName.includes(searchValue)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    }
  });
}
