// app/providers.tsx (Client Component)
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  // Create QueryClient instance only once using useState
  const [queryClient] = useState(
    () => new QueryClient({
      defaultOptions: {
        queries: {
          // Prevent refetching immediately on the client
          staleTime: 60 * 1000, // 1 minute
        },
      },
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}