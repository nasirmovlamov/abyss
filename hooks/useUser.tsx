//useFetch.js
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_API_INSTANCE } from '../helpers/api/BaseInstance';



export const useUser = (url:string) =>  {
    const [isUserAuthorized, setisUserAuthorized] = useState<'yes' | 'no' | 'pending'>('pending');

    const checkUser = async () => {
        try {
            const resp = BASE_API_INSTANCE.get('/user')
            setisUserAuthorized('yes');
            return true
        } catch (error) {
            setisUserAuthorized('no');
            return false
        }
    }

    useEffect(() => {
        checkUser()
    }, [url])

    

    return isUserAuthorized
}