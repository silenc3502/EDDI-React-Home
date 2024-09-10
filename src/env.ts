interface Env {
    mode: string | undefined;
    api: {
        MAIN_API_URL: string | undefined;
        AI_BASE_URL: string | undefined;
    };
}

const env: Env = {
    mode: process.env.NODE_ENV,
    api: {
        MAIN_API_URL: process.env.REACT_APP_MAIN_API_URL,
        AI_BASE_URL: process.env.REACT_APP_AI_BASE_URL,
    },
};

export default env;
