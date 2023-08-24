/**se crea el CRUD */

//GET

const listProduct = () => {
    return fetch("http://localhost:3000/producto")
        .then((respuesta) => respuesta.json())
        .catch((error) => console.log(error));
        
};

//POST

const createProduct = (name, imageUrl, price) => {
   return fetch("http://localhost:3000/producto",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        }, 
        body: JSON.stringify({
                name,
                imageUrl,    
                price
            }),   
    }).then((respuesta) => {
        if(respuesta.ok){
            return respuesta.body;
        }
        throw new Error("No se pudo crear tu producto");
    });
};



export const productServices = {
    listProduct,
    createProduct
}