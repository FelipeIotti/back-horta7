"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataRepository = void 0;

var _typeorm = require("typeorm");

var _Data = require("../entities/Data");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DataRepository {
  constructor() {
    _defineProperty(this, "repository", void 0);

    this.repository = (0, _typeorm.getMongoRepository)(_Data.Data);
  }

  async create({
    brightness,
    heater,
    humidity,
    lamp,
    sensorsStatus,
    temperature,
    valve
  }) {
    const data = this.repository.create({
      brightness,
      heater,
      humidity,
      lamp,
      temperature,
      valve,
      sensorsStatus
    });
    await this.repository.save(data);
  }

  async findById(id) {
    const data = await this.repository.findOne(id);
    return data;
  }

  async findByName(name) {
    //console.log(client);
    const data = await this.repository.findOne({
      where: {
        'name': {
          $eq: `${name}`
        }
      }
    });
    return data;
  }

  async list() {
    const data = await this.repository.find();
    return data;
  }

  async delete(id) {
    const groupAction = await this.repository.findOne(id);
    await this.repository.delete(groupAction);
  }

}

exports.DataRepository = DataRepository;