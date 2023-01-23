import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DefaultPostsScreen from '../DefaultPostsScreen/DefaultPostsScreen';
import MapScreen from '../MapScreen/MapScreen';
import CommentsScreen from '../CommentsScreen/CommentsScreen';

const NestedScreen = createNativeStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        options={{
          headerShown: false,
        }}
        name='DefaultScreen'
        component={DefaultPostsScreen}
      />
      <NestedScreen.Screen
        name='Map' component={MapScreen} />
      <NestedScreen.Screen name='Comments' component={CommentsScreen} />
    </NestedScreen.Navigator>
  );
}

export default PostsScreen;