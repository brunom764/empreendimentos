import axios from "axios";
import { Enterprise } from "../../../utils/types/enterprises";

export class EnterprisesApi {
    
    async create(enterprise: Enterprise): Promise<Enterprise>{
        const url =  process.env.SERVER_URL + '/enterprises';
        const response = await axios.post(url, enterprise);
        if (response.status !== 200){
            throw new Error('Error to create enterprise');
        }
        return response.data;
    }

    async getEnterprises(): Promise<Enterprise[]>{
        const url =  process.env.SERVER_URL + '/enterprises';
        const response = await axios.get(url);
        if (response.status !== 200){
            throw new Error('Error to get enterprises');
        }
        return response.data;
    }

    async getEnterprise(id: string): Promise<Enterprise>{
        const url =  process.env.SERVER_URL + `/enterprises/${id}`;
        const response = await axios.get(url);
        if (response.status !== 200){
            throw new Error('Error to get enterprise');
        }
        return response.data;
    }

    async update(enterprise: Enterprise): Promise<Enterprise>{
        const url =  process.env.SERVER_URL + `/enterprises/${enterprise._id}`;
        const response = await axios.put(url, enterprise);
        if (response.status !== 200){
            throw new Error('Error to update enterprise');
        }
        return response.data;
    }

    async delete(id: string): Promise<void>{
        const url =  process.env.SERVER_URL + `/enterprises/${id}`;
        const response = await axios.delete(url);
        if (response.status !== 200){
            throw new Error('Error to delete enterprise');
        }
    }
}
