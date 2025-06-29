import axios from 'axios';
import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 15 * 60 * 1000, // 15 minutes
      retry: 2, // Retry failed requests 2 times
      refetchOnWindowFocus: true, // Don't refetch when app comes back to focus
    },
  },
});

export const fetchCryptoNews = async () => {
  try {
    const response = await axios.get('https://cryptopanic.com/api/developer/v2/posts/', {
      params: {
        auth_token: '8aa6636771730d1c5dbbdc0623c9c367f1d9b9b3',
        public: true
      }
    });
    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch news');
  }
};