export const getCategories = async () => {
    return await fetch("./_data_/categories.json", {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}