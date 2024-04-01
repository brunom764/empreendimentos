export interface Enterprise {
    _id: string
    name: string
    status: string
    purpose: string
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
  