import React, { forwardRef } from 'react';
import { View, Text, Pressable, StyleSheet, Image, TouchableOpacity } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import color from '../utils/theme/colors';

type BottomSheetAction = {
  title: string;
  subtitle: string;
  onPress?: () => void;
  icon?: any; 
};

type BottomSheetProps = {
  title?: string;
  actions?: BottomSheetAction[];
  height?: number;
};

const BottomSheet = forwardRef<any, BottomSheetProps>(
  ({ title = 'Upload Photo', actions = [], height }, ref:any) => {
    return (
      <RBSheet
        ref={ref}
        height={height}
        openDuration={250}
        closeOnPressMask
        customStyles={{
          wrapper: styles.wrapper,
          draggableIcon: styles.dragIcon,
          container: styles.container,
        }}
      >
        <View style={styles.sheetHeader}>
          <Text style={styles.sheetTitle}>{title}</Text>
          <Text style={styles.sheetSubtitle}>Select an option to continue</Text>
        </View>

        <View style={styles.actionList}>
          {actions.map((action, index) => (
            <TouchableOpacity
              key={index}
              style={styles.actionItem}
              onPress={() => {
                action.onPress?.();
                ref?.current?.close();
              }}
            >
              <View style={styles.actionIcon} >
                <Image source={action.icon} />
              </View>
              <View style={styles.actionTextGroup}>
                <Text style={styles.actionTitle}>{action.title}</Text>
                <Text style={styles.actionDescription}>{action.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Pressable style={styles.cancelButton} onPress={() => ref?.current?.close()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </Pressable>
      </RBSheet>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 16,
    paddingHorizontal: 24,
    backgroundColor: color.surface,
  },
  dragIcon: {
    backgroundColor: color.outline,
    width: 48,
    height: 4,
  },
  sheetHeader: {
    marginBottom: 24,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: color.onSurface,
    marginBottom: 8,
  },
  sheetSubtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: color.onSurfaceVariant,
  },
  actionList: {
    gap: 16,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: color.surfaceContainerLow,
    paddingVertical: 18,
    paddingHorizontal: 18,
  },
  actionIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 1,
    borderColor: color.outlineVariant,
  },
  actionTextGroup: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: color.onSurface,
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 13,
    color: color.onSurfaceVariant,
    lineHeight: 18,
  },
  cancelButton: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 18,
    backgroundColor: color.surfaceVariant,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '700',
    color: color.primary,
  },
});

export default BottomSheet;
