class Auth {
  constructor() {
    this.auth = true
    this.user = {}
    this.token = ''
  }

  async login() {
    const res = await fetch(
      'https://nocountry-chat.herokuapp.com/api/auth/signin',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: 'braian123',
          password: '12345678'
        })
      }
    )
    console.log(await res.json())

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
