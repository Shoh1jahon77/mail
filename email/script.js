const email = document.querySelector('.email');
const update = document.querySelector('.update');

email.addEventListener('input', inputEmail);

function inputEmail(e) {
    const input = e.target.value;

    if (input && /(^\w.*@\w+\.\w)/.test(input)) {
        update.textContent = 'Valid Email!';
        update.classList.add('success');
        update.classList.remove('failure');
    } else {
        update.textContent = 'Keep Going...';
        update.classList.remove('success');
        update.classList.add('failure');
    }
};