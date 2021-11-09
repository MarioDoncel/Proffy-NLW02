const addField = document.querySelector('#add-time')

function cloneField() {
    const fieldset = document.querySelector('#schedule-items')
    const scheduleItem_clone = document.querySelector('.schedule-item').cloneNode(true)
    const fields = scheduleItem_clone.querySelectorAll('input')
    fields.forEach(field => field.value = "")
    fieldset.appendChild(scheduleItem_clone)
}

addField.addEventListener('click', cloneField)

