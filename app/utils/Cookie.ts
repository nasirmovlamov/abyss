import Cryption from './Cryption';

class Cookie {
  static set(key: string, value: string, expDays: number) {
    const encryptedKey = Cryption.encrypt(key)
    const encryptedValue = Cryption.encrypt(value)
    const now = new Date()
    const expireTime = now.getTime() + 1000 * 24 * 60 * 60 * expDays
    now.setTime(expireTime)

    document.cookie = `${encryptedKey}=${encryptedValue};expires=${now.toUTCString()};path=/`
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
    this.set(key, '', -1)
  }
}

export default Cookie
