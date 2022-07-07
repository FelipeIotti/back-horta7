import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDataUseCase } from "./CreateDataUseCase";

export class CreateDataController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {brightness,humidity,temperature, valve, heater, lamp, sensorsStatus} = request.body;

    const createDataUseCase = container.resolve(CreateDataUseCase);

    await createDataUseCase.execute({brightness,humidity,temperature, valve, heater, lamp, sensorsStatus});

    return response.status(201).send();
  }
}