// Get modal element
var modal = document.getElementsByClassName("simpleModal");
//get open modal button
var modalBtn = document.getElementsByClassName("modalBtn");
// get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// listen for  Click
modalBtn.addEventListener("click", openModal);

// listen for  close Click
closeBtn.addEventListener("click", closeModal);

//function to open modal
function openModal() {
  modal.style.display = "block";
}

// function to close modal

function closeModal() {
  modal.style.display = "none";
}
