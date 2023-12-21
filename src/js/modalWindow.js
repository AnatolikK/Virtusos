var btn = document.querySelector('.cart-content-btn');
var modal = document.getElementById('myModalWindow');

// Когда пользователь кликает на кнопку, открываем модальное окно
btn.onclick = function() {
    modal.style.display = 'block';
};

// Когда пользователь кликает на "закрыть", закрываем модальное окно
function closeModal() {
    modal.style.display = 'none';
    // Перенаправляем пользователя на index.html
    window.location.href = 'index.html';
}

// Когда пользователь кликает вне модального окна, закрываем его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        // Перенаправляем пользователя на index.html
        window.location.href = 'index.html';
    }
};