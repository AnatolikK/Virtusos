const linkedServices = document.querySelector(".about-details-p-service");
const tabsService = document.querySelector(".tabs-service-container");
const servicesMoreDiv = document.querySelector(".viewing-more-services");

linkedServices.addEventListener("click", function() {
    tabsService.style.display = 'none';
    servicesMoreDiv.style.display = 'block';
});