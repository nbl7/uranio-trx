"use strict";
/**
 * Init module
 *
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const urn_lib_1 = require("urn-lib");
const client_1 = __importDefault(require("uranio-api/client"));
const config_1 = __importDefault(require("../config"));
const default_conf_1 = require("../client/default_conf");
const default_env_1 = require("../client/default_env");
const register = __importStar(require("../reg/client"));
const required = __importStar(require("../req/client"));
const conf = __importStar(require("../conf/client"));
const env = __importStar(require("../env/client"));
const log = __importStar(require("../log/client"));
const defaults_1 = require("../raw/defaults");
function init(config, register_required = true) {
    log.init(urn_lib_1.urn_log.defaults);
    client_1.default.init(config, false);
    env.set_from_env(default_env_1.trx_client_env);
    conf.set(default_conf_1.trx_client_config, config_1.default);
    if (config) {
        conf.set(default_conf_1.trx_client_config, config);
    }
    if (register_required) {
        _register_required_atoms();
    }
    _set_raw();
    _validate_trx_client_variables();
    _validate_trx_client_book();
    conf.set_initialize(true);
    env.set_initialize(true);
    urn_lib_1.urn_log.defaults.log_level = env.get(`log_level`);
}
exports.init = init;
// function _add_default_routes(){
//   const core_atom_book = book.get_all_definitions();
//   for(const [atom_name, atom_def] of Object.entries(core_atom_book)){
//     if(atom_name === 'media'){
//       (atom_def.dock as any).routes = {
//         ...api_client.routes.default_routes,
//         ...api_client.routes.media_routes
//       };
//     }else{
//       (atom_def.dock as any).routes = api_client.routes.default_routes;
//     }
//     register.atom(atom_def as any, atom_name as any);
//   }
// }
function _register_required_atoms() {
    const required_atoms = required.get();
    for (const [atom_name, atom_def] of Object.entries(required_atoms)) {
        register.atom(atom_def, atom_name);
    }
}
function _set_raw() {
    defaults_1.raw_config.service_url = ``;
    defaults_1.raw_config.service_url += `${default_conf_1.trx_client_config.protocol}://`;
    defaults_1.raw_config.service_url += `${default_conf_1.trx_client_config.domain}:`;
    defaults_1.raw_config.service_url += `${default_conf_1.trx_client_config.port}/uranio/api`;
}
/**
 * NOTE:
 * Maybe this should be before compilation and not at runtime?
 */
function _validate_trx_client_book() {
    // example function
    // _validate_dock_url_uniqueness();
    // _validate_dock_route_url_uniqueness();
    // _validate_route_name();
}
/**
 * NOTE:
 * Maybe there is no need for this, it is already valid?
 * It depends if the client books have different properties of the server one.
 */
function _validate_trx_client_variables() {
    // example function
}
//# sourceMappingURL=client.js.map