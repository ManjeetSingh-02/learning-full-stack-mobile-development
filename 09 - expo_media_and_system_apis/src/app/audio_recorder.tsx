import {
  AudioModule,
  RecordingPresets,
  setAudioModeAsync,
  useAudioPlayer,
  useAudioPlayerStatus,
  useAudioRecorder,
  useAudioRecorderState,
} from 'expo-audio';
import { useEffect, useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';

const SAMPLE_URL = 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3';

export default function RecordAndPlayScreen() {
  const [recordingURI, setRecordingURI] = useState<string | null>(null);

  const player = useAudioPlayer(SAMPLE_URL);
  const playerStatus = useAudioPlayerStatus(player);
  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const recorderState = useAudioRecorderState(recorder);

  useEffect(() => {
    (async () => {
      const permission = await AudioModule.requestRecordingPermissionsAsync();
      if (permission.granted)
        await setAudioModeAsync({
          playsInSilentMode: true,
          allowsRecording: true,
        });
    })();
  }, []);

  const ensureMic = async () => {
    const permission = await AudioModule.requestRecordingPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Microphone required', 'Grant mic access to record.');
      return false;
    }
    return true;
  };

  const startRecording = async () => {
    if (!(await ensureMic())) return;
    await recorder.prepareToRecordAsync();
    recorder.record();
  };

  const stopRecording = async () => {
    await recorder.stop();
    if (recorder.uri) setRecordingURI(recorder.uri);
  };

  const playSample = () => {
    player.replace(SAMPLE_URL);
    player.seekTo(0);
    player.play();
  };

  const playRecording = () => {
    if (!recordingURI) {
      Alert.alert('No recording', 'Record something first.');
      return;
    }
    player.replace(recordingURI);
    player.play();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', gap: 10, padding: 24 }}>
      <Text>Player: {playerStatus.playing ? 'Playing' : 'Paused'}</Text>
      <Button
        title={playerStatus.playing ? 'Pause' : 'Resume'}
        onPress={() => (playerStatus.playing ? player.pause() : player.play())}
      />
      <Button title="Play sample" onPress={playSample} />
      <Button title="Play my recording" onPress={playRecording} disabled={!recordingURI} />
      <Text>
        Recorder: {recorderState.isRecording ? 'Recording…' : 'Idle'} -
        {Math.round(recorderState.durationMillis / 1000)}s
      </Text>
      <Button
        title={recorderState.isRecording ? 'Stop recording' : 'Start recording'}
        onPress={recorderState.isRecording ? stopRecording : startRecording}
      />
      {recordingURI && (
        <Text selectable numberOfLines={2}>
          {recordingURI}
        </Text>
      )}
    </View>
  );
}
