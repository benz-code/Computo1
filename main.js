//Constantes del botón ocultar y el div
const hidebtn= document.querySelector('#hideElement')
const listdiv = document.querySelector('#list')


//Agregar evento al botón hidebtn
hidebtn.addEventListener('click', ()=>{
    if(listdiv.style.display== 'none'){
        listdiv.style.display = 'block'
        hidebtn.textContent = 'Ocultar'
    } else {
        listdiv.style.display = 'none'
        hidebtn.textContent = 'Mostrar'
    }


})

//Agregar elementos a la lista
const addItemInput = document.querySelector('#addItem')
const addItemButton = document.querySelector('button#addItemButton')

addItemButton.addEventListener('click', () => {
    let list = document.querySelector('ul')
    let li = document.createElement('li')
    li.textContent = addItemInput.value
    list.appendChild(li)
})