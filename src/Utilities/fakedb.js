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
    localStorage.setItem('Shopping-cart', JSON.stringify(shoppingCart))


}
export { addToDb };