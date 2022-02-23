/**
 * Register module
 *
 * @packageDocumentation
 */

import api from 'uranio-api';

import * as types from '../srv/types';

import {schema} from '../sch/server';

export function register<A extends schema.AtomName>(
	atom_definition:types.Book.Definition<A>,
	atom_name?:A
):string{
	const final_atom_name = api.register(atom_definition, atom_name);
	return final_atom_name;
}
