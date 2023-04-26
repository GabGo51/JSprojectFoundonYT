// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

//define the modal and both buttons
const showModal = document.querySelector('.modal-btn')
const closeBtn = document.querySelector('.close-btn')
const modalOverlay = document.querySelector('.modal-overlay')



//target the open modal button to then add open modal ass a class
showModal.addEventListener('click', function(){
    modalOverlay.classList.add('open-modal')
})

//target the close  button to then remove open modal ass a class
closeBtn.addEventListener('click', function(){
    modalOverlay.classList.remove('open-modal')
})