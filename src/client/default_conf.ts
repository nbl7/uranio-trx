/**
 * Module for default client configuration object
 *
 * @packageDocumentation
 */

// import {urn_log} from 'urn-lib';

import api_client from 'uranio-api/client';

import {ClientConfiguration} from './types';

/**
 * IMPORTANT: if new variable are added here they must be added on
 * uranio-trx/conf/client.ts
 *
 * Unfortunately the browser doesn't allow to dynamically access process.env
 * variable, like process.env[var_name] where `var_name` is a variable.
 */
export const trx_client_config:Required<ClientConfiguration> = {
	
	...api_client.conf.get_all(),
	
	fetch: 'axios',
	
	service_url: 'http://localhost:7777/uranio/api',
	
	dev_service_url: 'http://localhost:7777/uranio/api'
	
};
