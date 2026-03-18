"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificacionIdParamSchema = exports.cancelarReservaSchema = exports.crearReservaSchema = exports.crearDisponibilidadSchema = exports.createTutorSchema = exports.loginSchema = exports.registroSchema = void 0;
const zod_1 = require("zod");
exports.registroSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Email no vÃ¡lido" }),
    password: zod_1.z.string().min(6, { message: "La contraseÃ±a debe tener al menos 6 caracteres" }),
    nombre: zod_1.z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
    rol: zod_1.z.enum(['tutor', 'estudiante'], { message: "Rol debe ser 'tutor' o 'estudiante'" })
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Email no vÃ¡lido" }),
    password: zod_1.z.string().min(1, { message: "La contraseÃ±a es requerida" })
});
exports.createTutorSchema = zod_1.z.object({
    materias: zod_1.z.array(zod_1.z.string()).min(1, { message: "Debe seleccionar al menos una materia" }),
    tarifaHora: zod_1.z.number().positive({ message: "La tarifa debe ser un nÃºmero positivo" }),
    biografia: zod_1.z.string().optional(),
});
exports.crearDisponibilidadSchema = zod_1.z.object({
    diaSemana: zod_1.z.number().int().min(1).max(7),
    fecha: zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Fecha debe tener formato YYYY-MM-DD" }),
    horaInicio: zod_1.z.string().regex(/^\d{2}:\d{2}$/, { message: "Hora de inicio debe tener formato HH:MM" }),
    horaFin: zod_1.z.string().regex(/^\d{2}:\d{2}$/, { message: "Hora de fin debe tener formato HH:MM" }),
});
exports.crearReservaSchema = zod_1.z.object({
    tutorId: zod_1.z.string().uuid({ message: "ID de tutor no vÃ¡lido" }),
    fecha: zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Fecha debe tener formato YYYY-MM-DD" }),
    horaInicio: zod_1.z.string().regex(/^\d{2}:\d{2}$/, { message: "Hora de inicio debe tener formato HH:MM" }),
    horaFin: zod_1.z.string().regex(/^\d{2}:\d{2}$/, { message: "Hora de fin debe tener formato HH:MM" }),
});
exports.cancelarReservaSchema = zod_1.z.object({
    id: zod_1.z.string().uuid({ message: "ID de reserva no vÃ¡lido" }),
});
exports.notificacionIdParamSchema = zod_1.z.object({
    id: zod_1.z.coerce.number().int().positive({ message: "ID de notificaciÃ³n no vÃ¡lido" }),
});
//# sourceMappingURL=schemas.js.map