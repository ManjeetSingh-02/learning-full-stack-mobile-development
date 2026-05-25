import { View, StyleSheet, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { Button } from '@react-navigation/elements';
import { useState } from 'react';

const STORAGE_KEY = 'name';

export default function SecureStoreExample() {
  const [label, setLabel] = useState('Press a button to interact with SecureStore');

  async function setItem() {
    await SecureStore.setItemAsync(STORAGE_KEY, 'Expo');
    setLabel('Item set');
  }

  async function getItem() {
    const value = await SecureStore.getItemAsync(STORAGE_KEY);
    setLabel('Item retrieved');
    console.log(value);
  }

  async function deleteItem() {
    await SecureStore.deleteItemAsync(STORAGE_KEY);
    setLabel('Item removed');
  }

  async function checkSecureStoreAvailability() {
    setLabel(
      `SecureStore is ${(await SecureStore.isAvailableAsync()) ? 'available' : 'not available'}`
    );
  }

  async function checkBiometricAuthenticationAvailability() {
    setLabel(
      `Biometric authentication is ${SecureStore.canUseBiometricAuthentication() ? 'available' : 'not available'}`
    );
  }

  return (
    <View style={styles.container}>
      <Button onPress={setItem}>Set Item</Button>
      <Button onPress={getItem}>Get Item</Button>
      <Button onPress={deleteItem}>Delete Item</Button>
      <Button onPress={checkSecureStoreAvailability}>Check SecureStore Availability</Button>
      <Button onPress={checkBiometricAuthenticationAvailability}>
        Check Biometric Authentication Availability
      </Button>
      <Text>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
