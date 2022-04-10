"use strict";
/**
 * Module for Base
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.Base = void 0;
const urn_lib_1 = require("urn-lib");
const urn_exc = urn_lib_1.urn_exception.init(`BASE`, `Base module`);
const uranio_api_1 = __importDefault(require("uranio-api"));
const book = __importStar(require("../book/server"));
const conf = __importStar(require("../conf/server"));
const server_1 = require("../raw/server");
let Base = class Base {
    constructor(atom_name, token) {
        this.atom_name = atom_name;
        this.token = token;
        this.raw = (0, server_1.create)();
    }
    hook(route_name) {
        _check_atom_name(this.atom_name);
        const route = book.get_route_definition(this.atom_name, route_name);
        const splitted_url = route.url.split('/');
        const params = [];
        for (const split of splitted_url) {
            if (split.includes(':')) {
                const splitted_split = split.split(':');
                if (splitted_split.length !== 2) {
                    throw urn_exc.create(`INVALID_ROUTE_URL`, `Invalid Route URL format \`${route.url}\``);
                }
                const param_name = splitted_split[1];
                params.push(param_name);
            }
        }
        return async (args, token) => {
            var _a;
            const dock_def = book.get_dock_definition(this.atom_name);
            const atom_api_url = dock_def.url || `/${book.get_plural(this.atom_name)}`;
            const atom_def = book.get_definition(this.atom_name);
            const connection_url = (atom_def.connection && atom_def.connection === 'log') ? conf.get('prefix_log') : '';
            let url = `${connection_url}${atom_api_url}${route.url}`;
            for (const param of params) {
                if (urn_lib_1.urn_util.object.has_key(args, 'params') &&
                    typeof ((_a = args.params) === null || _a === void 0 ? void 0 : _a[param]) === 'string') {
                    url = url.replace(`:${param}`, args.params[param]);
                }
            }
            const headers = {};
            if (typeof this.token === 'string') {
                headers['urn-auth-token'] = this.token;
            }
            if (typeof token === 'string') {
                headers['urn-auth-token'] = token;
            }
            switch (route.method) {
                case uranio_api_1.default.types.RouteMethod.GET: {
                    return await this.raw.get(url, args.query, headers);
                }
                case uranio_api_1.default.types.RouteMethod.POST: {
                    return await this.raw.post(url, args.body, args.query, headers);
                }
                case uranio_api_1.default.types.RouteMethod.DELETE: {
                    return await this.raw.delete(url, args.query, headers);
                }
                default: {
                    return await this.raw.get(url, args.query, headers);
                }
            }
        };
    }
};
Base = __decorate([
    urn_lib_1.urn_log.util.decorators.debug_constructor,
    urn_lib_1.urn_log.util.decorators.debug_methods
], Base);
exports.Base = Base;
function _check_atom_name(atom_name) {
    if (book.validate_name(atom_name)) {
        return true;
    }
    throw urn_exc.create_not_found(`BASEATOM_UNDEFINED`, `Base Atom not found for atom \`${atom_name}\`.`);
}
//# sourceMappingURL=class.js.map