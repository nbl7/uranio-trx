/**
 * Conf module
 *
 * @packageDocumentation
 */
import { trx_config } from './defaults';
export { trx_config as defaults };
import * as types from '../server/types';
export declare function get<k extends keyof types.Configuration>(param_name: k): typeof trx_config[k];
export declare function is_initialized(): boolean;
export declare function set_initialize(is_initialized: boolean): void;
export declare function set_from_env(repo_config: Required<types.Configuration>): void;
export declare function set(repo_config: Required<types.Configuration>, config: types.Configuration): void;
