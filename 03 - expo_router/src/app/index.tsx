import { Button } from '@react-navigation/elements';
import { Link } from 'expo-router';
import { View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Static Routes */}
      {/* @ts-ignore */}
      <Button>
        <Link href='/about'>Static File About</Link>
      </Button>

      {/* @ts-ignore */}
      <Button>
        <Link href='/contact'>Static Folder Contact/Index</Link>
      </Button>

      {/* @ts-ignore */}
      <Button>
        <Link href='/contact/locations'>Static Folder Contact/Locations</Link>
      </Button>

      {/* Dynamic Routes */}
      {/* @ts-ignore */}
      <Button>
        <Link href='/123'>Dynamic File UserID(123)</Link>
      </Button>

      {/* @ts-ignore */}
      <Button>
        <Link href='/docs/expo/guide'>Dynamic Folder Docs/(Expo)/Guide/Index</Link>
      </Button>

      {/* @ts-ignore */}
      <Button>
        <Link href='/docs/expo/guide/1'>Dynamic Folder Docs/(Expo)/Guide/(1)</Link>
      </Button>

      {/* Catch All Routes */}
      {/* @ts-ignore */}
      <Button>
        <Link href='/products/name'>Catch ALL Products/(name)</Link>
      </Button>

      {/* @ts-ignore */}
      <Button>
        <Link href='/products/name/overview/types'>
          Catch ALL Products/(name)/(overview)/(types)
        </Link>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});
