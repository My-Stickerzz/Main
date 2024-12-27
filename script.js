
const PRICING = {
  TIER1: { max: 39, price: 0.750 },
  TIER2: { max: 80, price: 0.600 },
  TIER3: { price: 0.500 }
};
const MIN_PURCHASE = 12;
const COLORS = {
  // Primary Colors
  PRIMARY: '#ffac33',    // Gold
  DARK: '#000000',       // Black
  LIGHT: '#ffffff',      // White
  WARNING: '#ff9800',    // Orange

  // Gold Variations
  SECONDARY: '#b87a00',  // Dark Gold
  ACCENT: '#ffd700',     // Bright Gold

  // Grayscale
  GRAY_DARK: '#2a2a2a',  // Dark Gray
  GRAY: '#808080',       // Medium Gray
  GRAY_LIGHT: '#a0a0a0'  // Light Gray
};
// Add this near your color constants
const SWAL_THEME = {
  background: COLORS.DARK,
  color: COLORS.LIGHT,
  confirmButtonColor: COLORS.PRIMARY,
  cancelButtonColor: COLORS.SECONDARY,
  buttonsStyling: true,
  customClass: {
      popup: 'styled-modal',
      title: 'styled-title',
      htmlContainer: 'styled-content',
      confirmButton: 'styled-confirm',
      cancelButton: 'styled-cancel',
      input: 'styled-input'
  }
};
// Add this to your existing style tag or CSS file
const styles = `
  .styled-modal {
      background: ${COLORS.DARK} !important;
      border: 2px solid ${COLORS.PRIMARY} !important;
      color: ${COLORS.LIGHT} !important;
  }
  .styled-title {
      color: ${COLORS.PRIMARY} !important;
      font-weight: bold !important;
  }
  .styled-content {
      color: ${COLORS.LIGHT} !important;
  }
  .styled-confirm {
      background: ${COLORS.PRIMARY} !important;
      color: ${COLORS.DARK} !important;
      font-weight: bold !important;
  }
  .styled-cancel {
      background: ${COLORS.SECONDARY} !important;
      color: ${COLORS.LIGHT} !important;
  }
  .styled-input {
      background: ${COLORS.DARK} !important;
      border: 1px solid ${COLORS.PRIMARY} !important;
      color: ${COLORS.LIGHT} !important;
  }
`;
// Add this at the start of your script
document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('random-text-btn');
  const phrases = [
    'Vazy chez nos Produits',
    'Voir les produits',
    'Accéder aux produits',
    'Explorez les produits',
    'Découvrez nos produits',
    'Aller aux produits',
    'Venez voir nos produits'
  ];

  // Randomly choose a phrase from the list
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

  // Set the button text to the randomly chosen phrase
  button.textContent = randomPhrase;
});


const PRODUCTS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
const products = [
  {
    name: "#Pack Van Gogh",
    price: 27.000,
    image: "IMG-0791.JPG",
    intro: "Van Gogh Pack <br> pack with 18 different high quality stickers in the theme of Van Gogh <br> Product with great reviews",
    category: "pack",
    theme:"Van Gogh"
  },
  {
      name: "IMG-0791",
      price: 0.750,
      image: "IMG-0791.JPG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "IMG-1036",
      price: 0.750,
      image: "IMG-1036.PNG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "IMG-1044",
      price: 0.750,
      image: "IMG-1044.JPG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "IMG-1046",
      price: 0.750,
      image: "IMG-1046.JPG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "IMG-1038",
      price: 0.750,
      image: "IMG-1038.PNG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "IMG-1028",
      price: 0.750,
      image: "IMG-1028.PNG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "IMG-1029",
      price: 0.750,
      image: "IMG-1029.PNG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "Product 2",
      price: 0.750,
      image: "/product/product.avif",
      intro: "A bad product",
      category: "sticker",
      theme:"math"
    },
    {
      name: "IMG-1034",
      price: 0.750,
      image: "IMG-1034.PNG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "IMG-1035",
      price: 0.750,
      image: "IMG-1035.PNG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "IMG-1041",
      price: 0.750,
      image: "IMG-1041.PNG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "IMG-1033",
      price: 0.750,
      image: "IMG-1033.PNG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "IMG-1039",
      price: 0.750,
      image: "IMG-1039.PNG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "unnamed",
      price: 0.750,
      image: "unnamed.png",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "IMG-1024",
      price: 0.750,
      image: "IMG-1024.PNG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "IMG-1030",
      price: 0.750,
      image: "IMG-1030.PNG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "IMG-1026",
      price: 0.750,
      image: "IMG-1026.PNG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "IMG-1037",
      price: 0.750,
      image: "IMG-1037.PNG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
    {
      name: "IMG-1025",
      price: 0.750,
      image: "IMG-1025.PNG",
      intro: "Van Gogh themed sticker",
      category: "sticker",
      theme: "Van Gogh"
    },
  {
    name: "Product 3",
    price: 0.750,
    image: "/product/product.avif",
    intro: "Too expensive product",
    category: "sticker",
    theme:"computer"
  },
  {
    name: "Product 4",
    price: 0.750,
    image: "/product/product.avif",
    intro: "Too cheap product",
    category: "sticker",
    theme:"computer"
  },
];


const CACHE_DURATION = 1000 * 60 * 30; // 15 minutes
let lastFetch = 0;

// 3. Smart fetching with cache
async function getProducts() {
    const now = Date.now();
    
    // Check cache first
    if (products.length && (now - lastFetch) < CACHE_DURATION) {
        return products;
    }
    
    try {
        const response = await fetch(PRODUCTS_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        
        products = await response.json();
        lastFetch = now;
        
        // Cache in localStorage as backup
        localStorage.setItem('products', JSON.stringify(products));
        localStorage.setItem('lastFetch', now);
        
        return products;
    } catch (error) {
        console.error('Fetch failed:', error);
        // Fallback to cached data
        const cachedProducts = localStorage.getItem('products');
        return cachedProducts ? JSON.parse(cachedProducts) : [];
    }
}

// 4. Initialize with loading state
document.addEventListener('DOMContentLoaded', async () => {
    const productList = document.getElementById("product-list");
    productList.innerHTML = '<div class="text-center"><i class="fas fa-spinner fa-spin fa-3x text-warning"></i></div>';
    
    products = await getProducts();
    displayProducts();
    initializeThemeFilters();
});

const shoppingCart = [];
let cartButton = document.querySelector(".navbar-text.btn.btn-warning i");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
const PRODUCTS_PER_PAGE = 12;
let currentPage = 1;

displayProducts()

function displayProducts(productsToShow = products) {
    const productListDiv = document.getElementById("product-list");
    productListDiv.innerHTML = "";
    
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const paginatedProducts = productsToShow.slice(startIndex, endIndex);
    
    paginatedProducts.forEach((product) => {
      const productCard = `
            <div class="col-6 col-md-6 col-lg-4 mb-3 product">
                <div class="card" style="background: ${COLORS.DARK}; border: 2px solid ${COLORS.PRIMARY} !important;">
                    <div class="card-img-wrapper skeleton">
                        <img src="${product.image}" 
                            class="card-img-top btn" 
                            alt="product img" 
                            loading="lazy"
                            onload="this.parentElement.classList.remove('skeleton'); this.classList.add('loaded')"
                            onclick="description('${product.intro}', '${product.image}', '${product.name}', '${product.price}')"
                            style="transition: transform 0.3s ease;">
                    </div>
              </div>
              <div class="card-body text-white">
                  <h6 style="display:none">${product.category}</h6>
                  <h5 class="card-title" style="color: white">${product.name}</h5>
                  <hr style="border-color: ${COLORS.PRIMARY}">
                  <p class="card-text">Price: <span style="color: ${COLORS.PRIMARY}">${product.price}</span> <small><b>دت</b></small></p>
                  <button class="btn float-right" 
                      style="background: ${COLORS.PRIMARY}; color: ${COLORS.DARK}; font-weight: bold;"
                      onmouseover="this.style.background='${COLORS.SECONDARY}'"
                      onmouseout="this.style.background='${COLORS.PRIMARY}'"
                      onclick="confirmAddToCart('${product.name}', ${product.price}, '${product.intro}', '${product.image}')">
                      Ajouter
                  </button>
              </div>
          </div>
      </div>
  `;
  productListDiv.innerHTML += productCard;
    });
    
    displayPagination(productsToShow.length);
}


function description(intro, image, productName, price) {
  Swal.fire({
    ...SWAL_THEME,
    title: `<h3 class="text-warning font-weight-bold mb-4">${productName}</h3>`,
    html: `
      <div class="container-fluid p-0">
        <div class="row g-4">
          <div class="col-lg-6 mb-3 mb-lg-0">
            <div class="position-relative" style="overflow: hidden; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              <img src="${image}" 
                class="img-fluid w-100" 
                style="object-fit: cover; aspect-ratio: 1/1; transition: all 0.3s ease;"
                onmouseover="this.style.transform='scale(1.05)'; this.style.filter='brightness(1.1)'"
                onmouseout="this.style.transform='scale(1)'; this.style.filter='brightness(1)'">
            </div>
          </div>
          <div class="col-lg-6 d-flex flex-column justify-content-between align-content-center">
            <div class="px-3 m-10">
              <p class="text-light lead mb-4 intro-text" style="font-size: 1.1rem; line-height: 1.8; letter-spacing: 0.3px;">
                ${intro}
              </p>
            </div>
            <div class="px-3 mt-auto">
              <button class="btn btn-lg w-100" 
                style="background: ${COLORS.PRIMARY}; color: ${COLORS.DARK}; font-weight: bold; transition: all 0.3s ease;"
                onmouseover="this.style.background='${COLORS.SECONDARY}'"
                onmouseout="this.style.background='${COLORS.PRIMARY}'"
                onclick="confirmAddToCart('${productName}', ${price}, '${intro}', '${image}')">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    `,
    backdrop: 'rgba(0,0,0,0.85)',
    showConfirmButton: false,
    background: COLORS.DARK,
    width: '90%',
    maxWidth: '700px',
    padding: '2rem',
    showCloseButton: true,
    customClass: {
      container: 'animated fadeIn',
      popup: 'animated fadeInUp faster',
      closeButton: 'btn-close btn-close-white'
    }
  });
}

function displayPagination(totalProducts) {
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination justify-content-center mt-4';
    const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
    
    if(document.querySelector('.pagination')) {
        document.querySelector('.pagination').remove();
    }
    
    paginationContainer.innerHTML = `
        <a href="#display"><button class="btn btn-warning mx-1" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            <b><=</b>
        </button>
        <span class="mx-3 pt-2">Page ${currentPage} of ${totalPages}</span>
        <button class="btn btn-warning mx-1" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            =<b>></b>
        </button></a>
    `;
    
    document.getElementById("product-list").after(paginationContainer);
}

function changePage(newPage) {
    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        const selectedThemes = Array.from(document.querySelectorAll('.theme-checkbox:checked'))
            .map(cb => cb.value);
        
        const filteredProducts = selectedThemes.length > 0 
            ? products.filter(product => selectedThemes.includes(product.theme))
            : products;
        
        displayProducts(filteredProducts);
    }
}

function initializeThemeFilters() {
    const filterContainer = document.querySelector('.form-check');
    filterContainer.innerHTML = '';
    
    themes.forEach(theme => {
        filterContainer.innerHTML += `
            <div class="form-check">
                <input class="form-check-input theme-checkbox" type="checkbox" value="${theme}" id="${theme}">
                <label class="form-check-label">${theme.charAt(0).toUpperCase() + theme.slice(1)}</label>
            </div>
        `;
    });

    document.querySelectorAll('.theme-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            currentPage = 1;
            displayFilteredProducts();
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    initializeThemeFilters();
});
// Update search function to reset pagination
function SearchFunction() {
  currentPage = 1;
  var input, filter, div, products, h5, i, txtValue, noResults;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("product-list");
  products = div.getElementsByClassName("product");
  noResults = true;

  for (i = 0; i < products.length; i++) {
      h5 = products[i].getElementsByTagName("h5")[0];
      txtValue = h5.textContent || h5.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          products[i].style.display = "";
          noResults = false;
      } else {
          products[i].style.display = "none";
      }
  }

  var noResultsMessage = document.getElementById("no-results-message");
  if (noResults) {
      if (!noResultsMessage) {
          noResultsMessage = document.createElement("h3");
          noResultsMessage.id = "no-results-message";
          noResultsMessage.innerHTML = `<div class="container mt-5"><center>Aucun produit trouvé avec ce nom "${input.value}"</center></div>`;
          noResultsMessage.style.color = "red";
          div.appendChild(noResultsMessage);
      } else{
        noResultsMessage.remove();
      }
  } else{
      noResultsMessage.remove();
  }
}

// Get unique themes after products array
const themes = [...new Set(products.map(product => product.theme))];

// Add new function to handle filtered display
function displayFilteredProducts() {
    const selectedThemes = Array.from(document.querySelectorAll('.theme-checkbox:checked'))
        .map(cb => cb.value);
    
    const filteredProducts = selectedThemes.length > 0 
        ? products.filter(product => selectedThemes.includes(product.theme))
        : products;
    
    displayProducts(filteredProducts);
}

function confirmAddToCart(productName, price, intro, image) {
  Swal.fire({
        ...SWAL_THEME,
        title: "7ot fil panier",
    html: `
            <div style="display: flex; align-items: center;">
                <div style="padding-right: 20px;">
                    <img src="${image}" alt="${productName}" style="width: 100%;"><hr>
                    <h5>${productName}</h5>
                    <input type="number" id="quantity" class="swal2-input" placeholder="Quantity" min="1" max="10" value="1" style="width: 30%;">
                    <button class="swal2-confirm swal2-styled" onclick="addToCart('${productName}', ${price}, document.getElementById('quantity').value)">Ajouter</button>
            </div>
        `,
    showConfirmButton: false,
    background: "#fffff4",
  });
}

// Add these new functions
function calculatePrice(quantity, category) {
  if (category.toLowerCase() === 'pack') return quantity * PRICING.TIER1.price;
  
  if (quantity > 80) return quantity * PRICING.TIER3.price;
  if (quantity > 40) return quantity * PRICING.TIER2.price;
  return quantity * PRICING.TIER1.price;
}

function validatePurchase() {
  const totalItems = shoppingCart.reduce((sum, item) => sum + item.count, 0);
  const hasPack = shoppingCart.some(item => item.category?.toLowerCase() === 'pack');
  return hasPack || totalItems >= MIN_PURCHASE;
}

function addToCart(productName, price, quantity) {
  quantity = parseInt(quantity);
  const product = products.find(p => p.name === productName);
  const actualPrice = calculatePrice(quantity, product?.category);
  
  const existingProductIndex = shoppingCart.findIndex(
      (item) => item.productName === productName
  );

  if (existingProductIndex !== -1) {
      shoppingCart[existingProductIndex].count += quantity;
  } else {
      shoppingCart.push({ 
          productName, 
          price: actualPrice / quantity,
          count: quantity,
          category: product?.category
      });
  }

  cartButton.classList.remove("fa-cart-shopping");
  cartButton.classList.add("fa-cart-plus");

  Swal.fire({
      icon: "success",
      title: `<h3>${productName}</h3>`,
      html: `Added ${quantity} to Cart.<br>Price per unit: ${(actualPrice / quantity).toFixed(3)} DT`,
      showConfirmButton: false,
      timer: 1500
  });
}


function openCart() {
  let cartContent = "<h6>Added Items</h6>";
  if (shoppingCart.length === 0) {
    cartContent += "<p>Votre panier est vide</p>";
    // Change the cart button icon back to the regular icon
    cartButton.classList.remove("fa-cart-plus");
    cartButton.classList.add("fa-cart-shopping");
  } else {
    shoppingCart.forEach((item) => {
      cartContent += `
                <div>
                    <p>
                    <button class="btn btn-danger" onclick="removeFromCart('${item.productName}')"><i class="fa fa-close"></i></button>
                    <big><u>${item.productName}</u> :</big> ${item.price}
                    <input type="number" min="1" class="swal2-input" value="${item.count}" onchange="updateCount('${item.productName}', this.value)" style="width:24%" controls="true">
                    </p>
                </div>
            `;
    });
    cartContent += `
            <div>
                <button class="btn btn-primary" onclick="checkout()" width="100%">Buy <i class="fa fa-paper-plane"></i></button>
            </div>
        `;
  }
  Swal.fire({
        ...SWAL_THEME,
        title: "Your shopping cart",
    html: cartContent,
    confirmButtonText: "irja3 bech t7ot 7weyij fil panier",
    confirmButtonColor: "#fc5d",
  });
}

function removeFromCart(productName) {
  const index = shoppingCart.findIndex(
    (item) => item.productName === productName
  );
  if (index !== -1) {
    shoppingCart.splice(index, 1);
    openCart(); // Update the cart display after removal
  }
  // Check if cart is empty to change the icon back
  if (shoppingCart.length === 0) {
    cartButton.classList.remove("fa-cart-plus");
    cartButton.classList.add("fa-cart-shopping");
  }
}

function updateCount(productName, newCount) {
  const index = shoppingCart.findIndex(
    (item) => item.productName === productName
  );
  if (index !== -1) {
    shoppingCart[index].count = parseInt(newCount);
  }
}

function promptUserData(callback) {
  Swal.fire({
        ...SWAL_THEME,
        title: "Enter Your Details",
    html:
      '<input id="swal-input1" class="swal2-input" placeholder=ismik kemil">' +
      '<input id="swal-input2" class="swal2-input" placeholder="noumro telifounik">' +
      '<input id="swal-input2" type="email" required class="swal2-input" placeholder="email">' +
      '<select id="swal-input3" class="swal2-input">' +
        '<option value="" disabled selected>7ot inti mnin</option>' +
        '<option value="Tunis">Tunis</option>' +
        '<option value="Sfax">Sfax</option>' +
        '<option value="Sousse">Sousse</option>' +
        '<option value="Kairouan">Kairouan</option>' +
        '<option value="Bizerte">Bizerte</option>' +
        '<option value="Gabes">Gabes</option>' +
        '<option value="Ariana">Ariana</option>' +
        '<option value="Gafsa">Gafsa</option>' +
        '<option value="Monastir">Monastir</option>' +
        '<option value="Manouba">Manouba</option>' +
        '<option value="Ben Arous">Ben Arous</option>' +
        '<option value="Kasserine">Kasserine</option>' +
        '<option value="Medenine">Medenine</option>' +
        '<option value="Mahdia">Mahdia</option>' +
        '<option value="Zaghouan">Zaghouan</option>' +
        '<option value="Beja">Beja</option>' +
        '<option value="Jendouba">Jendouba</option>' +
        '<option value="Nabeul">Nabeul</option>' +
        '<option value="Kebili">Kebili</option>' +
        '<option value="Siliana">Siliana</option>' +
        '<option value="Tataouine">Tataouine</option>' +
        '<option value="Tozeur">Tozeur</option>' +
        '<option value="Kef">Kef</option>' +
      '</select>' +
      '<input id="swal-input4" class="swal2-input" placeholder="Your Address">',
    focusConfirm: false,
    preConfirm: () => {
      const name = document.getElementById('swal-input1').value;
      const phone = document.getElementById('swal-input2').value;
      const city = document.getElementById('swal-input3').value;
      const address = document.getElementById('swal-input4').value;

      // Validation logic for each field
      const nameRegex = /^[a-zA-Z\s]*$/;
      const phoneRegex = /\d{2}\d{3}\d{3}/;

      if (!name) {
        Swal.showValidationMessage('Please enter your name');
        return false;
      } else if (!nameRegex.test(name)) {
        Swal.showValidationMessage('Invalid name');
        return false;
      }

      if (!phone) {
        Swal.showValidationMessage('Please enter your phone number');
        return false;
      } else if (!phoneRegex.test(phone)) {
        Swal.showValidationMessage('Phone number should follow the format: 50 101 300');
        return false;
      }

      if (!city) {
        Swal.showValidationMessage('Please select your city');
        return false;
      }

      if (!address) {
        Swal.showValidationMessage('Please enter your home address');
        return false;
      }

      // Return the data for use in callback
      return {
        name: name,
        phone: phone,
        location: city,
        address: address,
      };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      // Pass the data to the callback function
      callback(result.value);
    }
  });
}

// Add new function to handle free sticker
function addFreeSticker() {
  const stickerProducts = products.filter(p => p.category === 'sticker');
  const randomSticker = stickerProducts[Math.floor(Math.random() * stickerProducts.length)];
  shoppingCart.push({
      productName: `Free ${randomSticker.name}`,
      price: 0,
      count: 1,
      isFree: true,
      category: 'sticker'
  });
}

// Modify checkout function
function checkout() {
  if (!validatePurchase()) {
      Swal.fire({
          title: "Minimum Purchase Required",
          text: `Please add at least ${MIN_PURCHASE} items or include a pack item.`,
          icon: "warning"
      });
      return;
  }

  // Add free sticker before proceeding
  if (!shoppingCart.some(item => item.isFree)) {
      addFreeSticker();
  }

  const totalPrice = shoppingCart.reduce((total, item) => 
      total + (item.isFree ? 0 : item.price * item.count), 0);

  promptUserData((userData) => {
      Swal.fire({
          title: "Confirm Purchase",
          html: `
              <p>Total Items: ${shoppingCart.reduce((sum, item) => sum + item.count, 0)}</p>
              <p>Total Price: ${totalPrice.toFixed(3)} DT</p>
              <p style="color: green;">✨ Includes a free sticker! ✨</p>
          `,
          icon: "info",
          showCancelButton: true,
          confirmButtonText: "Confirm",
          confirmButtonColor: "green",
          cancelButtonText: "Cancel",
          cancelButtonColor: "#6c757d"
      }).then((result) => {
          if (result.isConfirmed) {
            shoppingCart.forEach((item) => {
              sendProductToGoogleSheets(
                item.productName,
                item.price,
                item.count,
                userData
              );
            });

            // Clear the shopping cart after successful checkout
            shoppingCart.length = 0;
            const newUrl = '/checkout'; // Change this to the desired URL
            const newState = { page: 'checkout' }; // Change this to any state you want to associate
            history.pushState(newState, '', newUrl);
          }
      });
  });
}
// Function to send a product along with user data to Google Sheets
function sendProductToGoogleSheets(productName, price, count, userData) {
  Swal.fire({
        ...SWAL_THEME,
        title: "Sending...",
    titleColor: "#fc1111",
    text: "9e3din n3adiwlik fil command mte3ik",
    icon: "info",
    allowOutsideClick: false,
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    },
  });

  const scriptUrl = " ";

  const formData = new FormData();
  formData.append("productName", productName);
  formData.append(price, price);
  formData.append("count", count);
  formData.append("phone", userData.phone);
  formData.append(name, userData.name);
  formData.append("location", userData.location);
  formData.append("addressResult", userData.address);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", scriptUrl);
  xhr.onload = function () {
    if (xhr.status === 200) {
      navigator.vibrate(1000); // vibrate for 200ms
      navigator.vibrate([200, 100, 200]);
      console.log("Product sent successfully:", productName);
      // Show success message
      Swal.fire({
        title: "Demand Reached",
        text: "wsol ! taw nkalmouk 3la 9rib nchallah.",
        imageUrl: "/img/sc.png",
        imageAlt: "Custom Success Icon",
        showConfirmButton: false,
        timer: 2000,
        icon: null,
        background: "black",
        color: "gold",
      });
    } else {
      console.error("Error sending product:", productName);
    }
  };
  xhr.onerror = function () {
    console.error("Error sending product:", productName);
  };
  xhr.send(formData);
}