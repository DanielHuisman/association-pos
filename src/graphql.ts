import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';

import {config} from './config';

const link = createHttpLink({
    uri: config.api.url,
    headers: {
        // TODO: remove this access token and implement proper authentication (https://www.apollographql.com/docs/react/networking/authentication/#header)
        Authorization: `Bearer ${config.api.accessToken}`
    }
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});
