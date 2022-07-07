"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteDataController = void 0;

var _tsyringe = require("tsyringe");

var _DeleteDataUseCase = require("./DeleteDataUseCase");

class DeleteDataController {
  async handle(request, response) {
    const {
      id
    } = request.params;

    const deleteDataUseCase = _tsyringe.container.resolve(_DeleteDataUseCase.DeleteDataUseCase);

    await deleteDataUseCase.execute({
      id
    });
    return response.status(201).send();
  }

}

exports.DeleteDataController = DeleteDataController;