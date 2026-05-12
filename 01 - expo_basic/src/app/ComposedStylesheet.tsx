import { StyleSheet, Text, View } from 'react-native';

export default function () {
  const isActive = true;
  const buttonStyle = StyleSheet.compose(styles.button, isActive && styles.activeButton);

  return (
    <View style={styles.container}>
      <View style={[styles.button, isActive && styles.activeButton]}>
        <Text style={styles.buttonText}>Uncomposed Button</Text>
      </View>

      {/* @ts-ignore */}
      <View style={buttonStyle}>
        <Text style={styles.buttonText}>Composed Button</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: '#ccc', // Default grey
  },
  activeButton: {
    backgroundColor: '#6C63FF', // Override to purple when active
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
