import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useQuery } from 'react-query';
import { fetchCryptoNews } from '../api/newsApi';
import NetInfo from '@react-native-community/netinfo';
// import FilterModal from '../components/FilterModal';
import useStore from '../hooks/useStore';
import CryptoText from '../styleguide/CryptoText';
import { useTheme } from 'react-native-paper';
import { CustomTheme } from '../types/ThemeTypes';



const HomeScreen = ({ navigation }:any) => {
  const {
    news,
    setNews,
    loading,
    error,
    setError,
    getFilteredNews,
    lastUpdated,
  }: any = useStore();

  const [isConnected, setIsConnected] = useState(true);
  const theme: CustomTheme = useTheme();
  const { refetch } = useQuery('cryptoNews', fetchCryptoNews, {
    enabled: false, // Disable automatic fetching
    onSuccess: data => {
      setNews(data);
    },
    onError: err => {
      setError(err.message);
    },
  });

  useEffect(() => {
    // Check network connection
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    // Load initial data if we have no cached data
    if (news.length === 0 && isConnected) {
      refetch();
    }

    return () => unsubscribe();
  }, []);

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
          borderBottomColor: theme.colors.border,
          borderBottomWidth: 1,
          backgroundColor: theme.colors.card,
        },
      ]}
      onPress={() => navigation.navigate('NewsDetailScreen', { item: item })}
    >
      <View>
        <CryptoText type="B1" numberOfLines={2}>
          {item.title}
        </CryptoText>
        <CryptoText type="B3" numberOfLines={2}>
          {item.metadata?.description || 'No description available'}
        </CryptoText>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <CryptoText type="B4">
            {new Date(item.published_at).toLocaleString()}
          </CryptoText>
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
  listContainer: {},
  newsItem: {
    padding: 16,
    borderRadius: 8,
  },

  summary: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
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
});

export default HomeScreen;
