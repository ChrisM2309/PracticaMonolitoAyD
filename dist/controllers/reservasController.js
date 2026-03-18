"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelarReserva = exports.listarMisReservas = exports.crearReserva = void 0;
const reservasService_1 = __importDefault(require("../services/reservasService"));
const crearReserva = async (req, res) => {
    try {
        const reserva = await reservasService_1.default.crearReserva({
            estudianteId: req.usuario.id,
            tutorId: req.body.tutorId,
            fecha: req.body.fecha,
            horaInicio: req.body.horaInicio,
            horaFin: req.body.horaFin,
        });
        res.status(201).json(reserva);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.crearReserva = crearReserva;
const listarMisReservas = async (req, res) => {
    try {
        const reservas = await reservasService_1.default.listarReservasPorUsuario(req.usuario.id, req.usuario.rol);
        res.json(reservas);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.listarMisReservas = listarMisReservas;
const cancelarReserva = async (req, res) => {
    try {
        const reserva = await reservasService_1.default.cancelarReserva(req.params.id, req.usuario.id);
        res.json(reserva);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.cancelarReserva = cancelarReserva;
//# sourceMappingURL=reservasController.js.map