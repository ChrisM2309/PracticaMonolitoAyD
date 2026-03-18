"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tutoresController_1 = require("../controllers/tutoresController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const validate_1 = require("../validators/validate");
const schemas_1 = require("../validators/schemas");
const router = (0, express_1.Router)();
router.get("/", authMiddleware_1.verificarToken, tutoresController_1.listarTutores);
router.get("/:id", authMiddleware_1.verificarToken, tutoresController_1.obtenerTutor);
router.post("/", authMiddleware_1.verificarToken, (0, authMiddleware_1.verificarRol)("tutor"), (0, validate_1.validate)(schemas_1.createTutorSchema), tutoresController_1.crearPerfilTutor);
exports.default = router;
//# sourceMappingURL=tutoresRoutes.js.map