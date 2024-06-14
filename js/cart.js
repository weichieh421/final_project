document.addEventListener("DOMContentLoaded", function() {
    const minusButtons = document.querySelectorAll(".quantity-minus");
    const plusButtons = document.querySelectorAll(".quantity-plus");
    const quantityNumbers = document.querySelectorAll(".quantity-number");
    const removeButtons = document.querySelectorAll(".item-remove img");
    const totalElement = document.querySelector(".total");
    const checkoutButton = document.querySelector(".checkout-button");

    function getCartItemsCount() {
        return document.querySelectorAll(".cart-item").length;
    }

    function updateCartStatus() {
        const itemCount = getCartItemsCount();
        if (itemCount >= 10) {
            plusButtons.forEach(button => button.disabled = true);
        } else {
            plusButtons.forEach(button => button.disabled = false);
        }
    }

    minusButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            let quantityInput = quantityNumbers[index];
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;
                updateTotal();
            }
        });
    });

    plusButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            let quantityInput = quantityNumbers[index];
            let quantity = parseInt(quantityInput.value);
            let itemCount = getCartItemsCount();
            if (quantity < 10 && itemCount < 10) {
                quantity++;
                quantityInput.value = quantity;
                updateTotal();
            }
        });
    });

    removeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.closest(".cart-item").remove();
            updateTotal();
            updateCartStatus();
        });
    });

    function updateTotal() {
        let total = 0;
        document.querySelectorAll(".quantity-number").forEach((quantityNumber) => {
            const price = parseFloat(quantityNumber.closest(".cart-item").querySelector(".item-price").textContent.replace('NT$', ''));
            const quantity = parseInt(quantityNumber.value);
            total += price * quantity;
        });
        totalElement.textContent = `總金額 NT$${total.toFixed(2)}`;
        updateCartStatus();
    }

    updateTotal();
});

function handleSearch() {
    // 搜索功能的相關處理
  }
