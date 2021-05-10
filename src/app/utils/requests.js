import axios from "axios";

import auth from "../settings/auth";
import { API_URL } from "../settings/config";

function parseJSON(response) {
  if (response.status >= 400 && response.status < 500) {
    return response;
  }
  return response.data;
}

function checkStatus(error) {
  if (error.response.status >= 200 && error.response.status < 300) {
    return error;
  }
  if (error.response.status === 403) {
    auth.clearUserInfo();
    window.location.pathname("auth/login/");
  }
  console.log(error.response.status);
  const error1 = new Error(error.response.statusText);

  error1.data = error.response.data;
  error1.status = error.response.status;
  console.log(error1);
  return error1;
}

function formatQueryParamsArray(params, k) {
  if (Array.isArray(params[k])) {
    return params[k]
      .map((item) => `${encodeURIComponent(k)}=${encodeURIComponent(item)}`)
      .join("&");
  }
  return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
}

function formatQueryParams(params) {
  return Object.keys(params)
    .map((k) => formatQueryParamsArray(params, k))
    .join("&");
}

const authenticatedRequest = axios.create({
  baseURL: API_URL,
  paramsSerializer: function (params) {
    return formatQueryParams(params);
  },
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },
});

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */

export default function request(url, options = {}, stringify = true) {
  // Set headers
  if (stringify) {
    options.headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };
  }

  const token = auth.getToken();

  if (token) {
    options.headers = {
      Authorization: `Bearer ${token}`,
      ...options.headers,
    };
  }

  if (options.params) {
    const params = formatQueryParams(options.params);
    delete options.params;
    url = `${url}?${params}`;
  }

  // Stringify body object
  if (options && options.body && stringify) {
    options.data = JSON.stringify(options.body);
  }

  return authenticatedRequest(url, options).then(parseJSON).catch(checkStatus);
}
