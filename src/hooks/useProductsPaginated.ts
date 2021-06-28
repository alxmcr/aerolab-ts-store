import { UseProductsPaginatedHookProps } from "componentsTypes";
import { useEffect, useState } from "react";
import { ProductAPI } from "types";

export const useProductsPaginated = ({
    products = [],
    currentPage = 1,
    limitByPage = 16
}: UseProductsPaginatedHookProps) => {
    const [productsPaginated, setProductsPaginated] = useState<ProductAPI[]>(products);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        // Pagination
        setLoading(true);
        try {
            const start = currentPage * limitByPage - limitByPage;
            const end = currentPage * limitByPage;
            setProductsPaginated([...products].slice(start, end))
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [products, currentPage, limitByPage])

    return { productsPaginated, loading, error }
}