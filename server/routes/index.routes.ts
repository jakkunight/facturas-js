import { Router } from "express";
import { getUsers } from "../controllers/users.controllers";
const router = Router();

router.route("/users").get(getUsers);

export default router;
