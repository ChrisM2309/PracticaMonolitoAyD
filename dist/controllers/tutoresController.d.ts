import { Request, Response } from 'express';
import { AuthRequest } from "../middlewares/authMiddleware";
export declare const listarTutores: (req: Request, res: Response) => Promise<void>;
export declare const crearPerfilTutor: (req: AuthRequest, res: Response) => Promise<void>;
export declare const obtenerTutor: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=tutoresController.d.ts.map