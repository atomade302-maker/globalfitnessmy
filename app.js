// ==========================================================================
// GLOBAL FITNESS MYSORE - INTERACTIVE APPLICATION SCRIPT
// ==========================================================================

// --- PRODUCTS DATA ---
const PRODUCTS_DATA = [
    {
        id: 117,
        name: "Treadmill Model Treadmill J",
        category: "treadmill",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./j-1535-MNc1681198231.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality treadmill equipment perfect for your fitness needs."
    },
    {
        id: 118,
        name: "Treadmill Model TM",
        category: "treadmill",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./TM-104-uUO1684838124.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality treadmill equipment perfect for your fitness needs."
    },
    {
        id: 119,
        name: "Treadmill Model TM",
        category: "treadmill",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./TM-116-xLP1684837953.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality treadmill equipment perfect for your fitness needs."
    },
    {
        id: 120,
        name: "Treadmill Model TM",
        category: "treadmill",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./tm-131-Ah41681197384.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality treadmill equipment perfect for your fitness needs."
    },
    {
        id: 121,
        name: "Treadmill Model TM",
        category: "treadmill",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./TM-147-9tr1684837321.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality treadmill equipment perfect for your fitness needs."
    },
    {
        id: 122,
        name: "Treadmill Model TM",
        category: "treadmill",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./tm-154-IXG1707893033.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality treadmill equipment perfect for your fitness needs."
    },
    {
        id: 123,
        name: "Treadmill Model TM",
        category: "treadmill",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./tm-155ac-zLS1764661939.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality treadmill equipment perfect for your fitness needs."
    },
    {
        id: 124,
        name: "Treadmill Model TM",
        category: "treadmill",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./tm-155dc-f1X1764668513.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality treadmill equipment perfect for your fitness needs."
    },
    {
        id: 125,
        name: "Treadmill Model TM",
        category: "treadmill",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./TM-157 BK-t7h1604125467.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality treadmill equipment perfect for your fitness needs."
    },
    {
        id: 126,
        name: "Treadmill Model TM",
        category: "treadmill",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./tm-158-gkk1688712481.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality treadmill equipment perfect for your fitness needs."
    },
    {
        id: 127,
        name: "Treadmill Model TM",
        category: "treadmill",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./TM-161-Hly1684837045.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality treadmill equipment perfect for your fitness needs."
    },
    {
        id: 128,
        name: "Treadmill Model TM",
        category: "treadmill",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./tm-218-GGh1764662650.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality treadmill equipment perfect for your fitness needs."
    },
    {
        id: 129,
        name: "Treadmill Model TM",
        category: "treadmill",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./tm-320ac-fk41764660272.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality treadmill equipment perfect for your fitness needs."
    },
    {
        id: 130,
        name: "Treadmill Model TM",
        category: "treadmill",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./TM-321AC-KdQ1764659793.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality treadmill equipment perfect for your fitness needs."
    },
    {
        id: 131,
        name: "Treadmill Model TRDMIL",
        category: "treadmill",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./trdmil-HXW1778048682.jpeg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality treadmill equipment perfect for your fitness needs."
    },
    {
        id: 132,
        name: "Treadmill Model Treadmill WP",
        category: "treadmill",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./wp-101-0JE1764667857.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality treadmill equipment perfect for your fitness needs."
    },
    {
        id: 102,
        name: "Cross Training Model CT",
        category: "cross-training",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./ct-562-uTt1689837655.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality cross training equipment perfect for your fitness needs."
    },
    {
        id: 103,
        name: "Cross Training Model CT",
        category: "cross-training",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./ct-581-d9B1764674573.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality cross training equipment perfect for your fitness needs."
    },
    {
        id: 104,
        name: "Cross Training Model CT",
        category: "cross-training",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./ct-583-JFk1764673920.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality cross training equipment perfect for your fitness needs."
    },
    {
        id: 105,
        name: "Cross Training Model CT",
        category: "cross-training",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./ct-590-McI1764670906.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality cross training equipment perfect for your fitness needs."
    },
    {
        id: 106,
        name: "Cross Training Model CT",
        category: "cross-training",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./ct-593-txD1681198819.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality cross training equipment perfect for your fitness needs."
    },
    {
        id: 107,
        name: "Cross Training Model CT",
        category: "cross-training",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./ct-595-QJC1764670094.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality cross training equipment perfect for your fitness needs."
    },
    {
        id: 114,
        name: "Spine Bike Model SP",
        category: "spine-bike",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./sp-2206-fy91764917231.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality spine bike equipment perfect for your fitness needs."
    },
    {
        id: 115,
        name: "Spine Bike Model SP",
        category: "spine-bike",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./sp-2207-lSR1686130944.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality spine bike equipment perfect for your fitness needs."
    },
    {
        id: 116,
        name: "Spine Bike Model SP",
        category: "spine-bike",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./SP-2208-aV51740056647.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality spine bike equipment perfect for your fitness needs."
    },
    {
        id: 133,
        name: "Upright Bike Model UP",
        category: "upright-bike",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./up-903-kVI1764916702.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality upright bike equipment perfect for your fitness needs."
    },
    {
        id: 134,
        name: "Upright Bike Model UP",
        category: "upright-bike",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./up-906-fKJ1707894914.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality upright bike equipment perfect for your fitness needs."
    },
    {
        id: 135,
        name: "Upright Bike Model UP",
        category: "upright-bike",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./up-949-lRq1764679966.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality upright bike equipment perfect for your fitness needs."
    },
    {
        id: 136,
        name: "Upright Bike Model UP",
        category: "upright-bike",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./up-972-4i21764675759.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality upright bike equipment perfect for your fitness needs."
    },
    {
        id: 137,
        name: "Upright Bike Model UP",
        category: "upright-bike",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./up-982-UWA1764675158.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality upright bike equipment perfect for your fitness needs."
    },
    {
        id: 138,
        name: "Upright Bike Model UP",
        category: "upright-bike",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./up-999-kD31678958159.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality upright bike equipment perfect for your fitness needs."
    },
    {
        id: 108,
        name: "Home Gym Model HG",
        category: "home-gym",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./hg-1211-j271681205300.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality home gym equipment perfect for your fitness needs."
    },
    {
        id: 109,
        name: "Home Gym Model HG",
        category: "home-gym",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./hg-1211-T7G1681205287.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality home gym equipment perfect for your fitness needs."
    },
    {
        id: 110,
        name: "Home Gym Model HG",
        category: "home-gym",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./hg-1213-CyE1681205274.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality home gym equipment perfect for your fitness needs."
    },
    {
        id: 111,
        name: "Home Gym Model HG",
        category: "home-gym",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./hg-1233-TkE1681205172.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality home gym equipment perfect for your fitness needs."
    },
    {
        id: 112,
        name: "Home Gym Model HG",
        category: "home-gym",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./hg-1242-4mT1681205256.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality home gym equipment perfect for your fitness needs."
    },
    {
        id: 113,
        name: "Home Gym Model IMG39",
        category: "home-gym",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./img39-zik1739959288.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality home gym equipment perfect for your fitness needs."
    },
    {
        id: 100,
        name: "Accessories Model 28 MM BAR",
        category: "accessories",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./28 mm bar-AHc1631619513.jpg",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality accessories equipment perfect for your fitness needs."
    },
    {
        id: 101,
        name: "Accessories Model AB",
        category: "accessories",
        price: "Price on Enquiry",
        rawPrice: 0,
        image: "./AB-1005-FQK1606392866.png",
        features: ["Premium Built", "Commercial Grade", "Durable"],
        specs: ["Contact us for detailed specifications and sizing."],
        desc: "High-quality accessories equipment perfect for your fitness needs."
    }
];

// --- APP STATE ---
let cart = JSON.parse(localStorage.getItem('gf_mysore_cart')) || [];

// --- DOM ELEMENTS ---
document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('productsGrid');
    const productSearchInput = document.getElementById('productSearchInput');
    const filterCategories = document.getElementById('filterCategories');
    const cartToggleBtn = document.getElementById('cartToggleBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartCloseBtn = document.getElementById('cartCloseBtn');
    const cartBackdrop = document.getElementById('cartBackdrop');
    const cartBody = document.getElementById('cartBody');
    const cartEmptyState = document.getElementById('cartEmptyState');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotalItemsCount = document.getElementById('cartTotalItemsCount');
    const cartBadgeCount = document.getElementById('cartBadgeCount');
    const whatsappCheckoutBtn = document.getElementById('whatsappCheckoutBtn');
    
    // Modal Elements
    const productModal = document.getElementById('productModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalProductImg = document.getElementById('modalProductImg');
    const modalProductCategory = document.getElementById('modalProductCategory');
    const modalProductName = document.getElementById('modalProductName');
    const modalProductPrice = document.getElementById('modalProductPrice');
    const modalProductDesc = document.getElementById('modalProductDesc');
    const modalProductSpecsList = document.getElementById('modalProductSpecsList');
    const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
    const modalDirectWhatsAppBtn = document.getElementById('modalDirectWhatsAppBtn');
    
    // Header Scroll
    const mainHeader = document.getElementById('mainHeader');
    
    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    const contactSuccessMsg = document.getElementById('contactSuccessMsg');
    
    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterSuccess = document.getElementById('newsletterSuccess');

    let currentSelectedCategory = 'all';
    let currentSearchQuery = '';

    // --- STICKY HEADER ---
    window.addEventListener('scroll', () => {
        if (mainHeader) {
            if (window.scrollY > 50) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        }
        highlightActiveNav();
    });

    // --- MOBILE MENU ---
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            if (mobileNavOverlay) mobileNavOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    const closeMobileMenu = () => {
        if (mobileNavOverlay) mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

    // --- INITIALIZE & RENDER PRODUCTS ---
    const renderProducts = () => {
        productsGrid.innerHTML = '';
        
        const filtered = PRODUCTS_DATA.filter(prod => {
            const matchesCategory = currentSelectedCategory === 'all' || prod.category === currentSelectedCategory;
            const matchesSearch = prod.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                                  prod.category.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                                  prod.features.some(feat => feat.toLowerCase().includes(currentSearchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });

        if (filtered.length === 0) {
            productsGrid.innerHTML = `
                <div class="text-center w-100" style="grid-column: 1/-1; padding: 60px 0;">
                    <i class="fa-solid fa-triangle-exclamation" style="font-size: 3rem; color: var(--accent-color); margin-bottom: 20px;"></i>
                    <h3>No equipment matches your search.</h3>
                    <p style="color: var(--text-muted); margin-top: 10px;">Try searching for other terms like 'treadmill' or filter by category.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(prod => {
            const card = document.createElement('article');
            card.className = 'product-card animate-fade-in';
            card.innerHTML = `
                <div class="product-img-wrapper">
                    <img src="${prod.image}" alt="${prod.name}">
                </div>
                <div class="product-info">
                    <span class="product-cat">${prod.category}</span>
                    <h3 class="product-name">${prod.name}</h3>
                    <p class="product-price">${prod.price}</p>
                    <div class="product-features">
                        ${prod.features.map(feat => `<span class="feat-badge">${feat}</span>`).join('')}
                    </div>
                    <div class="product-actions" style="display: flex; flex-wrap: wrap; gap: 8px;">
                        <button class="btn-card-primary" style="flex: 1;" onclick="openProductModal(${prod.id})">Quick View</button>
                        <button class="btn-card-secondary" style="flex: 1;" onclick="addToInquiry(${prod.id})">Add to Cart</button>
                        <button class="btn-card-secondary" style="background: #2563eb; color: white; width: 100%; border: none; flex-basis: 100%;" onclick="directEnquire(${prod.id})"><i class="fa-brands fa-whatsapp"></i> Enquire Now</button>
                    </div>
                </div>
            `;
            productsGrid.appendChild(card);
        });
    };

    // Category Filter Click
    filterCategories.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentSelectedCategory = e.target.getAttribute('data-category');
            renderProducts();
        }
    });

    // Search Input Event
    productSearchInput.addEventListener('input', (e) => {
        currentSearchQuery = e.target.value;
        renderProducts();
    });

    // Footer category filter linking helper
    document.querySelectorAll('.footer-cat-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const cat = link.getAttribute('data-category');
            currentSelectedCategory = cat;
            // Activate button in DOM
            document.querySelectorAll('.filter-btn').forEach(btn => {
                if(btn.getAttribute('data-category') === cat) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            renderProducts();
        });
    });

    // --- INQUIRY CART MANAGEMENT ---
    const updateLocalStorage = () => {
        localStorage.setItem('gf_mysore_cart', JSON.stringify(cart));
    };

    const updateCartBadges = () => {
        const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadgeCount.innerText = totalItemsCount;
        cartTotalItemsCount.innerText = totalItemsCount;
        if (totalItemsCount > 0) {
            cartBadgeCount.classList.remove('hidden');
        } else {
            cartBadgeCount.classList.add('hidden');
        }
    };

    
    window.directEnquire = (productId) => {
        const product = PRODUCTS_DATA.find(p => p.id === productId);
        if (!product) return;
        const message = `Hi Global Fitness And Sports,\n\nI want to inquire about: "${product.name}". Please share pricing, specifications and stock status. Thanks!`;
        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/919886728704?text=${encoded}`, '_blank');
    };

    window.addToInquiry = (productId) => {
        const product = PRODUCTS_DATA.find(p => p.id === productId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        updateLocalStorage();
        updateCartBadges();
        renderCartItems();
        openCartSidebar();
    };

    window.updateCartQty = (productId, delta) => {
        const item = cart.find(item => item.id === productId);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }

        updateLocalStorage();
        updateCartBadges();
        renderCartItems();
    };

    window.removeFromCart = (productId) => {
        cart = cart.filter(item => item.id !== productId);
        updateLocalStorage();
        updateCartBadges();
        renderCartItems();
    };

    const renderCartItems = () => {
        const listContainer = document.getElementById('cartItemsList');
        
        if (cart.length === 0) {
            cartEmptyState.classList.remove('hidden');
            cartItemsList.classList.add('hidden');
            cartFooter.classList.add('hidden');
            return;
        }

        cartEmptyState.classList.add('hidden');
        cartItemsList.classList.remove('hidden');
        cartFooter.classList.remove('hidden');

        listContainer.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">${item.price}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="cart-qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button class="cart-qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
                    <i class="fa-solid fa-trash-can cart-item-remove" onclick="removeFromCart(${item.id})"></i>
                </div>
            `;
            listContainer.appendChild(itemElement);
        });
    };

    // Sidebar Toggling
    const openCartSidebar = () => {
        cartSidebar.classList.add('active');
        cartBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeCartSidebar = () => {
        cartSidebar.classList.remove('active');
        cartBackdrop.classList.remove('active');
        if (!productModal.classList.contains('active')) {
            document.body.style.overflow = 'auto';
        }
    };

    cartToggleBtn.addEventListener('click', openCartSidebar);
    cartCloseBtn.addEventListener('click', closeCartSidebar);
    cartBackdrop.addEventListener('click', closeCartSidebar);

    // --- WHATSAPP CART CHECKOUT ---
    whatsappCheckoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;

        let message = `Hi Global Fitness And Sports,\n\nI would like to inquire about the pricing and delivery details for the following equipment items:\n\n`;
        
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} (Qty: ${item.quantity})\n`;
        });
        
        message += `\nTotal Items: ${cart.reduce((sum, item) => sum + item.quantity, 0)}\n\nDelivery Location: Mysore, Karnataka.\n\nPlease share availability and quote. Thanks!`;
        
        const encodedMessage = encodeURIComponent(message);
        // Replace with physical showroom WhatsApp number
        const whatsappUrl = `https://wa.me/919886728704?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    });

    // --- PRODUCT DETAIL MODAL (QUICK VIEW) ---
    let currentActiveModalProductId = null;

    window.openProductModal = (productId) => {
        const product = PRODUCTS_DATA.find(p => p.id === productId);
        if (!product) return;

        currentActiveModalProductId = productId;
        
        modalProductImg.src = product.image;
        modalProductImg.alt = product.name;
        modalProductCategory.innerText = product.category;
        modalProductName.innerText = product.name;
        modalProductPrice.innerText = product.price;
        modalProductDesc.innerText = product.desc;
        
        modalProductSpecsList.innerHTML = '';
        product.specs.forEach(spec => {
            const li = document.createElement('li');
            li.innerText = spec;
            if (spec.toLowerCase().includes("contact us for detailed specifications and sizing")) {
                li.style.color = "#2563eb";
                li.style.fontWeight = "600";
            }
            modalProductSpecsList.appendChild(li);
        });

        // Set action event for cart button inside modal
        modalAddToCartBtn.onclick = () => {
            addToInquiry(productId);
            closeProductModal();
        };

        // Set action event for direct WhatsApp chat for single product
        modalDirectWhatsAppBtn.onclick = () => {
            const message = `Hi Global Fitness And Sports,\n\nI want to inquire about: "${product.name}" (${product.price}). Please share specifications brochure and stock status. Thanks!`;
            const encoded = encodeURIComponent(message);
            window.open(`https://wa.me/919886728704?text=${encoded}`, '_blank');
        };

        productModal.classList.add('active');
        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeProductModal = () => {
        productModal.classList.remove('active');
        modalBackdrop.classList.remove('active');
        if (!cartSidebar.classList.contains('active')) {
            document.body.style.overflow = 'auto';
        }
        currentActiveModalProductId = null;
    };

    modalCloseBtn.addEventListener('click', closeProductModal);
    modalBackdrop.addEventListener('click', closeProductModal);

    // --- FORMS HANDLING ---
    
    // Contact Form — validated + iframe-target submission
    if (contactForm) {
        const phoneInput = document.getElementById('formPhone');
        const phoneError = document.getElementById('phoneError');

        // Real-time: allow only digits, max 10 chars
        if (phoneInput) {
            phoneInput.addEventListener('input', () => {
                phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 10);
                const val = phoneInput.value;
                if (phoneError) {
                    if (val.length > 0 && (val.length < 10 || !/^[6-9]/.test(val))) {
                        phoneError.style.display = 'block';
                    } else {
                        phoneError.style.display = 'none';
                    }
                }
            });
        }

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name    = document.getElementById('formName').value.trim();
            const phone   = phoneInput ? phoneInput.value.trim() : '';
            const type    = document.getElementById('formSetupType').value;
            const message = document.getElementById('formMessage').value.trim();

            // --- Phone validation ---
            const phoneRegex = /^[6-9][0-9]{9}$/;
            if (!phoneRegex.test(phone)) {
                if (phoneError) phoneError.style.display = 'block';
                if (phoneInput)  phoneInput.focus();
                return;
            }
            if (phoneError) phoneError.style.display = 'none';

            // --- Show spinner briefly ---
            const submitBtn = document.getElementById('contactSubmitBtn');
            submitBtn.disabled = true;
            submitBtn.innerHTML = `Sending... <i class="fa-solid fa-spinner fa-spin"></i>`;

            // --- Submit form into hidden iframe in background ---
            contactForm.submit();

            // --- Show success message IMMEDIATELY after 600ms (feels instant) ---
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = `Submit Inquiry <i class="fa-solid fa-paper-plane"></i>`;

                contactForm.reset();
                if (phoneError) phoneError.style.display = 'none';

                // Show success banner
                if (contactSuccessMsg) {
                    contactSuccessMsg.classList.remove('hidden');
                    contactSuccessMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }

                // Auto-hide after 8 seconds
                setTimeout(() => {
                    if (contactSuccessMsg) contactSuccessMsg.classList.add('hidden');
                }, 8000);
            }, 600);
        });
    }

    // Newsletter Form (null-guarded: form element may not exist in all page variants)
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            
            const submitBtn = newsletterForm.querySelector('button');
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i>`;
                input.value = '';
                
                if (newsletterSuccess) newsletterSuccess.classList.remove('hidden');
                setTimeout(() => {
                    if (newsletterSuccess) newsletterSuccess.classList.add('hidden');
                }, 3000);
            }, 800);
        });
    }

    // --- NAVIGATION HIGHLIGHT ON SCROLL ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const highlightActiveNav = () => {
        let currentSectionId = 'home';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    // --- GSAP SCROLLTRIGGER ANIMATIONS ---
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // 1. Hero Title Slide Up
        gsap.from('.giant-hero-title', {
            y: 80,
            opacity: 0,
            duration: 1.2,
            ease: 'power4.out',
            delay: 0.2
        });

        // 2. Hero Description & Badge Fade In
        gsap.from('.hero-description-noramble, .rotating-badge-container', {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.5
        });

        // 3. Hero Overlapping Image Scale In
        gsap.from('.overlapping-hero-img-wrapper', {
            scale: 0.85,
            opacity: 0,
            duration: 1.4,
            ease: 'power4.out',
            delay: 0.3
        });

        // 4. Vertical FITNESS & SPORTS Text Slide In
        gsap.from('.hero-vertical-text-container span', {
            x: -60,
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out',
            delay: 0.7
        });

        // 5. Header Bar Fade In
        gsap.from('.main-header-noramble', {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.1
        });

        // 6. Stats Section Cards Reveal
        gsap.from('.stat-card', {
            scrollTrigger: {
                trigger: '.stats-row-section',
                start: 'top 85%'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
        });

        // 7. Categories Row Reveal
        gsap.from('.category-info-card-left', {
            scrollTrigger: {
                trigger: '.categories-row-section',
                start: 'top 80%'
            },
            x: -80,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.category-card-noramble', {
            scrollTrigger: {
                trigger: '.categories-row-section',
                start: 'top 80%'
            },
            x: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out'
        });

        // 8. Turnkey Services Section Reveal
        gsap.from('.setup-section-left', {
            scrollTrigger: {
                trigger: '.setup-showcase-section',
                start: 'top 80%'
            },
            x: -80,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.setup-feature-card', {
            scrollTrigger: {
                trigger: '.setup-showcase-section',
                start: 'top 80%'
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
        });

        // 9. Contact Info Panel & Form
        gsap.from('.contact-info-panel-noramble', {
            scrollTrigger: {
                trigger: '.contact-section-noramble',
                start: 'top 80%'
            },
            x: -50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.contact-form-container-noramble', {
            scrollTrigger: {
                trigger: '.contact-section-noramble',
                start: 'top 80%'
            },
            x: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    }

    // --- VISUAL ADJUSTER SCRIPT ---
    const visualAdjuster = document.getElementById('visualAdjuster');
    const adjusterToggle = document.getElementById('adjusterToggle');
    const adjusterCopyBtn = document.getElementById('adjusterCopyBtn');

    if (visualAdjuster && adjusterToggle) {
        adjusterToggle.addEventListener('click', () => {
            visualAdjuster.classList.toggle('open');
        });

        const controls = [
            { id: 'vertical-size', property: '--vertical-text-font-size', suffix: 'vh' },
            { id: 'vertical-stretch-h', property: '--vertical-text-stretch-height', suffix: '' },
            { id: 'vertical-stretch-w', property: '--vertical-text-stretch-width', suffix: '' },
            { id: 'vertical-left', property: '--vertical-text-left', suffix: 'px' },
            { id: 'vertical-spacing', property: '--vertical-text-letter-spacing', suffix: 'px' },
            { id: 'ticker-stretch', property: '--ticker-text-stretch', suffix: '' },
            { id: 'ticker-db-size', property: '--ticker-dumbbell-size', suffix: 'rem' },
            { id: 'ticker-db-scale', property: '--ticker-dumbbell-scale', suffix: '' },
            { id: 'ticker-speed', property: '--ticker-scroll-speed', suffix: 's' }
        ];

        controls.forEach(ctrl => {
            const input = document.getElementById(`input-${ctrl.id}`);
            const valSpan = document.getElementById(`val-${ctrl.id}`);
            
            if (input && valSpan) {
                input.addEventListener('input', (e) => {
                    const value = e.target.value;
                    valSpan.innerText = `${value}${ctrl.suffix}`;
                    document.documentElement.style.setProperty(ctrl.property, `${value}${ctrl.suffix}`);
                });
            }
        });

        // Copy CSS Code Handler
        if (adjusterCopyBtn) {
            adjusterCopyBtn.addEventListener('click', () => {
                const getVal = (prop, fallback) => {
                    return document.documentElement.style.getPropertyValue(prop).trim() || fallback;
                };
                
                const cssCode = `/* Copy and paste this into style.css at the top under :root */
:root {
    --vertical-text-font-size: ${getVal('--vertical-text-font-size', '5vh')};
    --vertical-text-stretch-height: ${getVal('--vertical-text-stretch-height', '2.4')};
    --vertical-text-stretch-width: ${getVal('--vertical-text-stretch-width', '0.75')};
    --vertical-text-left: ${getVal('--vertical-text-left', '45px')};
    --vertical-text-letter-spacing: ${getVal('--vertical-text-letter-spacing', '5px')};
    --ticker-text-stretch: ${getVal('--ticker-text-stretch', '1.25')};
    --ticker-dumbbell-size: ${getVal('--ticker-dumbbell-size', '4.2rem')};
    --ticker-dumbbell-scale: ${getVal('--ticker-dumbbell-scale', '1.3')};
    --ticker-scroll-speed: ${getVal('--ticker-scroll-speed', '28s')};
}`;
                navigator.clipboard.writeText(cssCode).then(() => {
                    adjusterCopyBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied to Clipboard!`;
                    setTimeout(() => {
                        adjusterCopyBtn.innerHTML = `<i class="fa-solid fa-copy"></i> Copy CSS Code`;
                    }, 2000);
                }).catch(err => {
                    alert("Could not copy automatically. Here is the CSS:\n\n" + cssCode);
                });
            });
        }
    }

    // --- SETUP INITIAL STATE ---
    renderProducts();
    updateCartBadges();
    renderCartItems();
});

// Global helper for visual category clicks
window.filterByCategory = function(category) {
    const filterBtn = document.querySelector(`.filter-btn[data-category="${category}"]`);
    if (filterBtn) {
        // Remove active class from other buttons and set on this one
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        filterBtn.classList.add('active');
        
        // Trigger filter action by executing search/filter
        const searchInput = document.getElementById('productSearchInput');
        if (searchInput) searchInput.value = ''; // Clear search when category card is clicked
        
        // Use custom event or call filter directly if needed. 
        // In app.js, clicking filter-btn should have an event listener that filters.
        filterBtn.dispatchEvent(new Event('click'));
        
        // Scroll smoothly to products grid
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

