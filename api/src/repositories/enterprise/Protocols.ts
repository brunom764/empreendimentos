import { Enterprise } from "../../domain/entities/enterprise";
import { PaginatedEntity } from "../common/paginated-entity.interface";

export interface IEnterpriseRepository  {
    create: (enterprise: Omit<Enterprise, '_id'>) => Promise<void>
    list: (page: number, itemsPerPage: number) => Promise<PaginatedEntity<Enterprise>>
    findById: (id: string) => Promise<Enterprise | null>
    update: (id: string, enterprise: Omit<Enterprise, '_id'> ) => Promise<void>
    delete: (id: string) => Promise<void>
}