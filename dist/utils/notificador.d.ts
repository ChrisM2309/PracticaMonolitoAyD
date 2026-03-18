interface Notificacion {
    id: number;
    destinatario: string;
    tipo: string;
    asunto: string;
    mensaje: string;
    fechaEnvio: Date;
    leida: boolean;
}
declare class NotificadorSimulado {
    private historial;
    private contadorId;
    enviarNotificacion(destinatario: string, tipo: string, asunto: string, mensaje: string): Notificacion;
    obtenerHistorial(): Notificacion[];
    obtenerPorUsuario(usuarioId: string): Notificacion[];
    marcarComoLeida(notificacionId: number): boolean;
    obtenerNoLeidasPorUsuario(usuarioId: string): Notificacion[];
}
declare const notificador: NotificadorSimulado;
export default notificador;
//# sourceMappingURL=notificador.d.ts.map