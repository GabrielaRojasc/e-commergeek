import { productServices } from "../services/productServices.js";

const newProduct = (name, imageUrl, price, id) => {
  const card = document.createElement("div");
  const content = ` 
        <div class="product__item">
            <img class=product__image src="${imageUrl}">
            <h3 class="product__name">${name}</h3>
            <p class="product__price">${price}~</p>
            <a class="ver__producto" href="" target="_blank">
            Ve producto</a>
        </div>
    </div>`;
    /**href="../product.html?id=${id}" */

  card.innerHTML = content;
  card.dataset.id = id;

  return card;
};

const products = document.querySelector("[data-product]");


const render = async () => {
  try {
    const listaProductos = await productServices.listProduct();
    listaProductos.forEach((element) => {
      products.appendChild(
        newProduct(element.name, element.imageUrl, element.price, element.id)
      );
    });
  } catch (error) {
    console.log(error);
  }
};

render();
