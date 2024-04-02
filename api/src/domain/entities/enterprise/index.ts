import * as uuid from 'uuid';

type EnterpriseProps = {
  _id: string;
  name: string;
  status: string;
  purpose: string;
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
  protected _name: string;
  protected _status: string;
  protected _purpose: string;
  protected _ri_number: string;
  protected _address: Address;

  protected constructor(props: EnterpriseProps) {
    this._id = props._id;
    this._name = props.name;
    this._status = props.status;
    this._purpose = props.purpose;
    this._ri_number = props.ri_number;
    this._address = props.address;
  }

  static create(
    name: string,
    status: string,
    purpose: string,
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
    this._name = name;
  }

  changeStatus(status: string): void {
    this._status = status;
  }

  changePurpose(purpose: string): void {
    this._purpose = purpose;
  }

  changeRiNumber(ri_number: string): void {
    this._ri_number = ri_number;
  }

  changeAddress(address: Address): void {
    this._address = address;
  }

  get name(): string {
    return this._name;
  }

  get status(): string {
    return this._status;
  }

  get purpose(): string {
    return this._purpose;
  }

  get ri_number(): string {
    return this._ri_number;
  }

  get address(): Address {
    return this._address;
  }
}