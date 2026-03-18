"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const disponibilidadController_1 = require("../controllers/disponibilidadController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const validate_1 = require("../validators/validate");
const schemas_1 = require("../validators/schemas");
const router = (0, express_1.Router)();
router.get("/tutor/:tutorId", authMiddleware_1.verificarToken, disponibilidadController_1.obtenerDisponibilidad);
router.post("/", authMiddleware_1.verificarToken, (0, authMiddleware_1.verificarRol)("tutor"), (0, validate_1.validate)(schemas_1.crearDisponibilidadSchema), disponibilidadController_1.crearDisponibilidad);
exports.default = router;
//# sourceMappingURL=disponibilidadRoutes.js.map