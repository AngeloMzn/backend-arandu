import { Organizador } from "../../domain/entities/Organizador";
import { IOrganizadorDAO } from "../../domain/idao/IOrganizadorDAO";
import { IOrganizadorRepository } from "../../domain/irepository/IOrganizadorRepository";

export class OrganizadorRepository implements IOrganizadorRepository {
  constructor(private organizadorDao: IOrganizadorDAO) {}
  findById(id: number): Promise<Organizador | null> {
    return this.organizadorDao.findById(id);
  }

  save(organizador: Organizador): Promise<Organizador> {
    return this.organizadorDao.save(organizador);
}
  update(organizador: Organizador): Promise<Organizador> {
    return this.organizadorDao.update(organizador);
  }
}
