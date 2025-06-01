import { Router } from "express";
import { planoController } from "./planoController";

const router = Router();

router.get("/", planoController.getAll);
router.get("/:id", planoController.getById);
router.post("/", planoController.create);
router.put("/:id", planoController.update);
router.delete("/:id", planoController.delete);

export default router;
