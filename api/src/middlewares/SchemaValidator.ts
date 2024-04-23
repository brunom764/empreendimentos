import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

class SchemaValidator {
    async validateBody(schema: yup.ObjectSchema<any>, req: Request, res: Response, next: NextFunction) {
        try {
            await schema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            });
            next();
        } catch (error: any) {
            res.status(400).send({ error: error.errors });
        }
    }

    async validateQuery(schema: yup.ObjectSchema<any>, req: Request, res: Response, next: NextFunction) {
        try {
            await schema.validate(req.query, {
                abortEarly: false,
                stripUnknown: true,
            });
            next();
        } catch (error: any) {
            res.status(400).send({ error: error.errors });
        }
    }

    async validateParams(schema: yup.ObjectSchema<any>, req: Request, res: Response, next: NextFunction) {
        try {
            await schema.validate(req.params, {
                abortEarly: false,
                stripUnknown: true,
            });
            next();
        } catch (error: any) {
            res.status(400).send({ error: error.errors });
        }
    }
}

export default SchemaValidator;