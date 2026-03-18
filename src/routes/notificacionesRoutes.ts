import { Router } from "express";
import {
    marcarNotificacionLeida,
    obtenerNoLeidas,
    obtenerNotificaciones,
} from "../controllers/notificacionesController";
import { verificarToken } from "../middlewares/authMiddleware";
import { notificacionIdParamSchema } from "../validators/schemas";
import { validateParams } from "../validators/validate";

const router = Router();

router.get("/", verificarToken, obtenerNotificaciones);
router.get("/no-leidas", verificarToken, obtenerNoLeidas);
router.patch(
    "/:id/leida",
    verificarToken,
    validateParams(notificacionIdParamSchema),
    marcarNotificacionLeida
);

export default router;
