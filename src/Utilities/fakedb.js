// use local Storage to manage card data


const addToDb = id => {
    let shoppingCart;

    const storedCart = localStorage.getItem('Shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } else {
        shoppingCart = {};
    }
    const quantity = shoppingCart[id];
    if (quantity) {
        console.log("already exits");
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id,newQuantity);
    } else {
        console.log("new item");
        // localStorage.setItem(id,1);
        shoppingCart[id] = 1;
    }
    localStorage.setItem('Shopping-cart', JSON.stringify(shoppingCart));

}

const removeFromDb=(id)=>{
    const storedCart=localStorage.getItem('Shopping-cart');
    if(storedCart){
        const shoppingCart=JSON.parse(storedCart);
        if(id in shoppingCart){
            console.log("exists in the cart");
            delete shoppingCart[id];
            localStorage.setItem('Shopping-cart',JSON.stringify(shoppingCart));

        }

    }

}

const deleteShoppingCart=()=>{
    localStorage.removeItem('Shopping-cart');
}
export { addToDb, removeFromDb,deleteShoppingCart };