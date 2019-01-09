/*// Get modal element
var modal = document.getElementsByClassName("simpleModal");
//get open modal button
var modalBtn = document.getElementsByClassName("modalBtn");
// get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// listen for  Click
modalBtn.addEventListener("click", openModal);

// listen for  close Click
closeBtn.addEventListener("click", closeModal);

// listen for outside click
window.addEventListener("click", outsideClick);
//function to open modal
function openModal() {
  modal.style.display = "block";
}

// function to close modal

function closeModal() {
  modal.style.display = "none";
}

//function to close modal if outside click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
*/

// Get DOM Elements
const modal = document.querySelector("#my-modal");
const modalBtn = document.querySelector("#modal-btn");
const closeBtn = document.querySelector(".close");

// Events
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

// Open
function openModal() {
  modal.style.display = "block";
}

// Close
function closeModal() {
  modal.style.display = "none";
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
