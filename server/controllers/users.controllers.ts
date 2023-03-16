import { Request, Response } from "express";
import connect from "../db/db";

const getUsers = async (req: Request, res: Response): Promise<Response> => {
	const connection = await connect();
	if(!connection){
		return res.sendStatus(400);
	}
	const [data, buffer] = await connection.query("SELECT * FROM users");
	return res.json(await JSON.stringify(data));
};

export {
	getUsers
};
