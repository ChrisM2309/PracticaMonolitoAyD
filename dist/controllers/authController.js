"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.registro = void 0;
const authService_1 = __importDefault(require("../services/authService"));
const registro = async (req, res) => {
    try {
        const result = await authService_1.default.registro(req.body);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.registro = registro;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authService_1.default.login(email, password);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(401).json({ error: error.message });
    }
};
exports.login = login;
//# sourceMappingURL=authController.js.map