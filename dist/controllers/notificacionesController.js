"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.marcarNotificacionLeida = exports.obtenerNoLeidas = exports.obtenerNotificaciones = void 0;
const notificador_1 = __importDefault(require("../utils/notificador"));
const obtenerNotificaciones = async (req, res) => {
    try {
        const userId = req.usuario.id;
        const notificaciones = notificador_1.default.obtenerPorUsuario(userId);
        res.json(notificaciones);
    }
    catch (error) {
        console.error("Error al obtener notificaciones:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.obtenerNotificaciones = obtenerNotificaciones;
const obtenerNoLeidas = async (req, res) => {
    try {
        const userId = req.usuario.id;
        const noLeidas = notificador_1.default.obtenerNoLeidasPorUsuario(userId);
        res.json({ count: noLeidas.length, notificaciones: noLeidas });
    }
    catch (error) {
        console.error("Error al obtener notificaciones no leÃ­das:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.obtenerNoLeidas = obtenerNoLeidas;
const marcarNotificacionLeida = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const resultado = notificador_1.default.marcarComoLeida(id);
        if (resultado) {
            res.json({ success: true, message: "NotificaciÃ³n marcada como leÃ­da" });
        }
        else {
            res.status(404).json({ success: false, message: "NotificaciÃ³n no encontrada" });
        }
    }
    catch (error) {
        console.error("Error al marcar notificaciÃ³n como leÃ­da:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.marcarNotificacionLeida = marcarNotificacionLeida;
//# sourceMappingURL=notificacionesController.js.map