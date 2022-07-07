import { IDataRepository } from "@modules/data/repositories/IDataRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
}

@injectable()
export class DeleteDataUseCase {
  constructor(
      @inject("DataRepository")
      private dataRepository: IDataRepository,
    ){}

  async execute({id}:IRequest): Promise<void> {

    const data = await this.dataRepository.findById(id);

    await this.dataRepository.delete(id);
  }
}