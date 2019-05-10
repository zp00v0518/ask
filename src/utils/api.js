export default class API {
  constructor() {
    const xhr = new XMLHttpRequest();
    this.xhr = xhr;
  }
  post(path = '/default', data = null, headers) {
    this.xhr.open('POST', path, true);
    // this.setHeaders(headers);
    this.xhr.send(data);
    return new Promise((resolve, reject) => {
      this.xhr.onreadystatechange = () => {
        if (this.xhr.readyState != 4) return;
        if (this.xhr.status == 200) {
          return resolve(this.xhr);
        } else {
          return reject();
        }
      };
    });
  }
  setHeaders(headers) {
    const xhr = this.xhr;
    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key]);
    });
  }
}
