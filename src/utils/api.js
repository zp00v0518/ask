function sendAjaxRequest(search, obj, callback = function() {}) {
  return new Promise((resolve, reject) => {
    let data = JSON.stringify(obj);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', search, true);
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(data);
    console.log('Запрос ушел');
    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) return;
      if (xhr.status == 200) {
        resolve(xhr.responseText);
        return callback(xhr.responseText);
      }
    };
  });
}
class API {
  constructor() {
    const xhr = new XMLHttpRequest();
    this.xhr = xhr;
  }
  post(data = null, headers){
    this.xhr.open('POST', data, true);
    this.setHeaders(headers);
    this.xhr.send(data);
    return new Promise((resove, reject)=>{
      this.xhr.onreadystatechange = function() {
        if (this.xhr.readyState != 4) return;
        if (this.xhr.status == 200) {
          return resolve(this.xhr);
        }
      };
    })
  }
  setHeaders(headers){
    const xhr = this.xhr;
    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key])
    })
  }
}
const CallApi = new API();
console.log(CallApi)
