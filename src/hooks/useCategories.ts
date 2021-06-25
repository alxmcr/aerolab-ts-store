import { useEffect, useState } from "react";
import { getCategories } from "services/CategoryService";
import { CategoryAPI } from "types";

export const useCategories = () => {
    const [categories, setCategories] = useState<CategoryAPI[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        getCategories()
            .then(response => response.json())
            .then((data: CategoryAPI[]) => setCategories(data))
            .finally(() => {
                setLoading(false);
                setError(null)
            })
    }, [])

    return { categories, loading, error }
}