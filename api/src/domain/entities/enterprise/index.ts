import * as uuid from 'uuid';

export enum Status {
  SOON_RELEASE = "Em breve",
  IN_WORKS = "Em obras",
  READY = "Disponível",
  RELEASE = "Lançamento"
}

export enum Purpose {
 HOME = "Residencial",
 COMMERCIAL = "Comercial"
}

type EnterpriseProps = {
  _id: string;
  name: string;
  status: Status | string;
  purpose: Purpose | string;
  ri_number: string;
  address: Address;
}

export interface Address {
  district: string;
  city: string;
  street: string;
  state: string;
  number: string;
  cep: string;
}

export class Enterprise {
  readonly _id: string;
  name: string;
  status: Status |  string;
  purpose: Purpose | string;
  ri_number: string;
  address: Address;

  protected constructor(props: EnterpriseProps) {
    this._id = props._id;
    this.name = props.name;
    this.status = props.status;
    this.purpose = props.purpose;
    this.ri_number = props.ri_number;
    this.address = props.address;
  }

  static create(
    name: string,
    status: Status | string,
    purpose: Purpose | string,
    ri_number: string,
    address: Address
  ): Enterprise {
    return new Enterprise({
      _id: uuid.v4(),
      name,
      status,
      purpose,
      ri_number,
      address
    });
  }

  static recover(props: EnterpriseProps): Enterprise {
    return new Enterprise(props);
  }

  changeName(name: string): void {
    this.name = name;
  }

  changeStatus(status: string): void {
    this.status = status;
  }

  changePurpose(purpose: string): void {
    this.purpose = purpose;
  }

  changeRiNumber(ri_number: string): void {
    this.ri_number = ri_number;
  }

  changeAddress(address: Address): void {
    this.address = address;
  }

  getId(): string {
    return this._id;
  }

  getName(): string {
    return this.name;
  }

  getStatus(): string {
    return this.status;
  }

  getPurpose(): string {
    return this.purpose;
  }

  getRiNumber(): string {
    return this.ri_number;
  }

  getAddress(): Address {
    return this.address;
  }

}