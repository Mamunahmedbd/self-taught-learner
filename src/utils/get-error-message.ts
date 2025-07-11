import { AxiosError } from "axios";

export function getErrorMessage(error: unknown): string {
  if (error instanceof AxiosError) {
    return error.response?.data?.message || error.message || "An unexpected Axios error occurred.";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "An unknown error occurred.";
}
