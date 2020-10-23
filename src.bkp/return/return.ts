/**
 * Middleware module for formatting responses
 *
 * @packageDocumentation
 */

/*
 * Import URNResponse namespace with all response types and methods
 */
import {URNResponse} from './return.t';

/*
 * Import URNResponseInjectable interface
 */
import {URNResponseInjectable} from '../util/response_injectable.t';

/**
 * Class URNReturn has all the methods for creating URNResponse objects.
 * Its constructor accepts an array of URNResponseInjectable objects.
 * This type of objects must have two functions:
 * success_handler and fail_handler.
 * These methods will be injected in the response as middleware.
 *
 * Async handlers are not managed for now.
 * Most common case is for logging.
 *
 * The class is designed so that each module that imports it
 * should have its own instance and its own injectable objects.
 */
class URNReturn {
	
	/**
	 * An array of injectable objects.
	 */
	public inject_objects: URNResponseInjectable[];
	
	/**
	 * Constructor function
	 *
	 * @param inject_objects - will set the array of injectable objects
	 */
	constructor(
		inject_objects?:URNResponseInjectable|URNResponseInjectable[]
	){
		this.inject_objects = [];
		if(inject_objects)
			this.push_injects(inject_objects);
	}
	
	/**
	 * Method for checking if the injectable object has the methods needed
	 * and for pushing it to the inject_objects array.
	 *
	 * @param inject_object - the object to check and add
	 *
	 */
	private _add_inject(inject_object:URNResponseInjectable){
		if(typeof inject_object.fail_handler === 'function' &&
				typeof inject_object.success_handler === 'function'){
			this.inject_objects.push(inject_object);
		}
	}
	
	/**
	 * Method that accept one or an array of injectable objects and add it/them to the
	 * injcet_objects array
	 *
	 * @param inject_objects - the object/s to add
	 */
	public push_injects(inject_objects:URNResponseInjectable|URNResponseInjectable[])
			:void{
		if(Array.isArray(inject_objects)){
			for(const inj of inject_objects)
				this._add_inject(inj);
		}else{
			this._add_inject(inject_objects);
		}
	}
	
	/**
	 * Method that will run all the injectable object's success_halder methods.
	 *
	 * @param response - the Success response that will be given to the handlers
	 */
	private _run_success_handlers<T>(response: URNResponse.Success<T>)
			:URNResponse.Success<T>{
		if(this.inject_objects.length > 0){
			for(const inj_obj of this.inject_objects){
				if(inj_obj.success_handler)
					response = inj_obj.success_handler(response);
			}
		}
		return response;
	}
	
	/**
	 * Method that will run all the injectable object's fail_halder methods.
	 *
	 * @param response - the Fail response that will be given to the handlers
	 */
	private _run_fail_handlers<T>(response: URNResponse.Fail<T>)
			:URNResponse.Fail<T>{
		if(this.inject_objects.length > 0){
			for(const inj_obj of this.inject_objects){
				if(inj_obj.fail_handler)
					response = inj_obj.fail_handler(response);
			}
		}
		return response;
	}
	
	/**
	 * Returns a response for an async function
	 *
	 * The return type of this function is a Response
	 * with success generic type T equal to the return type of the async handler Promise
	 *
	 * @param handler [optional] - The function to call
	 * @param name [optional] - The name of the response
	 */
	public async_res<R>(handler:(...args:any[]) => Promise<R>, name?:string){
		return async (param_object?:any):Promise<URNResponse.Response<R>> => {
			try{
				const response:URNResponse.Success<R> = {
					status: 200,
					success: true,
					payload: await handler(param_object)
				};
				return this._run_success_handlers(response);
			}catch(ex){
				return this.return_error(500, 'URANIO ERROR ['+name+'] - '+ex.message, null, ex);
			}
		};
	}

	/**
	 * Returns a response for a function
	 *
	 * The return type of this function is a Response
	 * with success generic type T equal to the return type of the handler function
	 *
	 * @param handler [optional] - The function to call
	 * @param name [optional] - The name of the response
	 */
	public res<R>(handler:(...args:any[]) => R, name?:string){
		return (param_object?:any):URNResponse.Response<ReturnType<typeof handler>> => {
			try{
				const response:URNResponse.Success<R> = {
					status: 200,
					success: true,
					payload: handler(param_object)
				};
				return this._run_success_handlers(response);
			}catch(ex){
				return this.return_error(500, 'URANIO ERROR ['+name+'] - '+ex.message, null, ex);
			}
		};
	}
	
	/**
	 * Returns a response object by looking into its payload.
	 * If there is an error will not look into its playload.
	 * If the payload has an error will return that error.
	 * Otherwse will return the payload and the message of its payload.
	 *
	 * @param result - The main response
	 * @param name [optional] - The name of the response
	 */
	inherit_res(result:URNResponse.Response<URNResponse.Response>, name?:string):URNResponse.Response{
		const return_result:URNResponse.Response = {
			status: 200,
			message: '',
			success: false,
			payload: null
		};
		if(URNResponse.isFail(result)){
			return_result.status = result.status;
			return_result.message = (name) ? name + ' - ' + result.message : result.message;
			return_result.ex = result.ex;
			return return_result;
		}
		if(!URNResponse.isFail(result.payload) && !URNResponse.isSuccess(result.payload)){
			return_result.message = (name) ? name + ' - ' + result.message : result.message;
			return return_result;
		}
		if(URNResponse.isFail(result.payload)){
			return_result.status = result.payload.status;
			return_result.message = (name) ? name + ' - ' + result.payload.message : result.payload.message;
			return_result.ex = result.payload.ex;
			return return_result;
		}
		return_result.message = (name) ? name + ' - ' + result.payload.message : result.payload.message;
		return_result.payload = result.payload.payload;
		return return_result;
	}
	
	/**
	 * Returns a response error object
	 *
	 * Method overload: different return type for different arguments
	 * If payload in present will return a Fail with generic type the type of the payload
	 *
	 * @param status - Status as number. It follows the HTTP status codes
	 * @param message [optional] - A human readable message of the response
	 * @param payload [optional] - A payload
	 * @param ex [optional] - An exception
	 */
	public return_error(status:number, message:string, payload?:null, ex?:Error | null):URNResponse.Fail;
	public return_error<T>(status:number, message:string, payload:T, ex?:Error | null):URNResponse.Fail<T>;
	public return_error<T>(status:number, message:string, payload:T, ex?:Error | null):URNResponse.Fail<T> | URNResponse.Fail{
		// if there is a payload
		if(arguments.length > 2){
			const urn_response:URNResponse.Fail<T> = {
				status: status,
				payload: payload,
				message: message,
				ex: (ex) ? ex : null,
				success: false
			};
			return this._run_fail_handlers(urn_response);
		}else{
			const urn_response:URNResponse.Fail = {
				status: status,
				message: message,
				payload: null,
				ex: null,
				success: false
			};
			return this._run_fail_handlers(urn_response);
		}
	}
	
	/**
	 * Returns a successful response object
	 *
	 * Method overload: different return type for different arguments
	 * If payload in present will return a Success with generic type the type of the payload
	 *
	 * @param message [optional] - A human readable message of the response
	 * @param payload [optional] - A payload
	 */
	public return_success(message:string, payload?:null):URNResponse.Success;
	public return_success<T>(message:string, payload:T):URNResponse.Success<T>;
	public return_success<T>(message:string, payload:T):URNResponse.Success<T> | URNResponse.Success{
		// if there is a payload
		if(arguments.length > 1){
			const urn_response:URNResponse.Success<T> = {
				status: 200,
				success: true,
				message: message,
				payload: payload
			};
			return this._run_success_handlers(urn_response);
		}else{
			const urn_response:URNResponse.Success = {
				status: 200,
				success: true,
				message: message,
				payload: null
			};
			return this._run_success_handlers(urn_response);
		}
	}
	
	/**
	 * Returns a successful boolean response with optional message
	 *
	 * @param message [optional] - A message to append
	 */
	return_true(message?:string):URNResponse.UBoolean<true>{
		const urn_boolean:URNResponse.UBoolean<true> = {
			success: true
		};
		if(arguments.length>0)
			urn_boolean.message = message;
		return urn_boolean;
	}
	
	/**
	 * Retunrs a not successful boolean response with optional message
	 *
	 * @param message [optional] - A message to append
	 */
	return_false(message?:string):URNResponse.UBoolean<false>{
		const urn_boolean:URNResponse.UBoolean<false> = {
			success: false
		};
		if(arguments.length>0)
			urn_boolean.message = message;
		return urn_boolean;
	}
	
}

/**
 * A function the will create a URNReturn instance.
 * Its parameters are the same as the constructor of the class.
 */
function create_instance(inject?:URNResponseInjectable):URNReturn{
	return new URNReturn(inject);
}

/*
 * Export the function that will create the instance of the class.
 */
export default create_instance;


