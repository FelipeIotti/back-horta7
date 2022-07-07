import { IDataDTO } from "@modules/data/dtos/IDataDTO";
import { IDataRepository } from "@modules/data/repositories/IDataRepository";
import { getMongoRepository, MongoRepository} from "typeorm";
import { Data } from "../entities/Data";

export class DataRepository implements IDataRepository {
  private repository: MongoRepository<Data>;

  constructor(){
    this.repository = getMongoRepository(Data);
  }

  async create({brightness,heater,humidity,lamp,sensorsStatus, temperature, valve}: IDataDTO): Promise<void> {
    const data = this.repository.create({        
      brightness,
      heater,
      humidity,
      lamp,
      temperature,
      valve,
      sensorsStatus
    });
  
    await this.repository.save(data);
  }

  async findById(id: string): Promise<Data> {
    const data = await this.repository.findOne(id);
    return data;
  }

  async findByName(name: string): Promise<Data> {
    //console.log(client);
    const data = await this.repository.findOne({
      where: {
       'name': { $eq: `${name}`}
      }
    });
    
    return data;
  }

  async list(): Promise<Data[]> {
    const data = await this.repository.find();
    return data;
  }


  async delete(id: string): Promise<void> {
    const groupAction = await this.repository.findOne(id);
    
    await this.repository.delete(groupAction);
  }
}