var slideIndex = 1;
showSlidesServices(slideIndex);

function plusSlidesServices(n){
    showSlidesServices(slideIndex += n);
}

function currentSlideServices(n){
    showSlidesServices(slideIndex = n);
}

function showSlidesServices(n){
    var i;
    var slides = document.getElementsByClassName("type-auto");

    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}