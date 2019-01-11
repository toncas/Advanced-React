require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const checkServerRun = serverDetails => console.log(`Server running on http://localhost:${serverDetails.port}`);
const server = createServer();
server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  }
}, checkServerRun)