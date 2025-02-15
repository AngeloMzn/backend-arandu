export interface IAddressProvider {
    getAddressByCep(cep: string): Promise<{ street: string; city: string; state: string }>;
  }