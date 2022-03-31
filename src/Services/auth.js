class Auth {
  constructor() {
    this.auth = false
    this.user = {}
    this.token = ''
  }

  async login() {
    this.auth = true
  }

  async register() {
    this.auth = true
  }

  saveToken() {}
  logout() {
    this.auth = false
  }
}

export default new Auth()
