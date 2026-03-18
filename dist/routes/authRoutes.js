"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const validate_1 = require("../validators/validate");
const schemas_1 = require("../validators/schemas");
const router = (0, express_1.Router)();
router.post('/registro', (0, validate_1.validate)(schemas_1.registroSchema), authController_1.registro);
router.post('/login', (0, validate_1.validate)(schemas_1.loginSchema), authController_1.login);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map