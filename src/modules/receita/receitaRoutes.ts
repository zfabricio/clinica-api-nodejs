import { Router } from "express";
import { receitaController } from "./receitaController";

const router = Router();

router.get("/", receitaController.getAll);
router.get("/:id", receitaController.getById);
router.post("/", receitaController.create);
router.put("/:id", receitaController.update);
router.delete("/:id", receitaController.delete);

export default router;
