"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = __importDefault(require("./config/database"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 4000;
const startServer = async () => {
    try {
        await database_1.default.$connect();
        console.log("Conexión a la base de datos establecida");
        app_1.default.listen(PORT, () => {
            console.log(`Servidor corriendo en puerto ${PORT}`);
            console.log('Health: http://localhost:' + PORT + '/health');
            console.log(`API disponible en http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error("Error al iniciar el servidor:", error);
        process.exit(1);
    }
};
process.on('SIGTERM', async () => {
    console.log('SIGTERM recibido, cerrando...');
    await database_1.default.$disconnect();
    process.exit(0);
});
process.on('SIGINT', async () => {
    console.log('SIGINT recibido, cerrando...');
    await database_1.default.$disconnect();
    process.exit(0);
});
startServer();
//# sourceMappingURL=server.js.map