import { View, StyleSheet, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { Button } from '@react-navigation/elements';
import { useEffect, useState } from 'react';

const db = SQLite.openDatabaseSync('demo.db');

export default function SQLiteStorageExample() {
  const [label, setLabel] = useState(
    'Table Created, Press a button to interact with SQLiteStorage'
  );

  useEffect(() => {
    db.execSync(`
        CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age INTEGER
        );
        `);
  }, []);

  function insertData() {
    db.runSync('INSERT INTO users (name, age) VALUES (?, ?);', 'John Doe', 30);
    setLabel('Data inserted successfully');
  }

  function getAllData() {
    const result = db.getAllSync('SELECT * FROM users;');
    console.log(result);
    setLabel('Data retrieved');
  }

  function getFirstData() {
    const result = db.getFirstSync('SELECT * FROM users;');
    console.log(result);
    setLabel('First data retrieved');
  }

  function updateData() {
    db.runSync('UPDATE users SET age = ? WHERE name = ?;', 40, 'John Doe');
    setLabel('Data updated successfully');
  }

  function prepareData() {
    const statement = db.prepareSync('INSERT INTO users (name, age) VALUES (?, ?)');
    statement.executeSync(['Jane Doe', 25]);
    statement.finalizeSync();
    setLabel('Data prepared and inserted successfully');
  }

  function deleteData() {
    db.runSync('DELETE FROM users WHERE name = ?;', 'John Doe');
    setLabel('Data deleted successfully');
  }

  function dropTable() {
    db.execSync('DROP TABLE IF EXISTS users;');
    setLabel('Table dropped successfully');
  }

  return (
    <View style={styles.container}>
      <Button onPress={insertData}>Insert Data</Button>
      <Button onPress={getAllData}>Get All Data</Button>
      <Button onPress={getFirstData}>Get First Data</Button>
      <Button onPress={updateData}>Update Data</Button>
      <Button onPress={prepareData}>Prepare Data</Button>
      <Button onPress={deleteData}>Delete Data</Button>
      <Button onPress={dropTable}>Drop Table</Button>
      <Text style={{ textAlign: 'center' }}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
