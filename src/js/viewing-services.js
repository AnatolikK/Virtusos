const linkServices = document.querySelector(".about-details-p");
const detailsDiv = document.querySelector(".application-details");
const servicesDiv = document.querySelector(".viewing-services");

linkServices.addEventListener("click", function() {
    detailsDiv.style.display = 'none';
    servicesDiv.style.display = 'block';
});