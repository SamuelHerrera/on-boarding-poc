import express from 'express';
import { json, urlencoded } from 'body-parser';
import { createServer } from 'http';
import LogRocket from 'logrocket';
import api from './routes/api.js';
import { neo4jSessionCleanup } from './middleware/neo4j-session-cleanup';

require('dotenv').config();

LogRocket.init('l7aqn6/on-board-poc');
const app = express();

// Parsers
app.use(json({
    limit: '50mb'
}));
app.use(urlencoded({
    limit: '50mb',
    extended: true
}));

app.use(neo4jSessionCleanup);

// API location
app.use('/api', api);

//Set Port
const port = process.env.PORT || 3000;
app.set('port', port);

const server = createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));