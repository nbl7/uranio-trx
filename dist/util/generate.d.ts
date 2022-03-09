/**
 * Generate module
 *
 * @packageDocumentation
 */
import * as types from '../server/types';
export declare const process_params: {
    urn_command: string;
    urn_trx_repo_path: string;
};
export declare function schema(): string;
export declare function schema_and_save(): void;
export declare function save_schema(text: string): void;
export declare function hooks_client(): string;
export declare function hooks_server(): string;
export declare function hooks_and_save(): void;
export declare function save_hooks_server(text: string): void;
export declare function save_hooks_client(text: string): void;
export declare function client_config(server_config: types.Configuration): string;
export declare function client_config_and_save(server_config: types.Configuration): void;
export declare function save_client_config(text: string): void;
export declare function hook_types(): string;
export declare function hook_types_and_save(): void;
export declare function save_hook_types(text: string): void;
export declare function init(): void;
