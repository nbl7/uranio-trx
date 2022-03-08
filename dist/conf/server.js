"use strict";
/**
 * Conf module
 *
 * @packageDocumentation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = exports.set_initialize = exports.is_initialized = exports.get_current = exports.get = exports.defaults = void 0;
const urn_lib_1 = require("urn-lib");
const urn_exc = urn_lib_1.urn_exception.init('CONF_TRX_MODULE', `TRX configuration module`);
const uranio_api_1 = __importDefault(require("uranio-api"));
const defaults_1 = require("./defaults");
Object.defineProperty(exports, "defaults", { enumerable: true, get: function () { return defaults_1.trx_config; } });
let _is_trx_initialized = false;
function get(param_name) {
    _check_if_uranio_was_initialized();
    _check_if_param_exists(param_name);
    return defaults_1.trx_config[param_name];
}
exports.get = get;
function get_current(param_name) {
    return uranio_api_1.default.conf.get_current(param_name);
}
exports.get_current = get_current;
function is_initialized() {
    return uranio_api_1.default.conf.is_initialized() && _is_trx_initialized;
}
exports.is_initialized = is_initialized;
function set_initialize(is_initialized) {
    _is_trx_initialized = is_initialized;
}
exports.set_initialize = set_initialize;
// export function set_from_env(repo_config:Required<types.Configuration>)
//     :void{
//   return api.conf.set_from_env(repo_config);
// }
function set(repo_config, config) {
    return uranio_api_1.default.conf.set(repo_config, config);
}
exports.set = set;
function _check_if_param_exists(param_name) {
    return urn_lib_1.urn_util.object.has_key(defaults_1.trx_config, param_name);
}
function _check_if_uranio_was_initialized() {
    if (is_initialized() === false) {
        throw urn_exc.create_not_initialized(`NOT_INITIALIZED`, `Uranio was not initialized. Please run \`uranio.init()\` in your main file.`);
    }
}
//# sourceMappingURL=server.js.map