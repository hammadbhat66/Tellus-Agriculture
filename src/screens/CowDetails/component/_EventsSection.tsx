import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
} from 'react-native';
import color from '../../../utils/theme/colors';

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

interface EventsSectionProps {
  events: EventItem[];
  onViewHistoryPress?: () => void;
}

const EventsSection: React.FC<EventsSectionProps> = ({
  events,
  onViewHistoryPress,
}) => {
  const renderEventItem = ({ item }: { item: EventItem }) => (
    <View style={styles.eventItem}>
      <View style={styles.eventIconContainer}>
        <View style={[styles.eventIcon, { backgroundColor: item.iconBg }]}>
          <Image source={{ uri: item?.icon }} style={styles.icon} />
        </View>
      </View>
      <View style={styles.eventContent}>
        <View style={styles.eventHeader}>
          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text style={styles.eventDate}>{item.date}</Text>
        </View>
        <Text style={styles.eventDescription}>{item.description}</Text>
        {item.tag && (
          <View style={styles.eventTag}>
            <Text style={styles.eventTagText}>{item.tag}</Text>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.eventsSection}>
      <View style={styles.eventsHeader}>
        <Text style={styles.eventsTitle}>Recent Events</Text>
        <Pressable onPress={onViewHistoryPress}>
          <Text style={styles.viewHistoryText}>View History</Text>
        </Pressable>
      </View>

      <View style={styles.timeline}>
        {/* Vertical Line */}
        <View style={styles.timelineLine} />

        <FlatList
          data={events}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
          renderItem={renderEventItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventsSection: {
    backgroundColor: color.surfaceContainerLowest,
    borderRadius: 24,
    padding: 24,
  },
  eventsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  eventsTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: color.onSurface,
    fontFamily: 'System', // Manrope
  },
  icon: { height: 15, width: 15, borderRadius: 100 },
  viewHistoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: color.primary,
  },
  timeline: {
    position: 'relative',
  },
  timelineLine: {
    position: 'absolute',
    left: 24,
    top: 8,
    bottom: 8,
    width: 1,
    backgroundColor: color.outlineVariant,
  },
  eventItem: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 48,
  },
  eventIconContainer: {
    zIndex: 10,
    backgroundColor: color.surfaceContainerLowest,
    padding: 8,
    borderRadius: 20,
    shadowColor: color.surfaceContainerLowest,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 4,
  },
  eventIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventContent: {
    flex: 1,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: color.onSurface,
  },
  eventDate: {
    fontSize: 12,
    fontWeight: '500',
    color: color.onSurfaceVariant,
  },
  eventDescription: {
    fontSize: 14,
    color: color.onSurfaceVariant,
    marginBottom: 8,
  },
  eventTag: {
    backgroundColor: 'rgba(127, 63, 0, 0.1)', // tertiary-container with opacity
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  eventTagText: {
    fontSize: 10,
    fontWeight: '700',
    color: color.onTertiaryFixedVariant,
    textTransform: 'uppercase',
  },
});

export default EventsSection;
