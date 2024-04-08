const open_modal_buttons = document.querySelectorAll('[data-modal-target]')
const close_modal_buttons = document.querySelectorAll('[data-close-button]')
const add_review_buttons = document.querySelectorAll('[data-add-dish]')
const overlay = document.getElementById('overlay')
total_dishes = 1

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

add_review_buttons.forEach(button => {
    button.addEventListener('click', () => {
        const form = document.getElementById('review_form')
        add_dish(form)

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

function add_dish(form){
    if(total_dishes >= 5){
        console.log("CAN ONLY HANDLE 5 DISHES PER RESTAURANT")
        return
    }
    console.log("ADDING A DISH TO FOLLOWING FORM:")
    console.log(form)
    console.log(total_dishes)
    total_dishes += 1

    form.appendChild(line_break())
    form.appendChild(constructLabel('dish_name'))
    form.appendChild(line_break())
    form.appendChild(constructInput('dish_name'))
    form.appendChild(line_break())
    form.appendChild(constructLabel('dish_rating'))
    form.appendChild(line_break())
    form.appendChild(constructInput('dish_rating'))
}

function constructLabel(label_type) {
    var new_label = document.createElement('label')
    if(label_type == "dish_name") {
        new_label.innerHTML = "Dish Name:"
        new_label.for = "dish_nm_" + total_dishes
        return new_label
    }
    new_label.innerHTML ="Dish Rating:"
    new_label.for = "dish_rt_" + total_dishes
    return new_label
}

function constructInput(input_type){
    var new_input = document.createElement('input')
    if(input_type == "dish_name") {
        new_input.type = "text"
        new_input.id = "dish_nm_" + total_dishes
        new_input.name = "dish_" + total_dishes + "_name"
        return new_input
    }
    new_input.type = "number"
    new_input.id = "dish_rt_" + total_dishes
    new_input.name = "dish_" + total_dishes + "_rating"
    return new_input
}

function line_break() {
    return document.createElement('br')

}