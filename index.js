class ProductManager{
    constructor( ) {
        this.products = [ ]
    }
    getProducts = ( ) => this.products
    getProductById = ( id ) => { 
        const productDb = this.products.find (product =>product.id === id)
        if (!productDb) {
            return `Producto no Encontrado  con el id: ${id}` 
        }
        return  productDb
    }
    addProduct =(newProduct) =>{
        const productDb = this.products.find (product =>product.code === newProduct.code)
        
        if (productDb){
        return  `Producto Encontrado` 
        }

        if (newProduct.title === '' || newProduct.description === '' || newProduct.price === '' || newProduct.thumbnail === '' || newProduct.code === '' || newProduct.stock === '')  {
            return `Debe completar todos los campos `
          }

        if (this.products.length === 0) {
            newProduct.id = 1
            this.products.push(newProduct)
        } else {
            this.products = [...this.products, {...newProduct, id: this.products[this.products.length-1].id+1 }]
        }
    }
}

const productos = new ProductManager( )
console.log(productos.addProduct({
    title: 'Domestic No Kanojo',
    description:'Manga de Romance y Drama',
    price: 500,
    img: '...',
    code:1,
    stock:200
}))

console.log(productos.addProduct({
    title: 'Konosuba',
    description:'Manga Isekai y Comedia',
    price: 500,
    img: '...',
    code:2,
    stock:100
}))

console.log(productos.addProduct({
    title: 'Tomo-Chan is Girl',
    description:'Manga Escolar y Romance',
    price: 500,
    img: '...',
    code:3,
    stock:100
}))

console.log(productos.addProduct({
    title: '',
    description:'',
    price: 500,
    img: '...',
    code:4,
    stock:100
}))
console.log(productos.addProduct({
    title: '',
    description:'Manga de Historia de Vida',
    price: 500,
    img: '...',
    stock:100,
}))

console.log(productos.getProducts())
console.log(productos.getProductById(6))