type Category = "Indumentaria" | "Accesorios"

interface RedeemAPI {
    productId: string
}

interface UserAPI {
    id: string
    name: string
    points: number
    redeemHistory: RedeemAPI[],
    createDate: date
}

interface ImageAPI {
    url: string
    hdUrl: string
}

interface ProductAPI {
    _id: string
    name: string
    cost: number
    category: Category
    img: ImageAPI
}

interface History {
    productId: string
    name: string
    cost: number
    category: Category
    _id: string
    createDate: date
    img: ImageAPI
}