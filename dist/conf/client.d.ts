/**
 * Conf module
 *
 * @packageDocumentation
 */
import { trx_client_config } from '../client/defaults';
export { trx_client_config as defaults };
import * as types from '../client/types';
export declare function get<k extends keyof Required<types.ClientConfiguration>>(param_name: k): typeof trx_client_config[k];
export declare function is_initialized(): boolean;
export declare function set_initialize(is_initialized: boolean): void;
export declare function set_from_env(repo_config: Required<types.ClientConfiguration>): void;
export declare function set(repo_config: Required<types.ClientConfiguration>, config: types.ClientConfiguration): void;
