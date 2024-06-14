document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const passwordInput = document.querySelector('input[name="password"]');
    const confirmPasswordInput = document.querySelector('input[name="confirm_password"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const inputs = form.querySelectorAll('input[required]');
        for (let input of inputs) {
            if (!input.value) {
                alert('所有欄位都必須填寫。');
                return;
            }
        }

        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (!isValidPassword(password)) {
            alert('密碼必須包含至少一個大寫字母、一個小寫字母、一個數字，並且至少有五個字元。');
            return;
        }
        if (password !== confirmPassword) {
            alert('密碼和確認密碼不一致。');
            return;
        }
        alert('註冊成功！');
        window.location.href = 'index.html';
    });

    function isValidPassword(password) {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const isLongEnough = password.length >= 5;

        return hasUpperCase && hasLowerCase && hasNumber && isLongEnough;
    }
});

