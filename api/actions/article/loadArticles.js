import request from 'request';

export function getArticles(req, cb) {
  return request.get("http://staging-bview-service-adapter.bdns.bloomberg.com:8080/articles", { timeout: 5000 }, cb);
}

export default function load(req, params) {
  return new Promise((resolve, reject) => {
    getArticles(req, (error, response, body) => {

      if(error && error.code === 'ETIMEDOUT') {
        reject(`[Error] Request Timeout`)

        return;
      }

      resolve(JSON.parse(body));
    });
  });
}
