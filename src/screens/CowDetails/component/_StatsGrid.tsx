import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import color from '../../../utils/theme/colors';
import { WeightIcon } from '../../../assets/icons/icons';

interface StatsGridProps {
  weight: number;
  dailyGain: number;
}

const StatsGrid: React.FC<StatsGridProps> = ({ weight, dailyGain }) => {
  return (
    <View style={styles.bentoGrid}>
      {/* Current Weight */}
      <View style={styles.statCard}>
        <View style={styles.statHeader}>
          <Text style={styles.statLabel}>Current Weight</Text>
          {/* <Icon name="scale" size={24} color={color.primaryFixedDim} /> */}
        </View>
        <View style={styles.statValueContainer}>
          <Text style={styles.statValue}>{weight.toLocaleString()}</Text>
          <Text style={styles.statUnit}>lbs</Text>
        </View>
      </View>

      {/* Daily Weight Gain */}
      <View style={[styles.statCard, styles.primaryStatCard]}>
        <View style={styles.statHeader}>
          <Text style={[styles.statLabel, styles.primaryStatLabel]}>Daily Weight Gain</Text>
          <Image source={WeightIcon} />
        </View>
        <View style={styles.statValueContainer}>
          <Text style={[styles.statValue, styles.primaryStatValue]}>+{dailyGain}</Text>
          <Text style={[styles.statUnit, styles.primaryStatUnit]}>lbs/day</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bentoGrid: {
    gap: 16,
    marginBottom: 16,
  },
  statCard: {
    backgroundColor: color.surfaceContainerLowest,
    borderRadius: 16,
    padding: 24,
    minHeight: 160,
    justifyContent: 'space-between',
  },
  primaryStatCard: {
    backgroundColor: color.primary,
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: color.onSurfaceVariant,
  },
  primaryStatLabel: {
    color: color.primaryFixed,
  },
  statValueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  statValue: {
    fontSize: 36,
    fontWeight: '800',
    color: color.onSurface,
    fontFamily: 'System', // Manrope
  },
  primaryStatValue: {
    color: 'white',
  },
  statUnit: {
    fontSize: 18,
    fontWeight: '500',
    color: color.onSurfaceVariant,
  },
  primaryStatUnit: {
    color: 'white',
    opacity: 0.8,
  },
});

export default StatsGrid;