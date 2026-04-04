import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import color from '../../utils/theme/colors';
import EditorialHeader from './component/_EditorialHeader';
import HeroImage from './component/_HeroImage';
import StatsGrid from './component/_StatsGrid';
import DetailsGrid from './component/_DetailsGrid';
import EventsSection from './component/_EventsSection';
import mockData from '../../../mockdata.json';
import AppBar from '../../sharedComponents/AppBar';

interface EventItem {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  tag?: string;
}

type RootStackParamList = {
  CowDetails: { cowId: string };
};

type CowDetailsRouteProp = RouteProp<RootStackParamList, 'CowDetails'>;

const CowDetails = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute<CowDetailsRouteProp>();
  const insets = useSafeAreaInsets();

  const { cowId } = route.params;

  // Mock data for cows - should match Herd data
  const mockCows = mockData.mockCows;

  const cowData = mockCows.find(cow => cow.id === cowId) || mockCows[0]; // fallback to first

  const handleBack = () => {
    navigation.goBack();
  };

  // Mock events for each cow
  const mockEvents = mockData.mockEvents;

  const events: EventItem[] = mockEvents[cowId as keyof typeof mockEvents] || mockEvents['8942'];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* TopAppBar */}
      <View style={styles.appBar}>
        <AppBar leftIconPress={handleBack}  />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 24 }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Editorial Header Section */}
        <EditorialHeader cowId={cowData.id} status={cowData.status} />

        {/* Hero Image */}
        <HeroImage imageUri={cowData.heroImage} lastInspection={cowData.lastInspection} />

        {/* Information Bento Grid */}
        <StatsGrid weight={cowData.weight} dailyGain={cowData.dailyGain} />

        <DetailsGrid
          sex={cowData.sex}
          pen={cowData.pen}
          breed={cowData.breed}
          age={cowData.age}
        />

        {/* Timeline: Recent Events */}
        <EventsSection events={events} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.surface,
  },
  appBar:{
    paddingHorizontal: 16,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
  },
});

export default CowDetails;