import { Data } from "../infra/typeorm/entities/Data";
import { IDataDTO } from "../dtos/IDataDTO";

export interface IDataRepository {
  create(data: IDataDTO): Promise<void>;
  findByName(name: string): Promise<Data>;
  findById(id: string): Promise<Data>;
  list(): Promise<Data[]>;
  delete(id: string):Promise<void>;
}