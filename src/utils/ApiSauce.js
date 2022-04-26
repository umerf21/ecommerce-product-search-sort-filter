import { create } from 'apisauce';

import {
  API_LOG,
  BASE_URL,
  API_TIMEOUT,
  REQUEST_TYPE,
} from '../config/WebService';

const api = create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
});

async function callRequest(url, payload, headers = {}, parameter = '') {
  // get attributes from url

  const { type } = url;

  const route =
    parameter && parameter !== '' ? url.route + '?' + parameter : url.route;

  headers['Content-Type'] = 'application/json';

  // init header object
  const headerObject = { headers };

  // init responseoc
  let response;

  // on type send request
  switch (type) {
    case REQUEST_TYPE.GET:
      response = await api.get(route, {}, { params: payload, ...headerObject });
      break;
    case REQUEST_TYPE.POST:
      response = await api.post(route, payload, headerObject);
      break;
    case REQUEST_TYPE.DELETE:
      response = await api.delete(
        route,
        {},
        { data: payload, ...headerObject }
      );
      //response = await api.delete(route, payload, headerObject);
      break;
    case REQUEST_TYPE.PUT:
      response = await api.put(route, payload, headerObject);
      break;
    case REQUEST_TYPE.PATCH:
      response = await api.patch(route, payload, headerObject);
      break;
    default:
      response = await api.get(route, payload, headerObject);
  }

  // log web service response
  if (API_LOG) {
    console.log('url', url);
    console.log('response', response);
    console.log('payload', payload);
    console.log('headers', headers);
    console.log('route', route);
  }

  return handleResponse(response);
}

function handleResponse(response) {
  return new Promise((resolve, reject) => {
    const isResponseValid = response.ok && response.data ? true : false;

    if (isResponseValid) {
      resolve(response.data);
    }
  });
}

export { callRequest };
