import { useState } from 'react';
import { Image, Text, View, TextInput, Pressable } from 'react-native';

export default function () {
  const [name, setName] = useState('');
  const [pressedState, setPressedState] = useState('not-pressed');

  return (
    <View>
      {/* normal text */}
      <Text>Hello World</Text>

      {/* text with numberOfLines prop to limit the number of lines displayed */}
      <Text numberOfLines={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo tempora,
        praesentium tenetur at natus cumque cupiditate sapiente impedit sit non totam ab quae rerum
        incidunt nisi consequatur numquam voluptatibus ipsum officiis recusandae veniam assumenda
        dolores qui! Hic fugiat, distinctio labore enim asperiores laudantium, facere officiis
      </Text>

      {/* displaying an image from a remote URL */}
      <Image
        source={{ uri: 'https://chaicode.com/assets/white-1-CYshgcRl.webp' }}
        width={200}
        height={200}
      />

      {/* displaying a local image from the assets folder */}
      <Image
        source={require('@/assets/images/icon.png')}
        style={{ width: 200, height: 200 }}
        blurRadius={10}
      />

      {/* text input field */}
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={'green'}
        style={{
          marginHorizontal: 'auto',
          marginVertical: 20,
          padding: 4,
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: 4,
        }}
      />

      {/* pressable component with various event handlers */}
      <Pressable
        // hitSlop={30}
        onPressIn={() => setPressedState('press-in')}
        onPressOut={() => setPressedState('press-out')}
        onLongPress={() => setPressedState('long-press')}
        onPress={() => setPressedState('Pressed')}
        style={({ pressed }) => ({
          backgroundColor: pressed ? 'lightgray' : 'white',
          padding: 10,
          marginHorizontal: 'auto',
          marginVertical: 20,
        })}
      >
        {({ pressed }) => (pressed ? <Text>Pressed</Text> : <Text>Press Me</Text>)}
      </Pressable>
      <Text style={{ textAlign: 'center' }}>{pressedState}</Text>
    </View>
  );
}
