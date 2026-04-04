import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import color from '../utils/theme/colors';

type SexToggleProps = {
  value: 'female' | 'male';
  onChange: (value: 'female' | 'male') => void;
};

const SexToggle = ({ value, onChange }: SexToggleProps) => (
  <View style={styles.sexToggleContainer}>
    <Pressable
      style={[styles.sexOption, value === 'female' && styles.sexOptionActive]}
      onPress={() => onChange('female')}
    >
      <Text style={[styles.sexText, value === 'female' && styles.sexTextActive]}>Female</Text>
    </Pressable>
    <Pressable
      style={[styles.sexOption, value === 'male' && styles.sexOptionActive]}
      onPress={() => onChange('male')}
    >
      <Text style={[styles.sexText, value === 'male' && styles.sexTextActive]}>Male</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  sexToggleContainer: {
    flexDirection: 'row',
    backgroundColor: color.surfaceContainerLow,
    borderRadius: 12,
    padding: 4,
  },
  sexOption: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  sexOptionActive: {
    backgroundColor: color.surface,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sexText: {
    fontSize: 16,
    fontWeight: '500',
    color: color.onSurface,
  },
  sexTextActive: {
    color: color.primary,
  },
});

export default SexToggle;
