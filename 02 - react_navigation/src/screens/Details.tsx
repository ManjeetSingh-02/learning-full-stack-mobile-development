// external-imports
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export default function DetailsScreen() {
  // navigation hook to navigate programmatically if needed
  const navigation = useNavigation<any>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      <Text>Details Screen</Text>
      {/* @ts-ignore */}
      <Button title="Go To Profile Screen" onPress={() => navigation.navigate('Profile')} />
      {/* @ts-ignore */}
      <Button title="Go To Home Screen via PopTo" onPress={() => navigation.popTo('Home')} />
      {/* @ts-ignore */}
      <Button title="Go To First Screen via PopToTop" onPress={() => navigation.popToTop()} />
      {/* @ts-ignore */}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      {/* @ts-ignore */}
      <Button title="Go To Details Screen via Push" onPress={() => navigation.push('Details')} />
      {/* @ts-ignore */}
      <Button
        title="Go To Details Screen via Replace"
        onPress={() => navigation.replace('Details')}
      />
    </View>
  );
}
