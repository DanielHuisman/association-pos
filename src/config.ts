interface Config {
    api: {
        url: string;
        accessToken: string;
    };

    sentry: {
        dsn: string;
    };
}

export const config: Config = {
    api: {
        url: process.env.API_URL || 'DUMMY_API_URL',
        // TODO: remove this access token and implement proper authentication
        accessToken: process.env.API_ACCESS_TOKEN || 'DUMMY_API_ACCESS_TOKEN'
    },

    sentry: {
        dsn: process.env.SENTRY_DSN || 'DUMMY_SENTRY_DSN'
    }
};
