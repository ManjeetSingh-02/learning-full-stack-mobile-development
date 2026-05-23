import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const responseText = data
    ? JSON.stringify(data, null, 2)
    : 'Tap a button to load data and show the JSON response here.';

  async function fetchDataFromExternalAPI() {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError('Could not load data from the external API.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchUsers() {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('/api/users');
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError('Could not load users from the backend.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchUserById() {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('/api/users/1');
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError('Could not load the user from the backend.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function createUser() {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'Test User', email: 'testuser@example.com' }),
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError('Could not create a new user on the backend.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function updateUser() {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('/api/users/1', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'Updated Test User' }),
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError('Could not update the user on the backend.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteUser() {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('/api/users/1', {
        method: 'DELETE',
      });
      if (response.ok) {
        setData({ message: 'User deleted successfully' });
      } else {
        throw new Error('Failed to delete the user');
      }
    } catch (error) {
      setError('Could not delete the user from the backend.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.kicker}>Backend networking demo</Text>
          <Text style={styles.title}>Fetch data with a cleaner UI</Text>
          <Text style={styles.subtitle}>
            Try the external API or your local backend, then inspect the response in the card below.
          </Text>
        </View>

        <View style={styles.buttonRow}>
          <ActionButton
            label="Get Data From External API"
            onPress={fetchDataFromExternalAPI}
            variant="primary"
          />
          <ActionButton
            label="Get All Users From Backend API"
            onPress={fetchUsers}
            variant="info"
          />
          <ActionButton
            label="Create New User From Backend API"
            onPress={createUser}
            variant="success"
          />
          <ActionButton
            label="Get User-1 From Backend API"
            onPress={fetchUserById}
            variant="secondary"
          />
          <ActionButton
            label="Update User-1 Name From Backend API"
            onPress={updateUser}
            variant="warning"
          />
          <ActionButton
            label="Delete User-1 From Backend API"
            onPress={deleteUser}
            variant="danger"
          />
        </View>

        <View style={styles.panel}>
          <View style={styles.panelHeader}>
            <Text style={styles.panelTitle}>Response</Text>
            {isLoading ? (
              <ActivityIndicator color="#7C3AED" />
            ) : (
              <Text style={styles.panelHint}>Ready</Text>
            )}
          </View>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <Text style={data ? styles.codeBlock : styles.placeholderText}>{responseText}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

type ActionButtonProps = {
  label: string;
  onPress: () => void;
  variant: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
};

function ActionButton({ label, onPress, variant }: ActionButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        variant === 'primary' && styles.primaryButton,
        variant === 'secondary' && styles.secondaryButton,
        variant === 'info' && styles.infoButton,
        variant === 'success' && styles.successButton,
        variant === 'warning' && styles.warningButton,
        variant === 'danger' && styles.dangerButton,
        pressed && styles.buttonPressed,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          (variant === 'secondary' || variant === 'info' || variant === 'warning') &&
            styles.darkButtonText,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 72,
    paddingBottom: 32,
    gap: 20,
  },
  glowTop: {
    position: 'absolute',
    top: -90,
    right: -70,
    width: 220,
    height: 220,
    borderRadius: 220,
    backgroundColor: 'rgba(124, 58, 237, 0.25)',
  },
  glowBottom: {
    position: 'absolute',
    left: -90,
    bottom: 70,
    width: 240,
    height: 240,
    borderRadius: 240,
    backgroundColor: 'rgba(14, 165, 233, 0.16)',
  },
  header: {
    gap: 10,
  },
  kicker: {
    color: '#38BDF8',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  title: {
    color: '#F8FAFC',
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '800',
  },
  subtitle: {
    color: '#CBD5E1',
    fontSize: 15,
    lineHeight: 22,
  },
  buttonRow: {
    gap: 12,
  },
  button: {
    minHeight: 54,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  primaryButton: {
    backgroundColor: '#7C3AED',
  },
  secondaryButton: {
    backgroundColor: 'rgba(15, 23, 42, 0.55)',
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.28)',
  },
  infoButton: {
    backgroundColor: '#0EA5E9',
  },
  successButton: {
    backgroundColor: '#16A34A',
  },
  warningButton: {
    backgroundColor: '#F59E0B',
  },
  dangerButton: {
    backgroundColor: '#DC2626',
  },
  buttonPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.92,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  darkButtonText: {
    color: '#E2E8F0',
  },
  panel: {
    borderRadius: 20,
    backgroundColor: 'rgba(15, 23, 42, 0.78)',
    borderWidth: 1,
    borderColor: 'rgba(148, 163, 184, 0.18)',
    padding: 16,
    gap: 12,
  },
  panelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  panelTitle: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: '700',
  },
  panelHint: {
    color: '#94A3B8',
    fontSize: 13,
  },
  errorText: {
    color: '#FCA5A5',
    fontSize: 14,
    lineHeight: 20,
  },
  codeBlock: {
    color: '#E2E8F0',
    fontSize: 13,
    lineHeight: 20,
    fontFamily: 'monospace',
  },
  placeholderText: {
    color: '#94A3B8',
    fontSize: 14,
    lineHeight: 22,
  },
});
