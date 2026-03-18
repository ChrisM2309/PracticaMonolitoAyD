"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearDisponibilidad = exports.obtenerDisponibilidad = void 0;
const database_1 = __importDefault(require("../config/database"));
const obtenerDisponibilidad = async (req, res) => {
    try {
        const { tutorId } = req.params;
        const disponibilidades = await database_1.default.disponibilidad.findMany({
            where: { tutorId, activo: true },
            orderBy: [{ diaSemana: 'asc' }, { horaInicio: 'asc' }],
        });
        res.json(disponibilidades);
    }
    catch (error) {
        console.error("Error al obtener disponibilidad:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.obtenerDisponibilidad = obtenerDisponibilidad;
const crearDisponibilidad = async (req, res) => {
    try {
        const { tutorId } = req.usuario.id;
        const tutor = await database_1.default.tutor.findUnique({ where: { id: tutorId } });
        if (!tutor) {
            res.status(404).json({ error: "Tutor no encontrado" });
            return;
        }
    }
    catch (error) {
        console.error("Error al crear disponibilidad:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.crearDisponibilidad = crearDisponibilidad;
//# sourceMappingURL=disponibilidadController.js.map