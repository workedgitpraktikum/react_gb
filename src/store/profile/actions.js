export const SHOW_USERNAME = "SHOW_USERNAME";
export const SET_USERNAME = "SET_USERNAME";
export const INIT_USER_INFO = "INIT_USER_INFO";

export const showUsername = (isShowUsername) => ({
  type: SHOW_USERNAME,
  payload: isShowUsername,
});

export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const initUserInfo = (payload) => ({
  type: INIT_USER_INFO,
  payload,
});
