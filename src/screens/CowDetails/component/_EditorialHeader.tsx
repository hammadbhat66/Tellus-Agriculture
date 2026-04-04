import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import color from '../../../utils/theme/colors';
import { GreenTickIcon } from '../../../assets/icons/icons';

interface EditorialHeaderProps {
  cowId: string;
  status: string;
}

const EditorialHeader: React.FC<EditorialHeaderProps> = ({ cowId, status }) => {
  return (
    <View style={styles.headerSection}>
      <View style={styles.headerContent}>
        <View>
          <Text style={styles.primaryAssetLabel}>Primary Asset</Text>
          <Text style={styles.cowId}>#{cowId}</Text>
        </View>
        <View style={styles.statusBadge}>
          <Image source={GreenTickIcon} />
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    marginBottom: 32,
    marginTop: 16,
  },
  headerContent: {
  },
  primaryAssetLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: color.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 0.15,
    marginBottom: 8,
  },
  cowId: {
    fontSize: 56,
    fontWeight: '800',
    color: color.primary,
    fontFamily: 'System', // Manrope
    letterSpacing: -0.02,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
     backgroundColor: color.primaryFixed,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
    color: color.onPrimaryFixedVariant,
    textTransform: 'uppercase',
    letterSpacing: 0.02,
   

  },
});

export default EditorialHeader;