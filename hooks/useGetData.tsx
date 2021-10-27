
import React, { ReactElement, useState, useEffect } from 'react'
import axios from 'axios'

interface Props {
    link:string
}

export default function useGetData({link}: Props): ReactElement {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<any | {}>({});
    const [url, seturl] = useState("https://jsonplaceholder.typicode.com/")

    const fetchData = async (link:string) => {
        try {
            const resp = await axios.get(url+link)
            return resp.data

        } catch (error) {
            
        }
    }

    async function loadData() {
        try {
          setLoading(true);
          const actionData = await fetchData(link);
          setData(actionData);
        } catch (e:any) {
          setError(e);
        } finally {
          setLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, []);


    return [data, loading, error];
}
