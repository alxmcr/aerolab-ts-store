import { MethodSort, UseProductsHookProps } from "componentsTypes";
import { handlerSortHighest, handlerSortLowest, handlerSortRecent } from "helpers/toolbarProductsHelpers";
import { useEffect, useState } from "react";
import { getProducts } from "services/ProductService";
import { ProductAPI } from "types";

export const useProducts = ({ methodSort = '', currentPage = 1 }: UseProductsHookProps) => {
    const [products, setProducts] = useState<ProductAPI[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then(response => response.json())
            .then((data: ProductAPI[]) => {
                let productsToShow = [...data];
                switch (methodSort as MethodSort) {
                    case "recent":
                        setProducts(productsToShow.sort(handlerSortRecent))
                        break;
                    case "lowest":
                        setProducts(productsToShow.sort(handlerSortLowest))
                        break;
                    case "highest":
                        setProducts(productsToShow.sort(handlerSortHighest))
                        break;
                    default:
                        setProducts(data)
                        break;
                }
            })
            .catch(error => setError(error))
            .finally(() => {
                setLoading(false);
                setError(null)
            })
    }, [methodSort])

    return { products, loading, error }
}