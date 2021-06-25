export const getCategories = () => {
    return fetch("./_data_/categories.json", {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}