import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  const [data, setData] = useState<null | { title: string }>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{data && data.title}</Text>
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
