"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotificadorSimulado {
    constructor() {
        this.historial = [];
        this.contadorId = 1;
    }
    enviarNotificacion(destinatario, tipo, asunto, mensaje) {
        const notificacion = {
            id: this.contadorId++,
            destinatario,
            tipo,
            asunto,
            mensaje,
            fechaEnvio: new Date(),
            leida: false,
        };
        this.historial.push(notificacion);
        console.log(`[${tipo.toUpperCase()}] Notificacion enviada a ${destinatario}`);
        console.log(`Asunto: ${asunto}`);
        console.log(`Mensaje: ${mensaje}`);
        console.log(`Fecha: ${notificacion.fechaEnvio.toISOString()}`);
        return notificacion;
    }
    obtenerHistorial() {
        return [...this.historial];
    }
    obtenerPorUsuario(usuarioId) {
        return this.historial.filter((notificacion) => notificacion.destinatario === usuarioId);
    }
    marcarComoLeida(notificacionId) {
        const notificacion = this.historial.find((n) => n.id === notificacionId);
        if (notificacion) {
            notificacion.leida = true;
            return true;
        }
        return false;
    }
    obtenerNoLeidasPorUsuario(usuarioId) {
        return this.historial.filter((notificacion) => notificacion.destinatario === usuarioId && !notificacion.leida);
    }
}
const notificador = new NotificadorSimulado();
exports.default = notificador;
//# sourceMappingURL=notificador.js.map