let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]

function addProduct(newProduct) {
    products.push(newProduct)
}

function removeOutOfStockProducts() {
    products = products.filter(product => product.quantity)
}

function totalProductsInStock() {
    const total = products.reduce((acc, product) => acc + product.quantity, 0)
    console.log(total)
}

function showProductsWithPriceGreaterThan(price) {
    const productsGreaterThan = products.filter(product => product.price > price)
    console.log(productsGreaterThan)
}

function showProductsWithCertainLetter(letter) {
    products.forEach(product => {
        if (product.name.indexOf(letter) > -1) console.log(product.name)
    })
}

addProduct({ name: 'skate', price: 270, quantity: 13, colors: ['blue'] })
removeOutOfStockProducts()
totalProductsInStock()
showProductsWithPriceGreaterThan(500)
showProductsWithCertainLetter('o')