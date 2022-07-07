"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataRoutes = void 0;

var _express = require("express");

var _CreateDataController = require("@modules/data/useCases/Data/createData/CreateDataController");

var _DeleteDataController = require("@modules/data/useCases/Data/deleteData/DeleteDataController");

var _ListDataController = require("@modules/data/useCases/Data/listData/ListDataController");

const dataRoutes = (0, _express.Router)();
exports.dataRoutes = dataRoutes;
const createDataController = new _CreateDataController.CreateDataController();
const listDataController = new _ListDataController.ListDataController();
const deleteDataController = new _DeleteDataController.DeleteDataController();
dataRoutes.post('/', createDataController.handle);
dataRoutes.get('/', listDataController.handle);
dataRoutes.delete('/:id', deleteDataController.handle);