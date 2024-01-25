export const API_BASE_URL: string = 'http://localhost:8080';
export const ACCESS_TOKEN: string = 'accessToken';

export const OAUTH2_REDIRECT_URI: string = 'http://localhost:3000/oauth2/redirect';

export const GOOGLE_AUTH_URL: string = `${API_BASE_URL}/oauth2/authorize/google?redirect_uri=${OAUTH2_REDIRECT_URI}`;
export const FACEBOOK_AUTH_URL: string = `${API_BASE_URL}/oauth2/authorize/facebook?redirect_uri=${OAUTH2_REDIRECT_URI}`;
export const GITHUB_AUTH_URL: string = `${API_BASE_URL}/oauth2/authorize/github?redirect_uri=${OAUTH2_REDIRECT_URI}`;
