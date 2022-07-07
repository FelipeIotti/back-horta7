"use strict";

var _tsyringe = require("tsyringe");

var _DataRepository = require("@modules/data/infra/typeorm/repositories/DataRepository");

_tsyringe.container.registerSingleton('DataRepository', _DataRepository.DataRepository);