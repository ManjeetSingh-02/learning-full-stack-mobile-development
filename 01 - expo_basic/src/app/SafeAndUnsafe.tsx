import { StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

function SafeScreen() {
  return (
    <SafeAreaView
      edges={['bottom', 'top']}
      style={{ flex: 1, backgroundColor: '#1c1c1e' }}
    >
      <Text style={{ color: '#fff', fontSize: 18, padding: 16 }}>
        Header (safely below notch ✅)
      </Text>
      <Text style={{ color: '#aaa', padding: 16 }}>
        This content might be hidden behind the status bar in dark mode.
      </Text>
    </SafeAreaView>
  );
}

function UnsafeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#1c1c1e' }}>
      <Text style={{ color: '#fff', fontSize: 18, padding: 16 }}>Header (bleeds under notch!)</Text>
      <Text style={{ color: '#aaa', padding: 16 }}>
        This content might be hidden behind the status bar in dark mode.
      </Text>
    </View>
  );
}

function SafeScreenWithInsets() {
  const insets = useSafeAreaInsets();
  console.log(insets);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'cyan',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <StatusBar barStyle={'dark-content'} />
      <Text>Main Screen</Text>
    </View>
  );
}

function SafeScreenWithProvider() {
  return (
    <SafeAreaProvider>
      <Text>Main Screen</Text>
    </SafeAreaProvider>
  );
}

export default function () {
  return (
    <>
      <SafeScreen />
      {/* <UnsafeScreen /> */}
      {/* <SafeScreenWithInsets /> */}
      {/* <SafeScreenWithProvider /> */}
    </>
  );
}
