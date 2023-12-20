// Creacion de la clase ProductManager
class ProductManager{
    constructor(){
        //array vacio para incorporar los productos
        this.products = [];
        //iniciador del conteo de id
        this.idCounter = 0;
    }
    
    getProducts(){
        return this.products;
        
    }
    addProduct(title, description, price, thumbnail, code,stock){
        if(!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son necesarios y obligatorios")
        }
        // comparo code para agregarlo si no está agregado
        if(!this.products.some((p) => p.code === code)){ 

            //Incrementar el contador de id
            this.idCounter++;
            
            let newProduct = {
                id: this.idCounter, // asigno un id autogenerado y que incrementa
                title, 
                description, 
                price, 
                thumbnail, 
                code,
                stock
            };
            //pushear el producto al array
            this.products.push(newProduct);
            console.log(`Tu producto ${title} fue agregado`)
        }else {
            console.error(`Ya se encuentra agregado el producto código ${code}`)
        }
    }
    //Obtener producto por id
    getProductById(id){
        let product = this.products.find((p) => p.id === id)

        if(product){
            return product
        }else{
            console.warn(`Not found id ${id}`);
            return null;
        }
    }
}

// Instanciar la clase creada
const product = new ProductManager()
// Agregar productos
product.addProduct("Producto prueba 1", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25 );
console.log(`---------------------------------------`);
//producto repetido, rechazado a ingresar
product.addProduct("Producto prueba 1", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25 );
console.log(`---------------------------------------`);
// nuevo producto  a ingresar
product.addProduct("Producto prueba 2", "Este es un producto prueba", 200, "Sin imagen", "abc124", 25 );
console.log(`---------------------------------------`);
// recuperar todos los productos pusheados
console.log(product.getProducts());
console.log(`---------------------------------------`);
//traer producto por id, no existe el id 3
console.log(product.getProductById(3))
console.log(`---------------------------------------`);
//traer producto por id
console.log(`El producto solicitado es `, product.getProductById(2))
