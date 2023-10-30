//import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import express from 'express';
//import appmetrics from 'appmetrics-dash';
//import appmetricsPrometheus from 'appmetrics-prometheus';
import { importSchema } from 'graphql-import';
import { ApolloServer } from 'apollo-server-express';
import { mockResolver } from './resolver/mockResolver';
import { ApolloMeasurement } from './util/apolloMeasurement';

// Load Config
dotenv.config()
const port = parseInt(process.env.PORT || 10000);

// Start Express
const app = express();

// Start all monitoring
/*appmetrics.attach({ 
	url: '/dashboard',
	title: 'mock-gq-server1'
});
appmetricsPrometheus.attach();
app.use(morgan(function (tokens, req, res) {
	return [
		new Date(),
		tokens.method(req, res),
		tokens.url(req, res), ' : ',
		tokens['response-time'](req, res), 'ms'
	].join('');
}));*/

// Allow CORS
// app.use(cors());

// Temp endpoint
app.get('/', (req, res) => { 
	return res.send('Hello from mock-gq-server1'); 
});

// Add Apollo as middleware
new ApolloServer({
	typeDefs: importSchema('./schema/mockSchema.graphql'),
	resolvers: mockResolver,
	introspection: true,
	playground: true,
	//extensions: [() => new ApolloMeasurement()]
}).applyMiddleware({ app });

app.listen({ port}, console.log('1️⃣  MOCK-GQ-SERVER-1 is ready at http://localhost:' + port + '/graphql 1️⃣'));
