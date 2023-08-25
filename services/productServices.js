/**se crea el CRUD */

//GET

const listProduct = () => {
    return fetch("https://fake-api-kappa.vercel.app/producto")
        .then((respuesta) => respuesta.json())
        .catch((error) => console.log(error));
        
};

//POST

const createProduct = (imageUrl, name,  price) => {
   return fetch("https://fake-api-kappa.vercel.app/producto",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        }, 
        body: JSON.stringify({
                imageUrl, 
                name,  
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