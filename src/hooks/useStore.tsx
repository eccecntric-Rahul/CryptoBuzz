import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchCryptoNews } from '../api/newsApi';

interface NewsItem {
  id: number;
  title: string;
  published_at: string;
  metadata?: {
    title: string;
    description: string;
  };
  currencies?: Array<{ code: string }>;
}

interface Filters {
  coins: string[];
  kinds: string[];
}

interface StoreState {
  news: NewsItem[];
  loading: boolean;
  error: string | null;
  filters: Filters;
  lastUpdated: string | null;
  
  // Actions
  setNews: (news: NewsItem[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setFilters: (filters: Filters) => void;
  clearFilters: () => void;
  
  // News getter - all filtering is handled by the API
  getFilteredNews: () => NewsItem[];
  
  // Fetch news with current filters
  fetchNewsWithFilters: () => Promise<void>;
}

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      news: [],
      loading: false,
      error: null,
      filters: {
        coins: [],
        kinds: []
      },
      lastUpdated: null,
      
      // Actions
      setNews: (news) => set({ news, lastUpdated: new Date().toISOString() }),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
      setFilters: (filters) => set({ filters }),
      clearFilters: () => set({ filters: { coins: [], kinds: [] } }),
      
      // News getter - all filtering is handled by the API
      getFilteredNews: () => {
        const { news } = get();
        return news; // Return all news as filtering is done by the API
      },
      
      // Fetch news with current filters
      fetchNewsWithFilters: async () => {
        const { filters } = get();
        set({ loading: true, error: null });
        
        try {
          const newsData = await fetchCryptoNews(filters);
          set({ news: newsData, lastUpdated: new Date().toISOString(), loading: false });
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'Failed to fetch news', loading: false });
        }
      }
    }),
    {
      name: 'cryptobuzz-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useStore;