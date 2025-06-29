import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import { CustomTheme } from '../types/ThemeTypes';
import { useNavigation } from '@react-navigation/native';
import CryptoText from '../styleguide/CryptoText';
import CryptoButton from '../styleguide/CryptoButton';
import useStore from '../hooks/useStore';

const coins = ['BTC', 'ETH', 'SOL', 'ADA', 'BNB', 'XRP', 'DOT', 'LINK'];
// CryptoPanic API kind values: news, media, tweet, reddit_post, reddit_comment
const kinds = ['news', 'media', 'tweet', 'reddit_post', 'reddit_comment'];

const FilterScreen = () => {
  const theme: CustomTheme = useTheme();
  const navigation = useNavigation();
  const { filters, setFilters, clearFilters } = useStore();

  const [selectedCoins, setSelectedCoins] = useState<string[]>(filters.coins || []);
  const [selectedKinds, setSelectedKinds] = useState<string[]>(filters.kinds || []);

  // Update local state when store filters change
  useEffect(() => {
    setSelectedCoins(filters.coins || []);
    setSelectedKinds(filters.kinds || []);
  }, [filters]);

  const toggleItem = (
    item: string,
    list: string[],
    setList: (v: string[]) => void,
  ) => {
    setList(
      list.includes(item) ? list.filter(i => i !== item) : [...list, item],
    );
  };

  const resetFilters = () => {
    setSelectedCoins([]);
    setSelectedKinds([]);
    clearFilters();
  };

  const handleSave = () => {
    // Save filters to store
    setFilters({
      coins: selectedCoins,
      kinds: selectedKinds
    });
    navigation.goBack();
  };

  const getKindDisplayName = (kind: string) => {
    switch (kind) {
      case 'news':
        return 'News';
      case 'media':
        return 'Media';
      case 'tweet':
        return 'Tweets';
      case 'reddit_post':
        return 'Reddit Posts';
      case 'reddit_comment':
        return 'Reddit Comments';
      default:
        return kind;
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.header}>
        <CryptoText type="H2" style={styles.headerText}>
          Filters
        </CryptoText>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CryptoText type="B1" style={styles.label}>
          Coins
        </CryptoText>
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
                    borderColor: theme.colors.border,
                    borderWidth: 1,
                  },
                ]}
                onPress={() =>
                  toggleItem(coin, selectedCoins, setSelectedCoins)
                }
              >
                <CryptoText
                  type="B2"
                  style={{
                    color: selected
                      ? theme.colors.onPrimary
                      : theme.colors.onSurface,
                  }}
                >
                  {coin}
                </CryptoText>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Kinds */}
        <CryptoText type="B1" style={styles.label}>
          Content Types
        </CryptoText>
        <View style={styles.optionsContainer}>
          {kinds.map(kind => {
            const selected = selectedKinds.includes(kind);
            return (
              <TouchableOpacity
                key={kind}
                style={[
                  styles.option,
                  {
                    backgroundColor: selected
                      ? theme.colors.primary
                      : theme.colors.surface,
                    borderColor: theme.colors.border,
                    borderWidth: 1,
                  },
                ]}
                onPress={() =>
                  toggleItem(kind, selectedKinds, setSelectedKinds)
                }
              >
                <CryptoText
                  type="B2"
                  style={{
                    color: selected
                      ? theme.colors.onPrimary
                      : theme.colors.onSurface,
                  }}
                >
                  {getKindDisplayName(kind)}
                </CryptoText>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Buttons */}
      </ScrollView>
      <View style={styles.buttonRow}>
        <CryptoButton
          title="Reset"
          variant="outlined"
          color="default"
          size="medium"
          onPress={resetFilters}
          style={styles.button}
        />
        <CryptoButton
          title="Save"
          variant="contained"
          color="primary"
          size="medium"
          onPress={handleSave}
          style={styles.button}
        />
      </View>
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
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  button: {
    flex: 1,
  },
});
