import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const MapScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MapView style={{ flex: 1 }} initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.001,
        longitudeDelta: 0.006,
      }}>
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324, }}
          title='travel photo'
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default MapScreen;