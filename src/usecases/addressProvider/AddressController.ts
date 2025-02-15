import { Request, Response } from 'express';
import { buscarCep } from '../../infra/providers/AddressFromCep';

export class AddressController {
    async handle(req: Request, res: Response): Promise<Response> {
      const { cep } = req.params;
  
      try {
        if (!cep || cep.length !== 8 || !/^\d+$/.test(cep)) {
          throw new Error('Formato de CEP inválido. O CEP deve ter 8 dígitos.');
        }
  
        const address = await buscarCep(cep);
  
        if (!address) {
          throw new Error('CEP não encontrado.');
        }
  
        return res.status(200).json(address);
      } catch (error: any) {
        return res.status(400).json({
          message: error.message || 'Erro inesperado.',
        });
      }
    }
  }