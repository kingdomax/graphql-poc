import dotenv from 'dotenv';
import express from 'express';
// import { bootstrapCors } from './src/middleWare/corsModule';
import { bootstrapApollo } from './src/middleWare/apolloModule';
import { bootstrapRouters } from './src/middleWare/routerModule';
// import { bootstrapMetrics } from './src/middleWare/metricsModule';
// import { bootstrapCompression } from './src/middleWare/compressionModule';

// LOAD CONFIG
dotenv.config()
const config = {
	port: process.env.PORT,
	apolloMode: process.env.APOLLO_MODE,
	apolloMock: process.env.APOLLO_MOCK,
	remote1: process.env.REMOTE_SERVER_1,
	remote2: process.env.REMOTE_SERVER_2
};

// EXPRESS + MIDDLEWARES
const application = express();
// bootstrapCors(application);
bootstrapRouters(application);
// bootstrapMetrics(application);
// bootstrapCompression(application);
bootstrapApollo(application, config);

// START !!
application.listen({ port: config.port }, console.log('🚀  Server is ready at http://localhost:' + config.port + ' 🚀'));
