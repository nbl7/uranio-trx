"use strict";
/**
 * Register module for client
 *
 * @packageDocumentation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.atom = void 0;
const client_1 = __importDefault(require("uranio-api/client"));
function atom(atom_definition, atom_name) {
    const final_atom_name = client_1.default.register.atom(atom_definition, atom_name);
    return final_atom_name;
}
exports.atom = atom;
//# sourceMappingURL=atom_cln.js.map