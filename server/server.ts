import express, { Application } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import api from "./routes/api.route";

class Server {
	private server: Application;
	private corsOptions: Object;
	private settings = () => {
		this.server.set("port", this.port || process.env.PORT || 3000);
		this.corsOptions = {
			origin: [
				"https://jakkunight.github.io/facturas-js",
				"127.0.0.1",
				"localhost"
			],
			optionsSuccessStatus: 204,
			preflightContinue: true,
			credentials: true,
			allowedHeaders: [
				"Content-Type",
				"Authorization"
			]
		};
	};
	private middlewares = () => {
		this.server.use(bodyParser.json());
		this.server.use(bodyParser.urlencoded({extended: true}));
		this.server.use(cookieParser());
		this.server.use(cors(this.corsOptions));
		this.server.use((req, res, next) => {
			console.log("[" + req.method + "]", req.protocol + "://" + req.hostname + ":" + this.server.get("port") + req.url);
			console.log("[" + req.ip + "]", req.headers.origin);
			next();
		});
	};
	private routes = () => {
		this.server.route("*").options(cors(this.corsOptions));
		this.server.use(api);
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
		this.corsOptions = {};
		this.server = express();
		this.settings();
		this.middlewares();
		this.routes();
	};
};

export default Server;
