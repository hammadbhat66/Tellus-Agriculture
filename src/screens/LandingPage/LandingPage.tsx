import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  Animated,
  Text,
  Pressable,
} from 'react-native';

import color from '../../utils/theme/colors';
import { useDispatch } from 'react-redux';
import { loginEmulate } from '../../redux/auth';
import { CowImg } from '../../assets/images/images';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
const dispatch = useDispatch();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    // Animate in the content
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

  }, [fadeAnim, slideAnim]);

  const handleStartCataloging = () => {
    dispatch(loginEmulate());
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {/* Background Image */}
      <Image
        source={CowImg}
        style={styles.backgroundImage as any}
        resizeMode="cover"
      />

      {/* Editorial Overlay Gradient */}
      <View style={styles.overlay} />

      {/* Top Branding Section */}
      <Animated.View
        style={[
          styles.topSection,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.branding}>
          <Text style={styles.mainTitle}>TELUS</Text>
          <Text style={styles.subtitle}>Agriculture</Text>
        </View>
      </Animated.View>

      {/* Bottom UI Section */}
      <Animated.View
        style={[
          styles.bottomSection,
          {
            opacity: fadeAnim,
            transform: [{ translateY: Animated.multiply(slideAnim, -1) }],
          },
        ]}
      >
        {/* Glassmorphic Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>The Digital Steward</Text>
          <Text style={styles.cardDescription}>
            Elevate your herd management with high-utility editorial data. Real-time insights for the modern agrarian.
          </Text>
        </View>

        {/* CTA Button */}
        <Pressable style={styles.ctaButton} onPress={handleStartCataloging}>
          <Text style={styles.ctaText}>Start Cataloging</Text>
          {/* <Icon name="chevron_right" size={24} color={color.onPrimary} /> */}
        </Pressable>

        {/* Loading Indicator */}
        <View style={styles.loadingContainer}>
          <View style={styles.loadingDots}>
            <View style={[styles.dot, styles.dot1]} />
            <View style={[styles.dot, styles.dot2]} />
            <View style={[styles.dot, styles.dot3]} />
          </View>
          <Text style={styles.loadingText}>Synced Herd Data</Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.surface,
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(26, 28, 28, 0.4)',
  },
  topSection: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 64,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  branding: {
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 48,
    fontWeight: '800',
    color: color.onPrimary,
    fontFamily: 'System',
    textTransform: 'uppercase',
    letterSpacing: -0.02,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    color: color.onPrimary,
    fontFamily: 'System',
    textTransform: 'uppercase',
    letterSpacing: 0.16,
    marginTop: 8,
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'center',
    maxWidth: 400,
    alignSelf: 'center',
  },
  infoCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    padding: 32,
    marginBottom: 32,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: color.onSurface,
    fontFamily: 'System',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: color.onSurfaceVariant,
    fontFamily: 'System',
  },
  ctaButton: {
    backgroundColor: color.primary,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 32,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: color.primary,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  ctaText: {
    fontSize: 18,
    fontWeight: '700',
    color: color.onPrimary,
    fontFamily: 'System',
    textTransform: 'uppercase',
    letterSpacing: 0.02,
    marginRight: 12,
  },
  loadingContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  loadingDots: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: color.primaryFixed,
    marginHorizontal: 3,
  },
  dot1: {
    opacity: 0.6,
  },
  dot2: {
  },
  dot3: {
    opacity: 0.6,
  },
  loadingText: {
    fontSize: 10,
    fontWeight: '500',
    color: color.onPrimary,
    fontFamily: 'System',
    textTransform: 'uppercase',
    letterSpacing: 0.02,
  },
});