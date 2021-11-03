import axios from "axios";
const url = "http://localhost:3001/";

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }

  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        authorization: this.tokenProvider,
      },
      data,
    }).catch((error) => {
      if (error.response.status === 403) {
        this.logoutHandler();
        return Promise.reject();
      } else {
        throw error;
      }
    });
  }

  apiCall(method, url, data) {
    return axios({
      method,
      url,
      data,
    }).catch((error) => {
      throw error;
    });
  }

  login(username, password) {
    return this.apiCall("post", url + "auth/", {
      username: username,
      password: password,
    });
  }

  getEvents() {
    return this.authenticatedCall("get", url + "event/");
  }

  addEvent(name, location, information, date) {
    return this.authenticatedCall("post", url + "event/", {
      name,
      location,
      information,
      date,
    });
  }

  removeEvent(id) {
    return this.authenticatedCall("delete", `${url}${"event/"}${id}`);
  }

  updateEvent(id, name, location, information, date) {
    return this.authenticatedCall("put", `${url}${"event/"}${id}`, {
      name,
      location,
      information,
      date,
    });
  }
}
