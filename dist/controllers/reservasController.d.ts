import { Response } from "express";
import { AuthRequest } from "../middlewares/authMiddleware";
export declare const crearReserva: (req: AuthRequest, res: Response) => Promise<void>;
export declare const listarMisReservas: (req: AuthRequest, res: Response) => Promise<void>;
export declare const cancelarReserva: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=reservasController.d.ts.map