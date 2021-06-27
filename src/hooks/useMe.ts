import { useEffect, useState } from "react";
import { getMe } from "services/UserService";
import { UserAPI } from "types";

export const useMe = () => {
    const invalidUser: UserAPI = {
        id: "-1",
        name: "",
        points: 0,
        redeemHistory: [],
        createDate: new Date()
    }
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