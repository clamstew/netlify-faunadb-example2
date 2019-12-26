const APP_KEY = "VACAHOMES"; // @FIXME - try to find a clever app name some day
const LOGIN_TOKEN_LS_KEY = `${APP_KEY}.auth_token`;

export const getAuthToken = () => {
  localStorage.getItem(LOGIN_TOKEN_LS_KEY);
};

export const setAuthToken = tokenSecret => {
  localStorage.setItem(LOGIN_TOKEN_LS_KEY, tokenSecret);
};
