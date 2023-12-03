const buttonDetails = document.querySelector(".view-application-details");
const applicationDiv = document.querySelector(".application");
const applicationDetailsDiv = document.querySelector(".application-details");

buttonDetails.addEventListener("click", function() {
    applicationDiv.style.display = 'none';
    applicationDetailsDiv.style.display = 'block';
});