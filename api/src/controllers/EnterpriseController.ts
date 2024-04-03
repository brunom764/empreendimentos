import { Request, Response } from 'express';
import EnterpriseService from '../services/EnterpriseService';
import BaseController from './BaseController';
import { PaginatedEntity } from '../repositories/common/paginated-entity.interface';
import { Enterprise } from '../domain/entities/enterprise';

export default class EnterpriseController extends BaseController {
    private enterpriseService: any
    
    constructor() {
        super();
        this.enterpriseService =  new EnterpriseService();
        this.create = this.create.bind(this);
        this.getEnterprise = this.getEnterprise.bind(this);
        this.getEnterprises = this.getEnterprises.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);

    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            await this.enterpriseService.create(req.body);
            return this.handleResponse(res.status(201), { message: 'Enterprise created successfully' });
        } catch (error) {
            return this.handleError(res, error as Error);
        }
    }

    async getEnterprise(req: Request, res: Response): Promise<Response> {
        try {
            const response = (await this.enterpriseService.getEnterprise(req.params.id) as Enterprise);
            return this.handleResponse(res, response);
        } catch (error) {
            return this.handleError(res, error as Error);
        }
    }

    async getEnterprises(req: Request, res: Response): Promise<Response>{
        try {
            const response = (await this.enterpriseService.getEnterprises(req.query.page, req.query.pagesize) as PaginatedEntity<Enterprise>);
            return this.handleResponse(res, response);
        } catch (error) {
            return this.handleError(res, error as Error);
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            await this.enterpriseService.update(req.params, req.body);
            return this.handleResponse(res, { message: 'Enterprise update successfully' });
        } catch (error) {
            return this.handleError(res, error as Error);
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            await this.enterpriseService.delete(req.params.id);
            return this.handleResponse(res, { message: 'Enterprise deleted successfully' });
        } catch (error) {
            return this.handleError(res, error as Error);
        }
    }
}