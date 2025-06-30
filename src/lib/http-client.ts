import axios, { AxiosRequestConfig } from "axios";

const Axios = axios.create({
  baseURL: "http://157.230.240.97:9999/api/v1",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export class HttpClient {
  static async get<T>(url: string, params?: AxiosRequestConfig<unknown>) {
    const response = await Axios.get<T>(url, { params });
    return response.data;
  }

  static async post<T>(url: string, data?: unknown, options?: AxiosRequestConfig<unknown>) {
    const response = await Axios.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>(url: string, data: unknown, options?: AxiosRequestConfig<unknown>) {
    const response = await Axios.put<T>(url, data, options);
    return response.data;
  }

  static async patch<T>(url: string, data: unknown, options?: AxiosRequestConfig<unknown>) {
    const response = await Axios.patch<T>(url, data, options);
    return response.data;
  }

  static async delete<T>(url: string, options?: AxiosRequestConfig<unknown>) {
    const response = await Axios.delete<T>(url, options);
    return response.data;
  }
}
