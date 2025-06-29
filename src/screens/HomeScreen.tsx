import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useQuery } from 'react-query';
import { fetchCryptoNews } from '../api/newsApi';
import NetInfo from '@react-native-community/netinfo';
import useStore from '../hooks/useStore';
import CryptoText from '../styleguide/CryptoText';
import { useTheme } from 'react-native-paper';
import { CustomTheme } from '../types/ThemeTypes';

const HomeScreen = ({ navigation }: any) => {
  const {
    news,
    setNews,
    loading,
    error,
    setError,
    getFilteredNews,
    lastUpdated,
    filters,
  }: any = useStore();

  const [isConnected, setIsConnected] = useState(true);
  const theme: CustomTheme = useTheme();
  
  const { refetch } = useQuery(
    ['cryptoNews', filters], 
    () => fetchCryptoNews(filters), 
    {
      enabled: false, // Disable automatic fetching
      onSuccess: data => {
        setNews(data);
      },
      onError: (err: any) => {
        setError(err.message || 'Failed to fetch news');
      },
    }
  );

  useEffect(() => {
    // Check network connection
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected ?? true);
    });

    // Load initial data if we have no cached data
    if (news.length === 0 && isConnected) {
      refetch();
    }

    return () => unsubscribe();
  }, []);
  console.log("news",news);
  // Refetch when filters change
  useEffect(() => {
    if (isConnected && news.length > 0) {
      refetch();
    }
  }, [filters]);

  const handleRefresh = () => {
    if (isConnected) {
      refetch();
    } else {
      // Alert.alert('Offline', 'You are currently offline. Using cached data.');
    }
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={[
        styles.newsItem,
        {
          backgroundColor: theme.colors.card,
          borderColor: theme.colors.border,
        },
      ]}
      onPress={() => navigation.navigate('NewsDetailScreen', { item: item })}
      activeOpacity={0.7}
    >
      <View style={styles.newsContent}>
        <View style={styles.newsHeader}>
          <View style={styles.newsSourceContainer}>
            
          </View>
          <CryptoText type="B1" numberOfLines={2} style={styles.newsTitle}>
            {item.title}
          </CryptoText>
        </View>
        
        <View style={styles.newsBody}>
          <CryptoText type="B3" numberOfLines={3} style={styles.newsDescription}>
            {item.metadata?.description || 'No description available'}
          </CryptoText>
        </View>
        
        <View style={styles.newsFooter}>
          <View style={styles.newsMeta}>
            <CryptoText type="B4" style={styles.newsDate}>
              {new Date(item.published_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </CryptoText>
            {item.currencies && item.currencies.length > 0 && (
              <View style={styles.currencyTags}>
                {item.currencies.slice(0, 3).map((currency: any, index: number) => (
                  <View key={index} style={[styles.currencyTag, { backgroundColor: theme.colors.primary }]}>
                    <CryptoText type="B4" style={[styles.currencyTagText, { color: theme.colors.onSurface }]}>
                      {currency.code}
                    </CryptoText>
                  </View>
                ))}
                {item.currencies.length > 3 && (
                  <View style={[styles.currencyTag, { backgroundColor: theme.colors.muted }]}>
                    <CryptoText type="B4" style={[styles.currencyTagText, { color: theme.colors.onSurface }]}>
                      +{item.currencies.length - 3}
                    </CryptoText>
                  </View>
                )}
              </View>
            )}
          </View>
          <View style={[styles.readMoreIndicator, { backgroundColor: theme.colors.primary }]}>
            <CryptoText type="B4" style={[styles.readMoreText, { color: theme.colors.onSurface }]}>
              Read
            </CryptoText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!isConnected && (
        <View style={styles.offlineBanner}>
          <CryptoText style={styles.offlineText}>
            Offline - Showing cached data
          </CryptoText>
          {lastUpdated && (
            <CryptoText style={styles.offlineText}>
              Last updated: {new Date(lastUpdated).toLocaleString()}
            </CryptoText>
          )}
        </View>
      )}

      {/* Simple Filter Indicator */}
      {(filters?.coins?.length > 0 || filters?.kinds?.length > 0) && (
        <View style={[styles.filterIndicator, { backgroundColor: theme.colors.primary }]}>
          <CryptoText style={[styles.filterIndicatorText, { color: theme.colors.onSurface }]}>
            🔍 Filters Applied
          </CryptoText>
        </View>
      )}

      <FlatList
        data={getFilteredNews()}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        refreshing={loading}
        onRefresh={handleRefresh}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            {loading ? (
              <ActivityIndicator size="large" color={theme.colors.primary}  />
            ) : (
              <CryptoText type="H1">
                {error || 'No articles found. Try adjusting your filters.'}
              </CryptoText>
            )}
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  newsItem: {
    marginBottom: 16,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  newsContent: {
    flex: 1,
  },
  newsHeader: {
    marginBottom: 12,
  },
  newsSourceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  newsSourceIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  newsSource: {
    fontSize: 11,
    fontWeight: '500',
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  newsTitle: {
    fontWeight: '700',
    lineHeight: 22,
  },
  newsBody: {
    marginBottom: 16,
  },
  newsDescription: {
    color: '#666',
    lineHeight: 20,
  },
  newsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newsMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  newsDate: {
    color: '#999',
    fontSize: 12,
    fontWeight: '500',
  },
  currencyTags: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  currencyTag: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginLeft: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  currencyTagText: {
    fontSize: 10,
    fontWeight: '600',
  },
  container: {
    flex: 1,
  },
  offlineBanner: {
    backgroundColor: '#ffcccb',
    padding: 10,
    alignItems: 'center',
  },
  offlineText: {
    color: '#d32f2f',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  coinTag: {
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 8,
    fontSize: 12,
  },
  filterButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 30,
    elevation: 5,
  },
  filterButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
  },
  filterIndicator: {
    padding: 8,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  filterIndicatorText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  readMoreIndicator: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  readMoreText: {
    fontSize: 11,
    fontWeight: '600',
  },
});

export default HomeScreen;
