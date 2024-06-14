document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('vip-member-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const mobileInput = document.getElementById('mobile');
    const addressInput = document.getElementById('address');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');
    const submitButton = form.querySelector('button[type="submit"]');
    const cancelButton = form.querySelector('button[type="button"]');
    
    let savedData = {
        name: nameInput.value,
        email: emailInput.value,
        mobile: mobileInput.value,
        address: addressInput.value,
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isPasswordChange = passwordInput.value !== "" || confirmPasswordInput.value !== "";

        if (isPasswordChange) {
            let password = passwordInput.value;
            let confirmPassword = confirmPasswordInput.value;
            if (!validatePassword(password)) {
                alert('密碼必須包含大小寫字母、數字，且至少五位字元。');
                return;
            }
            if (password !== confirmPassword) {
                alert('確認密碼必須一致。');
                return;
            }
            passwordInput.value = "";
            confirmPasswordInput.value = "";
        }

        savedData = {
            name: nameInput.value,
            email: emailInput.value,
            mobile: mobileInput.value,
            address: addressInput.value,
        };

        alert('資料修改成功');
    });

    cancelButton.addEventListener('click', (e) => {
        nameInput.value = savedData.name;
        emailInput.value = savedData.email;
        mobileInput.value = savedData.mobile;
        addressInput.value = savedData.address;
        passwordInput.value = "";
        confirmPasswordInput.value = "";
    });

    function validatePassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
        return regex.test(password);
    }
});


