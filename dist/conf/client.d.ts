/**
 * Conf module
 *
 * @packageDocumentation
 */
import { trx_client_config } from '../client/default_conf';
export { trx_client_config as defaults };
import * as types from '../client/types';
export declare function get<k extends keyof Required<types.ClientConfiguration>>(param_name: k): typeof trx_client_config[k];
export declare function get_current<k extends keyof types.ClientConfiguration>(param_name: k): typeof trx_client_config[k];
export declare function is_initialized(): boolean;
export declare function set_initialize(is_initialized: boolean): void;
export declare function set(repo_config: Required<types.ClientConfiguration>, config: Partial<types.ClientConfiguration>): void;
