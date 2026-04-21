const serverless = require('serverless-http');
const app = require('../server');

// Apply the serverless-http wrapper to our Express app
module.exports.handler = serverless(app);
