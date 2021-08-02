import axios from "axios";
const url = "http://localhost:3001/";

export class ApiClient {
  apiCall(method, url, data) {
    return axios({
      method,
      url,
      data,
    }).catch((error) => {
      throw error;
    });
  }

  getAds() {
    return this.apiCall("get", url);
  }

  addAd(name, price) {
    return this.apiCall("post", url, { name, price });
  }

  removeAd(id) {
    return this.apiCall("delete", `${url}${id}`);
  }

  updateAd(id, name, price) {
    return this.apiCall("put", `${url}${id}`, { name, price });
  }
}
