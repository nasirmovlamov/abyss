import { deleteCookie, setCookie } from '../../logic/CookieFunctions';
import { decryptUserToken, encryptUserToken } from '../../logic/Cryption';

export var accessToken: string | null = null

export const getAccessToken = () => {
  if (accessToken) {
    const deryptedToken = decryptUserToken(accessToken!)
    return deryptedToken
  } else {
    return null
  }
}

export const setAccessToken = (token: string | null) => {
  if (token) {
    const cryptedToken = encryptUserToken(token)
    accessToken = cryptedToken
    setCookie('token', cryptedToken, 14)
  } else {
    accessToken = null
    return null
  }
}

export const removeAccessToken = () => {
  accessToken = null
  deleteCookie('token')
  return null
}
