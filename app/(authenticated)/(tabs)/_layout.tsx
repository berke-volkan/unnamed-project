import { Tabs } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const TabIcon = ({ emoji }: { emoji: string }) => (
  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 20 }}>{emoji}</Text>
  </View>
)

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e5e5e5',
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#666',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: () => <TabIcon emoji="🏠" />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          headerShown: false,
          tabBarIcon: () => <TabIcon emoji="👾" />,
        }}
      />
      <Tabs.Screen
        name="clubs"
        options={{
          title: 'Clubs',
          headerShown: false,
          tabBarIcon: () => <TabIcon emoji="🌍" />,
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Events',
          headerShown: false,
          tabBarIcon: () => <TabIcon emoji="💎" />,
        }}
      />
      <Tabs.Screen
        name="pomodoro"
        options={{
          title: 'Pomodoro',
          headerShown: false,
          tabBarIcon: () => <TabIcon emoji="🍅" />,
        }}
      />
      {/*
      <Tabs.Screen
        name="workspace"
        options={{
          title: 'Workspace',
          headerShown: false,
          tabBarIcon: () => <TabIcon emoji="🧰" />,
        }}
      />
      */}
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: () => <TabIcon emoji="⚙️" />,
        }}
      />
    </Tabs>
  )
}

export default Layout