import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListDataUseCase } from "./ListDataUseCase";


export class ListDataController {
  
  async handle(request: Request,response: Response): Promise<Response> {
    const listDataUseCase = container.resolve(ListDataUseCase);

    const all = await listDataUseCase.execute();

    return response.json(all);
  }
}