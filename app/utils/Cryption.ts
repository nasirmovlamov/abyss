const base64 = require('base-64')

class Cryption {
  static encrypt(data: string) {
    const key = process.env.NEXT_PUBLIC_COOKIE_KEY
    return base64.encode(data + key)
  }

  static decrypt(data: string) {
    const key = process.env.NEXT_PUBLIC_COOKIE_KEY
    return base64.decode(data).toString().replace(key, '')
  }
}

export default Cryption
