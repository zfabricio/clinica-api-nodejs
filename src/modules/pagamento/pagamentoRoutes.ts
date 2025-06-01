import { Router } from "express";
import { pagamentoController } from "./pagamentoController";

const router = Router();

router.get("/", pagamentoController.getAll);
router.get("/:id", pagamentoController.getById);
router.post("/", pagamentoController.create);
router.put("/:id", pagamentoController.update);
router.delete("/:id", pagamentoController.delete);

export default router;
