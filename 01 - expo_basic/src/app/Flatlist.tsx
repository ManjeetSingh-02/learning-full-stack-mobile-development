import { Text, View, FlatList } from 'react-native';

const USERS = [
  { id: '1', name: 'Alice Johnson', role: 'Designer' },
  { id: '2', name: 'Bob Smith', role: 'Developer' },
  { id: '3', name: 'Carol White', role: 'Manager' },
  { id: '4', name: 'David Brown', role: 'Developer' },
  { id: '5', name: 'Eve Davis', role: 'Designer' },
  { id: '6', name: 'Frank Wilson', role: 'Manager' },
  { id: '7', name: 'Grace Lee', role: 'Developer' },
  { id: '8', name: 'Hank Miller', role: 'Designer' },
  { id: '9', name: 'Ivy Taylor', role: 'Manager' },
  { id: '10', name: 'Jack Anderson', role: 'Developer' },
];

const renderItem = ({ item }: { item: { name: string; role: string } }) => (
  <View style={{ padding: 10 }}>
    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
    <Text style={{ paddingLeft: 10 }}>{item.role}</Text>
  </View>
);

export default function () {
  return (
    <FlatList
      // horizontal
      style={{ backgroundColor: 'cyan' }}
      data={USERS}
      keyExtractor={item => item.id}
      contentContainerStyle={{ padding: 20 }}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'black' }} />}
    />
  );
}
