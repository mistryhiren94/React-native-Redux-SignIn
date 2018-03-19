import axios from 'axios';
let base_url = "your base url";

let  _httpPost = function(url, data) {
  let final_url = base_url + url;
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: final_url,
      data: data
    })
    .then(res => {
      resolve(res);
    })
    .catch(err => {
      reject(err);
    })
  })
};

let  _httpPostToken = function(url, token) {
  let final_url = base_url + url;
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: final_url,
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(res => {
      resolve(res);
    })
    .catch(err => {
      console.log('error======',err);
      reject(err);
    })
  })
};

export {
    _httpPost as httpPost,
    _httpPostToken as httpPostToken
  };