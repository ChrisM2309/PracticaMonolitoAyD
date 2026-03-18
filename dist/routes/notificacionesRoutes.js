"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notificacionesController_1 = require("../controllers/notificacionesController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const schemas_1 = require("../validators/schemas");
const validate_1 = require("../validators/validate");
const router = (0, express_1.Router)();
router.get("/", authMiddleware_1.verificarToken, notificacionesController_1.obtenerNotificaciones);
router.get("/no-leidas", authMiddleware_1.verificarToken, notificacionesController_1.obtenerNoLeidas);
router.patch("/:id/leida", authMiddleware_1.verificarToken, (0, validate_1.validateParams)(schemas_1.notificacionIdParamSchema), notificacionesController_1.marcarNotificacionLeida);
exports.default = router;
//# sourceMappingURL=notificacionesRoutes.js.map