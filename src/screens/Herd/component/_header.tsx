import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, FlatList, Image } from 'react-native';
import color from '../../../utils/theme/colors';
import { HamburgerIcon, SearchIcon } from '../../../assets/icons/icons';
import mockData from '../../../../mockdata.json';
import AppBar from '../../../sharedComponents/AppBar';
interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  headCount: number;
}

const Header = ({
  searchQuery,
  setSearchQuery,
  selectedFilter,
  setSelectedFilter,
  headCount
}: HeaderProps) => {
    const filterOptions = mockData.filterOptions;

  return (
    <>
      <AppBar leftIcon={HamburgerIcon} />

      {/* Editorial Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerLabel}>Active Catalog</Text>
          <Text style={styles.headerTitle}>Current Herd</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.totalCount}>{headCount}</Text>
          <Text style={styles.totalLabel}>Total Heads</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Image source={SearchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by ear tag number (e.g. 8942)"
            
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={color.secondary}
          keyboardType="number-pad"
        />
      </View>

      {/* Filter Chips */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filterOptions}
        keyExtractor={(item) => item}
        renderItem={({ item: filter }) => (
          <Pressable
            style={[
              styles.filterChip,
              selectedFilter === filter && styles.filterChipActive,
            ]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === filter && styles.filterTextActive,
              ]}
            >
              {filter}
            </Text>
          </Pressable>
        )}
        style={styles.filterContainer}
        contentContainerStyle={styles.filterContent}
      />
    </>
  );
};

const styles = StyleSheet.create({
 
  
  
  
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 32,
  },
  headerLeft: {
    flex: 1,
  },
  headerLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: color.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: '600',
    color: color.primary,
    letterSpacing: -0.02,
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  totalCount: {
    fontSize: 24,
    fontWeight: '700',
    color: color.primary,
    fontFamily: 'System',
  },
  totalLabel: {
    fontSize: 10,
    color: color.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 0.01,
  },
  searchContainer: {
    position: 'relative',
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap:12,
    backgroundColor: color.surfaceContainerLow,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    top: 16,
    zIndex: 1,
  },
  searchInput: {
    backgroundColor: color.surfaceContainerLow,
    fontSize: 16,
    lineHeight: 20,
    color: color.onSurface,
    fontFamily: 'System',
  },
  filterContainer: {
    marginBottom: 24,
  },
  filterContent: {
    paddingRight: 0,
  },
  filterChip: {
    backgroundColor: color.surfaceContainerHigh,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 12,
  },
  filterChipActive: {
    backgroundColor: color.primary,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: color.onSurface,
    fontFamily: 'System',
  },
  filterTextActive: {
    color: color.onPrimary,
  },
});

export default React.memo(Header);