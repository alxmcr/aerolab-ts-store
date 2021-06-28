import { MethodSort, UseProductsHookProps } from "componentsTypes";
import { handlerSortHighest, handlerSortLowest, handlerSortRecent } from "helpers/toolbarProductsHelpers";
import { useEffect, useState } from "react";
import { getProducts } from "services/ProductService";
import { ProductAPI } from "types";

export const useProducts = ({
    methodSort = '',
    currentPage = 1,
    limitByPage = 16
}: UseProductsHookProps) => {
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
                        productsToShow.sort(handlerSortRecent)
                        break;
                    case "lowest":
                        productsToShow.sort(handlerSortLowest)
                        break;
                    case "highest":
                        productsToShow.sort(handlerSortHighest)
                        break;
                    default:
                        throw new Error("Sorting method is not valid.")
                }
                // Pagination
                const start = 1;
                const end = currentPage * limitByPage;
                productsToShow.slice(currentPage)

                setProducts(productsToShow)
            })
            .catch(error => setError(error))
            .finally(() => {
                setLoading(false);
                setError(null)
            })
    }, [methodSort])

    return { products, loading, error }
}