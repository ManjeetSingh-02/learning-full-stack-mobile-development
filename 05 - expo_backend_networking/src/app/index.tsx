import { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  async function fetchDataFromExternalAPI() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchDataFromExternalAPI();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
