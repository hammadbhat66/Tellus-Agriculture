import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { screenNames } from '../../router/_screenNames';
import {LogoImg } from '../../assets/images/images';
import color from '../../utils/theme/colors';

const { width, height } = Dimensions.get('window');

// Ensure circle fully covers screen
const CIRCLE_SIZE = Math.sqrt(width * width + height * height) * 2;

export default function SplashReveal() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const logoScale = useRef(new Animated.Value(1)).current;
  const circleScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(logoScale, {
        toValue: 0,
        duration: 800,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        Animated.timing(circleScale, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }).start(() => {
          navigation.navigate(screenNames.GETTING_STARTED);
        });
      }, 100);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* Expanding circle */}
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{ scale: circleScale }],
          },
        ]}
      />

      {/* Logo */}
      <Animated.View
        style={{
          transform: [{ scale: logoScale }],
        }}
      >
        <Image
          source={LogoImg}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: color.primary,
  },
  logo: {
    width: 205,
    height: 78,
  },
});