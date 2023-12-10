const lists = document.querySelectorAll('.services');
const items = document.querySelectorAll('.choosing-services-specific-card');

function filter(){
    lists.forEach(list => {
        list.addEventListener('click', event => {
            const targetId = event.target.dataset.id;
            console.log(targetId);
            getItems(targetId);

            // Прокрутка вниз после клика
            scrollToBottom();
        });
    });

    // Первый элемент активный
    getItems('average-key');
}

filter();

function getItems(className){
    items.forEach(item => {
        if(item.classList.contains(className)){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}

function scrollToBottom() {
    // Либо используйте чистый JavaScript
    window.scrollTo(0, document.body.scrollHeight);

    // Либо используйте jQuery
    // $('html, body').animate({scrollTop: $(document).height()}, 'slow');
}
