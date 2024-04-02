import { Request, Response } from 'express';
import EnterpriseService from '../services/EnterpriseService';
import BaseController from './BaseController';

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

    async create(req: Request, res: Response) {
        try {
            const response = await this.enterpriseService.create(req.body);
            return this.handleResponse(res, response);
        } catch (error) {
            return this.handleError(res, error as Error);
        }
    }

    async getEnterprise(req: Request, res: Response) {
        try {
            const response = await this.enterpriseService.getEnterprise(req.params.id);
            return this.handleResponse(res, response);
        } catch (error) {
            return this.handleError(res, error as Error);
        }
    }

    async getEnterprises(req: Request, res: Response) {
        try {
            const response = await this.enterpriseService.getEnterprises();
            return this.handleResponse(res, response);
        } catch (error) {
            return this.handleError(res, error as Error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const response = await this.enterpriseService.update(req.body);
            return this.handleResponse(res, response);
        } catch (error) {
            return this.handleError(res, error as Error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const response = await this.enterpriseService.delete(req.params.id);
            return this.handleResponse(res, response);
        } catch (error) {
            return this.handleError(res, error as Error);
        }
    }
}