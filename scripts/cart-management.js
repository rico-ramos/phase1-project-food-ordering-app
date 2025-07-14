const cart = {};

function addToCart(id, btn) {
    const item = [
        ...currentMenu.starters,
        ...currentMenu.entrees,
        ...currentMenu.desserts,
        ...currentMenu.drinks
    ].find(i => i.id === id);
    if (!cart[id]) {
        cart[id] = { ...item, qty: 1 };
        document.getElementById(`img-${id}`).classList.add('border-red-500');
    } else {
        cart[id].qty += 1;
    }

    const badge = document.getElementById(`badge-${id}`);
    if (cart[id].qty >= 2) {
        badge.textContent = cart[id].qty;
        badge.classList.remove('hidden');
    }

    btn.classList.add('scale-110');
    setTimeout(() => btn.classList.remove('scale-110'), 150);

    updateCartTab();
}

function updateCartTab() {
    const total = Object.values(cart).reduce((acc, item) => acc + item.qty, 0);
    const cartTab = document.getElementById('cartTab');
    if (total > 0) {
        cartTab.textContent = `View Cart (${total})`;
        cartTab.classList.remove('bottom-[-4rem]');
        cartTab.classList.add('bottom-4');
    } else {
        cartTab.classList.add('bottom-[-4rem]');
        cartTab.classList.remove('bottom-4');
    }
}

function incrementCartItem(id) {
    cart[id].qty += 1;
    updateCartTab();
    openCartDrawer(); // re-render drawer
}

function decrementCartItem(id) {
    cart[id].qty -= 1;

    // Remove if 0
    if (cart[id].qty <= 0) {
        delete cart[id];
        document.getElementById(`badge-${id}`)?.classList.add('hidden');
        document.getElementById(`img-${id}`)?.classList.remove('border-red-500');
    } else {
        const badge = document.getElementById(`badge-${id}`);
        if (cart[id].qty >= 2) {
            badge.textContent = cart[id].qty;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }

    updateCartTab();

    // Close drawer if cart is empty
    if (Object.keys(cart).length === 0) {
        closeCartDrawer();
    } else {
        openCartDrawer(); // re-render
    }
}


function adjustQty(delta) {
    const qtyEl = document.getElementById('modalQty');
    let count = parseInt(qtyEl.textContent) + delta;
    if (count < 0) count = 0;
    qtyEl.textContent = count;

    const id = parseInt(document.getElementById('modalOverlay').getAttribute('data-current-id'));
    const imgEl = document.getElementById(`img-${id}`);
    if (count >= 1) {
        imgEl.classList.add('border-red-500');
    } else {
        imgEl.classList.remove('border-red-500');
    }

    if (count === 0) {
        delete cart[id];
        document.getElementById(`img-${id}`).classList.remove('border-red-500');
        document.getElementById(`badge-${id}`).classList.add('hidden');
    } else {
        const item = [
            ...currentMenu.starters,
            ...currentMenu.entrees,
            ...currentMenu.desserts,
            ...currentMenu.drinks
        ].find(i => i.id === id);
        cart[id] = { ...item, qty: count };
        const badge = document.getElementById(`badge-${id}`);
        if (count >= 2) {
            badge.textContent = count;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }

    updateCartTab();
}

function openCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartDrawerOverlay');

    // Populate cart items
    const content = document.getElementById('cartDrawerContent');
    content.innerHTML = '';
    document.getElementById('clearCartWrapper').classList.toggle('hidden', Object.keys(cart).length === 0);

    let subtotal = 0;

    Object.values(cart).forEach(item => {
        const total = item.qty * item.price;
        subtotal += total;

        const row = document.createElement('div');
        row.className = 'flex justify-between items-center text-sm';

        row.innerHTML = `
                <div class="flex flex-col">
                <div class="font-medium">${item.name}</div>
                <div class="flex items-center gap-2 mt-1">
                    <button onclick="decrementCartItem(${item.id})"
                            class="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm">–</button>
                    <span>${item.qty}</span>
                    <button onclick="incrementCartItem(${item.id})"
                            class="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm">+</button>
                </div>
                </div>
                <div class="text-right font-semibold text-gray-700">$${total.toFixed(2)}</div>
                `;

        content.appendChild(row);
    });


    document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;

    drawer.classList.remove('translate-y-full');
    drawer.classList.add('translate-y-0');
    overlay.classList.remove('hidden');
}

function closeCartDrawer() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartDrawerOverlay');
    drawer.classList.remove('translate-y-0');
    drawer.classList.add('translate-y-full');
    overlay.classList.add('hidden');
}

function clearCart() {
    Object.keys(cart).forEach(id => {
        document.getElementById(`badge-${id}`)?.classList.add('hidden');
        document.getElementById(`img-${id}`)?.classList.remove('border-red-500');
    });

    for (const key in cart) delete cart[key];

    updateCartTab();
    closeCartDrawer();
}