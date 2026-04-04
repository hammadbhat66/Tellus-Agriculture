import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import color from '../utils/theme/colors';
import { BackIcon } from '../assets/icons/icons';
import { UserImg } from '../assets/images/images';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutEmulate } from '../redux/auth';

type AppBarType = {
  leftIcon?: React.ReactNode;
  leftIconPress?: () => void;
};
const AppBar = ({ leftIcon, leftIconPress }: AppBarType) => {
    const dispatch = useDispatch();
    const handleLogoutEmulate = ()=>{
        Alert.alert('Logout', 'Are you sure you want to logout?', [
            {text:'Cancel', style:'cancel'},
            {text:'Logout', style:'destructive', onPress:()=>{
                dispatch(logoutEmulate());
            }}
        ]);
    }
  return (
    <View style={styles.appBar}>
      <TouchableOpacity style={styles.menuButton} onPress={leftIconPress}>
        <Image source={leftIcon ? leftIcon : BackIcon} />
      </TouchableOpacity>
      <Text style={styles.appBarTitle}>The Agrarian Editorial</Text>
      <TouchableOpacity style={styles.avatarContainer} onPress={handleLogoutEmulate}>
        <Image source={UserImg} style={styles.avatar} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: color.surface,
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: color.primary,
    fontFamily: 'System',
    flex: 1,
    paddingLeft: 4,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: color.surfaceContainerHighest,
    borderWidth: 2,
    borderColor: color.primaryFixed,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  menuButton: {
    transform: [{ translateX: -8 }],
  },
});

export default AppBar;
