import { Response } from "express";
import { AuthRequest } from "../middlewares/authMiddleware";
import notificador from "../utils/notificador";

export const obtenerNotificaciones = async (
    req: AuthRequest,
    res: Response
): Promise<void> => {
    try {
        const userId = req.usuario!.id;
        const notificaciones = notificador.obtenerPorUsuario(userId);
        res.json(notificaciones);
    } catch (error) {
        console.error("Error al obtener notificaciones:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

export const obtenerNoLeidas = async (
    req: AuthRequest,
    res: Response
): Promise<void> => {
    try {
        const userId = req.usuario!.id;
        const noLeidas = notificador.obtenerNoLeidasPorUsuario(userId);
        res.json({ count: noLeidas.length, notificaciones: noLeidas });
    } catch (error) {
        console.error("Error al obtener notificaciones no leÃ­das:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

export const marcarNotificacionLeida = async (
    req: AuthRequest,
    res: Response
): Promise<void> => {
    try {
        const id = Number(req.params.id);
        const resultado = notificador.marcarComoLeida(id);

        if (resultado) {
            res.json({ success: true, message: "NotificaciÃ³n marcada como leÃ­da" });
        } else {
            res.status(404).json({ success: false, message: "NotificaciÃ³n no encontrada" });
        }
    } catch (error) {
        console.error("Error al marcar notificaciÃ³n como leÃ­da:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
