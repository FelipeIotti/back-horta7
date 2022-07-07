import {Request, Response} from 'express';
import { container } from 'tsyringe';
import {DeleteDataUseCase} from './DeleteDataUseCase';

export class DeleteDataController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;

    const deleteDataUseCase = container.resolve(DeleteDataUseCase);

    await deleteDataUseCase.execute({id});

    return response.status(201).send();
  }
}