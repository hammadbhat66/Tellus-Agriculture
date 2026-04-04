import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import color from '../../../utils/theme/colors';

const { width } = Dimensions.get('window');

interface DetailsGridProps {
  sex: string;
  pen: string;
  breed: string;
  age: string;
}

const DetailsGrid: React.FC<DetailsGridProps> = ({ sex, pen, breed, age }) => {
  return (
    <View style={styles.detailsGrid}>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Sex</Text>
        <Text style={styles.detailValue}>{sex}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Pen</Text>
        <Text style={styles.detailValue}>{pen}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Breed</Text>
        <Text style={styles.detailValue}>{breed}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Age</Text>
        <Text style={styles.detailValue}>{age}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    paddingBottom: 16,
  },
  detailItem: {
    flex: 1,
    minWidth: (width - 48 - 32) / 2, // 2 columns with gap
    backgroundColor: color.surfaceContainerLow,
    padding: 20,
    borderRadius: 12,
  },
  detailLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: color.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 0.02,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 18,
    fontWeight: '700',
    color: color.onSurface,
  },
});

export default DetailsGrid;