import { decryptData, encryptData } from './Cryption';

export const setCookie = (cname: string, cvalue: string, exdays: number) => {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  let expires = 'expires=' + d.toUTCString()
  const encryptedCvalue = encryptData(cvalue)
  const encryptedCName = encryptData(cname)
  document.cookie = encryptedCName + '=' + encryptedCvalue + ';' + expires + ';path=/'
}

export const deleteCookie = (cname: string) => {
  const encryptedCname = encryptData(cname)
  const d = new Date()
  d.setTime(d.getTime() + -100 * 24 * 60 * 60 * 1000)
  if (getCookie(cname)) {
    setCookie('token', '', -100)
  } else {
    return null
  }
}

export const getCookie = (cname: string) => {
  const encryptedCname = encryptData(cname)
  let name = encryptedCname + '='
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(';')

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return decryptData(c.substring(name.length, c.length))
    }
  }

  return null
}
