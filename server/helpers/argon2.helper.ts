import argon2 from "argon2";

const hash = async (password: string): Promise<string> => {
	try{
		return await argon2.hash(password);
	}catch(error: any){
		console.error(error);
		console.error("[ERROR] Fatal error when hashing password.");
		throw new Error("Unknown error when hashing password. Aborting...");
	}
}

const verify = async (password: string, hash: string): Promise<boolean> => {
	try{
		return await argon2.verify(hash, password);
	}catch(error){
		console.error(error);
		console.error("[ERROR] Fatal error when verifiying password.");
		throw new Error("Unknown error when verifiying password. Aborting...");
	}
};

export {
	hash,
	verify
};
