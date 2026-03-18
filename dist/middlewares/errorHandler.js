"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (error, _req, res, _next) => {
    if (error.code === 'P2002') {
        res.status(400).json({ error: "Registro duplicado", details: "Ya existe un registro con ese valor unico" });
        return;
    }
    if (error.code === 'P2025') {
        res.status(404).json({ error: "Registro no encontrado" });
        return;
    }
    if (error.name === "JsonWebTokenError") {
        res.status(401).json({ error: "Token inválido" });
        return;
    }
    if (error.name === "TokenExpiredError") {
        res.status(401).json({ error: "Token expirado" });
        return;
    }
    res.status(error.status || 500).json({ error: error.message || "Error interno del servidor" });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map