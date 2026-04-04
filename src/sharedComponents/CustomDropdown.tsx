import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import color from '../utils/theme/colors';
import { ArrowDownIcon, ArrowUpIcon } from '../assets/icons/icons';

type DropdownOption = {
  label: string;
  value: string;
};

type CustomDropdownProps = {
  value: string;
  onSelect: (val: string) => void;
  options: DropdownOption[];
  placeholder: string;
  visible: boolean;
  onToggle: () => void;
};

const CustomDropdown = ({
  value,
  onSelect,
  options,
  placeholder,
  visible,
  onToggle,
}: CustomDropdownProps) => (
  <View style={styles.dropdownContainer}>
    <Pressable style={styles.dropdownButton} onPress={onToggle}>
      <Text style={[styles.dropdownText, !value && styles.placeholderText]}>
        {options.find(opt => opt.value === value)?.label || placeholder}
      </Text>
      <Image source={visible ? ArrowUpIcon : ArrowDownIcon} />
    </Pressable>
    {visible && (
      <View style={styles.dropdownList}>
        {options.map(option => (
          <Pressable
            key={option.value}
            style={styles.dropdownItem}
            onPress={() => {
              onSelect(option.value);
              onToggle();
            }}
          >
            <Text style={styles.dropdownItemText}>{option.label}</Text>
          </Pressable>
        ))}
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  dropdownContainer: {
    position: 'relative',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.surfaceContainerLow,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  dropdownText: {
    fontSize: 16,
    color: color.onSurface,
    fontWeight: '500',
  },
  placeholderText: {
    color: color.onSurfaceVariant,
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: color.surface,
    borderRadius: 12,
    marginTop: 4,
    zIndex: 1000,
    elevation: 5,
    shadowColor: '#1a1c1c',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.06,
    shadowRadius: 32,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  dropdownItemText: {
    fontSize: 16,
    color: color.onSurface,
  },
});

export default CustomDropdown;
