import { Request, Response } from 'express';
import AuthService from '../services/authService';

export const registro = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await AuthService.registro(req.body);
        res.status(201).json(result);
    } catch (error : any) {
        res.status(400).json({ error: error.message });
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        const result = await AuthService.login(email, password);
        res.status(200).json(result);
    } catch (error : any) {
        res.status(401).json({ error: error.message });
    }
}