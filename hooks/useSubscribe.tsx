//useFetch.js
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_API_INSTANCE } from '../helpers/api/BaseInstance';



export const useSubscribe = () =>  {
    const [subscribe, setSubscribe] = useState<true | false>(true);
    const [loading, setloading] = useState(true)
    

    useEffect(() => {
        setloading(false)
    }, [])

    

    return [loading , subscribe]
}