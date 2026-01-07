"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "./providers";
import { LoadingProvider } from "@/context/LoadingContext";
import { useState } from "react";

<<<<<<< HEAD
export default function ClientProviders({ children }: {
    children: React.ReactNode;
}) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <LoadingProvider>
            <Providers>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </Providers>
        </LoadingProvider>
    );
=======
export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <LoadingProvider>
      <Providers>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Providers>
    </LoadingProvider>
  );
>>>>>>> 4fba2396524211f47ea000b97c8da93261a1ffa1
}
