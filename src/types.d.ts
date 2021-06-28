export interface CategoryAPI {
    id: string
    name: string
    img: ImageAPI
}

export interface RedeemAPI {
    productId: string
}

export interface UserAPI {
    id: string | null
    name: string
    points: number
    redeemHistory: RedeemAPI[]
    createDate: Date
}

export interface ProductAPI {
    _id: string
    name: string
    cost: number
    category: CategoryType
    img: ImageAPI
    createDate: number
}

export interface History {
    productId: string
    name: string
    cost: number
    category: CategoryType
    _id: string
    createDate: date
    img: ImageAPI
}

export interface ImageAPI {
    url: string
    hdUrl: string
}

export type CategoryType = "Indumentaria" | "Accesorios"
