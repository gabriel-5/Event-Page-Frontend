import axios from "axios";
const url = "http://localhost:3001";

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

  getEvents() {
    return this.apiCall("get", url + "/event/");
  }

  addEvent(name, location, information, date) {
    return this.apiCall("post", url + "/event/", {
      name,
      location,
      information,
      date,
    });
  }

  removeEvent(id) {
    return this.apiCall("delete", `${url}${"/events/"}${id}`);
  }

  updateEvent(id, name, location, information, date) {
    return this.apiCall("put", `${url}${"/events/"}${id}`, {
      name,
      location,
      information,
      date,
    });
  }
}
