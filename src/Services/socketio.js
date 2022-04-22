import { Manager } from 'socket.io-client'

class ClientSocket {
  constructor() {
    this.token = 'my token'
    this.init()
    this.manager.on('error', (error) => {
      console.log(error)
    })
  }

  init() {
    this.manager = new Manager('http://localhost:4000', {
      autoConnect: false,
      reconnection: false,
      // path: '/queue/messages',
      path: '/ws',
      transports: ['websocket'],
      withCredentials: false,
      agent: false,
      upgrade: false,
      rejectUnauthorized: false,
      query: {
        token: this.token
      }
    })
    this.queue = this.manager.socket('/msgqueue')
    this.queue.on('message', (data) => console.log(data))
  }

  connectQueue() {
    this.queue.connect()
  }

  sendMessage(user, body) {
    if (!this.queue.active) {
      throw new Error('Socket is not active')
    }
    this.queue.emit('message', body)
  }
}

export default new ClientSocket()
