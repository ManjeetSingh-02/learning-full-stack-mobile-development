import { View, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '@react-navigation/elements';
import { useState } from 'react';

const STORAGE_KEY = 'name';

export default function Index() {
  const [label, setLabel] = useState('Press a button to interact with AsyncStorage');

  async function setItem() {
    await AsyncStorage.setItem(STORAGE_KEY, 'Expo');
    setLabel('Item set');
  }

  async function getItem() {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    setLabel('Item retrieved');
    console.log(value);
  }

  async function removeItem() {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setLabel('Item removed');
  }

  async function clearStorage() {
    await AsyncStorage.clear();
    setLabel('Storage cleared');
  }

  async function getAllKeys() {
    const keys = await AsyncStorage.getAllKeys();
    setLabel('All keys retrieved');
    console.log(keys);
  }

  async function multiSet() {
    await AsyncStorage.multiSet([
      ['key1', 'value1'],
      ['key2', 'value2'],
    ]);
    setLabel('Multiple items set');
  }

  async function multiGet() {
    const values = await AsyncStorage.multiGet(['key1', 'key2']);
    setLabel('Multiple items retrieved');
    console.log(values);
  }

  return (
    <View style={styles.container}>
      <Button onPress={setItem}>Set Item</Button>
      <Button onPress={getItem}>Get Item</Button>
      <Button onPress={removeItem}>Remove Item</Button>
      <Button onPress={clearStorage}>Clear Storage</Button>
      <Button onPress={getAllKeys}>Get All Keys</Button>
      <Button onPress={multiSet}>Multi Set</Button>
      <Button onPress={multiGet}>Multi Get</Button>
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
