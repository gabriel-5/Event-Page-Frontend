import axios from 'axios'
const url = 'http://localhost:3001/'

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider
    this.logoutHandler = logoutHandler
  }

  async login(username, password) {
    return await axios({
      method: 'post',
      url: `${url}auth`,
      data: {
        username,
        password
      }
    });
  }

  autheticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        authorization: this.tokenProvider()
      },
      data
    })
    .catch((error) => {
      if (error.response.status === 403) {
        this.logoutHandler();
        return Promise.reject()
      } else {
        throw error;
      }
    })
  }

  getAds() {
    return this.autheticatedCall('get', url)
  }

  addAd(name, price) {
    return this.autheticatedCall('post', url, {name, price})
  } 

  removeAd(id) {
    return this.autheticatedCall('delete', `${url}${id}`)
  }

  updateAd(id, name, price) {
    return this.autheticatedCall('put', `${url}${id}`, {name, price})
  }

}
