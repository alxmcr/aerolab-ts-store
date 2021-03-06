import { invalidUser } from "helpers/userHelpers";
import { useEffect, useState } from "react";
import { getMe } from "services/UserService";
import { UserAPI } from "types";

export const useAuth = () => {
    const [me, setMe] = useState<UserAPI>(invalidUser);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

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

    return { me, loading, error }
}