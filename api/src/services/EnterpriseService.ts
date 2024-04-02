import { Enterprise } from '../domain/entities/enterprise';
import { EnterpriseRepository } from '../repositories/Enterprise.Repository';

export default class EnterpriseService {
    private enterpriseRepository: EnterpriseRepository;

    constructor() {
        this.enterpriseRepository = new EnterpriseRepository();
    }

    async getEnterprise(id: string): Promise<Enterprise | null> {
        return await this.enterpriseRepository.findById(id);
    }

    async getEnterprises(): Promise<Enterprise[]> {
        return await this.enterpriseRepository.list();
    }

    async create(data:Omit<Enterprise, '_id'>): Promise<void> {
        return await this.enterpriseRepository.create(data);
    }

    async update(id: string, enterprise: Omit<Enterprise,'_id'>): Promise<void> {
        const oldEnterprise = await this.enterpriseRepository.findById(id);
        if (!oldEnterprise) {
            throw new Error('Enterprise not found');
        }
        return await this.enterpriseRepository.update(id, enterprise);
    }

    async delete(id: string): Promise<void> {
        return await this.enterpriseRepository.delete(id);
    }
}