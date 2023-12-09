document.addEventListener('DOMContentLoaded', function () {
    const serviceCards = document.querySelectorAll('.service-card');


    if (serviceCards.length > 0) {
        // Находим первую карту с дата-атрибутом "average-key"
        const firstCardWithAverageKey = Array.from(serviceCards).find(card => card.dataset.id === 'average-key');

        // Если такая карта найдена, добавляем ей класс 'active'
        if (firstCardWithAverageKey) {
            firstCardWithAverageKey.classList.add('active');
        }
    }

    serviceCards.forEach(card => {
        card.addEventListener('click', function () {
            // Убираем класс 'active' у всех карт
            serviceCards.forEach(c => c.classList.remove('active'));

            // Добавляем класс 'active' только текущей карте
            this.classList.add('active');

        });
    });
});