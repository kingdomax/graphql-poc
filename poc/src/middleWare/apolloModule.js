import { importSchema } from 'graphql-import';
import { ApolloServer } from 'apollo-server-express';
//import { ApolloMeasurement } from '../util/apolloMeasurement';
import { mockRemoteResolver } from '../remoteGraphql/resolver/mockRemoteResolver';
import { getProxySchema, getComposingSchema } from '../remoteGraphql/schema/remoteSchema';
import { searchDetailResolver } from '../localGraphql/searchDetail/resolver/searchDetailResolver';

export const bootstrapApollo = (application, nodeConfig) => {
    
    const baseApolloConfig = {
        playground: true,
        introspection: true,
        context: ({ req }) => ({ 
            headers: req.headers
        }),
        mocks: nodeConfig.apolloMock === 'true' ? mockRemoteResolver : false
        // extensions: [() => new ApolloMeasurement()],
        // engine: {
        //   apiKey: 'service:kingdomax-8981:ziSpfh-NBKgPlZUhTUup0Q'
        // },
        // persistedQueries: {
        // 	  cache: new MemcachedCache(['memcached-server-1']) // todo-moch: change to redis
        // },
    };
    
    if (nodeConfig.apolloMode === 'proxy') {    
        getProxySchema(nodeConfig).then(schema => { 
            new ApolloServer({
                ...baseApolloConfig,
                schema
            }).applyMiddleware({ app: application });
        });
    } else if (nodeConfig.apolloMode === 'compose') {
        getComposingSchema(nodeConfig).then(schema => { 
            new ApolloServer({
                ...baseApolloConfig,
                schema
            }).applyMiddleware({ app: application });
        });
    } else {
        new ApolloServer({
            ...baseApolloConfig,
            resolvers: searchDetailResolver,
            typeDefs: importSchema('./src/localGraphql/searchDetail/schema/searchDetailSchema.graphql')
        }).applyMiddleware({ app: application });
    }
};
