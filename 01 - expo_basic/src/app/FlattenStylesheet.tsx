import { StyleSheet, Text } from 'react-native';

export default function () {
  return <Text style={flat}>Flattened Style</Text>;
}

const styleA = StyleSheet.create({
  text: {
    color: 'blue',
    fontSize: 20,
  },
});

const styleB = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 14,
  },
});

const flat = StyleSheet.flatten([styleA.text, styleB.text]);
