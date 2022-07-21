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

function addID(){
    products = products.map((value, index) => { return {...value, id: index + 1}})
}

function showProductName() {
    products.forEach(product => console.log(product.name))
}

function showProductById(id) {
    console.log(products)
    const product = products.find(product => product.id === id)
    console.log(product)
}

function showProductsColorBlack() {
    const colorBlack = 'black'
    const productsColorBlack = products.filter(product => {
        if(product.colors.find(color => color === colorBlack)) {
            return true
        }
        return false
    })
    console.log(productsColorBlack)
}

function showProductsWithoutColor() {
    const productsWithoutColor = products.filter(product => !product.colors.length)
    console.log(productsWithoutColor)
}

addID()
showProductName()
showProductById(3)
showProductsColorBlack()
showProductsWithoutColor()