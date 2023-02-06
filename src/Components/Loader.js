import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Loader() {


  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay={true}
        loop
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        source={require('../../assets/loader.json')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});