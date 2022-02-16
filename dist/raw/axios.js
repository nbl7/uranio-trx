"use strict";
/**
 * Module for AxiosRaw
 *
 * @packageDocumentation
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
// import querystring from 'querystring';
const axios_1 = __importDefault(require("axios"));
const urn_lib_1 = require("urn-lib");
const urn_ret = urn_lib_1.urn_return.create();
const defaults_1 = require("./defaults");
const axios_config = {
    // headers: {'user-agent': 'Uranio TRX 0.0.1'}
    withCredentials: true
};
const axios_config_auth = {
// headers: {'user-agent': 'Uranio TRX 0.0.1'}
// withCredentials: true
};
let AxiosRaw = class AxiosRaw {
    constructor(_axios_instance, is_auth = false) {
        this._axios_instance = _axios_instance;
        this.is_auth = is_auth;
        this.axios_config = (this.is_auth) ? axios_config_auth : axios_config;
    }
    async get(url, query, headers) {
        if (headers) {
            axios_config.headers = headers;
        }
        return await _handle_axios_call(async () => {
            return await this._axios_instance.get(_url_with_query(url, query), this.axios_config);
        });
    }
    async post(url, body, query, headers) {
        if (headers) {
            axios_config.headers = headers;
        }
        return await _handle_axios_call(async () => {
            return await this._axios_instance.post(_url_with_query(url, query), body, this.axios_config);
        });
    }
    async delete(url, query, headers) {
        if (headers) {
            axios_config.headers = headers;
        }
        return await _handle_axios_call(async () => {
            return await this._axios_instance.delete(_url_with_query(url, query), this.axios_config);
        });
    }
};
AxiosRaw = __decorate([
    urn_lib_1.urn_log.util.decorators.debug_constructor,
    urn_lib_1.urn_log.util.decorators.debug_methods
], AxiosRaw);
// function _serialize(obj:any, prefix=''):string{
//   const str = [];
//   for (const p in obj) {
//     if (urn_util.object.has_key(obj, p)) {
//       const k = prefix ?
//         prefix + "[" + p + "]" :
//         p;
//       const v = obj[p];
//       str.push((v !== null && typeof v === "object") ?
//         _serialize(v, k) :
//         encodeURIComponent(k) + "=" + encodeURIComponent(v));
//     }
//   }
//   return str.join("&");
// }
function _url_with_query(url, query) {
    let full_url = url;
    if (query) {
        const query_string = urn_lib_1.urn_util.object.serialize(query);
        full_url += `?${query_string}`;
    }
    return full_url;
}
async function _handle_axios_call(handler) {
    var _a, _b, _c, _d;
    try {
        const axios_response = await handler();
        switch (axios_response.status) {
            case 200: {
                return axios_response.data;
                // return urn_ret.return_success(
                //   axios_response.data.message,
                //   axios_response.data
                // );
            }
            default: {
                return urn_ret.return_error(axios_response.status, axios_response.data.message, axios_response.data.err_code, axios_response.data.err_msg);
            }
        }
    }
    catch (e) {
        const ex = e;
        if (!ex.response) {
            return urn_ret.return_error(400, 'Unable to make request.', 'UNABLE_TO_MAKE_REQUEST', ex.message, undefined, ex);
        }
        else if (typeof ((_a = ex.response) === null || _a === void 0 ? void 0 : _a.data) === 'string') {
            let payload = {};
            if ((_c = (_b = ex.response) === null || _b === void 0 ? void 0 : _b.request) === null || _c === void 0 ? void 0 : _c.path) {
                payload = {
                    path: ex.response.request.path
                };
            }
            else if ((_d = ex.response) === null || _d === void 0 ? void 0 : _d.request) {
                payload = {
                    request: ex.response.request
                };
            }
            else if (ex.response) {
                payload = {
                    response: ex.response
                };
            }
            return urn_ret.return_error(ex.response.status, ex.response.statusText, 'RAW_ERROR', 'Cannot make request.', payload, ex);
        }
        else {
            return urn_ret.return_error(ex.response.data.status, ex.response.data.message, ex.response.data.err_code, ex.response.data.err_msg, ex.response.data.payload, ex);
        }
    }
}
/**
 * A function the will create an AxiosRawInstance.
 */
function create(config, is_auth = false) {
    urn_lib_1.urn_log.fn_debug('Create URNTRXRaw');
    const service_url = (config === null || config === void 0 ? void 0 : config.service_url) || defaults_1.raw_config.service_url;
    const axios_config = {
        baseURL: service_url
    };
    const axios_instance = axios_1.default.create(axios_config);
    // axios_instance.interceptors.request.use(request => {
    //   console.log('Starting Request', JSON.stringify(request, null, 2));
    //   return request;
    // });
    // axios_instance.interceptors.response.use(response => {
    //   console.log('Response:', JSON.stringify(response, null, 2));
    //   return response;
    // });
    return new AxiosRaw(axios_instance, is_auth);
}
exports.create = create;
//# sourceMappingURL=axios.js.map