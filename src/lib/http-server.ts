import axios from "axios";

const httpServer = axios.create({
  baseURL: "http://157.230.240.97:9999/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export class HttpServer {
  static async get<T>(url: string, params?: unknown) {
    const response = await httpServer.get<T>(url, {
      params,
    });
    return response.data;
  }

  static async post<T>(url: string, data?: unknown) {
    const response = await httpServer.post<T>(url, data);
    return response.data;
  }

  static async put<T>(url: string, data: unknown) {
    const response = await httpServer.put<T>(url, data);
    return response.data;
  }

  static async patch<T>(url: string, data: unknown) {
    const response = await httpServer.patch<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string) {
    const response = await httpServer.delete<T>(url);
    return response.data;
  }
}
