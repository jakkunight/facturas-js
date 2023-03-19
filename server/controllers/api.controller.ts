import { Request, Response } from "express";
import { hash } from "../helpers/argon2.helper";
import {
	readTable,
	createRow,
	updateRow,
	deleteRow
} from "../helpers/crud.helper";

const getProducts = async (req: Request, res: Response): Promise<Response> => {
	try{
		const data = await readTable("products");
		console.log("[SUCCESS] Data read correctly.");
		console.log("[INFO] Sending data...");
		return res.json(await JSON.stringify(data));
	}catch(error: any){
		console.error(error);
		console.error("[ERROR] Fatal error. Aborting...");
		return res.sendStatus(404);
	}
};

const postProduct = async(req: Request, res: Response): Promise<Response> => {
	try{
		console.log("[INFO] Showing request:");
		console.log(req.body);
		let result = await createRow("products", req.body);
		if(!result){
			console.log("[ERROR] Product not inserted. Aborting...");
			return res.sendStatus(503);			
		}
		console.log("[SUCCESS] Product added.");
		return res.sendStatus(200);
	}catch(error: any){
		console.log(error);
		console.log("[ERROR] Fatal error.");
		return res.sendStatus(503);
	}
};
const updateProduct = async (req: Request, res: Response): Promise<Response> => {
	try{
		let {
			id,
			user_update,
			sell_price,
			cost,
			name,
			description,
			quantity
		} = req.body;
		let newData = {
			user_update,
			sell_price,
			cost,
			name,
			description,
			quantity
		};
		let result = await updateRow("products", newData, id);
		if(!result){
			console.log("[ERROR] Cannot update product.");
			return res.sendStatus(503);
		}
		console.log("[SUCCESS] Product updated.");
		return res.sendStatus(200);
	}catch(error: any){
		console.log(error);
		console.log("[ERROR] Fatal error.");
		return res.sendStatus(503);
	}
};
const deleteProduct = async (req: Request, res: Response): Promise<Response> => {
	try{
		let result = await deleteRow("products", req.body.id);
		if(!result){
			console.log("[ERROR] Cannot delete the product.");
			return res.sendStatus(503);
		}
		console.log("[SUCCESS] Product deleted.");
		return res.sendStatus(200);
	}catch(error: any){
		console.log(error);
		console.log("[ERROR] Fatal error.");
		return res.sendStatus(503);
	}
};

// ----------------------------------------------------------------

const getUsers = async (req: Request, res: Response): Promise<Response> => {
	try{
		const data = await readTable("users");
		console.log("[SUCCESS] Data read correctly.");
		console.log("[INFO] Sending data...");
		return res.json(await JSON.stringify(data));
	}catch(error: any){
		console.error(error);
		console.error("[ERROR] Fatal error. Aborting...");
		return res.sendStatus(404);
	}
};

const postUser = async(req: Request, res: Response): Promise<Response> => {
	try{
		let {
			user_update,
			name,
			email,
			ci,
			password,
			role,
			age
		} = req.body;
		let newUser = {
			user_update,
			name,
			email,
			ci,
			password: await hash(String(password)),
			role,
			age
		};
		let result = await createRow("users", newUser);
		if(!result){
			console.log("[ERROR] User not inserted. Aborting...");
			return res.sendStatus(503);			
		}
		console.log("[SUCCESS] User added.");
		return res.sendStatus(200);
	}catch(error: any){
		console.log(error);
		console.log("[ERROR] Fatal error.");
		return res.sendStatus(503);
	}
};
const updateUser = async (req: Request, res: Response): Promise<Response> => {
	try{
		let {
			id,
			user_update,
			name,
			email,
			ci,
			password,
			role,
			age
		} = req.body;
		let newData = {
			user_update,
			name,
			email,
			ci,
			password: await hash(String(password)),
			role,
			age
		};
		let result = await updateRow("users", newData, id);
		if(!result){
			console.log("[ERROR] Cannot update user.");
			return res.sendStatus(503);
		}
		console.log("[SUCCESS] User updated.");
		return res.sendStatus(200);
	}catch(error: any){
		console.log(error);
		console.log("[ERROR] Fatal error.");
		return res.sendStatus(503);
	}
};
const deleteUser = async (req: Request, res: Response): Promise<Response> => {
	try{
		let result = await deleteRow("users", req.body.id);
		if(!result){
			console.log("[ERROR] Cannot delete the user.");
			return res.sendStatus(503);
		}
		console.log("[SUCCESS] User deleted.");
		return res.sendStatus(200);
	}catch(error: any){
		console.log(error);
		console.log("[ERROR] Fatal error.");
		return res.sendStatus(503);
	}
};

// ----------------------------------------------------------------

const getClients = async (req: Request, res: Response): Promise<Response> => {
	try{
		const data = await readTable("clients");
		console.log("[SUCCESS] Data read correctly.");
		console.log("[INFO] Sending data...");
		return res.json(await JSON.stringify(data));
	}catch(error: any){
		console.error(error);
		console.error("[ERROR] Fatal error. Aborting...");
		return res.sendStatus(404);
	}
};

const postClient = async(req: Request, res: Response): Promise<Response> => {
	try{
		let result = await createRow("clients", req.body);
		if(!result){
			console.log("[ERROR] Client not inserted. Aborting...");
			return res.sendStatus(503);			
		}
		console.log("[SUCCESS] Client added.");
		return res.sendStatus(200);
	}catch(error: any){
		console.log(error);
		console.log("[ERROR] Fatal error.");
		return res.sendStatus(503);
	}
};
const updateClient = async (req: Request, res: Response): Promise<Response> => {
	try{
		let {
			id,
			user_update,
			name,
			email,
			description,
			ruc
		} = req.body;
		let newData = {
			user_update,
			name,
			email,
			description,
			ruc
		};
		let result = await updateRow("clients", newData, id);
		if(!result){
			console.log("[ERROR] Cannot update client.");
			return res.sendStatus(503);
		}
		console.log("[SUCCESS] Client updated.");
		return res.sendStatus(200);
	}catch(error: any){
		console.log(error);
		console.log("[ERROR] Fatal error.");
		return res.sendStatus(503);
	}
};
const deleteClient = async (req: Request, res: Response): Promise<Response> => {
	try{
		let result = await deleteRow("clients", req.body.id);
		if(!result){
			console.log("[ERROR] Cannot delete the client.");
			return res.sendStatus(503);
		}
		console.log("[SUCCESS] Client deleted.");
		return res.sendStatus(200);
	}catch(error: any){
		console.log(error);
		console.log("[ERROR] Fatal error.");
		return res.sendStatus(503);
	}
};


export {
	getProducts,
	postProduct,
	updateProduct,
	deleteProduct,
	getUsers,
	postUser,
	updateUser,
	deleteUser,
	getClients,
	postClient,
	updateClient,
	deleteClient
};
