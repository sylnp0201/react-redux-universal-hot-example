import request from 'request';

export function getArticle(req, params, cb) {
  return request.get(`http://www.bloombergview.com/api/articles/${params[0]}/${params[1]}`, { timeout: 5000 }, cb);
}

export default function load(req, params) {
  return new Promise((resolve, reject) => {
    getArticle(req, params, (error, response, body) => {
      if(error && error.code === 'ETIMEDOUT') {
        reject(`[Error] Request Timeout`)

        return;
      }

      resolve(JSON.parse(body));
    });
  });
}
