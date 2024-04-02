import { Enterprise } from "../../../utils/types/enterprises";
import { GetServerSidePropsContext } from "next";
import { HttpHandler } from "../../../utils/network";

export class EnterprisesApi {
    
    static  async create(enterprise: Omit<Enterprise,'_id'>): Promise<Enterprise>{
        const handler = new HttpHandler();
        const response = await handler.post<Enterprise>('/enterprise', enterprise);
        if (response.success){
            return response.data;
        } else {
            throw new Error('Error to create enterprise');
        }
    }

    static  async getEnterprises(ctx?: GetServerSidePropsContext): Promise<Enterprise[]>{
        const handler = new HttpHandler(ctx);
        const response = await handler.get<Enterprise[]>('/enterprise');
        if (response.success){
            return response.data;
        } else {
            throw new Error('Error to get enterprises');
        }
    }

    static  async getEnterprise(id: string): Promise<Enterprise>{
        const handler = new HttpHandler();
        const response = await handler.get<Enterprise>(`/enterprise/${id}`);
        /*const response = {
            "_id": "PA01",
            "name": "Sirius Vila Bastos",
            "status": "RELEASE",
            "purpose": "HOME",
            "ri_number": "123321",
            "address": {
                "district": "Vila Bastos",
                "city": "Santo André",
                "street": "Rua Doutor Messuti",
                "state": "SP",
                "number": "339",
                "cep": "60000000"}
        }
        return response; */
        if (response.success){
            return response.data;
        } else {
            throw new Error('Error to get enterprise');
        }
    }

    static  async update(enterprise: Enterprise): Promise<Enterprise>{
        const handler = new HttpHandler();
        const response = await handler.put<Enterprise>(`/enterprise/${enterprise._id}`, enterprise);
        if (response.success){
            return response.data;
        } else {
            throw new Error('Error to update enterprise');
        }
    }

    static  async delete(id: string): Promise<void>{
        const handler = new HttpHandler();
        const response = await handler.delete<void>(`/enterprise/${id}`);
        if (!response.success){
            throw new Error('Error to delete enterprise');
        }
    }
}
