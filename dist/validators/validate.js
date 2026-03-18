"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParams = exports.validate = void 0;
const zod_1 = require("zod");
const validate = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                res.status(400).json({
                    error: "Validación fallida",
                    details: error.errors.map((e) => ({ campo: e.path.join('.'), mensaje: e.message }))
                });
            }
            next(error);
        }
    };
};
exports.validate = validate;
const validateParams = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.params);
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                res.status(400).json({
                    error: "Parametros no validos",
                    details: error.errors.map((e) => ({ campo: e.path.join('.'), mensaje: e.message }))
                });
            }
            next(error);
        }
    };
};
exports.validateParams = validateParams;
//# sourceMappingURL=validate.js.map