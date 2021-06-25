export const getProducts = async () => {
    return await fetch("/_data_/products.json", {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
}