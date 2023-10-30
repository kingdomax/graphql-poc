import fetch from 'node-fetch';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
// import { IamCounter } from '../../util/iAmCounter';
import { introspectSchema, mergeSchemas, makeRemoteExecutableSchema } from 'apollo-server-express';

/*
const counter = new IamCounter();
const roundRobinFetcher = (uri, options) => {
    const pools = [
        "http://10.121.65.24:10000/graphql",
        "http://10.121.65.135:10000/graphql",
        "http://10.121.65.141:10000/graphql",
        "http://10.121.65.143:10000/graphql"
    ];
    return fetch(pools[counter.get() % pools.length], options);
};
*/

export const getProxySchema = (nodeConfig) => { 
    // TODO: refactor getProxySchema() function to read pools from config file
    // const network = new HttpLink({ fetch: roundRobinFetcher });
    
    const httpLink = new HttpLink({ uri: nodeConfig.remote1 , fetch });
    const headersLink = setContext((request, previousContext) => ({ 
        headers: previousContext.graphqlContext.headers 
    })).concat(httpLink);

    return introspectSchema(httpLink).then(remoteSchema => {
        return makeRemoteExecutableSchema({ 
            schema: remoteSchema, 
            link: headersLink 
        });
    });
};

export const getComposingSchema = (nodeConfig) => {
    const network1 = new HttpLink({ uri: nodeConfig.remote1 , fetch });
    const network1Schema = introspectSchema(network1).then(remoteSchema => {
        return makeRemoteExecutableSchema({ 
            schema: remoteSchema, 
            link: network1 
        });
    });

    const network2 = new HttpLink({ uri: nodeConfig.remote2, fetch });
    const network2Schema = introspectSchema(network2).then(remoteSchema => {
        return makeRemoteExecutableSchema({ 
            schema: remoteSchema, 
            link: network2 
        });
    });

    return Promise.all([network1Schema, network2Schema]).then(schemas => {
        return mergeSchemas({ schemas });
    });
};
