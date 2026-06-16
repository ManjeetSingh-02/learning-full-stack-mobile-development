import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Button, ScrollView, Text } from 'react-native';

const IMPACTS = [
  { label: 'Light', style: Haptics.ImpactFeedbackStyle.Light },
  { label: 'Medium', style: Haptics.ImpactFeedbackStyle.Medium },
  { label: 'Heavy', style: Haptics.ImpactFeedbackStyle.Heavy },
  { label: 'Rigid', style: Haptics.ImpactFeedbackStyle.Rigid },
  { label: 'Soft', style: Haptics.ImpactFeedbackStyle.Soft },
] as const;

const NOTIFICATIONS = [
  { label: 'Success', type: Haptics.NotificationFeedbackType.Success },
  { label: 'Warning', type: Haptics.NotificationFeedbackType.Warning },
  { label: 'Error', type: Haptics.NotificationFeedbackType.Error },
] as const;

export default function HapticsScreen() {
  const [lastFeedback, setLastFeedback] = useState<string | null>(null);

  const run = async (label: string, action: () => Promise<void>) => {
    try {
      await action();
      setLastFeedback(label);
    } catch {
      setLastFeedback(`${label} (not supported on this device)`);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 24, gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: '600' }}>Haptics</Text>
      <Text>Use sparingly — meaningful moments only.</Text>

      <Text style={{ fontWeight: '600' }}>Selection</Text>
      <Button
        title="selectionAsync()"
        onPress={() => run('selectionAsync()', () => Haptics.selectionAsync())}
      />

      <Text style={{ fontWeight: '600' }}>Notifications</Text>
      {NOTIFICATIONS.map(item => (
        <Button
          key={item.label}
          title={`notificationAsync(${item.label})`}
          onPress={() =>
            run(`notificationAsync(${item.label})`, () => Haptics.notificationAsync(item.type))
          }
        />
      ))}

      <Text style={{ fontWeight: '600' }}>Impacts</Text>
      {IMPACTS.map(item => (
        <Button
          key={item.label}
          title={`impactAsync(${item.label})`}
          onPress={() => run(`impactAsync(${item.label})`, () => Haptics.impactAsync(item.style))}
        />
      ))}

      {lastFeedback && <Text style={{ marginTop: 8 }}>Last triggered: {lastFeedback}</Text>}
    </ScrollView>
  );
}
