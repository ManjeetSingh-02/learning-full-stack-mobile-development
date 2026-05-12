import { StyleSheet, Text } from 'react-native';

export default function () {
  return <Text style={flat}>Flattened Style</Text>;
}

const styleA = StyleSheet.create({
  text: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const styleB = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 14,
  },
});

// styles from styleA and styleB will be merged
// properties from styleB will override those from styleA in case of conflicts as styleB is later in the array
const flat = StyleSheet.flatten([styleA.text, styleB.text]);
