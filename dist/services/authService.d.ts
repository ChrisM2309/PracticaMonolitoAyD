import { Rol } from '@prisma/client';
declare class AuthService {
    registrar(data: {
        email: string;
        password: string;
        nombre: string;
        rol: Rol;
    }): Promise<{
        token: string;
        usuario: {
            id: string;
            email: string;
            nombre: string;
            rol: import(".prisma/client").$Enums.Rol;
        };
    }>;
    login(email: string, password: string): Promise<{
        token: string;
        usuario: {
            id: string;
            email: string;
            nombre: string;
            rol: import(".prisma/client").$Enums.Rol;
        };
    }>;
}
declare const _default: AuthService;
export default _default;
//# sourceMappingURL=authService.d.ts.map