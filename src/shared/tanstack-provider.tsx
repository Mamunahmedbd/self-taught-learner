"use client";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils/get-error-message";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // keep data fresh for 5 minutes
        retry: 2,
        retryDelay: 1000,
        refetchInterval: 1000 * 60 * 5, //  5 minutes
        refetchIntervalInBackground: false,
      },
      mutations: {
        onError: (error: unknown) => {
          const message = getErrorMessage(error);
          toast.error(message);
        },
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
