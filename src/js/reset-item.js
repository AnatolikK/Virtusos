const prewButton = document.querySelector('.prew-auto');
const nextButton = document.querySelector('.next-auto');

prewButton.addEventListener('click', resetItems);
nextButton.addEventListener('click', resetItems);

function resetItems() {
    items.forEach(item => {
        item.style.display = 'none'; // Или установите значение по умолчанию в зависимости от ваших требований
    });
}