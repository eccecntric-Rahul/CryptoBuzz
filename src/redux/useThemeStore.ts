// src/store/themeStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DarkTheme, LightTheme } from '../theme/Theme';
import { AppTheme } from '../types/ThemeTypes';

export interface ThemeState {
  theme: AppTheme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (dark: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: LightTheme,
      isDark: true,
      toggleTheme: () =>
        set((state) => {
          const isDark = !state.isDark;
          return {
            isDark,
            theme: isDark ? DarkTheme : LightTheme,
          };
        }),
      setTheme: (isDark) =>
        set({
          isDark,
          theme: isDark ? DarkTheme : LightTheme,
        }),
    }),
    {
      name: 'theme-storage', // localStorage key
      partialize: (state) => ({ isDark: state.isDark }), // only persist what's needed
      onRehydrateStorage: () => (state) => {
        if (state) {
          // sync theme with isDark
          state.setTheme(state.isDark);
        }
      },
    }
  )
);
