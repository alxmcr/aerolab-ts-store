import { useEffect, useState } from "react";
import { getProducts } from "services/ProductService";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => setError(error))
            .finally(() => {
                setLoading(false);
                setError(null)
            })
    }, [])

    return [products, loading, error]
}