import { Request, Response, NextFunction } from 'express';
export interface AuthRequest extends Request {
    usuario?: {
        id: string;
        email: string;
        rol: string;
    };
}
export declare const verificarToken: (req: AuthRequest, res: Response, next: NextFunction) => void;
export declare const verificarRol: (...roles: string[]) => (req: AuthRequest, res: Response, next: NextFunction) => void;
//# sourceMappingURL=authMiddleware.d.ts.map