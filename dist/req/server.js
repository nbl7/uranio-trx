"use strict";
/**
 * Required module
 *
 * @packageDocumentation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const uranio_api_1 = __importDefault(require("uranio-api"));
const atoms_1 = require("./atoms");
function get() {
    return {
        ...uranio_api_1.default.required.get(),
        ...atoms_1.required_atoms
    };
}
exports.get = get;
//# sourceMappingURL=server.js.map