const linkServices = document.querySelector(".next-viewing-application");
const cardService = document.querySelector(".card-service");
const servicesDiv = document.querySelector(".tabs-service");

linkServices.addEventListener("click", function() {
    cardService.style.display = 'none';
    servicesDiv.style.display = 'block';
});