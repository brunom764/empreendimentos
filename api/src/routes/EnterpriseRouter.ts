import { Router } from 'express';
import  EnterpriseController  from '../controllers/EnterpriseController';
import EnterpriseSchema from '../schemas/EnterpriseSchema';
import SchemaValidator from '../middlewares/SchemaValidator';

const enterpriseRouter: Router = Router();

const enterpriseController = new EnterpriseController();
const schemaValidator = new SchemaValidator();

enterpriseRouter.post('/', (req, res, next) => schemaValidator.validate(EnterpriseSchema.create.body, req, res, next), (req, res) => enterpriseController.create(req, res));
enterpriseRouter.get('/', (req, res, next) => schemaValidator.validate(EnterpriseSchema.list.query, req, res, next), (req, res) => enterpriseController.getEnterprises(req, res));
enterpriseRouter.get('/:id', (req, res, next) => schemaValidator.validate(EnterpriseSchema.find.params, req, res, next), (req, res) => enterpriseController.getEnterprise(req, res));
enterpriseRouter.put('/:id', (req, res, next) => schemaValidator.validate(EnterpriseSchema.update.params, req, res, next), (req, res) => enterpriseController.update(req, res));
enterpriseRouter.delete('/:id', (req, res, next) => schemaValidator.validate(EnterpriseSchema.delete.params, req, res, next), (req, res) => enterpriseController.delete(req, res));

export default enterpriseRouter;