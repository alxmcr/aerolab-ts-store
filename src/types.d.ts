export type Category = "Indumentaria" | "Accesorios"

export interface RedeemAPI {
    productId: string
}

export interface UserAPI {
    id: string
    name: string
    points: number
    redeemHistory: RedeemAPI[],
    createDate: date
}

export interface ImageAPI {
    url: string
    hdUrl: string
}

export interface ProductAPI {
    _id: string
    name: string
    cost: number
    category: Category
    img: ImageAPI
}

export interface History {
    productId: string
    name: string
    cost: number
    category: Category
    _id: string
    createDate: date
    img: ImageAPI
}