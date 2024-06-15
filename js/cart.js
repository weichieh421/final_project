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


  document.addEventListener('DOMContentLoaded', (event) => {
    const loginIframe = document.getElementById('loginIframe');
    const signUpIframe = document.getElementById('signUpIframe');
    
    // Event listener for 'Not a member' link in the login iframe
    loginIframe.addEventListener('load', () => {
      const loginDocument = loginIframe.contentDocument || loginIframe.contentWindow.document;
      const notAMemberLink = loginDocument.getElementById('notAMemberLink'); // Adjust the selector based on your actual HTML
      if (notAMemberLink) {
        notAMemberLink.addEventListener('click', (e) => {
          e.preventDefault();
          // Hide the login modal
          const loginModal = document.getElementById('loginModal');
          const loginModalInstance = bootstrap.Modal.getInstance(loginModal);
          loginModalInstance.hide();
  
          // Show the sign up modal
          const signUpModal = new bootstrap.Modal(document.getElementById('signUpModal'));
          signUpModal.show();
          
          // Adjust the iframe height
          signUpIframe.style.height = '70vh';
        });
      }
    });
  
    // Event listener for 'Already a member?' link in the sign up iframe
    signUpIframe.addEventListener('load', () => {
      const signUpDocument = signUpIframe.contentDocument || signUpIframe.contentWindow.document;
      const alreadyMemberLink = signUpDocument.getElementById('alreadyMemberLink'); // Adjust the selector based on your actual HTML
      if (alreadyMemberLink) {
        alreadyMemberLink.addEventListener('click', (e) => {
          e.preventDefault();
          // Hide the sign up modal
          const signUpModal = document.getElementById('signUpModal');
          const signUpModalInstance = bootstrap.Modal.getInstance(signUpModal);
          signUpModalInstance.hide();
  
          // Show the login modal
          const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
          loginModal.show();
          
          // Adjust the iframe height
          loginIframe.style.height = '40vh';
        });
      }
    });
  });