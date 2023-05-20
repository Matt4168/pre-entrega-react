const productos = [
    { nombre: "Thriller", precio: 9000, id: "1", img: "../src/assets/images/thriller.png", idCat: "1" },
    { nombre: "Abbey Road", precio: 8500, id: "2", img: "../src/assets/images/ar.jpg", idCat: "2" },
    { nombre: "Key of Life", precio: 12000, id: "3", img: "../src/assets/images/wonder.jpg", idCat: "1" },
    { nombre: "Ziggy", precio: 7000, id: "4", img: "../src/assets/images/ZiggyStardust.jpg", idCat: "2" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}