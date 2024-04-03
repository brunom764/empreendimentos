import axios from 'axios';

export interface Address {
    district: string
    city: string
    street: string
    state: string
    number: string
    cep: string
}

export async function getAddress(cep: string): Promise<Address> {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const data = response.data;

    const address: Address = {
        district: data.bairro,
        city: data.localidade,
        street: data.logradouro,
        state: data.uf,
        number: '',
        cep: data.cep
    };

    return address;
}