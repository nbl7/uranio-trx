"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var toml_exports = {};
__export(toml_exports, {
  client_toml: () => client_toml
});
module.exports = __toCommonJS(toml_exports);
const client_toml = {
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
  ssl_secure: true,
  dev_ssl_secure: false
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  client_toml
});
