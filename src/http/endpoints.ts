export const ENDPOINT = {
  products: "/shop/products",
  categories: "/categories",
  product: "/product",
} as const;

type END_POINTS_TYPE = typeof ENDPOINT;

export const QUERY_KEYS: Record<keyof END_POINTS_TYPE, keyof END_POINTS_TYPE> = Object.keys(
  ENDPOINT,
).reduce((acc, current) => {
  acc[current as keyof END_POINTS_TYPE] = current as keyof END_POINTS_TYPE;
  return acc;
}, {} as Record<keyof END_POINTS_TYPE, keyof END_POINTS_TYPE>);
