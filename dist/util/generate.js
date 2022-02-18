"use strict";
/**
 * Generate module
 *
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.save_types = exports.types_and_save = exports.types = exports.save_hooks = exports.hooks_and_save = exports.hooks = exports.save_schema = exports.schema_and_save = exports.schema = exports.process_params = void 0;
const fs_1 = __importDefault(require("fs"));
const uranio_api_1 = __importDefault(require("uranio-api"));
const urn_lib_1 = require("urn-lib");
const book = __importStar(require("../book/index"));
exports.process_params = {
    urn_command: `schema`,
    urn_base_schema: `./types/schema.d.ts`,
    urn_base_types: `./types/uranio.d.ts`,
    urn_output_dir: `.`
};
function schema() {
    urn_lib_1.urn_log.debug('Started generating uranio trx schema...');
    _init_generate();
    const api_schema = uranio_api_1.default.util.generate.schema();
    const text = _generate_uranio_schema_text(api_schema);
    urn_lib_1.urn_log.debug(`TRX Schema generated.`);
    return text;
}
exports.schema = schema;
function schema_and_save() {
    const text = schema();
    save_schema(text);
    urn_lib_1.urn_log.debug(`Schema generated and saved.`);
}
exports.schema_and_save = schema_and_save;
function save_schema(text) {
    return uranio_api_1.default.util.generate.save_schema(text);
}
exports.save_schema = save_schema;
function hooks() {
    urn_lib_1.urn_log.debug('Started generating uranio trx hooks...');
    _init_generate();
    const text = _generate_hooks_text();
    urn_lib_1.urn_log.debug(`TRX Hooks generated.`);
    return text;
}
exports.hooks = hooks;
function hooks_and_save() {
    const text = hooks();
    save_hooks(text);
    urn_lib_1.urn_log.debug(`Hooks generated and saved.`);
}
exports.hooks_and_save = hooks_and_save;
function save_hooks(text) {
    fs_1.default.writeFileSync(`${exports.process_params.urn_output_dir}/__urn_hooks.ts`, text);
}
exports.save_hooks = save_hooks;
function types() {
    urn_lib_1.urn_log.debug('Started generating uranio trx types...');
    _init_generate();
    const text = _generate_uranio_types_text();
    urn_lib_1.urn_log.debug(`TRX Types generated.`);
    return text;
}
exports.types = types;
function types_and_save() {
    const text = types();
    save_types(text);
    urn_lib_1.urn_log.debug(`Types generated and saved.`);
}
exports.types_and_save = types_and_save;
function save_types(text) {
    fs_1.default.writeFileSync(`${exports.process_params.urn_output_dir}/uranio.d.ts`, text);
}
exports.save_types = save_types;
function _init_generate() {
    exports.process_params.urn_base_schema = uranio_api_1.default.util.generate.process_params.urn_base_schema;
    exports.process_params.urn_command = uranio_api_1.default.util.generate.process_params.urn_command;
    exports.process_params.urn_output_dir = uranio_api_1.default.util.generate.process_params.urn_output_dir;
    _init_trx_generate();
}
function _init_trx_generate() {
    for (const argv of process.argv) {
        const splitted = argv.split('=');
        if (splitted[0] === 'urn_base_types'
            && typeof splitted[1] === 'string'
            && splitted[1] !== '') {
            exports.process_params.urn_base_types = splitted[1];
        }
    }
}
function _generate_uranio_types_text() {
    const txt = _generate_types_text();
    const data = fs_1.default.readFileSync(exports.process_params.urn_base_types, { encoding: 'utf8' });
    const data_start = data.split('/** --uranio-generate-types-start */');
    const data_end = data_start[1].split('/** --uranio-generate-types-end */');
    let new_data = '';
    new_data += data_start[0];
    new_data += `/** --uranio-generate-types-start */\n\n`;
    new_data += txt;
    +'\n\n';
    new_data += `/** --uranio-generate-types-end */`;
    new_data += data_end[1];
    return new_data;
}
function _generate_types_text() {
    //TODO
}
function _generate_uranio_schema_text(api_schema) {
    const txt = _generate_trx_schema_text();
    const split_text = '\texport {};/** --uranio-generate-end */';
    const data_splitted = api_schema.split(split_text);
    let new_data = '';
    new_data += data_splitted[0];
    new_data += txt;
    +'\n\n\t';
    new_data += split_text;
    new_data += data_splitted[1];
    return new_data;
}
function _generate_trx_schema_text() {
    const atom_book = book.get_all_definitions();
    let txt = '';
    txt += _generate_default_response();
    txt += _generate_custom_response(atom_book);
    txt += _generate_response();
    return txt;
}
function _generate_hooks_text() {
    let text = '';
    text += `import uranio from 'uranio/client';\n`;
    text += `\n`;
    const atom_book = book.get_all_definitions();
    for (const [atom_name, atom_def] of Object.entries(atom_book)) {
        const plural = book.get_plural(atom_name);
        text += `uranio.hooks['${plural}'] = {\n`;
        if (atom_def.authenticate === true) {
            text += _authenticate_hooks(atom_name);
        }
        if (atom_name === 'media') {
            text += _upload_hooks();
            text += _presigned_hooks();
        }
        const route_defs = book.get_routes_definition_with_defaults(atom_name);
        for (const [route_name, route_def] of Object.entries(route_defs)) {
            const text_args = _text_args_for_url(route_def.url);
            const body_arg = _body_arg_for_route(route_def.method, atom_name, route_name);
            text += `\t${route_name}: async <D extends uranio.types.Depth>(\n`;
            text += `\t\t${text_args}${body_arg}options?:uranio.types.Hook.Arguments`;
            text += `<'${atom_name}', '${route_name}', D>,\n`;
            text += `\t\ttoken?:string\n`;
            text += `\t):Promise<uranio.types.Hook.Response<'${atom_name}', `;
            text += `'${route_name}', D>>  => {\n`;
            text += `\t\tconst args:uranio.types.Hook.Arguments<'${atom_name}', `;
            text += `'${route_name}', D> = {\n`;
            const lines = _text_lines_in_args_params(route_def.url);
            if (lines.length > 0) {
                text += `\t\t\tparams: {\n`;
                for (const line of lines) {
                    text += `\t\t\t\t${line}\n`;
                }
                text += `\t\t\t},\n`;
            }
            if (body_arg !== '') {
                text += `\t\t\tbody: body,\n`;
            }
            text += `\t\t\t...options\n`;
            text += `\t\t};\n`;
            text += `\t\tlet current_token:string|undefined;\n`;
            text += `\t\tif(typeof hook_token === 'string' && hook_token !== ''){\n`;
            text += `\t\t\tcurrent_token = hook_token;\n`;
            text += `\t\t}\n`;
            text += `\t\tif(typeof token === 'string' && token !== ''){\n`;
            text += `\t\t\tcurrent_token = token;\n`;
            text += `\t\t}\n`;
            text += `\t\treturn await uranio.base.create('${atom_name}',`;
            text += `current_token).hook<'${route_name}',D>('${route_name}')(args);\n`;
            text += `\t},\n`;
        }
        text += `}\n`;
    }
    return text;
}
function _text_lines_in_args_params(url) {
    const lines = [];
    if (typeof url !== 'string') {
        return lines;
    }
    let checked_url = url;
    if (url[0] === "'" && url[url.length - 1] === "'") {
        checked_url = url.substring(1, url.length - 1);
    }
    const url_params = _get_parameters_from_url(checked_url);
    for (const p of url_params) {
        lines.push(`${p}: ${p},`);
    }
    return lines;
}
function _body_arg_for_route(method, atom_name, route_name) {
    if (method === 'POST') {
        return `body:uranio.types.Hook.Body<'${atom_name}', '${route_name}'>,\n\t\t`;
    }
    return '';
}
function _text_args_for_url(url) {
    let checked_url = url;
    if (url[0] === "'" && url[url.length - 1] === "'") {
        checked_url = url.substring(1, url.length - 1);
    }
    const params = _get_parameters_from_url(checked_url);
    return _generate_args(params);
}
function _get_parameters_from_url(url) {
    const url_params = [];
    if (typeof url !== 'string') {
        return url_params;
    }
    const splitted_url = url.split('/');
    for (const split_url of splitted_url) {
        if (split_url.includes(':')) {
            const splitted_split = split_url.split(':');
            if (splitted_split.length > 1) {
                url_params.push(splitted_split[1]);
            }
        }
    }
    return url_params;
}
function _generate_args(params) {
    const param_text = [];
    for (const p of params) {
        param_text.push(`${p}:string,\n\t\t`);
    }
    return param_text.join('');
}
function _authenticate_hooks(atom_name) {
    let text = '';
    text += `\tauthenticate: async (\n`;
    text += `\t\temail: string,\n`;
    text += `\t\tpassword: string\n`;
    text += `\t): Promise<urn_response.General<uranio.api.core.types.Api.AuthResponse>> => {\n`;
    text += `\t\treturn await uranio.auth.create('${atom_name}').authenticate(email, password);\n`;
    text += `\t},\n`;
    return text;
}
function _upload_hooks() {
    let text = '';
    text += `\tupload: async<D extends uranio.types.Depth>(\n`;
    text += `\t\tfile: Buffer | ArrayBuffer | Blob,\n`;
    text += `\t\ttoken?: string\n`;
    text += `\t): Promise<urn_response.General<uranio.schema.Atom<'media'>>> => {\n`;
    text += `\t\tlet current_token: string | undefined;\n`;
    text += `\t\tif (typeof hook_token === "string" && hook_token !== "") {\n`;
    text += `\t\t\tcurrent_token = hook_token;\n`;
    text += `\t\t}\n`;
    text += `\t\tif (typeof token === "string" && token !== "") {\n`;
    text += `\t\t\tcurrent_token = token;\n`;
    text += `\t\t}\n`;
    text += `\t\treturn await uranio.media.create(current_token).upload<D>(file, current_token);\n`;
    text += `\t},\n`;
    return text;
}
function _presigned_hooks() {
    let text = '';
    text += `\tpresigned: async(\n`;
    text += `\t\tfilename: string,\n`;
    text += `\t\tsize?: number,\n`;
    text += `\t\ttype?: string,\n`;
    text += `\t\ttoken?: string\n`;
    text += `\t): Promise<urn_response.General<string>> => {\n`;
    text += `\t\tlet current_token: string | undefined;\n`;
    text += `\t\tif (typeof hook_token === "string" && hook_token !== "") {\n`;
    text += `\t\t\tcurrent_token = hook_token;\n`;
    text += `\t\t}\n`;
    text += `\t\tif (typeof token === "string" && token !== "") {\n`;
    text += `\t\t\tcurrent_token = token;\n`;
    text += `\t\t}\n`;
    text += `\t\treturn await uranio.media.create(current_token).presigned(filename, size, type, current_token);\n`;
    text += `\t},\n`;
    return text;
}
function _generate_response() {
    let text = '';
    text += `\texport type Response<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> =\n`;
    text += `\t\tR extends RouteDefaultName ? DefaultResponse<A,R,D> :\n`;
    text += `\t\tCustomResponse<A,R,D>\n`;
    text += `\n`;
    return text;
}
function _generate_custom_response(atom_book) {
    let text = '';
    text += `\ttype CustomResponse<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> =\n`;
    for (const [atom_name, atom_def] of Object.entries(atom_book)) {
        text += `\t\tA extends '${atom_name}' ?\n`;
        if (!atom_def.dock || !atom_def.dock.routes) {
            text += `\t\t\tnever :\n`;
        }
        else {
            const routes = atom_def.dock.routes;
            for (const [route_name, route_def] of Object.entries(routes)) {
                text += `\t\t\tR extends '${route_name}' ? ${route_def.return} :\n`;
            }
            text += `\t\t\tnever :\n`;
        }
    }
    text += `\t\t\tnever\n`;
    text += `\n`;
    return text;
}
function _generate_default_response() {
    let text = '';
    text += `\ttype DefaultResponse<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> =\n`;
    // for(const [route_name, route_def] of Object.entries(api.routes.default_routes)){
    //   text += `\tR extends '${route_name}' ? \n`;
    // }
    text += `\t\tR extends 'count' ? urn_response.General<number, any> :\n`;
    text += `\t\tR extends 'find_id' ? urn_response.General<schema.Molecule<A,D>,any> :\n`;
    text += `\t\tR extends 'find' ? urn_response.General<schema.Molecule<A,D>[],any> :\n`;
    text += `\t\tR extends 'find_one' ? urn_response.General<schema.Molecule<A,D>,any> :\n`;
    text += `\t\tR extends 'insert' ? urn_response.General<schema.Molecule<A,D>,any> :\n`;
    text += `\t\tR extends 'update' ? urn_response.General<schema.Molecule<A,D>,any> :\n`;
    text += `\t\tR extends 'delete' ? urn_response.General<schema.Molecule<A,D>,any> :\n`;
    text += `\t\tR extends 'insert_multiple' ? urn_response.General<schema.Molecule<A,D>[],any> :\n`;
    text += `\t\tR extends 'update_multiple' ? urn_response.General<schema.Molecule<A,D>[],any> :\n`;
    text += `\t\tR extends 'delete_multiple' ? urn_response.General<schema.Molecule<A,D>[],any> :\n`;
    text += `\t\t// R extends 'upload' ? urn_response.General<schema.Molecule<A,D>,any> :\n`;
    text += `\t\t// R extends 'presigned' ? urn_response.General<string,any> :\n`;
    text += `\t\tnever;\n`;
    text += `\n`;
    return text;
}
//# sourceMappingURL=generate.js.map