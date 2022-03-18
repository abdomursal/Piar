import { API_BASE_URL, httpClient, onApiError } from "./api";

export const userLogin = async (data: any) => {
  return httpClient
    .post(API_BASE_URL + "/users/auth", data)
    .then((response: Record<string, any>) => {
      return response.data;
    })
    .catch((err: any) => {
      onApiError(err);
    });
};

export const getUsers = async () => {
  const URL = API_BASE_URL + "/users";
  return httpClient
    .get(URL)
    .then((response: Record<string, any>) => {
      return response.data;
    })
    .catch((err: any) => {
      onApiError(err);
    });
};

export const addCurrentUser = async (data: any) => {
  return httpClient
    .get(API_BASE_URL + "/users/me", data)
    .then((response: Record<string, any>) => {
      return response.data;
    })
    .catch((err: any) => {
      onApiError(err);
    });
};

export const addUser = async (data: any) => {
  return httpClient
    .post(API_BASE_URL + "/users", data)
    .then((response: Record<string, any>) => {
      return response.data;
    })
    .catch((err: any) => {
      onApiError(err);
    });
};

export const editUser = async (data: any) => {
  const { id } = data;
  const URL = API_BASE_URL + `/users/${id}`;
  return httpClient
    .patch(URL, data)
    .then((response: Record<string, any>) => {
      return response.data;
    })
    .catch((err: any) => {
      onApiError(err);
    });
};

export const removeUser = async (id?: number) => {
  const URL = API_BASE_URL + `/users/${id}`;
  return httpClient
    .delete(URL)
    .then((response: Record<string, any>) => {
      return response.data;
    })
    .catch((err: any) => {
      onApiError(err);
    });
};
