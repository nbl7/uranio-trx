
/*
 * Import dateformat module
 */
import dateFormat from 'dateformat';

import {jsonOneLine} from '../util/formatter';

import {URNLogInjectable} from '../util/log_injectable.t';

/*
 * Import log configuration file
 */
import log_defaults from './log.defaults';

/*
 * Import URNLogType
 */
import {URNLogType} from './log.t';

/**
 * Common commands between all the types of logs
 *
 * @param type - type of log
 * @param style - terminal_style to use for the log
 * @param depth - how many lines of stack should be printed
 * @param start - at what line the stack should start
 * @param ...params - variables to log
 */
function _cecho(type:URNLogType, style:string|string[], start:number, depth:number, ...params:any[])
		:void{
	const stylelog = style + '%s' + terminal_styles.reset;
	_log_stack(type, stylelog, start, depth);
	for(const p of params){
		log_param(p, stylelog);
	}
	console.log(stylelog, ' ');
}

/**
 * Log stack
 *
 * @param type - the type of log [error|warn|log|...]. See URNLogType.
 * @param stylelog - formatted string for styling.
 * @param depth - how many lines should be log from the stack.
 * @param start - at what line the stack should start.
 */
function _log_stack(type:URNLogType, stylelog:string, start=0, depth=-1)
		:void{
	const stack = new Error().stack;
	Error.stackTraceLimit = 16;
	if(stack == undefined){
		console.error('CANNOT LOG STACK');
		return;
	}
	const now = dateFormat(new Date(), log_defaults.time_format);
	const head_string = now + ' <' + type + '> ';
	const splitted_stack = stack.split('\n');
	const till = (depth == -1) ? splitted_stack.length - start : depth;
	
	// skip stack line from log module and return module
	let j = start;
	let string = 'return.ts';
	while(j < splitted_stack.length && string.includes('return.ts') || string.includes('log.ts')){
		const psc = splitted_stack[j];
		const call_info = /\(([^)]+)\)/.exec(psc); // get info from inside ()
		string = (call_info != null) ? call_info[1] : psc.split('at ')[1];
		j++;
	}

	for(let i = j - 1; i < j -1 + till && i < splitted_stack.length; i++){
		const psc = splitted_stack[i];
		const call_info = /\(([^)]+)\)/.exec(psc); // get info from inside ()
		let string = '';
		string += head_string;
		string += (call_info != null) ? call_info[1] : psc.split('at ')[1];
		if(log_defaults.context == 'browser'){
			console.log('%c%s', stylelog, string);
		}else{
			console.log(stylelog, string);
		}
	}
}
/**
 * Log prameter
 *
 * @param p - anything to be logged.
 * @param stylelog - a formatted string for styling.
 */
function log_param(p:any, stylelog:string)
		:void{
	let processed_param:string[] = [];
	if(p instanceof Error && p.stack != undefined){
		processed_param = p.stack.split('\n');
	}else if(typeof p == 'object'){
		processed_param = jsonOneLine(p).split('\n');
	}else if(typeof p == 'string'){
		processed_param = p.split('\n');
	}else if(p === false){
		processed_param = ['false'];
	}else if(p === 0){
		processed_param = ['0'];
	}else if(p === undefined){
		processed_param = ['undefined'];
	}else if(p === null){
		processed_param = ['null'];
	}
	for(const pp of processed_param){
		if(log_defaults.context == 'browser'){
			console.log('%c%s', stylelog, pp);
		}else{
			console.log(stylelog, pp);
		}
	}
}

/**
 * List of all the style that can be used in terminal
 */
const terminal_styles = {
	'reset': "\x1b[0m",
	'bright' : "\x1b[1m",
	'dim' : "\x1b[2m",
	'underscore' : "\x1b[4m",
	'blink' : "\x1b[5m",
	'reverse' : "\x1b[7m",
	'hidden' : "\x1b[8m",
	'fgBlack' : "\x1b[30m",
	'fgRed' : "\x1b[31m",
	'fgGreen' : "\x1b[32m",
	'fgYellow' : "\x1b[33m",
	'fgBlue' : "\x1b[34m",
	'fgMagenta' : "\x1b[35m",
	'fgCyan' : "\x1b[36m",
	'fgWhite' : "\x1b[37m",
	'fgDefault' : "\x1b[39m",
	'fgLightGrey' : "\x1b[90m",
	'fgLightRed' : "\x1b[91m",
	'fgLightGreen' : "\x1b[92m",
	'fglightYellow' : "\x1b[93m",
	'fgLightBlue' : "\x1b[94m",
	'fgLoghtMagenta' : "\x1b[95m",
	'fgLightCyan' : "\x1b[96m",
	'fgLightWhite' : "\x1b[97m",
	'bgBlack' : "\x1b[40m",
	'bgRed' : "\x1b[41m",
	'bgGreen' : "\x1b[42m",
	'bgYellow' : "\x1b[43m",
	'bgBlue' : "\x1b[44m",
	'bgMagenta' : "\x1b[45m",
	'bgCyan' : "\x1b[46m",
	'bgWhite' : "\x1b[47m",
	'bgDefault' : "\x1b[49m",
	'Light Gray' : "\x1b[100m",
	'Light Red' : "\x1b[101m",
	'Light Green' : "\x1b[102m",
	'Light Yellow' : "\x1b[103m",
	'Light Blue' : "\x1b[104m",
	'Light Magenta' : "\x1b[105m",
	'Light Cyan' : "\x1b[106m",
	'Light White' : "\x1b[107m"
};

const console_styles = {
	underline: 'text-decoration: underline;',
	fg_black: 'color: black;',
	fg_red: 'color: red;',
	fg_green: 'color: green;',
	fg_yellow: 'color: yellow;',
	fg_orange: 'color: #e69500;',
	fg_blue: 'color: blue;',
	fg_magenta: 'color: magenta;',
	fg_cyan: 'color: cyan;',
	fg_white: 'color: white;',
	fg_grey: 'color: grey;',
	fg_fndebug: 'color: #848484;',
	fg_debug: 'color: #4880ae;',
	fg_log: 'color: #006ec8;',
	fg_warn: 'color: #cf8d00;',
	fg_error: 'color: #e20000;',
	bg_black: 'background-color: black;',
	bg_red: 'background-color: red;',
	bg_green: 'background-color: green;',
	bg_yellow: 'background-color: yellow;',
	bg_blue: 'background-color: blue;',
	bg_magenta: 'background-color: magenta;',
	bg_cyan: 'background-color: cyan;',
	bg_white: 'background-color: white;'
};

export const terminal_log_injector:URNLogInjectable = {
	
	error_inject: (...p:any) => {
		_cecho('error', terminal_styles.fgRed, 6, -1, ...p);
	},
	
	warn_inject: (...p:any) => {
		_cecho('warn', terminal_styles.fgYellow, 6, 3, ...p);
	},
	
	log_inject: (...p:any) => {
		_cecho('log', terminal_styles.fgLightBlue, 6, 2, ...p);
	},
	
	debug_inject: (...p:any) => {
		_cecho('debug', terminal_styles.fgBlue, 6, 1, ...p);
	},
	
	fndebug_inject: (...p:any) => {
		_cecho('fndebug', terminal_styles.fgCyan, 6, 1, ...p);
	}
	
};

export const browser_log_injector:URNLogInjectable = {
	
	error_inject: (...p:any) => {
		_cecho('error', [console_styles.fg_red], 4, -1, ...p);
	},
	
	warn_inject: (...p:any) => {
		_cecho('warn', [console_styles.fg_yellow], 4, 3, ...p);
	},
	
	log_inject: (...p:any) => {
		_cecho('log', [console_styles.fg_blue], 4, 2, ...p);
	},
	
	debug_inject: (...p:any) => {
		_cecho('debug', [console_styles.fg_blue], 4, 4, ...p);
	},
	
	fndebug_inject: (...p:any) => {
		_cecho('fndebug', [console_styles.fg_cyan], 6, 1, ...p);
	}
	
};

