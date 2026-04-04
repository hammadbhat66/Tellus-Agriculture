import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface HeroImageProps {
  imageUri: string;
  lastInspection: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ imageUri, lastInspection }) => {
  return (
    <View style={styles.heroContainer}>
      <Image source={{ uri: imageUri }} style={styles.heroImage} />
      <View style={styles.heroOverlay} />
      <View style={styles.heroTextContainer}>
        <Text style={styles.heroLabel}>Last visual inspection</Text>
        <Text style={styles.heroValue}>{lastInspection}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    height: 256,
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
      marginBottom: 16,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(21, 66, 18, 0.4)', // primary with opacity
  },
  heroTextContainer: {
    position: 'absolute',
    bottom: 24,
    left: 24,
  },
  heroLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 0.02,
    opacity: 0.8,
  },
  heroValue: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    marginTop: 4,
  },
});

export default HeroImage;