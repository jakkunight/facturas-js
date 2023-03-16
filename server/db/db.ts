import { createPool } from "mysql2/promise";
import { host, user, password } from "../.keys.json";

const connect = async () => {
	const pool = await createPool({
		host: host,
		port: 3306,
		connectionLimit: 10,
		database: "test",
		ssl: {
			rejectUnauthorized: true
		},
		user: user,
		password: password
	});
	if(pool){
		console.log("[SUCCESS] Database is ONLINE.");
		return pool;
	}else{
		console.error("[ERROR] Database is OFFLINE.");
		return false;
	}
};

export default connect;
