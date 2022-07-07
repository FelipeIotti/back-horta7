"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListDataUseCase = void 0;

var _tsyringe = require("tsyringe");

var _IDataRepository = require("../../../repositories/IDataRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let ListDataUseCase = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('DataRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IDataRepository.IDataRepository === "undefined" ? Object : _IDataRepository.IDataRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListDataUseCase {
  constructor(dataRepository) {
    this.dataRepository = dataRepository;
  }

  async execute() {
    const data = await this.dataRepository.list();
    return data;
  }

}) || _class) || _class) || _class) || _class);
exports.ListDataUseCase = ListDataUseCase;