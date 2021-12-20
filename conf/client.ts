/**
 * Conf module
 *
 * @packageDocumentation
 */

import {urn_util, urn_exception} from 'urn-lib';

const urn_exc = urn_exception.init('CONF_TRX_CLIENT_MODULE', `TRX client configuration module`);

import {trx_client_config} from '../cln/defaults';

import * as types from '../cln/types';

let _is_client_trx_initialized = false;

export function get<k extends keyof types.FullClientConfiguration>(param_name:k)
		:typeof trx_client_config[k]{
	_check_if_uranio_was_initialized();
	_check_if_param_exists(param_name);
	return trx_client_config[param_name];
}

export function is_initialized():boolean{
	return _is_client_trx_initialized;
}

export function set_initialize(is_initialized:boolean):void{
	_is_client_trx_initialized = is_initialized;
}

export function set(repo_config:types.FullClientConfiguration, config:types.ClientConfiguration)
		:void{
	_validate_config_types(repo_config, config);
	Object.assign(repo_config, config);
}

function _check_if_param_exists(param_name:string){
	return urn_util.object.has_key(trx_client_config, param_name);
}

function _check_if_uranio_was_initialized(){
	if(is_initialized() === false){
		throw urn_exc.create_not_initialized(
			`NOT_INITIALIZED`,
			`Uranio was not initialized. Please run \`uranio.init()\` in your main file.`
		);
	}
}

function _validate_config_types(
	repo_config:types.FullClientConfiguration,
	config:types.ClientConfiguration
){
	for(const [config_key, config_value] of Object.entries(config)){
		const key = config_key as keyof typeof repo_config;
		if(typeof config_value !== typeof repo_config[key]){
			throw urn_exc.create_not_initialized(
				`INVALID_CLIENT_CONFIG_VALUE`,
				`Invalid client config value for \`${config_key}\`. \`${config_key}\` value ` +
				` must be of type \`${typeof repo_config[key]}\`,` +
				`\`${typeof config_value}\` given.`
			);
		}
	}
}
