import { ProductsToolbarState } from "componentsTypes";
import { handlerSortHighest, handlerSortLowest, handlerSortRecent } from "helpers/productHelpers";
import { useEffect, useState } from "react";
import { getProducts } from "services/ProductService";
import { ProductAPI } from "types";

export const useProducts = ({ methodSort }: ProductsToolbarState) => {
    const [products, setProducts] = useState<ProductAPI[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then(response => response.json())
            .then((data: ProductAPI[]) => {
                switch (methodSort) {
                    case "lowest":
                        setProducts(data.sort(handlerSortLowest))
                        break;
                    case "highest":
                        setProducts(data.sort(handlerSortHighest))
                        break;
                    case "recent":
                        setProducts(data.sort(handlerSortRecent))
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
    }, [])

    return { products, loading, error }
}