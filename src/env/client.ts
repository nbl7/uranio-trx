/**
 * Env module
 *
 * @packageDocumentation
 */

import {urn_context} from 'urn-lib';

import core from 'uranio-core';

import {trx_client_env} from '../client/default_env';

import {ClientEnvironment} from '../typ/env_cln';

const urn_ctx = urn_context.create<Required<ClientEnvironment>>(
	trx_client_env,
	is_production()
);
urn_ctx.set_env();

export function is_production():boolean{
	return core.env.is_production();
}

export function get<k extends keyof ClientEnvironment>(
	param_name:k
):Required<ClientEnvironment>[k]{
	return urn_ctx.get(param_name);
}

export function get_all():Required<ClientEnvironment>{
	return urn_ctx.get_all();
}

export function set(env:Partial<ClientEnvironment>):void{
	urn_ctx.set(env);
}
