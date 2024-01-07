import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ChatDetailsScreen from '../screens/ChatDetailsScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {

  const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Chat") {
              iconName = "chatbubbles-outline";
            } else if (route.name === "Profile") {
              iconName = "person-outline";
            }

            const customizeSize = 25

            return <Ionicons name={iconName} size={customizeSize} color={focused ? "#3B82F6" : "gray"} />

          },
          tabBarActiveTintColor: "#3b82f6",
          tabBarLabelStyle: {
            fontWeight: "bold",
          },
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "white",
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    )
  }



  return (
    <NavigationContainer
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Navigator
        initialRouteName='HomeTabs'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="ChatDetails"
          component={ChatDetailsScreen}
          options={{
            presentation: 'modal'
          }}
        />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}