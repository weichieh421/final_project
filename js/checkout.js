document.addEventListener('DOMContentLoaded', function() {
    // 初始化運費和總金額
    let shippingFee = 0;
    updateTotalAmount();

    // 設定取貨方式的變更事件
    document.getElementById('pickup-location').addEventListener('change', function() {
        const selectedOption = this.value;
        let newWindow;

        if (selectedOption === '711') {
            newWindow = window.open('', '', 'width=800,height=600');
            newWindow.location.href = 'https://emap.pcsc.com.tw/emap.aspx';
            shippingFee = 50;
        } else if (selectedOption === 'family-mart') {
            newWindow = window.open('', '', 'width=800,height=600');
            newWindow.location.href = 'https://www.family.com.tw/Marketing/Map';
            shippingFee = 70;
        } else if (selectedOption === 'Home-delivery') {
            shippingFee = 100;
        } else {
            shippingFee = 0;
        }
        updateTotalAmount();
    });

    // 設定確認按鈕的點擊事件
    document.querySelector('button[onclick="confirmOrder()"]').addEventListener('click', function() {
        if (validateForm()) {
            alert('成功下訂');
            window.location.href = 'index.html';
        } else {
            alert('請填寫所有欄位');
        }
    });

    function updateTotalAmount() {
        let totalAmount = calculateTotalItemPrice() + shippingFee;
        document.querySelector('.payment-detail p:nth-child(2)').textContent = '運費: NT$ ' + shippingFee;
        document.querySelector('.payment-detail p:nth-child(3)').textContent = '總金額: NT$ ' + totalAmount;
    }

    function calculateTotalItemPrice() {
        let totalItemPrice = 0;
        document.querySelectorAll('.item').forEach(function(item) {
            const price = parseInt(item.querySelector('.item-price').textContent.replace('NT$', '').trim());
            const quantity = parseInt(item.querySelector('.item-quantity').textContent.replace('數量', '').trim());
            totalItemPrice += price * quantity;
        });
        return totalItemPrice;
    }

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const pickupLocation = document.getElementById('pickup-location').value;

        return name && phone && email && address && pickupLocation;
    }
});
