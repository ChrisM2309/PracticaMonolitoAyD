"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const tutoresRoutes_1 = __importDefault(require("./routes/tutoresRoutes"));
const disponibilidadRoutes_1 = __importDefault(require("./routes/disponibilidadRoutes"));
const reservasRoutes_1 = __importDefault(require("./routes/reservasRoutes"));
const notificacionesRoutes_1 = __importDefault(require("./routes/notificacionesRoutes"));
const errorHandler_1 = require("./middlewares/errorHandler");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// health 
app.get('/health', (_req, res) => {
    res.status(200).json({
        status: 'ok',
        service: 'tutorias-monolito',
        timestamp: new Date().toISOString(),
    });
});
// rutas api 
app.use('/api/auth', authRoutes_1.default);
app.use('/api/tutores', tutoresRoutes_1.default);
app.use('/api/disponibilidad', disponibilidadRoutes_1.default);
app.use('/api/reservas', reservasRoutes_1.default);
app.use('/api/notificaciones', notificacionesRoutes_1.default);
app.use(errorHandler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map