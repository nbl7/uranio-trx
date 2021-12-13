/**
 * Autogenerated TRX Hooks module from urn-cli
 *
 * @packageDocumentation
 */

import * as uranio from "../cln/main";

export const superusers = {
	count: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"superuser", "count", D>
	): Promise<uranio.types.Hook.Response<"superuser", "count", D>> => {
		const args: uranio.types.Hook.Arguments<"superuser", "count", D> = {
			...options,
		};
		return await uranio.base.create("superuser").hook<"count", D>("count")(
			args
		);
	},
	find: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"superuser", "find", D>
	): Promise<uranio.types.Hook.Response<"superuser", "find", D>> => {
		const args: uranio.types.Hook.Arguments<"superuser", "find", D> = {
			...options,
		};
		return await uranio.base.create("superuser").hook<"find", D>("find")(args);
	},
	find_id: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"superuser", "find_id", D>
	): Promise<uranio.types.Hook.Response<"superuser", "find_id", D>> => {
		const args: uranio.types.Hook.Arguments<"superuser", "find_id", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("superuser").hook<"find_id", D>("find_id")(
			args
		);
	},
	find_one: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"superuser", "find_one", D>
	): Promise<uranio.types.Hook.Response<"superuser", "find_one", D>> => {
		const args: uranio.types.Hook.Arguments<"superuser", "find_one", D> = {
			...options,
		};
		return await uranio.base
			.create("superuser")
			.hook<"find_one", D>("find_one")(args);
	},
	insert: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"superuser", "insert", D>
	): Promise<uranio.types.Hook.Response<"superuser", "insert", D>> => {
		const args: uranio.types.Hook.Arguments<"superuser", "insert", D> = {
			...options,
		};
		return await uranio.base.create("superuser").hook<"insert", D>("insert")(
			args
		);
	},
	update: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"superuser", "update", D>
	): Promise<uranio.types.Hook.Response<"superuser", "update", D>> => {
		const args: uranio.types.Hook.Arguments<"superuser", "update", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("superuser").hook<"update", D>("update")(
			args
		);
	},
	delete: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"superuser", "delete", D>
	): Promise<uranio.types.Hook.Response<"superuser", "delete", D>> => {
		const args: uranio.types.Hook.Arguments<"superuser", "delete", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("superuser").hook<"delete", D>("delete")(
			args
		);
	},
};
export const users = {
	count: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"user", "count", D>
	): Promise<uranio.types.Hook.Response<"user", "count", D>> => {
		const args: uranio.types.Hook.Arguments<"user", "count", D> = {
			...options,
		};
		return await uranio.base.create("user").hook<"count", D>("count")(args);
	},
	find: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"user", "find", D>
	): Promise<uranio.types.Hook.Response<"user", "find", D>> => {
		const args: uranio.types.Hook.Arguments<"user", "find", D> = {
			...options,
		};
		return await uranio.base.create("user").hook<"find", D>("find")(args);
	},
	find_id: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"user", "find_id", D>
	): Promise<uranio.types.Hook.Response<"user", "find_id", D>> => {
		const args: uranio.types.Hook.Arguments<"user", "find_id", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("user").hook<"find_id", D>("find_id")(args);
	},
	find_one: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"user", "find_one", D>
	): Promise<uranio.types.Hook.Response<"user", "find_one", D>> => {
		const args: uranio.types.Hook.Arguments<"user", "find_one", D> = {
			...options,
		};
		return await uranio.base.create("user").hook<"find_one", D>("find_one")(
			args
		);
	},
	insert: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"user", "insert", D>
	): Promise<uranio.types.Hook.Response<"user", "insert", D>> => {
		const args: uranio.types.Hook.Arguments<"user", "insert", D> = {
			...options,
		};
		return await uranio.base.create("user").hook<"insert", D>("insert")(args);
	},
	update: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"user", "update", D>
	): Promise<uranio.types.Hook.Response<"user", "update", D>> => {
		const args: uranio.types.Hook.Arguments<"user", "update", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("user").hook<"update", D>("update")(args);
	},
	delete: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"user", "delete", D>
	): Promise<uranio.types.Hook.Response<"user", "delete", D>> => {
		const args: uranio.types.Hook.Arguments<"user", "delete", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("user").hook<"delete", D>("delete")(args);
	},
};
export const groups = {
	count: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"group", "count", D>
	): Promise<uranio.types.Hook.Response<"group", "count", D>> => {
		const args: uranio.types.Hook.Arguments<"group", "count", D> = {
			...options,
		};
		return await uranio.base.create("group").hook<"count", D>("count")(args);
	},
	find: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"group", "find", D>
	): Promise<uranio.types.Hook.Response<"group", "find", D>> => {
		const args: uranio.types.Hook.Arguments<"group", "find", D> = {
			...options,
		};
		return await uranio.base.create("group").hook<"find", D>("find")(args);
	},
	find_id: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"group", "find_id", D>
	): Promise<uranio.types.Hook.Response<"group", "find_id", D>> => {
		const args: uranio.types.Hook.Arguments<"group", "find_id", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("group").hook<"find_id", D>("find_id")(
			args
		);
	},
	find_one: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"group", "find_one", D>
	): Promise<uranio.types.Hook.Response<"group", "find_one", D>> => {
		const args: uranio.types.Hook.Arguments<"group", "find_one", D> = {
			...options,
		};
		return await uranio.base.create("group").hook<"find_one", D>("find_one")(
			args
		);
	},
	insert: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"group", "insert", D>
	): Promise<uranio.types.Hook.Response<"group", "insert", D>> => {
		const args: uranio.types.Hook.Arguments<"group", "insert", D> = {
			...options,
		};
		return await uranio.base.create("group").hook<"insert", D>("insert")(args);
	},
	update: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"group", "update", D>
	): Promise<uranio.types.Hook.Response<"group", "update", D>> => {
		const args: uranio.types.Hook.Arguments<"group", "update", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("group").hook<"update", D>("update")(args);
	},
	delete: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"group", "delete", D>
	): Promise<uranio.types.Hook.Response<"group", "delete", D>> => {
		const args: uranio.types.Hook.Arguments<"group", "delete", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("group").hook<"delete", D>("delete")(args);
	},
};
export const errors = {
	count: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"error", "count", D>
	): Promise<uranio.types.Hook.Response<"error", "count", D>> => {
		const args: uranio.types.Hook.Arguments<"error", "count", D> = {
			...options,
		};
		return await uranio.base.create("error").hook<"count", D>("count")(args);
	},
	find: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"error", "find", D>
	): Promise<uranio.types.Hook.Response<"error", "find", D>> => {
		const args: uranio.types.Hook.Arguments<"error", "find", D> = {
			...options,
		};
		return await uranio.base.create("error").hook<"find", D>("find")(args);
	},
	find_id: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"error", "find_id", D>
	): Promise<uranio.types.Hook.Response<"error", "find_id", D>> => {
		const args: uranio.types.Hook.Arguments<"error", "find_id", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("error").hook<"find_id", D>("find_id")(
			args
		);
	},
	find_one: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"error", "find_one", D>
	): Promise<uranio.types.Hook.Response<"error", "find_one", D>> => {
		const args: uranio.types.Hook.Arguments<"error", "find_one", D> = {
			...options,
		};
		return await uranio.base.create("error").hook<"find_one", D>("find_one")(
			args
		);
	},
	insert: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"error", "insert", D>
	): Promise<uranio.types.Hook.Response<"error", "insert", D>> => {
		const args: uranio.types.Hook.Arguments<"error", "insert", D> = {
			...options,
		};
		return await uranio.base.create("error").hook<"insert", D>("insert")(args);
	},
	update: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"error", "update", D>
	): Promise<uranio.types.Hook.Response<"error", "update", D>> => {
		const args: uranio.types.Hook.Arguments<"error", "update", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("error").hook<"update", D>("update")(args);
	},
	delete: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"error", "delete", D>
	): Promise<uranio.types.Hook.Response<"error", "delete", D>> => {
		const args: uranio.types.Hook.Arguments<"error", "delete", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("error").hook<"delete", D>("delete")(args);
	},
};
export const requests = {
	count: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"request", "count", D>
	): Promise<uranio.types.Hook.Response<"request", "count", D>> => {
		const args: uranio.types.Hook.Arguments<"request", "count", D> = {
			...options,
		};
		return await uranio.base.create("request").hook<"count", D>("count")(args);
	},
	find: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"request", "find", D>
	): Promise<uranio.types.Hook.Response<"request", "find", D>> => {
		const args: uranio.types.Hook.Arguments<"request", "find", D> = {
			...options,
		};
		return await uranio.base.create("request").hook<"find", D>("find")(args);
	},
	find_id: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"request", "find_id", D>
	): Promise<uranio.types.Hook.Response<"request", "find_id", D>> => {
		const args: uranio.types.Hook.Arguments<"request", "find_id", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("request").hook<"find_id", D>("find_id")(
			args
		);
	},
	find_one: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"request", "find_one", D>
	): Promise<uranio.types.Hook.Response<"request", "find_one", D>> => {
		const args: uranio.types.Hook.Arguments<"request", "find_one", D> = {
			...options,
		};
		return await uranio.base.create("request").hook<"find_one", D>("find_one")(
			args
		);
	},
	insert: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"request", "insert", D>
	): Promise<uranio.types.Hook.Response<"request", "insert", D>> => {
		const args: uranio.types.Hook.Arguments<"request", "insert", D> = {
			...options,
		};
		return await uranio.base.create("request").hook<"insert", D>("insert")(
			args
		);
	},
	update: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"request", "update", D>
	): Promise<uranio.types.Hook.Response<"request", "update", D>> => {
		const args: uranio.types.Hook.Arguments<"request", "update", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("request").hook<"update", D>("update")(
			args
		);
	},
	delete: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"request", "delete", D>
	): Promise<uranio.types.Hook.Response<"request", "delete", D>> => {
		const args: uranio.types.Hook.Arguments<"request", "delete", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("request").hook<"delete", D>("delete")(
			args
		);
	},
};
export const customers = {
	count: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"customer", "count", D>
	): Promise<uranio.types.Hook.Response<"customer", "count", D>> => {
		const args: uranio.types.Hook.Arguments<"customer", "count", D> = {
			...options,
		};
		return await uranio.base.create("customer").hook<"count", D>("count")(args);
	},
	find: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"customer", "find", D>
	): Promise<uranio.types.Hook.Response<"customer", "find", D>> => {
		const args: uranio.types.Hook.Arguments<"customer", "find", D> = {
			...options,
		};
		return await uranio.base.create("customer").hook<"find", D>("find")(args);
	},
	find_id: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"customer", "find_id", D>
	): Promise<uranio.types.Hook.Response<"customer", "find_id", D>> => {
		const args: uranio.types.Hook.Arguments<"customer", "find_id", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("customer").hook<"find_id", D>("find_id")(
			args
		);
	},
	find_one: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"customer", "find_one", D>
	): Promise<uranio.types.Hook.Response<"customer", "find_one", D>> => {
		const args: uranio.types.Hook.Arguments<"customer", "find_one", D> = {
			...options,
		};
		return await uranio.base.create("customer").hook<"find_one", D>("find_one")(
			args
		);
	},
	insert: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"customer", "insert", D>
	): Promise<uranio.types.Hook.Response<"customer", "insert", D>> => {
		const args: uranio.types.Hook.Arguments<"customer", "insert", D> = {
			...options,
		};
		return await uranio.base.create("customer").hook<"insert", D>("insert")(
			args
		);
	},
	update: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"customer", "update", D>
	): Promise<uranio.types.Hook.Response<"customer", "update", D>> => {
		const args: uranio.types.Hook.Arguments<"customer", "update", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("customer").hook<"update", D>("update")(
			args
		);
	},
	delete: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"customer", "delete", D>
	): Promise<uranio.types.Hook.Response<"customer", "delete", D>> => {
		const args: uranio.types.Hook.Arguments<"customer", "delete", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("customer").hook<"delete", D>("delete")(
			args
		);
	},
};
export const mykarts = {
	count: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"mykart", "count", D>
	): Promise<uranio.types.Hook.Response<"mykart", "count", D>> => {
		const args: uranio.types.Hook.Arguments<"mykart", "count", D> = {
			...options,
		};
		return await uranio.base.create("mykart").hook<"count", D>("count")(args);
	},
	find: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"mykart", "find", D>
	): Promise<uranio.types.Hook.Response<"mykart", "find", D>> => {
		const args: uranio.types.Hook.Arguments<"mykart", "find", D> = {
			...options,
		};
		return await uranio.base.create("mykart").hook<"find", D>("find")(args);
	},
	find_id: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"mykart", "find_id", D>
	): Promise<uranio.types.Hook.Response<"mykart", "find_id", D>> => {
		const args: uranio.types.Hook.Arguments<"mykart", "find_id", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("mykart").hook<"find_id", D>("find_id")(
			args
		);
	},
	find_one: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"mykart", "find_one", D>
	): Promise<uranio.types.Hook.Response<"mykart", "find_one", D>> => {
		const args: uranio.types.Hook.Arguments<"mykart", "find_one", D> = {
			...options,
		};
		return await uranio.base.create("mykart").hook<"find_one", D>("find_one")(
			args
		);
	},
	insert: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"mykart", "insert", D>
	): Promise<uranio.types.Hook.Response<"mykart", "insert", D>> => {
		const args: uranio.types.Hook.Arguments<"mykart", "insert", D> = {
			...options,
		};
		return await uranio.base.create("mykart").hook<"insert", D>("insert")(args);
	},
	update: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"mykart", "update", D>
	): Promise<uranio.types.Hook.Response<"mykart", "update", D>> => {
		const args: uranio.types.Hook.Arguments<"mykart", "update", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("mykart").hook<"update", D>("update")(args);
	},
	delete: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"mykart", "delete", D>
	): Promise<uranio.types.Hook.Response<"mykart", "delete", D>> => {
		const args: uranio.types.Hook.Arguments<"mykart", "delete", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("mykart").hook<"delete", D>("delete")(args);
	},
};
export const products = {
	count: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"product", "count", D>
	): Promise<uranio.types.Hook.Response<"product", "count", D>> => {
		const args: uranio.types.Hook.Arguments<"product", "count", D> = {
			...options,
		};
		return await uranio.base.create("product").hook<"count", D>("count")(args);
	},
	find: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"product", "find", D>
	): Promise<uranio.types.Hook.Response<"product", "find", D>> => {
		const args: uranio.types.Hook.Arguments<"product", "find", D> = {
			...options,
		};
		return await uranio.base.create("product").hook<"find", D>("find")(args);
	},
	find_id: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"product", "find_id", D>
	): Promise<uranio.types.Hook.Response<"product", "find_id", D>> => {
		const args: uranio.types.Hook.Arguments<"product", "find_id", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("product").hook<"find_id", D>("find_id")(
			args
		);
	},
	find_one: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"product", "find_one", D>
	): Promise<uranio.types.Hook.Response<"product", "find_one", D>> => {
		const args: uranio.types.Hook.Arguments<"product", "find_one", D> = {
			...options,
		};
		return await uranio.base.create("product").hook<"find_one", D>("find_one")(
			args
		);
	},
	insert: async <D extends uranio.types.Depth>(
		options?: uranio.types.Hook.Arguments<"product", "insert", D>
	): Promise<uranio.types.Hook.Response<"product", "insert", D>> => {
		const args: uranio.types.Hook.Arguments<"product", "insert", D> = {
			...options,
		};
		return await uranio.base.create("product").hook<"insert", D>("insert")(
			args
		);
	},
	update: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"product", "update", D>
	): Promise<uranio.types.Hook.Response<"product", "update", D>> => {
		const args: uranio.types.Hook.Arguments<"product", "update", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("product").hook<"update", D>("update")(
			args
		);
	},
	delete: async <D extends uranio.types.Depth>(
		id: string,
		options?: uranio.types.Hook.Arguments<"product", "delete", D>
	): Promise<uranio.types.Hook.Response<"product", "delete", D>> => {
		const args: uranio.types.Hook.Arguments<"product", "delete", D> = {
			params: {
				id: id,
			},
			...options,
		};
		return await uranio.base.create("product").hook<"delete", D>("delete")(
			args
		);
	},
};
