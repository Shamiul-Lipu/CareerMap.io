import { toast } from "react-hot-toast"

// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = {}

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }

    // add quantity
    const quantity = shoppingCart[id]
    if (quantity) {
        return toast("⚠️ You've already applied for this job!", {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            }
        });
    } else {
        shoppingCart[id] = 1

    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    return toast.success('Successfully Applied!', {
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        }
    });
}

const getStoredCart = () => {
    let shoppingCart = {}

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart }