"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerTutor = exports.crearPerfilTutor = exports.listarTutores = void 0;
const database_1 = __importDefault(require("../config/database"));
const listarTutores = async (req, res) => {
    try {
        const { materia } = req.query;
        const tutores = await database_1.default.tutor.findMany({
            where: materia ? { materias: { has: materia } } : undefined,
            include: {
                usuario: {
                    select: { id: true, nombre: true, email: true },
                }
            }
        });
        res.status(200).json(tutores);
    }
    catch (error) {
        console.error("Error al listar tutores:", error);
        res.status(500).json({ error: "Error al listar tutores" });
    }
};
exports.listarTutores = listarTutores;
const crearPerfilTutor = async (req, res) => {
    try {
        const userId = req.usuario.id;
        const existente = await database_1.default.tutor.findUnique({ where: { id: userId } });
        if (existente) {
            res.status(400).json({ error: "Ya tienes un perfil de tutor" });
            return;
        }
        const tutor = await database_1.default.tutor.create({
            data: {
                id: userId,
                materias: req.body.materias,
                tarifaHora: req.body.tarifaHora,
                biografia: req.body.biografia,
            },
        });
        res.status(201).json(tutor);
    }
    catch (error) {
        console.error("Error al crear perfil de tutor:", error);
        res.status(500).json({ error: "Error al crear perfil de tutor" });
    }
};
exports.crearPerfilTutor = crearPerfilTutor;
const obtenerTutor = async (req, res) => {
    try {
        const { id } = req.params;
        const tutor = await database_1.default.tutor.findUnique({
            where: { id },
            include: {
                usuario: {
                    select: { id: true, nombre: true, email: true },
                },
                disponibilidades: {
                    where: { activo: true },
                },
            },
        });
        if (!tutor) {
            res.status(404).json({ error: "Tutor no encontrado" });
            return;
        }
        res.status(200).json(tutor);
    }
    catch (error) {
        console.error("Error al obtener tutor", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
exports.obtenerTutor = obtenerTutor;
//# sourceMappingURL=tutoresController.js.map