import { inject, injectable } from "tsyringe";
import { Data } from "../../../infra/typeorm/entities/Data";
import { IDataRepository } from "../../../repositories/IDataRepository";

@injectable()
export class ListDataUseCase {
  constructor(
    @inject('DataRepository')
    private dataRepository: IDataRepository) {}

  async execute(): Promise<Data[]> {
    const data = await this.dataRepository.list();

    return data;
  }
}