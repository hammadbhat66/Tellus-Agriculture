import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  Dimensions,
  Alert,
  Keyboard,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import color from '../../utils/theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackIcon, CameraIcon, GalleryIcon } from '../../assets/icons/icons';
import AppBar from '../../sharedComponents/AppBar';
import CustomDropdown from '../../sharedComponents/CustomDropdown';
import SexToggle from '../../sharedComponents/SexToggle';
import BottomSheet from '../../sharedComponents/BottomSheet';
import { CowTwoImage } from '../../assets/images/images';

type FormData = {
  tag: string;
  gender: 'female' | 'male';
  weight: string;
  pen: string;
  status: string;
};

const { width: screenWidth } = Dimensions.get('window');

const AddNewCow = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef<ScrollView>(null);
  const bottomSheetRef = useRef<any>(null);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    tag: '',
    gender: 'female',
    weight: '',
    pen: 'north_pasture',
    status: 'active',
  });
  const [showPenDropdown, setShowPenDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (e) => {
        setKeyboardHeight(e.endCoordinates.height);
      }
    );

    const keyboardWillHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  const scrollToInput = (inputY: number) => {
    if (scrollViewRef.current) {
      const scrollY = inputY - 0; // Increased offset to show more space above input
      scrollViewRef.current.scrollTo({ y: Math.max(0, scrollY), animated: true });
    }
  };

  const handleInputChange = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.tag) {
      Alert.alert('Error', 'Please enter a tag number');
      return;
    }
    // TODO: Submit to API
    Alert.alert('Success', 'Cow record saved successfully');
    navigation.goBack();
  };


  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {/* Top App Bar */}
      <View style={styles.appBar}>
        <AppBar leftIcon={BackIcon} leftIconPress={() => navigation.goBack()} />
      </View>
      <View style={styles.keyboardAvoidingView}>
        <ScrollView 
          ref={scrollViewRef}
          style={styles.scrollView} 
          contentContainerStyle={[styles.scrollContent, { paddingBottom: keyboardHeight + 100 }]}
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Header Section */}
          <View style={styles.headerSection}>
            <Text style={styles.headerLabel}>New Entry</Text>
            <Text style={styles.headerTitle}>Record Cow Data</Text>
            <Text style={styles.headerDescription}>
              Add a new member to your herd record. All data is synchronized to the central steward dashboard immediately.
            </Text>
          </View>

          <View style={styles.mainGrid}>
            {/* Left Column - Form */}
            <View style={styles.formColumn}>
              {/* Photo Upload Section */}
              <View style={styles.photoSection}>
                <Text style={styles.sectionLabel}>Upload Cow Photo</Text>
                <Pressable style={styles.photoUpload} onPress={() => bottomSheetRef.current?.open()}>
                  <View style={styles.photoUploadIconPlaceholder} >
                    <Image source={CameraIcon}  />
                  </View>
                  <Text style={styles.photoText}>Tap to upload photo</Text>
                </Pressable>
                <Text style={styles.photoHint}>
                  Clear visual records help in quick identification during field inspections.
                </Text>
              </View>

              {/* Tag Number */}
              <View style={styles.field}>
                <Text style={styles.label}>
                  Tag Number <Text style={styles.required}>*</Text>
                </Text>
                <TextInput
                  style={styles.input}
                  value={formData.tag}
                  onChangeText={(value) => handleInputChange('tag', value)}
                  placeholder="e.g. AG-7429"
                  placeholderTextColor={color.onSurfaceVariant}
                  onFocus={() => {
                    setTimeout(() => scrollToInput(300), 100);
                  }}
                />
                <Text style={styles.fieldHint}>
                  The unique identifier visible on the animal's ear tag.
                </Text>
              </View>

              {/* Demographic Row */}
              <View style={styles.row}>
                <View style={styles.halfField}>
                  <Text style={styles.label}>Gender</Text>
                  <SexToggle
                    value={formData.gender}
                    onChange={(value) => handleInputChange('gender', value)}
                  />
                </View>
                <View style={styles.halfField}>
                  <Text style={styles.label}>Weight (kg)</Text>
                  <TextInput
                    style={styles.input}
                    value={formData.weight}
                    onChangeText={(value) => handleInputChange('weight', value)}
                    placeholder="0.00"
                    keyboardType="numeric"
                    placeholderTextColor={color.onSurfaceVariant}
                    onFocus={() => {
                      setTimeout(() => scrollToInput(400), 100);
                    }}
                  />
                </View>
              </View>

              {/* Categorization Row */}
              <View style={styles.row}>
                <View style={styles.halfField}>
                  <Text style={styles.label}>Pen / Location</Text>
                  <CustomDropdown
                    value={formData.pen}
                    onSelect={(value) => handleInputChange('pen', value)}
                    options={[
                      { label: 'North Pasture', value: 'north_pasture' },
                      { label: 'East Corral', value: 'east_corral' },
                      { label: 'Birthing Shed', value: 'birthing_shed' },
                      { label: 'Quarantine', value: 'quarantine' },
                    ]}
                    placeholder="Select pen"
                    visible={showPenDropdown}
                    onToggle={() => setShowPenDropdown(!showPenDropdown)}
                  />
                </View>
                <View style={styles.halfField}>
                  <Text style={styles.label}>Status</Text>
                  <CustomDropdown
                    value={formData.status}
                    onSelect={(value) => handleInputChange('status', value)}
                    options={[
                      { label: 'Active', value: 'active' },
                      { label: 'In Treatment', value: 'treatment' },
                      { label: 'Quarantined', value: 'quarantined' },
                      { label: 'Sold', value: 'sold' },
                    ]}
                    placeholder="Select status"
                    visible={showStatusDropdown}
                    onToggle={() => setShowStatusDropdown(!showStatusDropdown)}
                  />
                </View>
              </View>

              {/* Submit Button */}
              <Pressable style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Save Cow Record</Text>
                {/* <Icon name="save" size={20} color={color.onPrimary} /> */}
              </Pressable>
            </View>

            {/* Right Column - Editorial */}
            <View style={styles.editorialColumn}>
              <View style={styles.heroCard}>
                <Image
                  source={CowTwoImage}
                  style={styles.heroImage}
                  resizeMode="cover"
                />
                <View style={styles.heroOverlay}>
                  <Text style={styles.heroTitle}>Digital Stewardship</Text>
                  <Text style={styles.heroSubtitle}>
                    Precise records lead to better outcomes. Every entry contributes to the overall health of the agrarian ecosystem.
                  </Text>
                </View>
              </View>

              <View style={styles.guidelinesCard}>
                <Text style={styles.guidelinesTitle}>Guidelines</Text>
                <View style={styles.guideline}>
                  {/* <Icon name="verified-user" size={20} color={color.primaryContainer} /> */}
                  <Text style={styles.guidelineText}>
                    Ensure the tag number matches the visual ID precisely to avoid database conflicts.
                  </Text>
                </View>
                <View style={styles.guideline}>
                  {/* <Icon name="medical-information" size={20} color={color.primaryContainer} /> */}
                  <Text style={styles.guidelineText}>
                    If the animal is undergoing medication, set status to{' '}
                    <View><Text style={styles.statusBadge}>In Treatment</Text></View>.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        title="Upload Photo"
        height={400}
        actions={[
          {
            title: 'Take Photo',
            subtitle: 'Use camera to capture now',
            onPress: () => {},
            icon: CameraIcon
          },
          {
            title: 'Choose from Gallery',
            subtitle: 'Select an existing image',
            onPress: () => {},
            icon: GalleryIcon
          },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.surface,
  },

  appBar:{
    paddingHorizontal:18
  },

  keyboardAvoidingView: {
    flex: 1,
  },

  

  
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 18,
    paddingBottom: 100,
    paddingTop: 16,
  },
  headerSection: {
    marginBottom: 48,
  },
  headerLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: color.primary,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: color.onSurface,
    marginBottom: 16,
  },
  headerDescription: {
    fontSize: 16,
    color: color.onSurfaceVariant,
    maxWidth: 400,
    lineHeight: 24,
  },
  mainGrid: {
    flexDirection: 'column',
    gap: 48,
  },
  formColumn: {
  },
  editorialColumn: {
  },
  photoSection: {
    marginBottom: 40,
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: color.onSurface,
    marginBottom: 16,
  },
  photoUpload: {
    width: '100%',
    aspectRatio: screenWidth > 768 ? 21/9 : 16/9,
    backgroundColor: color.surfaceContainerLow,
    borderWidth: 2,
    borderColor: color.outlineVariant,
    borderStyle: 'dashed',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  photoUploadIconPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: color.surfaceVariant,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoText: {
    fontSize: 16,
    color: color.onSurfaceVariant,
    fontWeight: '500',
  },
  photoHint: {
    fontSize: 14,
    color: color.onSurfaceVariant,
    marginTop: 8,
  },
  field: {
    marginBottom: 40,
  },
  halfField: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    color: color.onSurface,
    marginBottom: 16,
  },
  required: {
    color: color.error,
  },
  input: {
    backgroundColor: color.surfaceContainerLow,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    color: color.onSurface,
    fontWeight: '500',
  },
  fieldHint: {
    fontSize: 14,
    color: color.onSurfaceVariant,
    marginTop: 8,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#1a1c1c',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.06,
    shadowRadius: 32,
    elevation: 8,
    backgroundColor: color.primary,
  },
  submitButtonText: {
    color: color.onPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  heroCard: {
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 32,
    backgroundColor:"pink"
    ,height:400
  },
  heroImage: {
    height: '100%',
    width: '100%',
    borderRadius: 24,
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 32,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 20,
  },
  guidelinesCard: {
    backgroundColor: color.surfaceContainerLow,
    borderRadius: 16,
    padding: 32,
  },
  guidelinesTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: color.primary,
    marginBottom: 24,
  },
  guideline: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  guidelineText: {
    fontSize: 14,
    color: color.onSurfaceVariant,
    marginLeft: 12,
    flex: 1,
    lineHeight: 20,
  },
  statusBadge: {
    backgroundColor: color.tertiaryContainer,
    color: color.onPrimary,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default AddNewCow;
