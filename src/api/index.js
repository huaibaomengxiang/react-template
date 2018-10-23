import axios from 'axios';

const methods = {
  get: 'get',
  post: 'post',
};
const defaultMethod = 'get';

class Request {
  constructor(opt) {
    this.apis = {};
    this.setConfig(opt);
  }

  setConfig(opt) {
    const apis = opt.apis;
    opt = Object.assign({}, opt);
    delete opt.apis;
    this.defaultConfig = Object.assign({}, opt);
    const axiosConfig = Object.assign({}, this.defaultConfig);
    this.axios = axios.create(axiosConfig);
    if (apis) {
      this.setApis(apis);
    }
  }

  setApis(apis) {
    this._apis = apis;
    this.apis = Object.keys(apis).reduce((pre, key) => {
      const api = apis[key];
      pre[key] = this.buildRequest(api);
      return pre;
    }, {});
  }

  buildRequest(api) {
    const method = api.method || defaultMethod;
    const url = api.path;
    return data => this.axios(Object.assign({ url, method, data }));
  }
}

const index = {
  sendCode: {
    path: '/carElf/sendMsgCode',
    method: methods.post,
  },
  getUserList: {
    path: '/demonBusiness/getBoxBusinessInfoPage',
    method: methods.post,
  },
};


const request = new Request({
  baseURL: '/api',
  apis: index,
  timeout: 30000,
});

export default request;
