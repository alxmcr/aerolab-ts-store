import { ProductsUseHookProps } from "componentsTypes";
import { useEffect, useState } from "react";
import { getProducts } from "services/ProductService";
import { ProductAPI } from "types";

export const useProducts = ({ methodSort }: ProductsUseHookProps) => {
    const [products, setProducts] = useState<ProductAPI[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then(response => response.json())
            .then((data: ProductAPI[]) => {
                setProducts(data)
            })
            .catch(error => setError(error))
            .finally(() => {
                setLoading(false);
                setError(null)
            })
    }, [])

    return { products, loading, error }
}