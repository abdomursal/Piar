import { API_BASE_URL, httpClient, onApiError } from "./api";

export const editStation = async (data: any) => {
  const { id } = data;
  const URL = API_BASE_URL + `/stations/${id}`;
  return httpClient
    .patch(URL, data)
    .then((response: Record<string, any>) => {
      return response.data;
    })
    .catch((err: any) => {
      onApiError(err);
    });
};

export const addStation = async (data: any) => {
  const URL = API_BASE_URL + "/stations";
  return httpClient
    .post(URL, data)
    .then((response: Record<string, any>) => {
      return response.data;
    })
    .catch((err: any) => {
      onApiError(err);
    });
};

export const getStations = async () => {
  const URL = API_BASE_URL + "/stations";
  return httpClient
    .get(URL)
    .then((response: Record<string, any>) => {
      return response.data;
    })
    .catch((err: any) => {
      onApiError(err);
    });
};

export const removeStation = async (id?: number | undefined) => {
  const URL = API_BASE_URL + `/stations/${id}`;
  return httpClient
    .delete(URL)
    .then((response: Record<string, any>) => {
      return response.data;
    })
    .catch((err: any) => {
      onApiError(err);
    });
};
