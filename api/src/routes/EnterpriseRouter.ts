import { Router } from 'express';
import  EnterpriseController  from '../controllers/EnterpriseController';
import EnterpriseSchema from '../schemas/EnterpriseSchema';
import SchemaValidator from '../middlewares/SchemaValidator';

const enterpriseRouter: Router = Router();

const enterpriseController = new EnterpriseController();
const schemaValidator = new SchemaValidator();

enterpriseRouter.post('/', (req, res) => enterpriseController.create(req, res));
enterpriseRouter.get('/',  (req, res) => enterpriseController.getEnterprises(req, res));
enterpriseRouter.get('/:id', (req, res) => enterpriseController.getEnterprise(req, res));
enterpriseRouter.put('/:id',  (req, res) => enterpriseController.update(req, res));
enterpriseRouter.delete('/:id', (req, res) => enterpriseController.delete(req, res));

export default enterpriseRouter;