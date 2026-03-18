"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservasController_1 = require("../controllers/reservasController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.post("/", authMiddleware_1.verificarToken, reservasController_1.crearReserva);
router.get("/mis-reservas", authMiddleware_1.verificarToken, reservasController_1.listarMisReservas);
router.patch("/:id/cancelar", authMiddleware_1.verificarToken, reservasController_1.cancelarReserva);
exports.default = router;
//# sourceMappingURL=reservasRoutes.js.map