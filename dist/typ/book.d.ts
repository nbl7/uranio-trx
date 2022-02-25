/**
 * Server book type module
 *
 * This module defines the type of the `atom_book` for the Server.
 * It extends the defintion of the Client Book type.
 *
 * `type Book` must be re-defined.
 *
 * @packageDocumentation
 */
import api from 'uranio-api';
import * as book_cln from './book_cln';
import { schema } from '../sch/server';
export declare type Book = {
    [k in schema.AtomName]?: Book.Definition<k>;
};
export declare namespace Book {
    type Definition<A extends schema.AtomName> = api.types.Book.Definition<A> & {
        bll?: Definition.Bll<A>;
        dock?: Definition.Dock<A>;
    };
    namespace Definition {
        type Bll<A extends schema.AtomName> = api.types.Book.Definition.Bll<A>;
        type Dock<A extends schema.AtomName> = api.types.Book.Definition.Dock<A>;
        namespace Dock {
            type Routes<A extends schema.AtomName> = api.types.Book.Definition.Dock.Routes<A>;
            namespace Routes {
                type Route<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = api.types.Book.Definition.Dock.Routes.Route<A, R, D>;
                namespace Route {
                    type Call<A extends schema.AtomName, R extends schema.RouteName<A>, D extends schema.Depth = 0> = api.types.Book.Definition.Dock.Routes.Route.Call<A, R, D>;
                }
            }
        }
        type Property = book_cln.Book.Definition.Property;
        type Properties = book_cln.Book.Definition.Properties;
        namespace Property {
            type ID = book_cln.Book.Definition.Property.ID;
            type Text = book_cln.Book.Definition.Property.Text;
            type LongText = book_cln.Book.Definition.Property.LongText;
            type String = book_cln.Book.Definition.Property.String;
            type Number = book_cln.Book.Definition.Property.Number;
            type Enum = book_cln.Book.Definition.Property.Enum;
            type Set = book_cln.Book.Definition.Property.Set;
            type DayTime = book_cln.Book.Definition.Property.DayTime;
            type Email = book_cln.Book.Definition.Property.Email;
            type Integer = book_cln.Book.Definition.Property.Integer;
            type Float = book_cln.Book.Definition.Property.Float;
            type Binary = book_cln.Book.Definition.Property.Binary;
            type Encrypted = book_cln.Book.Definition.Property.Encrypted;
            type Day = book_cln.Book.Definition.Property.Day;
            type Time = book_cln.Book.Definition.Property.Time;
            type EnumString = book_cln.Book.Definition.Property.EnumString;
            type EnumNumber = book_cln.Book.Definition.Property.EnumNumber;
            type SetString = book_cln.Book.Definition.Property.SetNumber;
            type SetNumber = book_cln.Book.Definition.Property.SetString;
            type Atom = book_cln.Book.Definition.Property.Atom;
            type AtomArray = book_cln.Book.Definition.Property.AtomArray;
            namespace Format {
                type Float = book_cln.Book.Definition.Property.Format.Float;
            }
            namespace Validation {
                type String = book_cln.Book.Definition.Property.Validation.String;
                type Number = book_cln.Book.Definition.Property.Validation.Number;
                type DayTime = book_cln.Book.Definition.Property.Validation.DayTime;
                type SetString = book_cln.Book.Definition.Property.Validation.SetString;
                type SetNumber = book_cln.Book.Definition.Property.Validation.SetNumber;
                type Atom = book_cln.Book.Definition.Property.Validation.Atom;
            }
        }
        type Security = api.types.Book.Definition.Security;
    }
}
