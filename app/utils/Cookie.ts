import Cryption from './Cryption';

class Cookie {
  static set(key: string, value: string, expDate: Date) {
    const encryptedKey = Cryption.encrypt(key)
    const encryptedValue = Cryption.encrypt(value)

    document.cookie = `${encryptedKey}=${encryptedValue};expires=${expDate.toUTCString()};path=/`
  }

  static get(key: string) {
    const name = Cryption.encrypt(key) + '='
    const cDecoded = decodeURIComponent(document.cookie)
    const cArr = cDecoded.split('; ')
    let res = null

    cArr.forEach((val) => {
      if (val.indexOf(name) === 0) {
        res = Cryption.decrypt(val.substring(name.length))
      }
    })

    return res
  }

  static delete(key: string) {
    this.set(key, '', new Date(0))
  }
}

export default Cookie
