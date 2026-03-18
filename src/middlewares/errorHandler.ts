import { Request, Response, NextFunction } from "express";

export const errorHandler = (
    error: any,
    _req: Request,
    res: Response,
    _next: NextFunction
): void => {
    if (error.code === 'P2002') {
        res.status(400).json({ error: "Registro duplicado", details : "Ya existe un registro con ese valor unico" });
        return; 
    }

    if (error.code === 'P2025') {
        res.status(404).json({ error: "Registro no encontrado"});
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
}