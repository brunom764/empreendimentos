import { PrismaClient } from '@prisma/client';
import { Enterprise } from '../domain/entities/enterprise';

export class EnterpriseRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(enterpriseData: Omit<Enterprise, '_id'>): Promise<void> {
        await this.prisma.enterprise.create({
            data: {
                name: enterpriseData.name,
                status: enterpriseData.status,
                purpose: enterpriseData.purpose,
                ri_number: enterpriseData.ri_number,
                district: enterpriseData.address.district,
                city: enterpriseData.address.city,
                street: enterpriseData.address.street,
                state: enterpriseData.address.state,
                number: enterpriseData.address.number,
                cep: enterpriseData.address.cep,
            },
        });
    }

    async list(): Promise<Enterprise[]> {
        const enterprises = await this.prisma.enterprise.findMany()
        return enterprises.map(enterprise => {
            return Enterprise.recover({
                _id: enterprise.id,
                name: enterprise.name,
                status: enterprise.status,
                purpose: enterprise.purpose,
                ri_number: enterprise.ri_number,
                address: {
                    street: enterprise.street,
                    city: enterprise.city,
                    state: enterprise.state,
                    number: enterprise.number,
                    cep: enterprise.cep,
                    district: enterprise.district,
                }
                });
            });
    }

    async findById(id: string): Promise<Enterprise | null> {
        const enterprise = await this.prisma.enterprise.findUnique({ where: { id } });
        if (!enterprise) {
            return null;
        }
        return Enterprise.recover({
            _id: enterprise.id,
            name: enterprise.name,
            status: enterprise.status,
            purpose: enterprise.purpose,
            ri_number: enterprise.ri_number,
            address: {
                street: enterprise.street,
                city: enterprise.city,
                state: enterprise.state,
                number: enterprise.number,
                cep: enterprise.cep,
                district: enterprise.district,
            }
        });
    }

    async update(enterpriseData :Enterprise): Promise<void>  {
       const id = enterpriseData._id;
       await this.prisma.enterprise.update({ where: { id }, data: enterpriseData });
    }

    async delete(id: string): Promise<void>  {
       await this.prisma.enterprise.delete({ where: { id } });
    }
}