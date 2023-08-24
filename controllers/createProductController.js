import { productServices } from "../services/productServices"

const form = document.querySelector('[data-form]')

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const url = document.querySelector('[data-url]').value
    const name = document.querySelector('[data-name]').value
    const price = document.querySelector('[data-price]').value
    const category = document.querySelector('[data-category]').value
    const description = document.querySelector('[data-description]').value

    productServices.createProduct(url,name,price,category,description)
    .then(respuesta => {
        window.location.href = "../index.html"
        console.log(respuesta)
    }).catch(error => {
        console.log(error)
    })
})