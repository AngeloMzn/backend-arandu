interface AddressProps {
    CEP: string;
    country: string;
    state: string;
    city: string;
    street: string;
    number: string;
    district: string;
    complement?: string;
  }
  
  export class Address {
    public id: number;
    public CEP: string;
    public country: string;
    public state: string;
    public city: string;
    public street: string;
    public number: string;
    public district: string;
    public complement?: string;
  
    constructor(props: AddressProps, id?: number) {
      this.id = id ?? 0;
      this.CEP = props.CEP;
      this.country = props.country;
      this.state = props.state;
      this.city = props.city;
      this.street = props.street;
      this.number = props.number;
      this.district = props.district;
      this.complement = props.complement;
    }
  }