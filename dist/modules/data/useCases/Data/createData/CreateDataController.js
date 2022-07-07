"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateDataController = void 0;

var _tsyringe = require("tsyringe");

var _CreateDataUseCase = require("./CreateDataUseCase");

class CreateDataController {
  async handle(request, response) {
    const {
      brightness,
      humidity,
      temperature,
      valve,
      heater,
      lamp,
      sensorsStatus
    } = request.body;

    const createDataUseCase = _tsyringe.container.resolve(_CreateDataUseCase.CreateDataUseCase);

    await createDataUseCase.execute({
      brightness,
      humidity,
      temperature,
      valve,
      heater,
      lamp,
      sensorsStatus
    });
    return response.status(201).send();
  }

}

exports.CreateDataController = CreateDataController;