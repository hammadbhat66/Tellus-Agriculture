import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import color from '../../../utils/theme/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { screenNames } from '../../../router/_screenNames';
import { FemaleIcon, MaleIcon } from '../../../assets/icons/icons';
import {
  getStatusColor,
  getStatusTextColor,
} from '../../../utils/helperFunctions';

type Cow = {
  id: string;
  status: string;
  location: string;
  lastEvent: string;
  lastEventDate: string;
  gender: string;
  heroImage: any; // URL string or local image source
};

interface CowCardProps {
  item: Cow;
}

const CowCard = ({ item }: CowCardProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const navigateToCowDetails = () => {
    navigation.navigate(screenNames.COW_DETAILS, { cowId: item.id });
  };
  const localTheme = item.status === "Prime Bull"? {
    backgroundColor: color.primary,
    tagBg: color.primaryContainer,
    tagTxt: color.primaryFixed,
    titleTxt: color.surfaceContainerHighest,
    detailTxt: color.surfaceContainerLowest
  }:{
    backgroundColor:color.surfaceContainerLowest,
    tagBg: color.surfaceContainerHighest,
    tagTxt: color.primary,
    titleTxt: color.onSurfaceVariant,
    detailTxt: color.onSurface
    
  }
  return (
    <Pressable style={[styles.cowCard,{backgroundColor:localTheme.backgroundColor}]} onPress={navigateToCowDetails}>
      <View style={styles.cardHeader}>
        <View style={[styles.tagContainer,{backgroundColor:localTheme.tagBg}]}>
          <Text style={[styles.tagNumber,{color:localTheme.tagTxt}]}>#{item.id}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text
            style={[
              styles.statusBadge,
              {
                backgroundColor: getStatusColor(item.status),
                color: getStatusTextColor(item.status),
              },
            ]}
          >
            {item.status}
          </Text>

          <Image
            source={item.gender === 'female' ? FemaleIcon : MaleIcon}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.locationSection}>
        <Text style={[styles.label,{color:localTheme.titleTxt}]}>Location</Text>
        <Text style={[styles.locationText,{color:localTheme.detailTxt}]}>{item.location}</Text>
      </View>

      <View style={styles.eventSection}>
        <View style={styles.eventInfo}>
          <Text style={[styles.label,{color:localTheme.titleTxt}]}>Last Event</Text>
          <Text style={[styles.eventText,{color:localTheme.detailTxt}]}>{item.lastEvent}</Text>
        </View>
        <Text style={styles.eventDate}>{item.lastEventDate}</Text>
      </View>

      <View style={styles.textureOverlay}>
        <Image source={item.heroImage} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cowCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    position: 'relative',
    overflow: 'hidden',
    gap: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  tagContainer: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  tagNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: color.primary,
    fontFamily: 'System',
    letterSpacing: -0.01,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.02,
  },
  locationSection: {},
  label: {
    fontSize: 10,
    fontWeight: '700',
    color: color.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 0.02,
    marginBottom: 4,
  },
  locationText: {
    fontSize: 18,
    fontWeight: '600',
    color: color.onSurface,
    fontFamily: 'System',
  },
  eventSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  eventInfo: {
    flex: 1,
  },
  eventText: {
    fontSize: 14,
    fontWeight: '500',
    color: color.onSurface,
    fontFamily: 'System',
  },
  eventDate: {
    fontSize: 12,
    color: color.outline,
    fontStyle: 'italic',
    fontFamily: 'System',
  },
  textureOverlay: {
    position: 'absolute',
    right: -16,
    bottom: -16,
    opacity: 0.5,
  },
});

export default React.memo(CowCard);
