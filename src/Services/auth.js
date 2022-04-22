import axios from 'axios'

class Auth {
  constructor() {
    this.auth = false
    this.user = {}
    this.token = ''
    this.url = 'https://nocountry-chat.herokuapp.com'
  }

  async login(user) {
    const res = await axios.post(`${this.url}/api/auth/signin`, {
      username: user.username,
      password: user.password
    })

    console.log(res.data)
  }

  async register(user) {
    const res = axios.post(`${this.url}/api/auth/signup`, {
      name: user.name,
      lastname: user.name,
      username: user.username,
      email: user.email,
      password: user.password
    })
    console.log(res)
  }

  saveToken(token) {}

  logout() {
    this.auth = false
  }
}

export default new Auth()
