import { Response } from "express";
import { AuthRequest } from "../middlewares/authMiddleware";
export declare const obtenerNotificaciones: (req: AuthRequest, res: Response) => Promise<void>;
export declare const obtenerNoLeidas: (req: AuthRequest, res: Response) => Promise<void>;
export declare const marcarNotificacionLeida: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=notificacionesController.d.ts.map