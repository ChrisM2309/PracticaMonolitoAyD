"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const database_1 = __importDefault(require("../config/database"));
const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';
const JWT_EXPIRES_IN = '24h';
class AuthService {
    async registrar(data) {
        const existente = await database_1.default.usuario.findUnique({
            where: { email: data.email },
        });
        if (existente) {
            throw new Error('El email ya está registrado');
        }
        const salt = await bcrypt_1.default.genSalt(10);
        const hashedPassword = await bcrypt_1.default.hash(data.password, salt);
        const usuario = await database_1.default.usuario.create({
            data: {
                email: data.email,
                password: hashedPassword,
                nombre: data.nombre,
                rol: data.rol,
            },
        });
        const token = jsonwebtoken_1.default.sign({ id: usuario.id, email: usuario.email, rol: usuario.rol }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        return {
            token,
            usuario: {
                id: usuario.id,
                email: usuario.email,
                nombre: usuario.nombre,
                rol: usuario.rol,
            },
        };
    }
    async login(email, password) {
        const usuario = await database_1.default.usuario.findUnique({ where: { email } });
        if (!usuario) {
            throw new Error("Credenciales invalidas");
        }
        const passwordValido = await bcrypt_1.default.compare(password, usuario.password);
        if (!passwordValido) {
            throw new Error("Credenciales invalidas");
        }
        const token = jsonwebtoken_1.default.sign({ id: usuario.id, email: usuario.email, rol: usuario.rol }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        return {
            token,
            usuario: {
                id: usuario.id,
                email: usuario.email,
                nombre: usuario.nombre,
                rol: usuario.rol,
            },
        };
    }
}
exports.default = new AuthService();
//# sourceMappingURL=authService.js.map