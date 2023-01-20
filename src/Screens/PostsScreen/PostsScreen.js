import { View,Text, StyleSheet} from 'react-native';

const PostsScreen = () => {
  
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
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
})

export default PostsScreen;