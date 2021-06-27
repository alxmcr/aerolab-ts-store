import { ProductsToolbarState } from "componentsTypes";
import { ProductAPI } from "types";

export const handlerSortLowest = (productA: ProductAPI, productB: ProductAPI) => {
    return productA.cost - productB.cost;
};

export const handlerSortHighest = (productA: ProductAPI, productB: ProductAPI) => {
    return (productA.cost - productB.cost) * -1;
};

export const handlerSortRecent = (productA: ProductAPI, productB: ProductAPI) => {
    return (productA.createDate - productB.createDate) * -1;
};