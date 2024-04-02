import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

class SchemaValidator {
    async validate(schema: yup.ObjectSchema<any>, req: Request, res: Response, next: NextFunction) {
        try {
            await schema.validate({
                body: req.body,
                query: req.query,
                params: req.params,
            }, {
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