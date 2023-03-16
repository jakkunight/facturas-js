import express, { Application } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import index from "./routes/index.routes";

class Server {
	private server: Application;
	private settings = () => {
		this.server.set("port", this.port || process.env.PORT || 3000);
		console.log(this.server.get("port"));
	};
	private middlewares = () => {
		this.server.use(bodyParser.json());
		this.server.use(bodyParser.urlencoded({extended: true}));
		this.server.use(cookieParser());
		this.server.use(morgan("dev"));
	};
	private routes = () => {
		this.server.use(index);
	};
	listen = async () => {
		try{
			await this.server.listen(this.server.get("port"));
			console.log("[SUCCESS] Server on port", this.server.get("port"));	
		}catch(error: any){
			console.error(error);
			console.error("[ERROR] Fatal error.");
		}
	};
	constructor(private port?: number | string){
		this.server = express();
		this.settings();
		this.middlewares();
		this.routes();
	};
};

export default Server;
