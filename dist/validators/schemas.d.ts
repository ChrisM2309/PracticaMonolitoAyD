import { z } from 'zod';
export declare const registroSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    nombre: z.ZodString;
    rol: z.ZodEnum<["tutor", "estudiante"]>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    nombre: string;
    rol: "estudiante" | "tutor";
}, {
    email: string;
    password: string;
    nombre: string;
    rol: "estudiante" | "tutor";
}>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const createTutorSchema: z.ZodObject<{
    materias: z.ZodArray<z.ZodString, "many">;
    tarifaHora: z.ZodNumber;
    biografia: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    materias: string[];
    tarifaHora: number;
    biografia?: string | undefined;
}, {
    materias: string[];
    tarifaHora: number;
    biografia?: string | undefined;
}>;
export declare const crearDisponibilidadSchema: z.ZodObject<{
    diaSemana: z.ZodNumber;
    fecha: z.ZodString;
    horaInicio: z.ZodString;
    horaFin: z.ZodString;
}, "strip", z.ZodTypeAny, {
    diaSemana: number;
    fecha: string;
    horaInicio: string;
    horaFin: string;
}, {
    diaSemana: number;
    fecha: string;
    horaInicio: string;
    horaFin: string;
}>;
export declare const crearReservaSchema: z.ZodObject<{
    tutorId: z.ZodString;
    fecha: z.ZodString;
    horaInicio: z.ZodString;
    horaFin: z.ZodString;
}, "strip", z.ZodTypeAny, {
    fecha: string;
    horaInicio: string;
    horaFin: string;
    tutorId: string;
}, {
    fecha: string;
    horaInicio: string;
    horaFin: string;
    tutorId: string;
}>;
export declare const cancelarReservaSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const notificacionIdParamSchema: z.ZodObject<{
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
}, {
    id: number;
}>;
//# sourceMappingURL=schemas.d.ts.map