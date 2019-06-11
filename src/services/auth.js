export const TOKEN_KEY = "@voltarie-Token";
export const TOKEN_NAME = "@voltarie-Name";
export const TOKEN_SETID = "@voltarie-value";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUsername = () => localStorage.getItem(TOKEN_NAME);
export const getSetId = () => localStorage.getItem(TOKEN_SETID);
export const logout = () => {
  localStorage.clear();
};

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const username = token => {
  localStorage.setItem(TOKEN_NAME, token);
};
export const setId = token => {
  localStorage.setItem(TOKEN_SETID, token);
};
