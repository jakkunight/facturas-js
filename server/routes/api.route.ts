import { Router } from "express";
import {
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
} from "../controllers/api.controller";
const router = Router();

router.route("/api/products").get(getProducts);
router.route("/api/products").post(postProduct);
router.route("/api/products").put(updateProduct);
router.route("/api/products").delete(deleteProduct);

router.route("/api/users").get(getUsers);
router.route("/api/users").post(postUser);
router.route("/api/users").put(updateUser);
router.route("/api/users").delete(deleteUser);

router.route("/api/clients").get(getClients);
router.route("/api/clients").post(postClient);
router.route("/api/clients").put(updateClient);
router.route("/api/clients").delete(deleteClient);

export default router;
