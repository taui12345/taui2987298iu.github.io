// ========== MELODY PREMIUM - JAVASCRIPT CORE ==========

// 🎵 BEATS DATABASE
const beatsDatabase = [
    {
        id: 1,
        name: "Neon Dreams",
        artist: "SynthWave Master",
        price: 99,
        category: "trap",
        bpm: 140,
        duration: "3:45",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23ec4899' width='400' height='400'/%3E%3Crect fill='%238b5cf6' x='50' y='50' width='300' height='300' opacity='0.8'/%3E%3C/svg%3E"
    },
    {
        id: 2,
        name: "Lo-Fi Vibes",
        artist: "Chill Beats Co.",
        price: 79,
        category: "lofi",
        bpm: 85,
        duration: "2:30",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%2306b6d4' width='400' height='400'/%3E%3Ccircle cx='200' cy='200' r='100' fill='%23ec4899' opacity='0.6'/%3E%3C/svg%3E"
    },
    {
        id: 3,
        name: "Urban Flow",
        artist: "Hip-Hop Kings",
        price: 129,
        category: "hip-hop",
        bpm: 95,
        duration: "3:15",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23fbbf24' width='400' height='400'/%3E%3Crect fill='%23ec4899' x='75' y='75' width='250' height='250'/%3E%3C/svg%3E"
    },
    {
        id: 4,
        name: "Midnight Chill",
        artist: "Ambient Waves",
        price: 69,
        category: "chill",
        bpm: 70,
        duration: "4:20",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%238b5cf6' width='400' height='400'/%3E%3Cpath d='M0 200 Q100 100 200 200 T400 200' stroke='%2306b6d4' stroke-width='4' fill='none'/%3E%3C/svg%3E"
    },
    {
        id: 5,
        name: "Pulse Trap",
        artist: "Beat Factory",
        price: 119,
        category: "trap",
        bpm: 150,
        duration: "3:00",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23ec4899' width='400' height='400'/%3E%3Crect fill='%23fbbf24' x='100' y='100' width='50' height='200'/%3E%3Crect fill='%23fbbf24' x='175' y='50' width='50' height='300'/%3E%3Crect fill='%23fbbf24' x='250' y='100' width='50' height='200'/%3E%3C/svg%3E"
    },
    {
        id: 6,
        name: "Zen Garden",
        artist: "Relaxation Lab",
        price: 49,
        category: "lofi",
        bpm: 60,
        duration: "5:10",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%2310b981' width='400' height='400'/%3E%3Ccircle cx='100' cy='100' r='40' fill='%23fbbf24'/%3E%3Ccircle cx='300' cy='300' r='60' fill='%2306b6d4' opacity='0.5'/%3E%3C/svg%3E"
    },
    {
        id: 7,
        name: "Street Cypher",
        artist: "Rap Kings",
        price: 139,
        category: "hip-hop",
        bpm: 92,
        duration: "3:45",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23ff6b6b' width='400' height='400'/%3E%3Cpath d='M0 0 L400 400 M400 0 L0 400' stroke='%23fbbf24' stroke-width='3'/%3E%3C/svg%3E"
    },
    {
        id: 8,
        name: "Ethereal Waves",
        artist: "Chillwave Studio",
        price: 89,
        category: "chill",
        bpm: 75,
        duration: "4:00",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%236366f1' width='400' height='400'/%3E%3Ccircle cx='200' cy='200' r='80' fill='%23ec4899' opacity='0.4'/%3E%3Ccircle cx='200' cy='200' r='120' fill='%2306b6d4' opacity='0.2'/%3E%3C/svg%3E"
    }
];

// 🛒 STATE MANAGEMENT
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let isVip = localStorage.getItem('isVip') === 'true' || false;
let selectedPaymentMethod = null;
let selectedVipPackage = null;
let currentFilter = 'all';

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedBeats();
    loadAllBeats();
    updateCartBadge();
    updateVipBadge();
    setupSearchListener();
});

// ========== FEATURED BEATS ==========
function loadFeaturedBeats() {
    const featured = beatsDatabase.slice(0, 3);
    const container = document.getElementById('featured-beats');
    container.innerHTML = featured.map(beat => createBeatCard(beat)).join('');
}

// ========== ALL BEATS ==========
function loadAllBeats(filter = 'all') {
    const filtered = filter === 'all' 
        ? beatsDatabase 
        : beatsDatabase.filter(beat => beat.category === filter);
    
    const container = document.getElementById('beats-grid');
    container.innerHTML = filtered.map(beat => createBeatCard(beat)).join('');
}

// ========== BEAT CARD CREATION ==========
function createBeatCard(beat) {
    const cartItem = cart.find(item => item.id === beat.id);
    const isInCart = cartItem !== undefined;
    const displayPrice = isVip ? Math.floor(beat.price * 0.5) : beat.price;
    
    return `
        <div class="beat-card glass-panel p-4 rounded-2xl space-y-4">
            <div class="relative">
                <img src="${beat.image}" alt="${beat.name}" class="w-full h-40 rounded-xl object-cover">
                <div class="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">${beat.bpm} BPM</div>
            </div>
            
            <div class="space-y-2">
                <h3 class="text-white font-bold text-sm truncate">${beat.name}</h3>
                <p class="text-slate-400 text-xs truncate">${beat.artist}</p>
                <div class="flex justify-between items-center">
                    <div>
                        <p class="text-slate-500 text-xs line-through">${isVip ? '฿' + beat.price : ''}</p>
                        <p class="text-pink-400 font-bold">฿${displayPrice}</p>
                    </div>
                    <span class="text-slate-400 text-xs">${beat.duration}</span>
                </div>
            </div>

            <div class="flex gap-2">
                <button onclick="addToCart(${beat.id})" class="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-bold hover:shadow-lg transition duration-200">
                    <i class="fa-solid fa-plus"></i>
                </button>
                <button class="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm hover:border-cyan-400 transition duration-200">
                    <i class="fa-solid fa-play"></i>
                </button>
            </div>

            ${isInCart ? `
                <div class="p-2 rounded-lg bg-slate-900/50 flex items-center justify-between">
                    <button onclick="decreaseQuantity(${beat.id})" class="w-6 h-6 rounded bg-slate-800 text-slate-300 hover:bg-pink-500 transition">−</button>
                    <span class="text-white font-bold">${cartItem.quantity}</span>
                    <button onclick="increaseQuantity(${beat.id})" class="w-6 h-6 rounded bg-slate-800 text-slate-300 hover:bg-pink-500 transition">+</button>
                </div>
            ` : ''}
        </div>
    `;
}

// ========== CART FUNCTIONS ==========
function addToCart(beatId) {
    const beat = beatsDatabase.find(b => b.id === beatId);
    const cartItem = cart.find(item => item.id === beatId);
    
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({
            ...beat,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartBadge();
    loadAllBeats(currentFilter);
    showNotification(`✨ ${beat.name} เพิ่มลงตะกร้าแล้ว!`);
}

function increaseQuantity(beatId) {
    const item = cart.find(item => item.id === beatId);
    if (item) {
        item.quantity++;
        saveCart();
        updateCartBadge();
        loadAllBeats(currentFilter);
    }
}

function decreaseQuantity(beatId) {
    const item = cart.find(item => item.id === beatId);
    if (item && item.quantity > 1) {
        item.quantity--;
        saveCart();
        updateCartBadge();
        loadAllBeats(currentFilter);
    } else {
        removeFromCart(beatId);
    }
}

function removeFromCart(beatId) {
    cart = cart.filter(item => item.id !== beatId);
    saveCart();
    updateCartBadge();
    loadAllBeats(currentFilter);
    renderCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// ========== CART UI ==========
function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (totalItems > 0) {
        badge.textContent = totalItems > 9 ? '9+' : totalItems;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

function renderCart() {
    const container = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        container.innerHTML = '<p class="text-center text-slate-400 py-8">ตะกร้าว่างเปล่า</p>';
        document.getElementById('checkout-btn').disabled = true;
        return;
    }
    
    const total = calculateTotal();
    const displayTotal = isVip ? Math.floor(total * 0.5) : total;
    
    container.innerHTML = cart.map(item => `
        <div class="p-4 rounded-lg bg-slate-900/50 flex items-center justify-between gap-4">
            <div class="flex-1">
                <p class="text-white font-bold">${item.name}</p>
                <p class="text-slate-400 text-sm">${item.artist}</p>
            </div>
            <div class="flex items-center gap-3">
                <div class="text-right">
                    <p class="text-pink-400 font-bold">฿${isVip ? Math.floor(item.price * 0.5) : item.price}</p>
                </div>
                <div class="flex items-center gap-1 bg-slate-800 rounded px-2 py-1">
                    <button onclick="decreaseQuantity(${item.id})" class="text-slate-400 hover:text-white">−</button>
                    <span class="text-white font-bold w-6 text-center">${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})" class="text-slate-400 hover:text-white">+</button>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-red-400 hover:text-red-300 transition">
                    <i class="fa-solid fa-trash-alt"></i>
                </button>
            </div>
        </div>
    `).join('');

    document.getElementById('cart-total').textContent = '฿' + displayTotal;
    document.getElementById('vip-discount-info').classList.toggle('hidden', !isVip);
    document.getElementById('checkout-btn').disabled = false;
}

// ========== PRICING CALCULATIONS ==========
function calculateTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// ========== FILTERING & SEARCH ==========
function filterCategory(category) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-pink-500', 'text-white');
        btn.classList.add('bg-slate-900', 'border', 'border-slate-800', 'text-slate-300');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('bg-pink-500', 'text-white');
    document.querySelector(`[data-category="${category}"]`).classList.remove('bg-slate-900', 'border', 'border-slate-800', 'text-slate-300');
    loadAllBeats(category);
}

function setupSearchListener() {
    document.getElementById('search-input').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = currentFilter === 'all'
            ? beatsDatabase
            : beatsDatabase.filter(beat => beat.category === currentFilter);
        
        const results = filtered.filter(beat =>
            beat.name.toLowerCase().includes(query) ||
            beat.artist.toLowerCase().includes(query)
        );
        
        const container = document.getElementById('beats-grid');
        container.innerHTML = results.length > 0
            ? results.map(beat => createBeatCard(beat)).join('')
            : '<p class="col-span-full text-center text-slate-400 py-8">ไม่พบเพลงที่ค้นหา</p>';
    });
}

// ========== TAB NAVIGATION ==========
function changeTab(tab) {
    document.getElementById('section-home').classList.add('hidden');
    document.getElementById('section-shop').classList.add('hidden');
    document.getElementById('section-home').classList.remove('hidden');
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('text-pink-500');
        btn.classList.add('text-slate-300');
    });
    
    if (tab === 'home') {
        document.getElementById('section-home').classList.remove('hidden');
        document.getElementById('nav-home').classList.add('text-pink-500');
        document.getElementById('nav-home').classList.remove('text-slate-300');
    } else if (tab === 'shop') {
        document.getElementById('section-shop').classList.remove('hidden');
        document.getElementById('nav-shop').classList.add('text-pink-500');
        document.getElementById('nav-shop').classList.remove('text-slate-300');
        loadAllBeats('all');
    }
}

// ========== MODALS ==========
function openCartModal() {
    renderCart();
    document.getElementById('cart-modal').classList.remove('hidden');
}

function closeCartModal() {
    document.getElementById('cart-modal').classList.add('hidden');
}

function openCheckoutModal() {
    if (cart.length === 0) {
        showNotification('⚠️ ตะกร้าว่างเปล่า');
        return;
    }
    closeCartModal();
    document.getElementById('checkout-modal').classList.remove('hidden');
}

function closeCheckoutModal() {
    document.getElementById('checkout-modal').classList.add('hidden');
    selectedPaymentMethod = null;
    document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('ring-2', 'ring-pink-500'));
}

function openVipModal() {
    if (isVip) {
        showNotification('🎉 คุณเป็นสมาชิก VIP แล้ว!');
        return;
    }
    document.getElementById('vip-modal').classList.remove('hidden');
}

function closeVipModal() {
    document.getElementById('vip-modal').classList.add('hidden');
    selectedVipPackage = null;
    document.getElementById('vip-checkout-btn').disabled = true;
}

// ========== PAYMENT METHODS ==========
function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.payment-option').forEach(opt => {
        opt.classList.remove('ring-2', 'ring-pink-500');
    });
    document.querySelector(`[data-method="${method}"]`).classList.add('ring-2', 'ring-pink-500');
    document.getElementById('payment-confirm-btn').disabled = false;
}

function selectVipPackage(packageType, price) {
    selectedVipPackage = { type: packageType, price: price };
    document.getElementById('vip-checkout-btn').disabled = false;
    showNotification(`✨ เลือก ${packageType} แล้ว (฿${price})`);
}

// ========== CHECKOUT PROCESS ==========
function completePayment() {
    if (!selectedPaymentMethod) {
        showNotification('⚠️ กรุณาเลือกวิธีชำระเงิน');
        return;
    }
    
    closeCheckoutModal();
    showSuccessModal('การสั่งซื้อสำเร็จ!', 'เพลงจะอยู่ในคลังของคุณในอีก 24 ชั่วโมง');
    cart = [];
    saveCart();
    updateCartBadge();
}

function proceedVipCheckout() {
    if (!selectedVipPackage) {
        showNotification('⚠️ กรุณาเลือกแพ็กเกจ');
        return;
    }
    
    closeVipModal();
    selectedPaymentMethod = null;
    document.getElementById('checkout-modal').classList.remove('hidden');
}

function closeSuccessModal() {
    document.getElementById('success-modal').classList.add('hidden');
    changeTab('home');
}

function showSuccessModal(title, message, isVip = false) {
    document.getElementById('success-title').textContent = title;
    document.getElementById('success-message').textContent = message;
    document.getElementById('success-modal').classList.remove('hidden');
    
    if (isVip) {
        enableVip();
    }
}

// ========== VIP SYSTEM ==========
function enableVip() {
    isVip = true;
    localStorage.setItem('isVip', 'true');
    updateVipBadge();
    loadAllBeats(currentFilter);
    showNotification('🎉 ยินดีด้วย! คุณเป็นสมาชิก VIP แล้ว!');
}

function updateVipBadge() {
    const badge = document.getElementById('user-vip-badge');
    if (isVip) {
        badge.classList.remove('hidden');
        badge.classList.add('flex');
    } else {
        badge.classList.add('hidden');
        badge.classList.remove('flex');
    }
}

// ========== NOTIFICATIONS ==========
function showNotification(message) {
    const notif = document.createElement('div');
    notif.className = 'fixed bottom-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg animate-bounce z-30';
    notif.textContent = message;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 3000);
}

// ========== WELCOME MESSAGE ==========
window.addEventListener('load', () => {
    if (isVip) {
        showNotification('👑 ยินดีต้อนรับกลับ VIP สมาชิก!');
    }
});
