import {container} from 'tsyringe';



import { DataRepository } from '@modules/data/infra/typeorm/repositories/DataRepository';
import { IDataRepository } from '@modules/data/repositories/IDataRepository';



container.registerSingleton<IDataRepository>('DataRepository',DataRepository);