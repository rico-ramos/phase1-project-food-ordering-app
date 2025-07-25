function cancelOrder() {
    const overlay = document.getElementById('orderDetailsOverlay');
    const orderId = overlay.getAttribute('data-order-id');

    if (!orderId) {
        console.error('No order ID found to cancel.');
        return;
    }

    fetch(`http://localhost:3000/orders/${orderId}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) throw new Error('Failed to cancel order');
            console.log(`Order #${orderId} deleted successfully.`);

            // Optionally: refresh the orders view
            closeOrderDetails();
            //showOrdersView(); // reloads the list without the deleted order
        })
        .catch(err => {
            console.error('Error deleting order:', err);
            alert('Failed to cancel the order. Please try again.');
        });
}


function updateOrder() {
    const overlay = document.getElementById('orderDetailsOverlay');
    const id = overlay.getAttribute('data-order-id');
    const order = yourOrders.find(o => o.id === id);
    if (!order) {
        alert("Order not found.");
        return;
    }

    // Read new quantities from input fields
    const inputs = document.querySelectorAll('#orderDetailsContent input[type="number"]');
    let updatedItems = [];
    let newSubtotal = 0;

    inputs.forEach(input => {
        const index = parseInt(input.getAttribute('data-item-index'));
        const qty = parseInt(input.value);
        if (qty < 1) return;

        const originalItem = order.items[index];
        updatedItems.push({
            name: originalItem.name,
            qty,
            price: originalItem.price
        });
        newSubtotal += qty * originalItem.price;
    });

    // Update local order
    order.items = updatedItems;
    order.subtotal = newSubtotal;
    order.status = "Updated";


    // Persist to db.json via PUT
    fetch(`http://localhost:3000/orders/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order)
    })
        .then(res => {
            if (!res.ok) throw new Error("Failed to update order.");
            // alert(`Order #${id} has been updated.`);
            console.log(`Order #${id} updated.`); // for now

            const toast = document.createElement('div');
            toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow z-50';
            toast.textContent = `Order #${id} updated!`;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);

            closeOrderDetails();
            showOrdersView();

        })
        .catch(err => {
            console.error("Update failed:", err);
            alert("Could not update the order.");
        });
}




function updateLiveSubtotal() {
    const overlay = document.getElementById('orderDetailsOverlay');
    const id = overlay.getAttribute('data-order-id');
    const order = yourOrders.find(o => o.id === id);
    if (!order) return;

    const inputs = document.querySelectorAll('#orderDetailsContent input[type="number"]');
    let newSubtotal = 0;

    inputs.forEach(input => {
        const index = parseInt(input.getAttribute('data-item-index'));
        const qty = parseInt(input.value);
        if (!isNaN(qty) && qty >= 0) {
            const item = order.items[index];
            newSubtotal += qty * item.price;
        }
    });

    const subtotalElem = document.getElementById('updatedSubtotal');
    if (subtotalElem) {
        subtotalElem.textContent = `$${newSubtotal.toFixed(2)}`;
    }
}
