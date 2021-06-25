import { useEffect, useState } from "react";
import { getMe } from "services/UserService";

export const useMe = () => {
    const [me, setMe] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setLoading(true);
        getMe()
            .then(response => response.json())
            .then(data => setMe(data))
            .catch(error => setError(error))
            .finally(() => {
                setLoading(false);
                setError(null)
            })
    }, [])

    return [me, loading, error]
}