import { useState } from 'react';
import { Text, View, ScrollView, Button, Switch } from 'react-native';

export default function () {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: 20, alignItems: 'center' }}
    >
      {items.map(item => (
        <View
          key={item}
          style={{
            backgroundColor: 'white',
            padding: 16,
            borderRadius: 10,
            marginBottom: 10,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Text style={{ fontSize: 16 }}>{item}</Text>
        </View>
      ))}

      {/* Button */}
      <Button
        title="Hello m a button"
        color={'purple'}
        onPress={() => alert('Pressed the button')}
      />

      {/* Switch */}
      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
        trackColor={{ false: 'red', true: 'green' }}
        thumbColor={'blue'}
      />
    </ScrollView>
  );
}
