"use client";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./endpoints";
import { getCategories, getProduct, getProducts } from "./api";
import { Category, ProductData, ProductList } from "./types";
import { useParams } from "next/navigation";

export const useCategories = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: [QUERY_KEYS["categories"]],
    queryFn: async () => await getCategories(),
  });

  return {
    isLoading,
    categories: data?.data || ([] as Category[]),
    isError,
    error,
  };
};

export const useProducts = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: [QUERY_KEYS["products"]],
    queryFn: async () => await getProducts(),
  });

  return {
    isLoading,
    products: data?.data || ([] as ProductList[]),
    isError,
    error,
  };
};

export const useProduct = () => {
  const { slug } = useParams<{ slug: string }>();

  const { isLoading, data, isError, error, isSuccess } = useQuery({
    queryKey: [QUERY_KEYS["product"], slug],
    queryFn: async () => await getProduct(slug!),
    // enabled: !!slug,
  });

  return {
    isLoading,
    isSuccess,
    product: data?.data || ({} as ProductData),
    isError,
    error,
  };
};
