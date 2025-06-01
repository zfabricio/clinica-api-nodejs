import { Router } from "express";
import { medicoController } from "./medicoController";

const router = Router();

router.get("/", medicoController.getAll);
router.get("/:id", medicoController.getById);
router.post("/", medicoController.create);
router.put("/:id", medicoController.update);
router.delete("/:id", medicoController.delete);

export default router;
