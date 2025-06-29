import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStore = create(
  persist(
    (set, get) => ({
      news: [],
      loading: false,
      error: null,
      filters: {
        coins: [],
        categories: []
      },
      lastUpdated: null,
      
      // Actions
      setNews: (news) => set({ news, lastUpdated: new Date().toISOString() }),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
      setFilters: (filters) => set({ filters }),
      clearFilters: () => set({ filters: { coins: [], categories: [] } }),
      
      // Filtered news getter
      getFilteredNews: () => {
        const { news, filters } = get();
        if (filters.coins.length === 0 && filters.categories.length === 0) {
          return news;
        }
        
        return news.filter(item => {
          const matchesCoin = filters.coins.length === 0 || 
            (item.currencies && item.currencies.some(c => filters.coins.includes(c.code)));
            
          const matchesCategory = filters.categories.length === 0 ||
            (item.metadata && filters.categories.some(cat => 
              item.metadata.title.toLowerCase().includes(cat.toLowerCase()) ||
              item.metadata.description.toLowerCase().includes(cat.toLowerCase())
            ));
            
          return matchesCoin && matchesCategory;
        });
      }
    }),
    {
      name: 'cryptobuzz-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useStore;