import { Tabs } from 'expo-router'
import React from 'react'
<<<<<<< HEAD
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
          title: 'Ana Sayfa',
          headerShown: false,
          tabBarIcon: () => <TabIcon emoji="🏠" />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Sohbet',
          headerShown: false,
          tabBarIcon: () => <TabIcon emoji="👾" />,
        }}
      />
      <Tabs.Screen
        name="clubs"
        options={{
          title: 'Kulüpler',
          headerShown: false,
          tabBarIcon: () => <TabIcon emoji="🌍" />,
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Etkinlikler',
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
      <Tabs.Screen
        name="workspace"
        options={{
          title: 'Workspace',
          headerShown: false,
          tabBarIcon: () => <TabIcon emoji="🧰" />,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Ayarlar',
          headerShown: false,
          tabBarIcon: () => <TabIcon emoji="⚙️" />,
        }}
      />
=======
import { Text } from 'react-native'
const Layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name="home"
            options={{
            title: 'Ana Sayfa',
            headerShown: false,
            tabBarIcon: () => <Text>🏠</Text>,
            }}
        />
        <Tabs.Screen
            name="chat"
            options={{
            title: 'Sohbet',
            headerShown: false,
            tabBarIcon: () => <Text>👾</Text>,
            }}
        />
        <Tabs.Screen
            name="clubs"
            options={{
            title: 'Kulüpler',
            headerShown: false,
            tabBarIcon: () => <Text>🌍</Text>,
            }}
        />
        <Tabs.Screen
            name="events"
            options={{
            title: 'Etkinlikler',
            headerShown: false,
            tabBarIcon: () => <Text>💎</Text>,
            }}
        />
        <Tabs.Screen
            name="pomodoro"
            options={{
            title: 'Pomodoro',
            headerShown: false,
            tabBarIcon: () => <Text>🍅</Text>
            }}
        />
        <Tabs.Screen
            name="workspace"
            options={{
            title: 'Workspace',
            headerShown: false,
            tabBarIcon: () => <Text>🧰</Text>
            }}
        />
        <Tabs.Screen
            name="setting"
            options={{
            title: 'Ayarlar',
            headerShown: false,
            tabBarIcon: () => <Text>⚙️</Text>,
            }}
        />

>>>>>>> 37aa45639aab9fd2fd2e72e301ab301e768bc043
    </Tabs>
  )
}

export default Layout