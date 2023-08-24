const newProduct = (name, imageUrl, price, id) => {
    const card = document.createElement("div")
    const content = ` 
    <div class="product__item">
    <img src="${imageUrl}" alt="Imagen product">
    <h3 class="product__name"> ${name}}</h3>
    <p class="product__price">${price}</p>
    <a class="ver-producto" href="./index.html?id=${id}">Ver Producto</a>
</div>`

card.innerHTML = content 
card.dataset.id = id
return card
}

