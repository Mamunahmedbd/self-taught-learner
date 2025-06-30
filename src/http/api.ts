import { HttpClient } from "@/lib/http-client";
import { ENDPOINT } from "./endpoints";
import { HttpServer } from "@/lib/http-server";
import { ProductListResponse, SingleProductResponse, CategoriesResponse } from "./types";

export const getProductsServer = async () => {
  const response = await HttpServer.get<ProductListResponse>(ENDPOINT.products);
  return response;
};
// get Operators
export const getProducts = async () => {
  const response = await HttpClient.get<ProductListResponse>(ENDPOINT.products);
  return response;
};

export const getCategoriesServer = async () => {
  const response = await HttpServer.get<CategoriesResponse>(ENDPOINT.categories);
  return response;
};
// get Operators
export const getCategories = async () => {
  const response = await HttpClient.get<CategoriesResponse>(ENDPOINT.categories);
  return response;
};

export const getProductServer = async (slug: string) => {
  const response = await HttpServer.get<SingleProductResponse>(ENDPOINT.product + "/" + slug);
  return response;
};
// get Operators
export const getProduct = async (slug: string) => {
  const response = await HttpClient.get<SingleProductResponse>(ENDPOINT.product + "/" + slug);
  return response;
};
