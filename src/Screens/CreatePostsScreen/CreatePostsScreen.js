import { View,Text, StyleSheet} from 'react-native';

const CreatePostsScreen = () => {
  
  return (
    <View style={styles.container}>
      <Text>CreatePostsScreen</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  }
});

export default CreatePostsScreen;