import {Router} from 'express';
import EnterpriseRoutes from './EnterpriseRouter';

const routes: Router = Router();

routes.use('/enterprise', EnterpriseRoutes);

export default routes;