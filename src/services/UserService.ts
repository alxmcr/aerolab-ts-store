export const getMe = async () => {
    return await fetch("/_data_/fakeUser.json", {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
}