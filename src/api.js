import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8081/',
  json: true
})

export default {
  async execute (method, resource, data) {
    // inject the accessToken for each request
    return client({
      method,
      url: resource,
      data
    }).then(req => {
      return req.data
    })
  },

  getMonthly() {
    return this.execute('get', '/monthly');
  },

  getDaily(){
    return this.execute('get', '/daily');
  },

  getAggregate(){
    return this.execute('get', '/aggregate');
  },

  postMonthly(name, cents){
    return this.execute('post', '/monthly', {name, cents});
  }
}