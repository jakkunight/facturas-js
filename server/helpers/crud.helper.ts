import connect from "../db/db";
import { RowDataPacket, OkPacket } from "mysql2";

const readTable = async (table: string): Promise<any | boolean> => {
	try{
		if(!table){
			console.error("[ERROR] No table supplied. Aborting...");
			return false;
		}
		let connection = await connect();
		if(!connection){
			console.error("[ERROR] Cannot reach connection with the database. Leaving...");
			return false;
		}
		let [ rows, fields ] = await connection.query("SELECT * FROM " + table);
		return rows;
	}catch(error: any){
		console.error(error);
		console.error("[ERROR] Fatal error.");
		return false;
	}
};

const createRow = async (table: string, rowData: Object): Promise<boolean> => {
	try{
		if(!table){
			console.error("[ERROR] No table supplied. Aborting...");
			return false;
		}
		if(!rowData){
			console.error("[ERROR] No data supplied. Aborting...");
			return false;
		}
		let connection = await connect();
		if(!connection){
			console.error("[ERROR] Cannot reach connection with the database. Leaving...");
			return false;
		}
		let [data, status] = await connection.query("INSERT INTO " + table + " SET ?", [rowData]);
		console.log("[SUCCESS] Row added successfully.");
		return true;
	}catch(error: any){
		console.error(error);
		console.error("[ERROR] Fatal error. Returning...");
		return false;
	}
};

const updateRow = async (table: string, rowData: Object, id: number): Promise<boolean> => {
	try{
		if(!table){
			console.error("[ERROR] No table supplied. Aborting...");
			return false;
		}
		if(!rowData){
			console.error("[ERROR] No data supplied. Aborting...");
			return false;
		}
		if(!id){
			console.error("[ERROR] No id supplied. Aborting...");
			return false;
		}
		let connection = await connect();
		if(!connection){
			console.error("[ERROR] Cannot reach connection with the database. Leaving...");
			return false;
		}
		let [data, status] = await connection.query("UPDATE " + table + " SET ? WHERE id = ?", [rowData, id]);
		console.log("[SUCCESS] Row updated correctly.");
		return true;
	}catch(error: any){
		console.error(error);
		console.error("[ERROR] Fatal error. Returning...");
		return false;
	}
};

const deleteRow = async (table: string, id: number): Promise<boolean> => {
	try{
		if(!table){
			console.error("[ERROR] No table supplied. Aborting...");
			return false;
		}
		if(!id){
			console.error("[ERROR] No id supplied. Aborting...");
			return false;
		}
		let connection = await connect();
		if(!connection){
			console.error("[ERROR] Cannot reach connection with the database. Leaving...");
			return false;
		}
		let [data, status] = await connection.query("DELETE FROM " + table + " WHERE id = ?", [id]);
		console.log("[SUCCESS] Row deleted correctly.");
		return true;
	}catch(error: any){
		console.error(error);
		console.error("[ERROR] Fatal error. Returning...");
		return false;
	}
};

export {
	createRow,
	updateRow,
	deleteRow,
	readTable
};
