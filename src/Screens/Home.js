import { useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";

import { authSignOutUser } from '../../redux/auth/authOperations';
import PostsScreen from './PostsScreen/PostsScreen';
import CreatePostsScreen from './CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from './ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function Home() {
  const dispatch = useDispatch();
    
  const signOut = () => {
    dispatch(authSignOutUser());
  }

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      tabBarStyle: {
        paddingHorizontal: 70,
      },
      tabBarActiveTintColor: '#FF6C00',
      tabBarInactiveTintColor: '#21212180',
      
    })}>
      <Tab.Screen name="Posts" component={PostsScreen}
        options={{
          title: 'Публикации',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Feather
              name='log-out'
              size={24}
              color='#BDBDBD'
              style={{ marginRight: 16 }}
              onPress={signOut}
            />
          ),
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={size} color={color} />
          )
        }} />
      <Tab.Screen name="CreatePosts" component={CreatePostsScreen}
        options={{
          title: 'Создать публикацию',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Feather name="arrow-left" size={24} color="#BDBDBD" style={{ marginLeft: 16 }} />
          ),
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="plus-circle" size={size} color={color} />
          )
        }} />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
         headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          )
        }} />
    </Tab.Navigator>
  );
};