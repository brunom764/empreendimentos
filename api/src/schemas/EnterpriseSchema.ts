import * as yup from 'yup';

const AddressSchema = yup.object({
    district: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
    state: yup.string().required(),
    number: yup.string().required(),
    cep: yup.string().required()
}).noUnknown();

const EnterpriseSchema = {
    create: {
        body: yup.object({
            _id: yup.string().required(),
            name: yup.string().required(),
            status: yup.string().required(),
            purpose: yup.string().required(),
            ri_number: yup.string().required(),
            address: AddressSchema.required()
        }).noUnknown()
    },
    find: {
        params: yup.object({
            _id: yup.string().required()
        }).noUnknown()
    },
    list: {
        query: yup.object({}).noUnknown()
    },
    update: {
        params: yup.object({
            _id: yup.string().required()
        }).noUnknown(),
        body: yup.object({
            name: yup.string(),
            status: yup.string(),
            purpose: yup.string(),
            ri_number: yup.string(),
            address: AddressSchema
        }).noUnknown()
    },
    delete: {
        params: yup.object({
            _id: yup.string().required()
        }).noUnknown()
    }
};

export default EnterpriseSchema;