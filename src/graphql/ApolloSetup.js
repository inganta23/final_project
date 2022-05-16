import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://enhanced-haddock-45.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret':
            'HQXwjSRooTurUBztdozYYjVaO7bAgqgdJV99MpO2eF8Ruj9HBzvuv631h1S7b0Pj',
            
    },
});
export default client;