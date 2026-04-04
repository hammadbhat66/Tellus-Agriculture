import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import color from '../utils/theme/colors';

type NoInternetAlertProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const NoInternetAlert: React.FC<NoInternetAlertProps> = ({
  visible,
  setVisible,
}) => {
  const closeModal = () => {
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={closeModal}
    >
      <Pressable style={styles.backdrop} onPress={closeModal}>
        <Pressable style={styles.modalContainer}>
          <Text style={styles.title}>No Connection</Text>

          <Text style={styles.message}>
            Please check your internet connection and try again to ensure the
            app functions properly.
          </Text>

          <TouchableOpacity style={styles.button} onPress={closeModal}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modalContainer: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
  message: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    color: color.secondary,
    marginBottom: 20,
  },
  button: {
    backgroundColor: color.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default NoInternetAlert;