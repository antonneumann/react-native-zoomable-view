import * as React from 'react';

import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import { useSharedValue } from 'react-native-reanimated';
import { Markers } from './Markers';

export default function App() {
  const scale = useSharedValue(1);
  const [showMarkers, setShowMarkers] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text>ReactNativeZoomableView</Text>
      <View style={styles.box}>
        <ReactNativeZoomableView
          initialZoom={1}
          minZoom={0.5}
          maxZoom={1.5}
          scaleValue={scale}
        >
          <View style={styles.contents}>
            <Image
              style={styles.img}
              source={{ uri: 'https://placekitten.com/400/400' }}
            />
            {showMarkers && <Markers scale={scale} />}
          </View>
        </ReactNativeZoomableView>
      </View>
      <Button
        title={`${showMarkers ? 'Hide' : 'Show'} markers`}
        onPress={() => setShowMarkers((value) => !value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  contents: {
    flexGrow: 1,
    alignSelf: 'stretch',
  },
  box: { borderWidth: 5, height: 500, width: 310 },
  img: { width: '100%', height: '100%', resizeMode: 'contain' },
});
