import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function AudioPlayer() {
  const [url, setUrl] = useState<string | null>(null);
  const player = useAudioPlayer(url);
  const status = useAudioPlayerStatus(player);

  function setSampleURL() {
    setUrl('https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3');
  }

  function setSampleFileURL() {
    setUrl(require('@/assets/sample.mp3'));
  }

  function replay() {
    player.seekTo(0);
  }

  useEffect(() => {
    if (url) player.play();
  }, [url, player]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
      }}
    >
      {url && (
        <Text>
          {formatTime(status.currentTime)} / {formatTime(status.duration)}
        </Text>
      )}
      <Button title="Play(SAMPLE_URL)" onPress={setSampleURL} />
      <Button title="Play(SAMPLE_FILE)" onPress={setSampleFileURL} />
      <Button title="Pause" onPress={() => player.pause()} disabled={!url} />
      <Button title="Replay" onPress={replay} disabled={!url} />
      <Button title="Stop" onPress={() => setUrl(null)} disabled={!url} />
    </View>
  );
}

function formatTime(s: number) {
  if (!Number.isFinite(s) || s < 0) return '0:00';
  const m = Math.floor(s / 60);
  const rs = Math.floor(s % 60);
  return `${m}:${rs.toString().padStart(2, '0')}`;
}
