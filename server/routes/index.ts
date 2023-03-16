import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
	res.json(await JSON.stringify({
		msg: "Bienvenido!",
		http: 200,
		status: "OK"
	}));
});

export default router;
