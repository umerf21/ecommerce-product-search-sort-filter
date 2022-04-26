// staging
export const BASE_URL = 'https://fakestoreapi.com';

// REQUEST TYPES
export const REQUEST_TYPE = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  PUT: 'put',
  PATCH: 'patch',
};

export const LIMIT = 10;
export const API_TIMEOUT = 30000;
export const API = '/api/';

export const API_LOG = true;

/// ------- Login -------- ///

export const API_GET_PRODUCTS = {
  route: `${BASE_URL}/products`,
  access_token_required: false,
  type: REQUEST_TYPE.GET,
};

export const API_CATEGORIES = {
  route: `${BASE_URL}/products/categories`,
  access_token_required: false,
  type: REQUEST_TYPE.GET,
};
