export interface Enterprise {
    _id: string
    name: string
    status: Status | string
    purpose: Purpose | string
    ri_number: string
    address: Address
  }
  
  export interface Address {
    district: string
    city: string
    street: string
    state: string
    number: string
    cep: string
  }
  

export enum Status {
     SOON_RELEASE = "em breve",
     IN_WORKS = "Em obras",
     READY = "Pronto para morar",
     RELEASE = "Lançamento"
  }

export enum Purpose {
    HOME = "residencial",
    COMMERCIAL = "Comercial"
}