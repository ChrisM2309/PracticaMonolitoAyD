import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'tu_clave_secreta';

export interface AuthRequest extends Request {
    usuario?:{
        id: string;
        email: string;
        rol: string;
    }
}

export const verificarToken = (req: AuthRequest, res: Response, next: NextFunction): void => {
    try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ error: 'Token no proporcionado' });
        return;
    }
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; email: string; rol: string };
    req.usuario = {
        id: decoded.id,
        email: decoded.email,
        rol: decoded.rol
    };
    next();
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
};

export const verificarRol = (...roles: string[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction): void => {
        if (!req.usuario || !roles.includes(req.usuario.rol)) {
            res.status(403).json({ error: 'Acceso denegado' });
            return;
        }
        next();
    }
}
