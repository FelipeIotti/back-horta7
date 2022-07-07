import { Router } from "express";

import { CreateDataController } from "@modules/data/useCases/Data/createData/CreateDataController";
import { DeleteDataController } from "@modules/data/useCases/Data/deleteData/DeleteDataController";
import { ListDataController } from "@modules/data/useCases/Data/listData/ListDataController";

export const dataRoutes = Router();

const createDataController = new CreateDataController();
const listDataController = new ListDataController();
const deleteDataController = new DeleteDataController();

dataRoutes.post('/',createDataController.handle);

dataRoutes.get('/', listDataController.handle);

dataRoutes.delete('/:id', deleteDataController.handle);