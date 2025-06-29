import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import { AppTheme } from '../types/ThemeTypes';
import { useNavigation } from '@react-navigation/native';
import { X } from 'lucide-react-native';

import AlphaText from '../styleguide/CryptoText';
import CryptoButton from '../styleguide/CryptoButton';

const coins = ['BTC', 'ETH', 'SOL', 'ADA'];
const categories = ['Market', 'Regulation', 'Tech'];

const FilterScreen = () => {
  const theme: AppTheme = useTheme();
  const navigation = useNavigation();

  const [selectedCoins, setSelectedCoins] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleItem = (
    item: string,
    list: string[],
    setList: (v: string[]) => void
  ) => {
    setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);
  };

  const resetFilters = () => {
    setSelectedCoins([]);
    setSelectedCategories([]);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <X size={24} color={theme.colors.primary} />
        </TouchableOpacity>
        <AlphaText type="H3" style={styles.headerText}>
          Filters
        </AlphaText>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Coins */}
        <AlphaText type="H4" style={styles.label}>Coins</AlphaText>
        <View style={styles.optionsContainer}>
          {coins.map(coin => {
            const selected = selectedCoins.includes(coin);
            return (
              <TouchableOpacity
                key={coin}
                style={[
                  styles.option,
                  {
                    backgroundColor: selected
                      ? theme.colors.primary
                      : theme.colors.surface,
                  },
                ]}
                onPress={() => toggleItem(coin, selectedCoins, setSelectedCoins)}
              >
                <AlphaText
                  type="B2"
                  style={{
                    color: selected
                      ? theme.colors.onPrimary
                      : theme.colors.onSurface,
                  }}
                >
                  {coin}
                </AlphaText>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Categories */}
        <AlphaText type="H4" style={styles.label}>Categories</AlphaText>
        <View style={styles.optionsContainer}>
          {categories.map(category => {
            const selected = selectedCategories.includes(category);
            return (
              <TouchableOpacity
                key={category}
                style={[
                  styles.option,
                  {
                    backgroundColor: selected
                      ? theme.colors.primary
                      : theme.colors.surface,
                  },
                ]}
                onPress={() =>
                  toggleItem(category, selectedCategories, setSelectedCategories)
                }
              >
                <AlphaText
                  type="B2"
                  style={{
                    color: selected
                      ? theme.colors.onPrimary
                      : theme.colors.onSurface,
                  }}
                >
                  {category}
                </AlphaText>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <CryptoButton
            title="Save"
            variant="contained"
            color="primary"
            size="medium"
            onPress={() => navigation.goBack()}
            style={styles.button}
          />
          <CryptoButton
            title="Reset"
            variant="outlined"
            color="default"
            size="medium"
            onPress={resetFilters}
            style={styles.button}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    textAlign: 'center',
  },
  scrollContainer: {
    paddingBottom: 24,
  },
  label: {
    marginTop: 20,
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 32,
    gap: 16,
    justifyContent: 'center',
  },
  button: {
    flex: 1,
  },
});
