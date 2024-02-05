import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

const baseGraphQLUrl = import.meta.env.VITE_API_GRAPHQL_URL;
const httpLink = createHttpLink({
    uri: baseGraphQLUrl
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
    cache,
    uri: baseGraphQLUrl
});
