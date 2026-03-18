type CrearReservaData = {
    estudianteId: string;
    tutorId: string;
    fecha: string;
    horaInicio: string;
    horaFin: string;
};
declare class ReservasService {
    crearReserva(data: CrearReservaData): Promise<{
        estudiante: {
            id: string;
            email: string;
            nombre: string;
        };
        tutor: {
            usuario: {
                id: string;
                email: string;
                nombre: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            materias: string[];
            tarifaHora: import("@prisma/client/runtime/library").Decimal;
            biografia: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fecha: Date;
        horaInicio: string;
        horaFin: string;
        tutorId: string;
        estudianteId: string;
        estado: import(".prisma/client").$Enums.EstadoReserva;
        penaltyReason: string | null;
        penaltyFee: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    cancelarReserva(reservaId: string, usuarioId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fecha: Date;
        horaInicio: string;
        horaFin: string;
        tutorId: string;
        estudianteId: string;
        estado: import(".prisma/client").$Enums.EstadoReserva;
        penaltyReason: string | null;
        penaltyFee: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    listarReservasPorUsuario(id: string, rol: string): Promise<({
        estudiante: {
            id: string;
            email: string;
            nombre: string;
        };
        tutor: {
            usuario: {
                id: string;
                email: string;
                nombre: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            materias: string[];
            tarifaHora: import("@prisma/client/runtime/library").Decimal;
            biografia: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fecha: Date;
        horaInicio: string;
        horaFin: string;
        tutorId: string;
        estudianteId: string;
        estado: import(".prisma/client").$Enums.EstadoReserva;
        penaltyReason: string | null;
        penaltyFee: import("@prisma/client/runtime/library").Decimal | null;
    })[]>;
}
declare const reservasService: ReservasService;
export default reservasService;
//# sourceMappingURL=reservasService.d.ts.map