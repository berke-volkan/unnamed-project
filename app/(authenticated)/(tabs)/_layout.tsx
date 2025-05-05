import { Tabs } from 'expo-router'
import React from 'react'
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

    </Tabs>
  )
}

export default Layout