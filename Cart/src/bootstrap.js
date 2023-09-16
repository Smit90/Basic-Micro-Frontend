import faker from 'faker'

const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`

    el.innerHTML = cartText
}

if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#dev-cart")

    // Assuming out container doesn't have an element with iddev-products 
    if (el) {
        // we are probably running in isolation
        mount(el)
    }
}


export {
    mount
}