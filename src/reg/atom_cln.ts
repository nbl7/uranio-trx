/**
 * Register module for client
 *
 * @packageDocumentation
 */

import api_client from 'uranio-api/client';

import * as types from '../client/types';

export function atom(
	atom_definition: types.Book.Definition,
	atom_name?: string
):string{
	const final_atom_name = api_client.register.atom(atom_definition, atom_name);
	return final_atom_name;
}

