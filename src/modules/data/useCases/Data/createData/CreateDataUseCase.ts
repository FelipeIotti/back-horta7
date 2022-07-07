import { IDataRepository } from "@modules/data/repositories/IDataRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  brightness: string;
  humidity: string;
  temperature: string;
  valve: boolean;
  heater: boolean;
  lamp: boolean;
  sensorsStatus:string;
}

@injectable()
export class CreateDataUseCase {
  constructor(
    @inject("DataRepository")
    private dataRepository: IDataRepository,
   
  ) {}

  async execute({brightness,humidity,temperature, valve, heater, lamp, sensorsStatus}: IRequest): Promise<void> {

    await this.dataRepository.create({brightness,humidity,temperature, valve, heater, lamp, sensorsStatus});
  }
}