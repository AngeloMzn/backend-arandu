import axios from "axios";
import { addressDTO } from "../../usecases/addressProvider/addressDTO";
  
  export async function buscarCep(cep: string): Promise<addressDTO | null> {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data: addressDTO = response.data;
  
      if (data.erro) {
        return null;
      }
  
      return data;
    } catch (error) {
      console.error('Erro ao consultar o ViaCEP:', error);
      return null;
    }
  }