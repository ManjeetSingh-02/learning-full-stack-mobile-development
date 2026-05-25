import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useState } from 'react';
import { Directory, File, Paths } from 'expo-file-system';
import { Image } from 'expo-image';

export default function FileSystemStorageExample() {
  const [label, setLabel] = useState('Press a button to interact with FileSystemStorage');
  const [downloadedImageURI, setDownloadedImageURI] = useState<string | null>(null);

  const demoFile = new File(Paths.document, 'demo.txt');
  const copyOfDemoFile = new File(Paths.document, 'copy_of_demo.txt');
  const movedDemoFile = new File(Paths.document, 'moved_demo.txt');

  const notesDirectory = new Directory(Paths.document, 'notes');

  function writeFile() {
    demoFile.write('Hello, Expo FileSystem!');
    setLabel('File written');
  }

  async function readFile() {
    const content = await demoFile.text();
    setLabel('File read');
    console.log(content);
  }

  async function appendToFile() {
    const oldContent = await demoFile.text();
    demoFile.write(oldContent + '\nNew content!');
    setLabel('File appended');
  }

  function copyFile() {
    demoFile.copy(copyOfDemoFile);
    setLabel('File copied');
  }

  function moveFile() {
    demoFile.move(movedDemoFile);
    setLabel('File moved');
  }

  function deleteFiles() {
    demoFile.delete();
    copyOfDemoFile.delete();
    movedDemoFile.delete();
    setLabel('Files deleted');
  }

  function logFilesInfo() {
    console.log(demoFile);
    console.log(copyOfDemoFile);
    console.log(movedDemoFile);
    setLabel('All Files info logged to console');
  }

  async function downloadFile() {
    const folder = new Directory(Paths.document, 'downloads');
    const downloadFile = await File.downloadFileAsync('https://picsum.photos/400', folder);
    setLabel('File downloaded');
    setDownloadedImageURI(downloadFile.uri);
  }

  function createDirectory() {
    notesDirectory.create();
    setLabel('Directory created');
  }

  function readDirectory() {
    const files = notesDirectory.list();
    console.log(files);
    setLabel('Directory read');
  }

  function deleteDirectory() {
    notesDirectory.delete();
    setLabel('Directory deleted');
  }

  function logDirectoryInfo() {
    console.log(notesDirectory);
    setLabel('Directory info logged to console');
  }

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>{label}</Text>
      {downloadedImageURI && (
        <Image source={downloadedImageURI} style={{ height: 40, width: 40 }} />
      )}
      <Button onPress={writeFile}>Write File</Button>
      <Button onPress={readFile}>Read File</Button>
      <Button onPress={appendToFile}>Append to File</Button>
      <Button onPress={copyFile}>Copy File</Button>
      <Button onPress={moveFile}>Move File</Button>
      <Button onPress={deleteFiles}>Delete Files</Button>
      <Button onPress={logFilesInfo}>Log Files Info</Button>
      <Button onPress={downloadFile}>Download File</Button>
      <Button onPress={createDirectory}>Create Directory</Button>
      <Button onPress={readDirectory}>Read Directory</Button>
      <Button onPress={deleteDirectory}>Delete Directory</Button>
      <Button onPress={logDirectoryInfo}>Log Directory Info</Button>
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
