
// Toggle Contact & Helpline Modal
function toggleContactModal(open, e) {
  if (e && e.target && e.target.id !== 'contact-modal-overlay' && !e.target.classList.contains('btn-close-contact-modal')) {
    return;
  }
  const modal = document.getElementById('contact-modal-overlay');
  if (!modal) return;

  if (open) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    modal.classList.remove('active');
    // Restore overflow if cart and invoice modals are closed
    const drawer = document.getElementById('cart-drawer');
    const invModal = document.getElementById('invoice-modal-overlay');
    const delModal = document.getElementById('delivery-modal-overlay');
    const anyOpen = (drawer && drawer.classList.contains('active')) ||
                    (invModal && invModal.classList.contains('active')) ||
                    (delModal && delModal.classList.contains('active'));
    if (!anyOpen) {
      document.body.style.overflow = '';
    }
  }
}

/**
 * RASESHWARI SPICES (Raseshwari Foods Pvt. Ltd., Sitamarhi, Bihar)
 * E-Commerce Catalog & Direct WhatsApp / Email / Call Ordering Engine
 * English Edition
 */

const PRODUCTS = [
  {
    id: "turmeric-powder",
    name: "Raseshwari Turmeric Powder (हल्दी)",
    subTitle: "High Curcumin • Cold Stone-Ground • 100% Pure & Natural",
    category: "pure",
    image: "assets/images/turmeric-powder.jpg",
    rating: 4.9,
    reviews: 148,
    isBestseller: true,
    desc: "100% Pure & Natural Haldi from Sitamarhi. High natural curcumin content, vibrant golden colour, zero synthetic additives.",
    sizes: {
      "50g": { price: 28, mrp: 35, discount: "20% OFF" },
      "100g": { price: 52, mrp: 65, discount: "20% OFF" },
      "200g": { price: 99, mrp: 125, discount: "21% OFF" },
      "500g": { price: 235, mrp: 299, discount: "21% OFF" },
      "1kg": { price: 449, mrp: 580, discount: "23% OFF" }
    }
  },
  {
    id: "red-chilli-powder",
    name: "Raseshwari Red Chilli Powder (लाल मिर्च)",
    subTitle: "Natural Crimson • Bold & Spicy • Cold Stone-Ground",
    category: "pure",
    image: "assets/images/raseshwari-chilli-50g.jpg",
    rating: 4.9,
    reviews: 162,
    isBestseller: true,
    desc: "Sun-ripened premium red chillies. Rich natural crimson colour, sharp punch, completely adulteration-free with natural essential oils.",
    sizes: {
      "50g": { price: 32, mrp: 40, discount: "20% OFF" },
      "100g": { price: 60, mrp: 75, discount: "20% OFF" },
      "200g": { price: 115, mrp: 145, discount: "21% OFF" },
      "500g": { price: 275, mrp: 350, discount: "21% OFF" },
      "1kg": { price: 520, mrp: 680, discount: "24% OFF" }
    }
  },
  {
    id: "coriander-powder",
    name: "Raseshwari Coriander Powder (धनिया)",
    subTitle: "Aromatic Whole Seed Dhaniya • Retains Essential Oils",
    category: "pure",
    image: "assets/images/coriander-powder.jpg",
    rating: 4.8,
    reviews: 124,
    isBestseller: true,
    desc: "Carefully selected whole coriander seeds, cold ground to retain refreshing natural aroma and rich culinary flavour.",
    sizes: {
      "50g": { price: 26, mrp: 32, discount: "19% OFF" },
      "100g": { price: 48, mrp: 60, discount: "20% OFF" },
      "200g": { price: 92, mrp: 115, discount: "20% OFF" },
      "500g": { price: 220, mrp: 280, discount: "21% OFF" },
      "1kg": { price: 420, mrp: 540, discount: "22% OFF" }
    }
  },
  {
    id: "garam-masala",
    name: "Raseshwari Royal Garam Masala (गरम मसाला)",
    subTitle: "Master 16-Whole Spice Blend with Natural Oils",
    category: "blend",
    image: "assets/images/garam-masala.jpg",
    rating: 4.9,
    reviews: 98,
    isBestseller: true,
    desc: "Traditional heritage blend of 16 premium whole spices. Provides authentic royal aroma, warm complexity and rich gravy depth.",
    sizes: {
      "50g": { price: 45, mrp: 55, discount: "18% OFF" },
      "100g": { price: 85, mrp: 105, discount: "19% OFF" },
      "200g": { price: 165, mrp: 210, discount: "21% OFF" },
      "500g": { price: 390, mrp: 499, discount: "22% OFF" },
      "1kg": { price: 750, mrp: 950, discount: "21% OFF" }
    }
  },
  {
    id: "raseshwari-premium-rice",
    name: "Raseshwari Premium Quality Rice (चावल)",
    subTitle: "Shuddh • Swadisht • Behtareen - 100% Pure Rice",
    category: "staples",
    image: "assets/images/raseshwari-premium-rice.jpg",
    rating: 4.9,
    reviews: 184,
    isBestseller: true,
    desc: "100% Pure authentic premium quality grain rice from Sitamarhi, Bihar. Shuddh, swadisht aur behtareen for everyday meals and royal feasts.",
    sizes: {
      "1kg": { price: 85, mrp: 110, discount: "23% OFF" },
      "5kg": { price: 399, mrp: 499, discount: "20% OFF" },
      "10kg": { price: 780, mrp: 980, discount: "20% OFF" },
      "25kg": { price: 1899, mrp: 2350, discount: "19% OFF" }
    }
  },
  {
    id: "raseshwari-rice-trio",
    name: "Raseshwari Rice Trio Festive Combo (3-Bags)",
    subTitle: "Royal, Classic & Heritage Selected Long Grain Rice",
    category: "staples",
    image: "assets/images/raseshwari-rice-trio.jpg",
    rating: 4.9,
    reviews: 76,
    isBestseller: false,
    desc: "Signature collection of Raseshwari premium rice trio (Royal Maroon, Forest Green & Golden Harvest). Perfect for family gatherings, weddings and celebrations.",
    sizes: {
      "3 x 1kg": { price: 250, mrp: 330, discount: "24% OFF" },
      "3 x 5kg": { price: 1180, mrp: 1499, discount: "21% OFF" }
    }
  },
  {
    id: "tadka-hing",
    name: "Raseshwari Tadka Hing (कंपाउंडेड हींग)",
    subTitle: "Strong Royal Aroma • Authentic Compounded Asafoetida",
    category: "blend",
    image: "assets/images/tadka-hing.jpg",
    rating: 4.9,
    reviews: 135,
    isBestseller: true,
    desc: "Potent aromatic compounded asafoetida. Just a pinch gives extraordinary digestive aroma and traditional flavor to dal tadka, sambar and curries.",
    sizes: {
      "25g": { price: 45, mrp: 55, discount: "18% OFF" },
      "50g": { price: 85, mrp: 105, discount: "19% OFF" },
      "100g": { price: 160, mrp: 200, discount: "20% OFF" }
    }
  },
  {
    id: "kasuri-methi",
    name: "Raseshwari Fragrant Kasuri Methi (कसूरी मेथी)",
    subTitle: "Sun-Dried Whole Fragrant Fenugreek Leaves",
    category: "pure",
    image: "assets/images/kasuri-methi.jpg",
    rating: 4.8,
    reviews: 94,
    isBestseller: false,
    desc: "Sun-dried green kasuri methi with intense herbal aroma. Adds restaurant-style royal flavor to paneer, gravies, and parathas.",
    sizes: {
      "25g": { price: 25, mrp: 32, discount: "22% OFF" },
      "50g": { price: 45, mrp: 58, discount: "22% OFF" },
      "100g": { price: 85, mrp: 110, discount: "23% OFF" },
      "250g": { price: 199, mrp: 260, discount: "23% OFF" }
    }
  },
  {
    id: "moong-papad",
    name: "Raseshwari Crispy Moong Papad (मूंग पापड़)",
    subTitle: "Perfect Crunch, Perfect Flavour • Traditional Recipe",
    category: "staples",
    image: "assets/images/moong-papad.jpg",
    rating: 4.9,
    reviews: 112,
    isBestseller: false,
    desc: "Handcrafted traditional moong dal papad seasoned with black pepper and authentic spices. Crispy, crunchy and delicious roasted or fried.",
    sizes: {
      "200g": { price: 55, mrp: 70, discount: "21% OFF" },
      "400g": { price: 105, mrp: 135, discount: "22% OFF" },
      "1kg": { price: 250, mrp: 320, discount: "22% OFF" }
    }
  },
  {
    id: "spice-gift-box",
    name: "Raseshwari Royal Festive Spice Gift Box",
    subTitle: "Signature Gift Box with Luxury Spices & Jars",
    category: "blend",
    image: "assets/images/spice-gift-box.jpg",
    rating: 5.0,
    reviews: 88,
    isBestseller: false,
    desc: "Grand festive gift box containing Haldi, Mirch, Dhaniya, Garam Masala, Kitchen King, Hing, Kasuri Methi and Whole Spices in luxury jars.",
    sizes: {
      "6 Spices Pack": { price: 599, mrp: 799, discount: "25% OFF" },
      "Grand 8-Box": { price: 899, mrp: 1199, discount: "25% OFF" }
    }
  },
  {
    id: "jeera-powder",
    name: "Raseshwari Roasted Jeera Powder (जीरा पाउडर)",
    subTitle: "Slow-Roasted Earthy Cumin • Fresh Digestive Aroma",
    category: "pure",
    image: "assets/images/jeera-powder.jpg",
    rating: 4.7,
    reviews: 82,
    isBestseller: false,
    desc: "Evenly slow-roasted cumin seeds ground fresh. Unbeatable digestive freshness and earthy taste for curries, raita and beverages.",
    sizes: {
      "50g": { price: 42, mrp: 52, discount: "19% OFF" },
      "100g": { price: 80, mrp: 100, discount: "20% OFF" },
      "200g": { price: 155, mrp: 195, discount: "21% OFF" },
      "500g": { price: 370, mrp: 470, discount: "21% OFF" },
      "1kg": { price: 720, mrp: 920, discount: "22% OFF" }
    }
  },
  {
    id: "kitchen-king",
    name: "Raseshwari Kitchen King Masala (किचन किंग)",
    subTitle: "All-in-One Culinary Curry Enhancer",
    category: "blend",
    image: "assets/images/kitchen-king.jpg",
    rating: 4.8,
    reviews: 110,
    isBestseller: false,
    desc: "The universal curry enhancer. Makes all paneer gravies, dry vegetables, dal and gourmet feasts extraordinary.",
    sizes: {
      "50g": { price: 40, mrp: 50, discount: "20% OFF" },
      "100g": { price: 78, mrp: 98, discount: "20% OFF" },
      "200g": { price: 150, mrp: 190, discount: "21% OFF" },
      "500g": { price: 360, mrp: 460, discount: "22% OFF" },
      "1kg": { price: 690, mrp: 890, discount: "22% OFF" }
    }
  }
];

// App State
const state = {
  cart: [],
  selectedWeights: {}, // { productId: '50g' }
  currentFilter: 'all',
  searchQuery: ''
};

// Initialize State from LocalStorage
function initApp() {
  try {
    const savedCart = localStorage.getItem('raseshwari_cart');
    if (savedCart) {
      state.cart = JSON.parse(savedCart);
    }
  } catch (e) {
    console.error('Failed to load cart from storage', e);
  }

  // Set default selected weight for each product
  PRODUCTS.forEach(p => {
    state.selectedWeights[p.id] = "50g";
  });

  renderCatalog();
  updateCartUI();
  setupEventListeners();
}

function saveCart() {
  try {
    localStorage.setItem('raseshwari_cart', JSON.stringify(state.cart));
  } catch (e) {
    console.error('Failed to save cart', e);
  }
}

// Find item in cart
function findCartItem(id, weight) {
  return state.cart.find(item => item.id === id && item.weight === weight);
}

// Render Product Card
function createProductCardHTML(p) {
  const defaultSize = Object.keys(p.sizes)[0];
  const selectedWeight = state.selectedWeights[p.id] || defaultSize;
  const sizeData = p.sizes[selectedWeight] || p.sizes[defaultSize];
  const inCartItem = findCartItem(p.id, selectedWeight);

  const weightChipsHTML = Object.keys(p.sizes).map(w => {
    const isActive = w === selectedWeight ? 'active' : '';
    return `<button type="button" class="weight-chip ${isActive}" onclick="handleWeightSelect('${p.id}', '${w}')">${w}</button>`;
  }).join('');

  let actionButtonHTML = '';
  if (inCartItem && inCartItem.qty > 0) {
    actionButtonHTML = `
      <div class="card-qty-ctrl-active">
        <button type="button" class="card-qty-btn minus" onclick="handleQtyChange('${p.id}', '${selectedWeight}', -1)" title="Decrease quantity">−</button>
        <div class="card-qty-val">${inCartItem.qty} in cart</div>
        <button type="button" class="card-qty-btn plus" onclick="handleQtyChange('${p.id}', '${selectedWeight}', 1)" title="Increase quantity">+</button>
      </div>
    `;
  } else {
    actionButtonHTML = `
      <button type="button" class="btn-card-add" onclick="handleAddToCart('${p.id}')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        Add to Cart
      </button>
    `;
  }

  return `
    <div class="product-card" id="card-${p.id}">
      <div class="card-thumb-wrap">
        <span class="card-discount-badge">${sizeData.discount}</span>
        <span class="card-fssai-chip"><span class="veg-icon"></span> 100% Pure</span>
        <img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="card-body">
        <span class="card-category-tag">${
  p.category === 'pure' ? 'Pure Spice' : 
  (p.category === 'blend' ? 'Royal Blend' : 
  (p.category === 'staples' ? 'Premium Staples' : 'Specialty'))
}</span>
        <h3 class="card-title">${p.name}</h3>
        <p class="card-hindi-sub">${p.subTitle}</p>
        
        <div class="card-rating-strip">
          <span class="star-badge">★ ${p.rating}</span>
          <span class="rating-count">(${p.reviews} reviews)</span>
        </div>

        <div class="weight-selector-wrap">
          <div class="weight-selector-label">Select Pack Size:</div>
          <div class="weight-chips-row">
            ${weightChipsHTML}
          </div>
        </div>

        <div class="card-price-row">
          <span class="card-selling-price">₹${sizeData.price}</span>
          <span class="card-mrp-price">₹${sizeData.mrp}</span>
          <span class="card-discount-pill">${sizeData.discount}</span>
        </div>

        <div class="card-action-container" id="action-box-${p.id}">
          ${actionButtonHTML}
        </div>
      </div>
    </div>
  `;
}

// Render Products into DOM
function renderCatalog() {
  const featuredContainer = document.getElementById('featured-products-grid');
  const allContainer = document.getElementById('all-products-grid');

  let filtered = PRODUCTS.filter(p => {
    const matchesFilter = state.currentFilter === 'all' || p.category === state.currentFilter;
    const matchesSearch = !state.searchQuery || 
      p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
      p.subTitle.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (featuredContainer) {
    // Show strictly 6 items on home page per user requirement
    const featuredItems = PRODUCTS.filter(p => p.isBestseller).slice(0, 6);
    featuredContainer.innerHTML = featuredItems.map(createProductCardHTML).join('');
  }

  if (allContainer) {
    if (filtered.length === 0) {
      allContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748B;">No spices found matching your search. Try another keyword.</div>`;
    } else {
      allContainer.innerHTML = filtered.map(createProductCardHTML).join('');
    }
  }
}

// Handle pack size selection
function handleWeightSelect(productId, weight) {
  state.selectedWeights[productId] = weight;
  renderCatalog();
}

// Handle Add to Cart
function handleAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const defaultSize = Object.keys(product.sizes)[0];
  const weight = state.selectedWeights[productId] || defaultSize;
  const sizeData = product.sizes[weight] || product.sizes[defaultSize];
  const existing = findCartItem(productId, weight);

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      subTitle: product.subTitle,
      weight: weight,
      price: sizeData.price,
      mrp: sizeData.mrp,
      image: product.image,
      qty: 1
    });
  }

  saveCart();
  renderCatalog();
  updateCartUI();
  showToast('Added to cart', { button: true, btnText: 'Cart ➔', duration: 700 });
}

// Handle Qty changes
function handleQtyChange(productId, weight, delta) {
  const itemIndex = state.cart.findIndex(i => i.id === productId && i.weight === weight);
  if (itemIndex > -1) {
    state.cart[itemIndex].qty += delta;
    if (state.cart[itemIndex].qty <= 0) {
      state.cart.splice(itemIndex, 1);
      showToast('Item removed', { button: false, duration: 700 });
    }
    saveCart();
    renderCatalog();
    updateCartUI();
  }
}

// Remove item directly from cart drawer
function handleRemoveItem(productId, weight) {
  state.cart = state.cart.filter(i => !(i.id === productId && i.weight === weight));
  saveCart();
  renderCatalog();
  updateCartUI();
  showToast('Item removed', { button: false, duration: 700 });
}

// Update Cart Drawer UI & Counter Badges
function updateCartUI() {
  const countBadges = document.querySelectorAll('.cart-badge-count, .mobile-cart-badge');
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);

  countBadges.forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  });

  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartEmptyState = document.getElementById('cart-empty-state');
  const cartFooter = document.getElementById('cart-footer');
  const cartDrawerCount = document.getElementById('cart-drawer-count');

  if (cartDrawerCount) {
    cartDrawerCount.textContent = `${totalCount} ${totalCount === 1 ? 'item' : 'items'}`;
  }

  if (!cartItemsContainer) return;

  if (state.cart.length === 0) {
    cartItemsContainer.style.display = 'none';
    if (cartEmptyState) cartEmptyState.style.display = 'block';
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  cartItemsContainer.style.display = 'flex';
  if (cartEmptyState) cartEmptyState.style.display = 'none';
  if (cartFooter) cartFooter.style.display = 'block';

  let itemsSubtotal = 0;
  let itemsMrpTotal = 0;

  cartItemsContainer.innerHTML = state.cart.map(item => {
    const itemTotal = item.price * item.qty;
    const itemMrpTotal = item.mrp * item.qty;
    itemsSubtotal += itemTotal;
    itemsMrpTotal += itemMrpTotal;

    return `
      <div class="cart-item-card">
        <img class="cart-item-thumb" src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.name}</h4>
          <span class="cart-item-weight">Weight: ${item.weight}</span>
          <div class="cart-item-price-row">
            <span class="cart-item-price">₹${itemTotal}</span>
            <span class="cart-item-mrp">₹${itemMrpTotal}</span>
          </div>
        </div>
        <div class="cart-item-qty-ctrl">
          <button type="button" class="cart-qty-mini-btn" onclick="handleQtyChange('${item.id}', '${item.weight}', -1)" title="Decrease">−</button>
          <span class="cart-qty-mini-val">${item.qty}</span>
          <button type="button" class="cart-qty-mini-btn" onclick="handleQtyChange('${item.id}', '${item.weight}', 1)" title="Increase">+</button>
        </div>
        <button type="button" class="btn-remove-item" onclick="handleRemoveItem('${item.id}', '${item.weight}')" title="Remove item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>
    `;
  }).join('');

  // Bill calculations
  const savings = itemsMrpTotal - itemsSubtotal;
  const deliveryFee = itemsSubtotal >= 499 ? 0 : 40;
  const grandTotal = itemsSubtotal + deliveryFee;

  const subtotalEl = document.getElementById('bill-subtotal');
  const savingsEl = document.getElementById('bill-savings');
  const deliveryEl = document.getElementById('bill-delivery');
  const grandTotalEl = document.getElementById('bill-grandtotal');

  if (subtotalEl) subtotalEl.textContent = `₹${itemsSubtotal}`;
  if (savingsEl) savingsEl.textContent = `- ₹${savings}`;
  if (deliveryEl) {
    deliveryEl.textContent = deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`;
    deliveryEl.style.color = deliveryFee === 0 ? '#15803D' : '#334155';
  }
  if (grandTotalEl) grandTotalEl.textContent = `₹${grandTotal}`;
  const btnTotalEl = document.getElementById('btn-place-order-total');
  if (btnTotalEl) btnTotalEl.textContent = `₹${grandTotal}`;
}

// Toggle Cart Drawer
function toggleCartDrawer(open) {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (!drawer || !overlay) return;

  if (open) {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Order via WhatsApp (Direct Invoice generator)

// ==========================================================================
// DELIVERY ADDRESS & MULTI-CHANNEL ORDER SYSTEM
// ==========================================================================
window.activeOrderChannel = 'whatsapp';

// Open Detailed Delivery Modal
function openDeliveryModal(channel = 'whatsapp') {
  if (state.cart.length === 0) {
    showToast('Your cart is empty! Please select spices first.');
    return;
  }

  // Set the selected channel (whatsapp, email, sms)
  selectOrderChannel(channel);

  // Update live bill summary inside modal
  let itemsCount = 0;
  let itemsSubtotal = 0;
  state.cart.forEach(item => {
    itemsCount += item.qty;
    itemsSubtotal += (item.price * item.qty);
  });
  const deliveryFee = itemsSubtotal >= 499 ? 0 : 40;
  const grandTotal = itemsSubtotal + deliveryFee;

  const countEl = document.getElementById('modal-bill-count');
  const totalEl = document.getElementById('modal-bill-grandtotal');
  if (countEl) countEl.textContent = `${itemsCount} item${itemsCount > 1 ? 's' : ''} in cart`;
  if (totalEl) totalEl.textContent = `₹${grandTotal}`;

  // Prefill saved address if available in localStorage
  try {
    const saved = localStorage.getItem('raseshwari_delivery_details');
    if (saved) {
      const data = JSON.parse(saved);
      if (data.name) document.getElementById('cust-name-input').value = data.name;
      if (data.phone) document.getElementById('cust-phone-input').value = data.phone;
      if (data.flat) document.getElementById('cust-flat-input').value = data.flat;
      if (data.landmark) document.getElementById('cust-landmark-input').value = data.landmark;
      if (data.city) document.getElementById('cust-city-input').value = data.city;
      if (data.state) document.getElementById('cust-state-input').value = data.state;
      if (data.pincode) document.getElementById('cust-pin-input').value = data.pincode;
    }
  } catch (err) {
    console.error('Error loading saved address', err);
  }

  const modal = document.getElementById('delivery-modal-overlay');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Close Delivery Modal
function closeDeliveryModal(e) {
  if (e && e.target && e.target.id !== 'delivery-modal-overlay' && !e.target.classList.contains('btn-close-modal')) {
    return;
  }
  const modal = document.getElementById('delivery-modal-overlay');
  if (modal) {
    modal.classList.remove('active');
    // Only restore body overflow if cart drawer is also closed
    const drawer = document.getElementById('cart-drawer');
    if (!drawer || !drawer.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }
}

// Select Order Channel (WhatsApp, Email, SMS)
function selectOrderChannel(channel) {
  window.activeOrderChannel = channel;

  const btnWhatsapp = document.getElementById('channel-btn-whatsapp');
  const btnEmail = document.getElementById('channel-btn-email');
  const btnSms = document.getElementById('channel-btn-sms');

  if (btnWhatsapp) btnWhatsapp.classList.toggle('active', channel === 'whatsapp');
  if (btnEmail) btnEmail.classList.toggle('active', channel === 'email');
  if (btnSms) btnSms.classList.toggle('active', channel === 'sms');

  const submitBtn = document.getElementById('btn-modal-submit');
  const submitText = document.getElementById('btn-submit-text');
  const submitIcon = document.getElementById('btn-submit-icon');

  if (!submitBtn || !submitText || !submitIcon) return;

  submitBtn.className = 'btn-modal-submit';

  if (channel === 'whatsapp') {
    submitBtn.classList.add('btn-modal-whatsapp');
    submitIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.077-2.127-.514-1.825-.757-3.003-2.613-3.094-2.735-.091-.122-.74-1.026-.74-1.956 0-.93.488-1.385.661-1.577.173-.192.38-.24.507-.24.126 0 .253.001.364.007.118.006.276-.045.431.328.158.381.543 1.328.591 1.425.048.096.08.209.016.335-.064.126-.096.205-.192.318-.096.113-.203.253-.29.34-.096.096-.197.201-.085.393.112.192.5 1.155 1.074 1.666.738.658 1.36.862 1.552.958.192.096.304.08.416-.048.113-.128.483-.561.611-.753.128-.192.257-.16.432-.096.176.064 1.116.526 1.309.622.192.096.321.144.369.224.048.08.048.465-.096.87zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.436 5.176L2 22l4.982-1.308A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>`;
    submitText.textContent = 'Confirm & Order on WhatsApp';
  } else if (channel === 'email') {
    submitBtn.classList.add('btn-modal-email');
    submitIcon.innerHTML = `✉️`;
    submitText.textContent = 'Confirm & Send Order via Email';
  } else if (channel === 'sms') {
    submitBtn.classList.add('btn-modal-sms');
    submitIcon.innerHTML = `📱`;
    submitText.textContent = 'Confirm & Send via SMS / Call';
  }
}

// Payment Method - Cash on Delivery (COD) Only (Active)
window.selectedPaymentMode = 'cod';

function selectPaymentMode(mode) {
  window.selectedPaymentMode = 'cod';
}


// Handle Order Confirmation from Modal

// ==========================================================================
// OFFICIAL PDF INVOICE GENERATION SYSTEM (Raseshwari Foods Pvt. Ltd.)
// ==========================================================================
window.lastOrderInvoiceData = null;

// Generate structured invoice data
function createInvoiceData(name, phone, flat, landmark, city, stateVal, pincode, channel) {
  let subtotal = 0;
  let savings = 0;
  const items = state.cart.map(item => {
    const itemSub = item.price * item.qty;
    subtotal += itemSub;
    savings += (item.mrp - item.price) * item.qty;
    return {
      name: item.name,
      weight: item.weight,
      qty: item.qty,
      mrp: item.mrp,
      price: item.price,
      total: itemSub
    };
  });

  const deliveryFee = subtotal >= 499 ? 0 : 40;
  const grandTotal = subtotal + deliveryFee;
  const invoiceNo = 'RS-' + Date.now().toString().slice(-6);
  const now = new Date();
  const dateFormatted = now.toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric'
  }) + ', ' + now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  const paymentMode = 'cod';
  const paymentLabel = 'Cash on Delivery (COD)';

  return {
    invoiceNo,
    date: dateFormatted,
    gstin: '10REAPK9623A1ZS',
    fssai: '10018064001572',
    proprietor: 'Vishal Kumar',
    tradeName: 'RASESHWARI',
    plantAddress: 'Bhairo Bhoop, Dumra Road, Sitamarhi, Bihar - 843302',
    phone1: '+91 99055 61443',
    phone2: '+91 98356 54983',
    channel: channel === 'whatsapp' ? 'WhatsApp Direct' : (channel === 'email' ? 'Email Direct' : 'Phone / SMS'),
    paymentMode,
    paymentLabel,
    name,
    phone,
    flat,
    landmark,
    city,
    state: stateVal,
    pincode,
    fullAddress: `${flat}, ${landmark}, ${city}, ${stateVal} - ${pincode}`,
    items,
    subtotal,
    savings,
    deliveryFee,
    grandTotal
  };
}

// Build Official HTML Invoice Template
// Build Clean, Professional Self-Contained Invoice HTML (Used for Preview, Single-Page PDF & Print)
function buildInvoiceHTML(data) {
  return `
  <div id="invoice-printable" class="invoice-paper">
    <!-- Header -->
    <div class="inv-head">
      <div class="inv-brand">
        <img src="assets/images/logo.jpg" alt="Raseshwari Spices Logo" class="inv-logo-img" />
        <div class="inv-brand-info">
          <h2>RASESHWARI FOODS PVT. LTD.</h2>
          <div class="inv-brand-sub">Raseshwari Spices (शुद्ध एवं पारंपरिक मसाले)</div>
          <div class="inv-plant-addr">
            Bhairo Bhoop, Dumra Road, Sitamarhi, Bihar - 843302, India (GSTIN: 10REAPK9623A1ZS)<br>
            <strong>Line 1:</strong> +91 99055 61443 | <strong>Line 2:</strong> +91 98356 54983 | <strong>Email:</strong> raseshwarimasala@gmail.com
          </div>
        </div>
      </div>
      <div class="inv-meta">
        <div class="inv-badge-official">OFFICIAL RETAIL INVOICE</div>
        <div class="inv-meta-row"><span>Invoice No:</span> <strong>${data.invoiceNo}</strong></div>
        <div class="inv-meta-row"><span>Date & Time:</span> <span>${data.date}</span></div>
        <div class="inv-meta-row"><span>GSTIN:</span> <strong>10REAPK9623A1ZS</strong></div>
        <div class="inv-meta-row"><span>FSSAI Lic:</span> <strong>10018064001572</strong></div>
        <div class="inv-meta-row"><span>Order Channel:</span> <span>${data.channel || 'Direct Order'}</span></div>
        <div class="inv-meta-row"><span>Payment Mode:</span> <strong style="color: #15803D;">${data.paymentLabel || 'Cash on Delivery (COD)'}</strong></div>
      </div>
    </div>

    <div class="inv-divider"></div>

    <!-- Special Thanks Banner -->
    <div class="inv-special-thanks">
      <div class="inv-thanks-icon">❤️ 🙏</div>
      <div class="inv-thanks-body">
        <h4>Special Thanks for Choosing Raseshwari Spices!</h4>
        <p>Dear <strong>${data.name}</strong>, thank you for placing your trust in our authentic cold stone-ground spices. Your purchase directly supports traditional spice millers in Sitamarhi, Bihar. May our 100% pure spices bring divine aroma, vibrant health, and delicious taste to your kitchen!</p>
      </div>
    </div>

    <!-- Address Grid -->
    <div class="inv-addr-grid">
      <div class="inv-addr-box">
        <span class="inv-box-label">Dispatched From (Spice Plant):</span>
        <div class="inv-box-content">
          <strong>Raseshwari Foods Pvt. Ltd. (Spice Plant)</strong><br>
          Near Gandhi Chowk, Station Road<br>
          District Sitamarhi, Bihar - 843302<br>
          Plant Helpline: +91 99055 61443
        </div>
      </div>
      <div class="inv-addr-box customer">
        <span class="inv-box-label">Delivered & Billed To:</span>
        <div class="inv-box-content">
          <strong class="inv-cust-name">${data.name}</strong><br>
          <strong>Phone / WhatsApp:</strong> ${data.phone}<br>
          <strong>Address:</strong> ${data.flat}, ${data.landmark}<br>
          ${data.city}, ${data.state} - <strong>${data.pincode}</strong>
        </div>
      </div>
    </div>

    <!-- Items Table -->
    <table class="inv-table">
      <thead>
        <tr>
          <th style="width: 32px; text-align: center;">#</th>
          <th>Spice Product Description</th>
          <th style="width: 80px; text-align: center;">Pack Size</th>
          <th style="width: 45px; text-align: center;">Qty</th>
          <th style="width: 70px; text-align: right;">MRP (₹)</th>
          <th style="width: 70px; text-align: right;">Rate (₹)</th>
          <th style="width: 85px; text-align: right;">Total (₹)</th>
        </tr>
      </thead>
      <tbody>
        ${data.items.map((it, idx) => `
          <tr>
            <td style="text-align: center;">${idx + 1}</td>
            <td>
              <strong>${it.name}</strong>
              <div class="inv-item-tag">100% Pure Cold Stone-Ground Spices</div>
            </td>
            <td style="text-align: center;">${it.weight}</td>
            <td style="text-align: center;">${it.qty}</td>
            <td style="text-align: right; color: #94A3B8; text-decoration: line-through;">₹${it.mrp}</td>
            <td style="text-align: right; font-weight: 600;">₹${it.price}</td>
            <td style="text-align: right; font-weight: 700; color: #991B1B;">₹${it.total}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>

    <!-- Totals & Notes -->
    <div class="inv-summary-grid">
      <div class="inv-notes">
        <h5>Quality & Purity Assurance:</h5>
        <ul>
          <li>✔ 100% Zero Adulteration & Chemical-free Guarantee.</li>
          <li>✔ Cold stone-ground to preserve natural essential oils and aroma.</li>
          <li>✔ FSSAI Registered manufacturing unit (Lic No. 10018064001572).</li>
          <li>✔ Farm-direct sourcing from Sitamarhi, Bihar farmers.</li>
        </ul>
      </div>
      <div class="inv-totals">
        <div class="inv-tot-row"><span>Items Subtotal:</span> <span>₹${data.subtotal}</span></div>
        <div class="inv-tot-row savings"><span>Total Savings (Discount):</span> <span>- ₹${data.savings}</span></div>
        <div class="inv-tot-row"><span>Delivery Charges:</span> <span style="color: #16A34A; font-weight: 700;">${data.deliveryFee === 0 ? 'FREE Express Delivery' : '₹' + data.deliveryFee}</span></div>
        <div class="inv-tot-row grand-total"><span>Final Total Payable:</span> <span>₹${data.grandTotal}</span></div>
      </div>
    </div>

    <!-- Signatory & Stamp -->
    <div class="inv-footer-strip">
      <div class="inv-decl">
        <p>This is a computer-generated official retail sales invoice issued by Raseshwari Foods Pvt. Ltd., Sitamarhi, Bihar.</p>
        <p>For any queries or bulk wholesale orders, contact <strong>+91 99055 61443</strong> or email <strong>raseshwarimasala@gmail.com</strong>.</p>
      </div>
      <div class="inv-sign-col">
        <div class="inv-stamp">
          <span>RASESHWARI FOODS</span>
          <small>SITAMARHI, BIHAR</small>
          <span>★ VERIFIED ★</span>
        </div>
        <div class="inv-sign-label">Authorized Signatory</div>
      </div>
    </div>
  </div>
  `;
}

// Build Dedicated Clean Printable Invoice HTML (Full Width 100%, Perfect A4 Proportions, No Awkward Splits)
// ==========================================================================
// 100% VECTOR HIGH-PRECISION INVOICE & PRINT-TO-PDF SYSTEM
// ==========================================================================

function buildCleanPrintableInvoiceHTML(data) {
  const logoSrc = (typeof window !== 'undefined' && window.location && window.location.origin) 
    ? `${window.location.origin}/assets/images/logo.jpg` 
    : 'assets/images/logo.jpg';

  return `
    <div class="printable-invoice-wrapper" style="width: 100% !important; max-width: 100% !important; margin: 0 auto; background: #FFFFFF; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0F172A; line-height: 1.35; box-sizing: border-box;">
      
      <!-- Top Brand Header Block -->
      <div class="inv-avoid-split" style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2.5px solid #991B1B; padding-bottom: 10px; page-break-inside: avoid !important; break-inside: avoid !important;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <img src="${logoSrc}" alt="Logo" style="width: 52px; height: 52px; border-radius: 8px; object-fit: cover; border: 1.5px solid #E2E8F0;" />
          <div>
            <h2 style="margin: 0; color: #991B1B; font-size: 19px; font-weight: 800; letter-spacing: 0.5px;">RASESHWARI FOODS PVT. LTD.</h2>
            <div style="font-size: 11.5px; color: #D97706; font-weight: 700; margin-top: 1px;">Raseshwari Spices (शुद्ध एवं पारंपरिक मसाले)</div>
            <div style="font-size: 9px; color: #475569; margin-top: 3px; line-height: 1.4;">
              Bhairo Bhoop, Dumra Road, Sitamarhi, Bihar - 843302, India<br>
              <strong>Line 1 (Orders):</strong> +91 99055 61443 | <strong>Line 2 (Support):</strong> +91 98356 54983 | <strong>GSTIN:</strong> 10REAPK9623A1ZS | <strong>FSSAI Lic:</strong> 10018064001572
            </div>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="background: #991B1B; color: #FFFFFF; font-size: 9px; font-weight: 800; padding: 4px 10px; border-radius: 4px; display: inline-block; letter-spacing: 0.5px;">OFFICIAL RETAIL INVOICE</div>
          <div style="font-size: 11px; margin-top: 5px;"><strong>Invoice No:</strong> <span style="color: #991B1B; font-weight: 800;">${data.invoiceNo}</span></div>
          <div style="font-size: 9px; color: #64748B; margin-top: 2px;">Date: <strong>${data.date}</strong></div>
          <div style="font-size: 8.5px; color: #64748B;">GSTIN: <strong style="color: #0F172A;">10REAPK9623A1ZS</strong></div>
          <div style="font-size: 8.5px; color: #64748B;">Order Channel: <strong>${data.channel || 'Direct Store Order'}</strong></div>
          <div style="font-size: 8.5px; color: #64748B;">Payment Mode: <strong style="color: #15803D;">${data.paymentLabel || 'Cash on Delivery (COD)'}</strong></div>
        </div>
      </div>

      <!-- Special Thanks Box -->
      <div class="inv-avoid-split" style="margin-top: 8px; padding: 8px 12px; background: #FFFBEB; border: 1px solid #FDE68A; border-left: 4px solid #D97706; border-radius: 6px; font-size: 9px; color: #92400E; line-height: 1.35; page-break-inside: avoid !important; break-inside: avoid !important;">
        <strong style="color: #B45309; font-size: 10px;">★ Special Thanks for Choosing Raseshwari Spices!</strong><br>
        Dear <strong>${data.name}</strong>, thank you for your purchase. Your order directly supports heritage cold stone-ground spice craftsmen in Sitamarhi, Bihar. May our pure spices bring divine aroma, vibrant health, and authentic taste to your family!
      </div>

      <!-- Address Grid -->
      <div class="inv-avoid-split" style="margin-top: 8px; display: flex; justify-content: space-between; gap: 10px; font-size: 9px; page-break-inside: avoid !important; break-inside: avoid !important;">
        <div style="flex: 1; padding: 7px 10px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px;">
          <div style="font-size: 8px; font-weight: 800; color: #64748B; text-transform: uppercase; margin-bottom: 2px;">Dispatched From (Processing Plant):</div>
          <strong style="color: #1E293B;">Raseshwari Foods Pvt. Ltd. (Spice Mill Unit)</strong><br>
          Near Gandhi Chowk, Station Road<br>
          District Sitamarhi, Bihar - 843302<br>
          Line 1: +91 99055 61443 | Line 2: +91 98356 54983
        </div>
        <div style="flex: 1; padding: 7px 10px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px;">
          <div style="font-size: 8px; font-weight: 800; color: #64748B; text-transform: uppercase; margin-bottom: 2px;">Delivered & Billed To:</div>
          <strong style="color: #991B1B; font-size: 10.5px;">${data.name}</strong><br>
          <strong>Phone / WhatsApp:</strong> ${data.phone}<br>
          <strong>Address:</strong> ${data.flat}, ${data.landmark}<br>
          ${data.city}, ${data.state} - <strong>${data.pincode}</strong>
        </div>
      </div>

      <!-- Items Table (Full Width, Avoid Row Breaks) -->
      <table style="width: 100% !important; margin-top: 10px; border-collapse: collapse; font-size: 9px;">
        <thead>
          <tr style="background: #991B1B; color: #FFFFFF; border-top: 1.5px solid #991B1B; border-bottom: 1.5px solid #991B1B; page-break-inside: avoid !important;">
            <th style="padding: 6px 8px; text-align: center; width: 30px; color: #FFFFFF;">#</th>
            <th style="padding: 6px 8px; text-align: left; color: #FFFFFF;">Spice Product Description</th>
            <th style="padding: 6px 8px; text-align: center; width: 75px; color: #FFFFFF;">Pack Size</th>
            <th style="padding: 6px 8px; text-align: center; width: 40px; color: #FFFFFF;">Qty</th>
            <th style="padding: 6px 8px; text-align: right; width: 65px; color: #FFFFFF;">MRP (₹)</th>
            <th style="padding: 6px 8px; text-align: right; width: 65px; color: #FFFFFF;">Rate (₹)</th>
            <th style="padding: 6px 8px; text-align: right; width: 75px; color: #FFFFFF;">Total (₹)</th>
          </tr>
        </thead>
        <tbody>
          ${data.items.map((it, idx) => `
            <tr style="border-bottom: 1px solid #E2E8F0; ${idx % 2 === 1 ? 'background: #F8FAFC;' : 'background: #FFFFFF;'}; page-break-inside: avoid !important; break-inside: avoid !important;">
              <td style="padding: 5px 8px; text-align: center;">${idx + 1}</td>
              <td style="padding: 5px 8px;">
                <strong style="color: #0F172A;">${it.name}</strong>
                <div style="font-size: 8px; color: #64748B;">100% Pure Cold Stone-Ground Spices</div>
              </td>
              <td style="padding: 5px 8px; text-align: center; color: #475569;">${it.weight}</td>
              <td style="padding: 5px 8px; text-align: center; font-weight: 600;">${it.qty}</td>
              <td style="padding: 5px 8px; text-align: right; color: #94A3B8; text-decoration: line-through;">₹${it.mrp}</td>
              <td style="padding: 5px 8px; text-align: right; font-weight: 600; color: #334155;">₹${it.price}</td>
              <td style="padding: 5px 8px; text-align: right; font-weight: 700; color: #991B1B;">₹${it.total}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <!-- Unified Summary, Quality Box & Official Stamp Block -->
      <div class="inv-summary-section" style="margin-top: 10px; page-break-inside: avoid !important; break-inside: avoid !important;">
        
        <div style="display: flex; justify-content: space-between; align-items: stretch; gap: 12px;">
          <!-- Quality Assurance -->
          <div style="flex: 1; padding: 7px 10px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; font-size: 8.5px; color: #475569; line-height: 1.4;">
            <strong style="color: #1E293B; font-size: 9px; text-transform: uppercase;">Quality & Purity Assurance:</strong><br>
            ✔ 100% Zero Adulteration & Chemical-free Guarantee.<br>
            ✔ Cold stone-ground technology preserves natural essential oils & aroma.<br>
            ✔ FSSAI Registered manufacturing unit (Lic No. 10018064001572).<br>
            ✔ Farm-direct sourcing from Sitamarhi, Bihar spice growers.
          </div>

          <!-- Totals Box -->
          <div style="width: 250px; padding: 7px 10px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; font-size: 9px; box-sizing: border-box;">
            <div style="display: flex; justify-content: space-between; padding: 2px 0; color: #64748B;">
              <span>Items Subtotal:</span>
              <span style="font-weight: 600; color: #1E293B;">₹${data.subtotal}</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 2px 0; color: #16A34A;">
              <span>Total Savings (Discount):</span>
              <span style="font-weight: 600;">- ₹${data.savings}</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 2px 0; color: #16A34A; font-weight: 600;">
              <span>Delivery Charges:</span>
              <span>FREE Express</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 4px 0 2px; margin-top: 3px; border-top: 2px solid #991B1B; font-size: 13px; font-weight: 800; color: #991B1B;">
              <span>Final Total Payable:</span>
              <span>₹${data.grandTotal}</span>
            </div>
          </div>
        </div>

        <!-- Footer & Stamp -->
        <div style="margin-top: 10px; border-top: 1px dashed #CBD5E1; padding-top: 6px; display: flex; justify-content: space-between; align-items: center; font-size: 8.5px; color: #64748B;">
          <div>
            This is an official computer-generated retail sales invoice issued by Raseshwari Foods Pvt. Ltd., Sitamarhi, Bihar.<br>
            <strong>Line 1:</strong> +91 99055 61443 | <strong>Line 2:</strong> +91 98356 54983 | <strong>Email:</strong> raseshwarimasala@gmail.com
          </div>
          <div style="text-align: right; border: 1.5px dashed #991B1B; padding: 3px 8px; border-radius: 6px; background: #FEF2F2; display: inline-block;">
            <div style="font-size: 7.5px; font-weight: 800; color: #991B1B; text-transform: uppercase;">RASESHWARI FOODS PVT. LTD.</div>
            <div style="font-size: 9px; font-weight: 800; color: #991B1B; letter-spacing: 0.5px;">★ VERIFIED OFFICIAL SEAL ★</div>
            <div style="font-size: 7.5px; color: #64748B;">Authorized Signatory</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Uniformly map buildInvoiceHTML to buildCleanPrintableInvoiceHTML
function buildInvoiceHTML(data) {
  return buildCleanPrintableInvoiceHTML(data);
}

// Show Invoice Modal
function showInvoiceModal(data) {
  window.lastOrderInvoiceData = data;
  try {
    localStorage.setItem('raseshwari_last_invoice', JSON.stringify(data));
  } catch (err) {}
  const container = document.getElementById('invoice-preview-container');
  if (container) {
    container.innerHTML = buildCleanPrintableInvoiceHTML(data);
    container.scrollTop = 0;
  }
  const modal = document.getElementById('invoice-modal-overlay');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Close Invoice Modal
function closeInvoiceModal(e) {
  if (e && e.target && e.target.id !== 'invoice-modal-overlay' && !e.target.classList.contains('btn-close-invoice-modal')) {
    return;
  }
  const modal = document.getElementById('invoice-modal-overlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Format WhatsApp Order Message Text
function buildWhatsAppOrderMessage(data) {
  let itemsSummary = '';
  data.items.forEach((it, idx) => {
    itemsSummary += `${idx + 1}. *${it.name}*\n   📦 Pack: ${it.weight} | Qty: ${it.qty} | Price: ₹${it.total}\n`;
  });

  let msg = `*🌿 RASESHWARI (Sitamarhi, Bihar)*\n`;
  msg += `*OFFICIAL ORDER & BILL RECEIPT*\n`;
  msg += `🏛️ *GSTIN:* 10REAPK9623A1ZS | *FSSAI:* 10018064001572\n\n`;
  msg += `🧾 *Invoice No:* ${data.invoiceNo}\n`;
  msg += `📅 *Date:* ${data.date}\n\n`;
  msg += `*--- 📦 ORDERED ITEMS ---*\n`;
  msg += itemsSummary;
  msg += `\n💵 *Items Subtotal:* ₹${data.subtotal}\n`;
  msg += `🎁 *Discount Savings:* -₹${data.savings}\n`;
  msg += `🚚 *Delivery Charges:* ${data.deliveryFee === 0 ? 'FREE Express Delivery' : '₹' + data.deliveryFee}\n`;
  msg += `💰 *FINAL AMOUNT PAYABLE:* ₹${data.grandTotal}\n\n`;
  msg += `💳 *PAYMENT METHOD:* ${data.paymentLabel || 'Cash on Delivery (COD)'}\n\n`;
  msg += `*--- 📍 DELIVERY ADDRESS ---*\n`;
  msg += `👤 *Customer Name:* ${data.name}\n`;
  msg += `📞 *Phone / WhatsApp:* ${data.phone}\n`;
  msg += `🏠 *Address:* ${data.fullAddress}\n\n`;
  msg += `📞 *Line 1 (Orders):* +91 99055 61443\n`;
  msg += `📞 *Line 2 (Support):* +91 98356 54983\n`;
  msg += `★ *Special Thanks:* Thank you for supporting pure cold stone-ground tradition from Sitamarhi, Bihar!\n\n`;
  const baseUrl = (typeof window !== 'undefined' && window.location && window.location.origin && window.location.origin !== 'null') ? window.location.origin : 'http://localhost:8888';
  msg += `👉 *View / Download Official Invoice (PDF):* ${baseUrl}/invoice.html?id=${data.invoiceNo}\n\n`;
  msg += `Please confirm my order and share dispatch timeline. Thank you!`;
  return msg;
}

// Show In-Modal Success Banner (Per User Request)
function showSuccessDownloadBanner(invoiceNo) {
  let banner = document.getElementById('invoice-download-success-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'invoice-download-success-banner';
    banner.className = 'download-success-banner';
    const container = document.getElementById('invoice-preview-container');
    if (container && container.parentNode) {
      container.parentNode.insertBefore(banner, container);
    }
  }
  banner.innerHTML = `
    <div class="banner-inner">
      <span class="banner-tick">✓</span>
      <div class="banner-text">
        <strong>Successfully Bill Downloaded!</strong>
        <p>Official tax invoice <strong>Raseshwari_Invoice_${invoiceNo}.pdf</strong> ready. Select 'Save as PDF' in the print preview dialog to save directly to your device.</p>
      </div>
    </div>
  `;
  banner.style.display = 'block';
}

// Order Confirmation & PDF Receipt Action (Unified Print Method)
function confirmOrderAndDownloadReceipt() {
  const data = window.lastOrderInvoiceData;
  if (!data) {
    showToast('No active invoice data to download.');
    return;
  }

  // Clear cart since order is confirmed
  try {
    state.cart = [];
    saveCart();
    updateCartBadge();
    renderCatalog();
    renderCartDrawer();
  } catch (e) {
    console.error('Error clearing cart:', e);
  }

  // Execute unified native print engine
  printCurrentInvoice(data, true);
}

// Download PDF Invoice Method - Uses unified print engine
function downloadCurrentInvoicePDF(customData = null) {
  const data = customData || window.lastOrderInvoiceData;
  if (data) {
    window.lastOrderInvoiceData = data;
  }
  printCurrentInvoice(data, true);
}

// Universal High-Precision Print & PDF Generator (Native Browser Vector Print - No Slicing, Full Crisp Quality)
function printCurrentInvoice(customData = null, isDownload = true) {
  const data = customData || window.lastOrderInvoiceData;
  if (!data) {
    showToast('No active invoice to print / download.');
    return;
  }

  const filename = `Raseshwari_Invoice_${data.invoiceNo}.pdf`;
  const pdfTitle = `Raseshwari_Invoice_${data.invoiceNo}`;

  // 1. Show user-requested success message: "Successfully Bill Downloaded"
  showToast('✓ Successfully Bill Downloaded! 📄✨', { duration: 4000 });

  // 2. Show dedicated prominent banner inside the invoice modal
  showSuccessDownloadBanner(data.invoiceNo);

  // 3. Update all confirm buttons to green success state
  const allConfirmBtns = document.querySelectorAll('.btn-order-confirm-success');
  allConfirmBtns.forEach(btn => {
    btn.innerHTML = `
      <span class="confirm-success-icon">✓</span>
      <span class="confirm-success-text">Successfully Bill Downloaded! (${filename})</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"></path></svg>
    `;
    btn.style.background = 'linear-gradient(135deg, #15803D, #16A34A)';
  });

  // Temporarily set document title for default browser PDF filename
  const originalTitle = document.title;
  document.title = pdfTitle;

  const invoiceHtml = buildCleanPrintableInvoiceHTML(data);

  // Clean printable standalone document
  const fullPrintDoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${pdfTitle}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 8mm 10mm;
    }
    * {
      box-sizing: border-box !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
    }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      background: #FFFFFF !important;
      color: #0F172A !important;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
      font-size: 9.5pt !important;
      line-height: 1.35 !important;
      width: 100% !important;
    }
    .printable-invoice-wrapper {
      width: 100% !important;
      max-width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    table {
      width: 100% !important;
      border-collapse: collapse !important;
      page-break-inside: auto;
    }
    thead {
      display: table-header-group !important;
    }
    tr {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }
    .inv-avoid-split,
    .inv-summary-section {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }
    .no-print {
      display: none !important;
    }
  </style>
</head>
<body>
  ${invoiceHtml}
</body>
</html>`;

  // Standard high-reliability printing:
  let iframe = document.getElementById('raseshwari-print-frame');
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.id = 'raseshwari-print-frame';
    iframe.setAttribute('style', 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;visibility:hidden;');
    document.body.appendChild(iframe);
  }

  try {
    const iframeDoc = iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(fullPrintDoc);
    iframeDoc.close();

    setTimeout(() => {
      try {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
      } catch (errIframe) {
        console.warn('Iframe print error, falling back to window.print():', errIframe);
        fallbackPrintExecution(fullPrintDoc, pdfTitle);
      } finally {
        setTimeout(() => {
          document.title = originalTitle;
        }, 5000);
      }
    }, 400);

  } catch (err) {
    console.warn('Iframe write error, falling back to window.print():', err);
    fallbackPrintExecution(fullPrintDoc, pdfTitle);
  }
}

function fallbackPrintExecution(fullPrintDoc, pdfTitle) {
  const originalTitle = document.title;
  let printWindow = null;
  try {
    printWindow = window.open('', '_blank', 'width=950,height=1000');
  } catch (e) {
    printWindow = null;
  }

  if (printWindow && printWindow.document) {
    printWindow.document.open();
    printWindow.document.write(fullPrintDoc);
    printWindow.document.close();
    printWindow.focus();
    printWindow.onafterprint = function() {
      try { printWindow.close(); } catch(e) {}
    };
    setTimeout(() => {
      try { printWindow.print(); } catch(e) {}
    }, 450);
  } else {
    document.title = pdfTitle;
    window.print();
    setTimeout(() => {
      document.title = originalTitle;
    }, 4000);
  }
}

// Show Interactive WhatsApp Attachment Helper Modal
function showWhatsAppAttachmentGuide(invoiceNo, targetPhone, waUrl) {
  let overlay = document.getElementById('whatsapp-guide-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'whatsapp-guide-overlay';
    overlay.className = 'whatsapp-guide-overlay';
    overlay.onclick = closeWhatsAppGuideModal;
    document.body.appendChild(overlay);
  }

  const filename = `Raseshwari_Invoice_${invoiceNo}.pdf`;
  overlay.innerHTML = `
    <div class="whatsapp-guide-card" onclick="event.stopPropagation()">
      <div class="whatsapp-guide-header">
        <div class="whatsapp-guide-icon-badge">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        </div>
        <div>
          <h4>Official PDF Invoice Downloaded!</h4>
          <p>${filename}</p>
        </div>
        <button type="button" class="btn-close-invoice-modal" onclick="closeWhatsAppGuideModal()">&times;</button>
      </div>

      <div class="whatsapp-guide-body">
        <div class="guide-alert-box">
          <span style="font-size: 1.1rem; color: #16A34A; font-weight: bold;">✔</span>
          <span><strong>1-Page Official PDF Invoice</strong> aapke Downloads folder me save ho gaya hai!</span>
        </div>
        <p class="guide-instruction-title">WhatsApp par PDF attach karke kaise bhejein:</p>
        <div class="guide-step-row">
          <div class="guide-step-badge">1</div>
          <div class="guide-step-text">WhatsApp Web / App chat khul chuki hai (Order details pre-filled hai).</div>
        </div>
        <div class="guide-step-row">
          <div class="guide-step-badge">2</div>
          <div class="guide-step-text">Chat box ke niche <strong>📎 (Paperclip / Attach)</strong> icon par click karein.</div>
        </div>
        <div class="guide-step-row">
          <div class="guide-step-badge">3</div>
          <div class="guide-step-text"><strong>📄 Document</strong> select karein aur Downloads folder se <strong>${filename}</strong> chun kar Send karein!</div>
        </div>
      </div>

      <div class="whatsapp-guide-actions">
        <button type="button" class="btn btn-whatsapp-direct" onclick="window.open('${waUrl}', '_blank')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.077-2.127-.514-1.825-.757-3.003-2.613-3.094-2.735-.091-.122-.74-1.026-.74-1.956 0-.93.488-1.385.661-1.577.173-.192.38-.24.507-.24.126 0 .253.001.364.007.118.006.276-.045.431.328.158.381.543 1.328.591 1.425.048.096.08.209.016.335-.064.126-.096.205-.192.318-.096.113-.203.253-.29.34-.096.096-.197.201-.085.393.112.192.5 1.155 1.074 1.666.738.658 1.36.862 1.552.958.192.096.304.08.416-.048.113-.128.483-.561.611-.753.128-.192.257-.16.432-.096.176.064 1.116.526 1.309.622.192.096.321.144.369.224.048.08.048.465-.096.87zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.436 5.176L2 22l4.982-1.308A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
          <span>Open WhatsApp Chat</span>
        </button>
        <button type="button" class="btn btn-secondary-guide" onclick="closeWhatsAppGuideModal()">Theek Hai (Close)</button>
      </div>
    </div>
  `;

  overlay.classList.add('active');
}

function closeWhatsAppGuideModal(e) {
  if (e && e.target && e.target.id !== 'whatsapp-guide-overlay' && !e.target.classList.contains('btn-close-invoice-modal')) {
    return;
  }
  const overlay = document.getElementById('whatsapp-guide-overlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
}

// WhatsApp Order Flow
function triggerWhatsAppOrderWithInvoice(data, targetPhone = "919905561443") {
  const textMsg = buildWhatsAppOrderMessage(data);
  const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(textMsg)}`;
  window.open(waUrl, '_blank');
  showToast('Order details sent to WhatsApp! 🌿', { duration: 2000 });
}

// Send Detailed Invoice & Order Copy to Factory / WhatsApp
function sendInvoiceCopyToCompany(targetPhone = "919905561443") {
  if (!window.lastOrderInvoiceData) {
    showToast('No invoice data available.');
    return;
  }
  triggerWhatsAppOrderWithInvoice(window.lastOrderInvoiceData, targetPhone);
}

// Copy Full Invoice Receipt Text to Clipboard
function copyInvoiceText() {
  if (!window.lastOrderInvoiceData) return;
  const data = window.lastOrderInvoiceData;
  const summary = buildWhatsAppOrderMessage(data);
  
  navigator.clipboard.writeText(summary).then(() => {
    showToast('Complete invoice receipt copied to clipboard! 📋');
  }).catch(() => {
    showToast('Invoice copied!');
  });
}


// ==========================================================================
// ORDER REVIEW & MESSAGE EDITOR SYSTEM (Per User Request)
// ==========================================================================
window.activeReviewInvoiceData = null;

function openReviewModal(invoiceData) {
  window.activeReviewInvoiceData = invoiceData;
  window.lastOrderInvoiceData = invoiceData;

  try {
    localStorage.setItem('raseshwari_last_invoice', JSON.stringify(invoiceData));
  } catch (e) {}

  const invEl = document.getElementById('review-inv-no');
  const payEl = document.getElementById('review-payment-disp');
  const totEl = document.getElementById('review-total-disp');
  const txtArea = document.getElementById('review-editable-message');
  const sendLabel = document.getElementById('review-send-label');

  if (invEl) invEl.textContent = invoiceData.invoiceNo;
  if (payEl) payEl.textContent = '💵 Cash on Delivery (COD)';
  if (totEl) totEl.textContent = `₹${invoiceData.grandTotal}`;
  if (txtArea) {
    txtArea.value = buildWhatsAppOrderMessage(invoiceData);
  }

  const channel = window.activeOrderChannel || 'whatsapp';
  if (sendLabel) {
    if (channel === 'whatsapp') {
      sendLabel.textContent = 'Send on WhatsApp 🌿';
    } else if (channel === 'email') {
      sendLabel.textContent = 'Send via Email ✉️';
    } else {
      sendLabel.textContent = 'Send via SMS 📱';
    }
  }

  const modal = document.getElementById('order-review-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeReviewModal(e) {
  if (e && e.target && e.target.id !== 'order-review-modal' && !e.target.classList.contains('btn-close-modal')) {
    return;
  }
  const modal = document.getElementById('order-review-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function backToDeliveryForm() {
  const reviewModal = document.getElementById('order-review-modal');
  if (reviewModal) reviewModal.classList.remove('active');

  const deliveryModal = document.getElementById('delivery-modal-overlay');
  if (deliveryModal) {
    deliveryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function copyReviewMessageText() {
  const txtArea = document.getElementById('review-editable-message');
  if (!txtArea) return;
  navigator.clipboard.writeText(txtArea.value).then(() => {
    showToast('Bill message copied to clipboard! 📋');
  }).catch(() => {
    showToast('Message copied!');
  });
}

function dispatchFinalOrder(targetPhone = null) {
  const invoiceData = window.activeReviewInvoiceData || window.lastOrderInvoiceData;
  if (!invoiceData) {
    showToast('No active order data.');
    return;
  }

  const phoneToSend = targetPhone || window.preferredOrderPhone || "919905561443";
  const txtArea = document.getElementById('review-editable-message');
  const finalText = txtArea ? txtArea.value.trim() : buildWhatsAppOrderMessage(invoiceData);
  const channel = window.activeOrderChannel || 'whatsapp';

  // Close review modal
  const reviewModal = document.getElementById('order-review-modal');
  if (reviewModal) {
    reviewModal.classList.remove('active');
  }

  // Show Invoice Modal on screen with official retail bill
  showInvoiceModal(invoiceData);

  // Dispatch to selected channel
  if (channel === 'whatsapp') {
    const waUrl = `https://wa.me/${phoneToSend}?text=${encodeURIComponent(finalText)}`;
    window.open(waUrl, '_blank');
    const lineLabel = phoneToSend.includes('98356') ? 'Line 2' : 'Line 1';
    showToast(`Order sent to WhatsApp (${lineLabel})! 🌿`, { duration: 2500 });
  } else if (channel === 'email') {
    const subject = encodeURIComponent(`New Spice Order ${invoiceData.invoiceNo} from ${invoiceData.name}`);
    window.location.href = `mailto:raseshwarimasala@gmail.com?subject=${subject}&body=${encodeURIComponent(finalText)}`;
    showToast('Opening email client... ✉️', { duration: 2500 });
  } else if (channel === 'sms') {
    window.location.href = `sms:+919905561443?body=${encodeURIComponent(finalText)}`;
    showToast('Opening SMS app... 📱', { duration: 2500 });
  }
}

function sendPDFBillFromReview() {
  const invoiceData = window.activeReviewInvoiceData || window.lastOrderInvoiceData;
  if (!invoiceData) return;
  printCurrentInvoice(invoiceData, true);
}

function sendPDFBillFromModal() {
  const invoiceData = window.lastOrderInvoiceData;
  if (!invoiceData) return;
  printCurrentInvoice(invoiceData, true);
}

function handleConfirmOrder(e) {
  e.preventDefault();

  if (state.cart.length === 0) {
    showToast('Your cart is empty!');
    closeDeliveryModal();
    return;
  }

  const name = document.getElementById('cust-name-input').value.trim();
  const phone = document.getElementById('cust-phone-input').value.trim();
  const flat = document.getElementById('cust-flat-input').value.trim();
  const landmark = document.getElementById('cust-landmark-input').value.trim();
  const city = document.getElementById('cust-city-input').value.trim() || 'Sitamarhi';
  const stateVal = document.getElementById('cust-state-input').value.trim() || 'Bihar';
  const pincode = document.getElementById('cust-pin-input').value.trim();

  if (!name || !phone || !flat || !landmark || !pincode) {
    alert('Please fill all required address fields for delivery.');
    return;
  }

  // Save address for future visits
  try {
    localStorage.setItem('raseshwari_delivery_details', JSON.stringify({
      name, phone, flat, landmark, city, state: stateVal, pincode
    }));
  } catch (err) {
    console.error('Could not save address', err);
  }

  // Generate Official Invoice Data
  const invoiceData = createInvoiceData(name, phone, flat, landmark, city, stateVal, pincode, window.activeOrderChannel);

  // Close Delivery Modal & Cart Drawer
  closeDeliveryModal();
  toggleCartDrawer(false);

  // Open Message Review & Edit Modal (Step before final sending, per user requirement)
  openReviewModal(invoiceData);
}

function sendInquiryOnWhatsApp() {
  const nameEl = document.getElementById('inq-name');
  const phoneEl = document.getElementById('inq-phone');
  const msgEl = document.getElementById('inq-message');

  const name = nameEl ? nameEl.value.trim() : '';
  const phone = phoneEl ? phoneEl.value.trim() : '';
  const query = msgEl ? msgEl.value.trim() : '';

  if (!name || !query) {
    alert('Please enter your name and message.');
    return;
  }

  let text = `*New Inquiry from Raseshwari Spices Website:*\n\n`;
  text += `*Name:* ${name}\n`;
  text += `*Phone:* ${phone || 'Not provided'}\n`;
  text += `*Inquiry / Requirement:* ${query}\n\n`;
  text += `Location: Sitamarhi, Bihar`;

  window.open(`https://wa.me/919905561443?text=${encodeURIComponent(text)}`, '_blank');
}

// Toast notification - Ultra-Compact Design, 0.7s Duration, With Action Button
function showToast(msg, options = {}) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  const duration = (options && options.duration !== undefined) ? options.duration : 700; // 0.7s per user request
  const hasButton = options && options.button === true;
  const btnText = (options && options.btnText) || 'Cart ➔';
  const onClickAction = (options && options.onAction) || 'toggleCartDrawer(true)';

  toast.innerHTML = `
    <span class="toast-tick-icon">✓</span>
    <span class="toast-label">${msg}</span>
    ${hasButton ? `<button type="button" class="toast-action-btn" onclick="${onClickAction}; hideToast();">${btnText}</button>` : ''}
  `;

  toast.classList.add('show');
  clearTimeout(window._toastTimer);

  const startDismiss = () => {
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => {
      hideToast();
    }, duration);
  };

  toast.onmouseenter = () => clearTimeout(window._toastTimer);
  toast.onmouseleave = startDismiss;

  startDismiss();
}

function hideToast() {
  const toast = document.getElementById('site-toast');
  if (toast) {
    toast.classList.remove('show');
  }
}

// Event Listeners setup
function setupEventListeners() {
  const searchInputs = document.querySelectorAll('.header-search input');
  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderCatalog();
    });
  });

  const filterBtns = document.querySelectorAll('.tab-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      state.currentFilter = e.target.getAttribute('data-filter') || 'all';
      renderCatalog();
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// ==========================================================================
// INTERACTIVE LINE PICKER MODAL (Line 1 / Line 2 for WhatsApp & Call)
// ==========================================================================
window.activeLinePickerContext = 'order';

function openLinePicker(context = 'order') {
  window.activeLinePickerContext = context;
  const modal = document.getElementById('line-picker-modal');
  const sub = document.getElementById('line-picker-subtitle');
  if (sub) {
    if (context === 'order') {
      sub.textContent = 'Select WhatsApp line to send your spice order:';
    } else {
      sub.textContent = 'Select WhatsApp line to send invoice copy to plant:';
    }
  }
  if (modal) {
    modal.classList.add('active');
  }
}

function closeLinePickerModal(e) {
  if (e && e.target && e.target.id !== 'line-picker-modal' && !e.target.classList.contains('btn-close-line-picker')) {
    return;
  }
  const modal = document.getElementById('line-picker-modal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function executeLineDispatch(phone) {
  closeLinePickerModal();
  if (window.activeLinePickerContext === 'invoice') {
    sendInvoiceCopyToCompany(phone);
  } else {
    dispatchFinalOrder(phone);
  }
}

window.confirmOrderAndDownloadReceipt = confirmOrderAndDownloadReceipt;
window.showSuccessDownloadBanner = showSuccessDownloadBanner;
window.downloadCurrentInvoicePDF = downloadCurrentInvoicePDF;
