import { Router } from "express";
import { get_databse_contoller } from "../../controllers/database/database.controller.js";

const router = Router();

router.get("database", get_databse_contoller)

export {router as database_router};