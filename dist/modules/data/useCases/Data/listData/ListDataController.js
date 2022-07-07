"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListDataController = void 0;

var _tsyringe = require("tsyringe");

var _ListDataUseCase = require("./ListDataUseCase");

class ListDataController {
  async handle(request, response) {
    const listDataUseCase = _tsyringe.container.resolve(_ListDataUseCase.ListDataUseCase);

    const all = await listDataUseCase.execute();
    return response.json(all);
  }

}

exports.ListDataController = ListDataController;