"use strict";
/**
 * Module for default client configuration object
 * Uranio `generate` script will replace this file with the client part
 * of the uranio.toml configration file.
 *
 * All properties starting with `client_` will populate this object.
 *
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.client_toml = void 0;
exports.client_toml = {
    log_debug_info: false,
    log_color: true,
    log_time_format: "HH:MM:ss:l",
    log_max_str_length: 174,
    log_prefix: "",
    log_prefix_type: false,
    dev_log_debug_info: false,
    dev_log_color: true,
    dev_log_time_format: "yyyy-mm-dd'T'HH:MM:ss:l",
    dev_log_max_str_length: 174,
    dev_log_prefix: "",
    dev_log_prefix_type: false,
    prefix_api: "/uranio/api",
    dev_prefix_api: "/uranio/api",
    prefix_log: "/logs",
    fetch: "axios",
    default_atoms_superuser: true,
    default_atoms_group: true,
    default_atoms_user: true,
    default_atoms_media: true,
    default_atoms_request: true,
    default_atoms_error: true,
    service_protocol: "https",
    service_domain: "0.0.0.0",
    service_port: 7773,
    dev_service_protocol: "https",
    dev_service_domain: "0.0.0.0",
    dev_service_port: 7773,
};
//# sourceMappingURL=toml.js.map