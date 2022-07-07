"use strict";

require("reflect-metadata");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

require("express-async-errors");

require("@shared/container/index");

var _index2 = require("./routes/index");

var _AppErrors = require("@shared/errors/AppErrors");

var _typeorm = require("typeorm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// createConnection();
(0, _typeorm.createConnection)();
const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_index2.router);
app.use((err, request, response, next) => {
  if (err instanceof _AppErrors.AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`
  });
});
app.listen(3333, () => console.log('🚀 Server is running on port 3333 🚀'));