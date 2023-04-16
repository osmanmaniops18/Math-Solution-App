import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './home/HomeScreen';
import ChapterList from './chapter/ChapterList';
import {Image, Pressable} from 'react-native';
import SplashScreen from './SplashScreen';
import {useNavigation} from '@react-navigation/native';
import AboutScreen from './home/AboutScreen';
const AppNavigation = () => {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />

      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Math Solutions',
          headerBackVisible: false,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('About')}
              style={{height: 50, width: 50}}>
              <Image
                style={{height: '100%', width: '100%'}}
                source={require('./assets/about.png')}
              />
            </Pressable>
          ),
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'black',
            height: 120,
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Chapter" component={ChapterList} />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="About"
        component={AboutScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
