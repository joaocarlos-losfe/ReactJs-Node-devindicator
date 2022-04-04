import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(apiUrl)
{
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>
    {
        const getItems = async () =>
        {
            const result = await axios.get(apiUrl);
            setData(result.data);
            setLoading(false)
        }

        getItems()

    }, []);

    return {data, setData, isLoading, setLoading}
}