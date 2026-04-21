const serverless = require('serverless-http');
const app = require('../server');

const serverlessHandler = serverless(app);

module.exports.handler = async (event, context) => {
  await app.bootstrapDone;
  return serverlessHandler(event, context);
};
