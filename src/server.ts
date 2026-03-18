import app from './app';
import prisma  from './config/database';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000;

const startServer = async () => {
    try { 
        await prisma.$connect();
        console.log("DB: Conexión a la base de datos establecida");

        app.listen(PORT, () => {
            console.log(`SERVER: Servidor corriendo en puerto ${PORT}`);
            console.log('HEALTH: http://localhost:' + PORT + '/health');
            console.log(`API: API disponible en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error al iniciar el servidor:", error);
        process.exit(1);
    }
}

process.on('SIGTERM', async () => {
    console.log('SIGTERM recibido, cerrando...');
    await prisma.$disconnect();
    process.exit(0);
});

process.on('SIGINT', async () => {
    console.log('SIGINT recibido, cerrando...');
    await prisma.$disconnect();
    process.exit(0);
})

startServer();