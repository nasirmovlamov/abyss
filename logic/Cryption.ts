
const base64 = require('base-64');

export const encryptData = (data: string) => {
    const key = process.env.NEXT_PUBLIC_COOKIE_KEY
    return base64.encode(data + key);
}


export const decryptData = (data: string) => {
    const key = process.env.NEXT_PUBLIC_COOKIE_KEY
    return base64.decode(data).toString().replace(key, '')
}





export const encryptUserToken = (data: string) => {
    const key = process.env.NEXT_PUBLIC_COOKIE_KEY
    return base64.encode(data + key);
}

export const decryptUserToken = (data: string) => {
    if(data)
    {
        const key = process.env.NEXT_PUBLIC_COOKIE_KEY
        return base64.decode(data).toString().replace(key, '')
    }
    else 
    {
        return null
    }
}