const open_modal_buttons = document.querySelectorAll('[data-modal-target]')
const close_modal_buttons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


open_modal_buttons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector (button.dataset.modalTarget)
        console.group(document.querySelector (button.dataset.modalTarget))
        openModal(modal)
    })
})

close_modal_buttons.forEach(button => { 
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal){
    if(modal == null) return
    console.log("OPENING A MODAL ")
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    console.log(modal)
    if(modal == null) return
    console.log("CLOSING A MODAL")
    modal.classList.remove('active')
    overlay.classList.remove('active')
}