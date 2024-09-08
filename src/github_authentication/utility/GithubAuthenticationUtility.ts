export const getGithubAuthenticationUrl = (clientId: string, redirectUri: string): string => {
    return `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}`;
};

export const getRedirectUri = (): string => {
    return process.env.REACT_APP_REDIRECT_URI as string;
};
