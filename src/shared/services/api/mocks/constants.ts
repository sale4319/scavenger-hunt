export const PUBLIC_URL = process.env.PUBLIC_URL as string;
export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";
export const MOCK_API_REQUESTS =
  process.env.REACT_APP_MOCK_API_REQUESTS === "true";
export const API_URL =
  process.env.REACT_APP_API_URL ||
  `/${process.env.REACT_APP_CONTEXT_PATH as string}/api`;
export const DATA_FETCH_ERROR = "DATA_FETCH_ERROR";
