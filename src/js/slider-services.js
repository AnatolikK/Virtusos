const sliders = document.querySelectorAll('.services');

sliders.forEach(wrapper => {
    let pressed = false;
    let startX = 0;

    wrapper.addEventListener('mousedown', function (e) {
        pressed = true;
        startX = e.clientX;
        this.style.cursor = 'grabbing';
    });

    wrapper.addEventListener('mouseleave', function () {
        pressed = false;
        this.style.cursor = 'grab';
    });

    window.addEventListener('mouseup', function () {
        pressed = false;
        wrapper.style.cursor = 'grab';
    });

    wrapper.addEventListener('mousemove', function (e) {
        if (!pressed) {
            return;
        }

        this.scrollLeft += startX - e.clientX;
    });
});