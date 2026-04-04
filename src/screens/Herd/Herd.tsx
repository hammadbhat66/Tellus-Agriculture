import React, { useState, useMemo, useCallback } from 'react';
import { StyleSheet, Pressable, FlatList, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import color from '../../utils/theme/colors';
import { screenNames } from '../../router/_screenNames';
import { PlusWhiteIcon } from '../../assets/icons/icons';
import Header from './component/_header';
import CowCard from './component/_cowCard';
import mockData from '../../../mockdata.json';

// Mock data for cows
const mockCows = mockData.mockCows;


const Herd = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All Animals');

  const handleAddNewCow = useCallback(() => {
    navigation.navigate(screenNames.ADD_NEW_COW);
  }, [navigation]);


  
  // Filter cows based on search query and selected filter
  const filteredCows = useMemo(() => {
    return mockCows.filter(cow => {
      // Apply search query filter
      const matchesSearch = searchQuery === '' || 
        cow.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cow.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cow.status.toLowerCase().includes(searchQuery.toLowerCase());

      // Apply filter filter
      let matchesFilter = true;
      if (selectedFilter !== 'All Animals') {
        
          matchesFilter = cow.status === selectedFilter;
        
      }

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, selectedFilter]);

  return (
    <SafeAreaView style={[styles.container]} edges={['top', 'left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor={color.surface} />
      <FlatList
        data={filteredCows}
        keyExtractor={item => item.id}
        renderItem={({ item }: { item: (typeof filteredCows)[0] }) => (
          <CowCard item={item} />
        )}
        ListHeaderComponent={
          <Header
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            headCount={filteredCows.length}
          />
        }
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + 120 },
        ]}
        showsVerticalScrollIndicator={false}
      />

      {/* FAB */}
      <Pressable style={[styles.fab]} onPress={handleAddNewCow}>
        <Image source={PlusWhiteIcon} />
      </Pressable>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.surface,
  },
  content: {
    paddingHorizontal: 18,
  },
  fab: {
    position: 'absolute',
    right: 18,
    bottom: 18,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1a1c1c',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.06,
    shadowRadius: 32,
    elevation: 8,
  },
});

export default Herd;
