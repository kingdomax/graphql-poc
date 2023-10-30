export class ApolloMeasurement {
    
    parsingDidStart() {
        console.time('Query parsing');
        return () => {
            console.timeEnd('Query parsing');
        };
    }
    
    validationDidStart() {
        console.time('Query validation');
        return () => {
            console.timeEnd('Query validation');
        };
    }
    
    executionDidStart() {
        console.time('GraphQL execution');
        return () => {
            console.timeEnd('GraphQL execution');
        };
    }
}
