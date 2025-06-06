import Colors from '@/constants/Colors';

import { 
  ClerkProvider, 
  SignedIn, 
  useAuth } from '@clerk/clerk-expo';

import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

import { 
  Link, 
  Stack, 
  useRouter, 
  useSegments } from 'expo-router';

import * as SecureStore from 'expo-secure-store';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { 
  ActivityIndicator, 
  TouchableOpacity, 
  View 
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Cache the Clerk JWT
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  useEffect(() => {
    console.log('isSignedIn', isSignedIn);
    const inAuthGroup= segments[0] === '(authenticated)'

    if (isSignedIn && !inAuthGroup) {
      router.replace('/(authenticated)/(tabs)/home');
    }else if(!SignedIn){
      router.replace('/');
    }
  
  }, [isSignedIn]);

  if (!loaded || !isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="signup"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.background },
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <Ionicons name="arrow-back" size={34} color={Colors.dark} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="login"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.background },
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <Ionicons name="arrow-back" size={34} color={Colors.dark} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Link href={'/help'} asChild>
              <TouchableOpacity>
                <Ionicons name="help-circle-outline" size={34} color={Colors.dark} />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />

      <Stack.Screen name="help" options={{ title: 'Help', presentation: 'modal' }} />
      <Stack.Screen name="(authenticated)/(tabs)" options={{ headerShown:false }} />

      <Stack.Screen
        name="verify/signup/[email]"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.background },
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <Ionicons name="arrow-back" size={34} color={Colors.dark} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="(authenticated)/chat/[room]"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(authenticated)/clubs/club-panel/[club]"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="(authenticated)/clubs/create-new/page"
        options={{
          title: 'Yeni bir kulüp oluştur',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.background,
          },
        }}
      />
      <Stack.Screen
        name="(authenticated)/teams/deadlines/[team]"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerShown:false,
        }}/>
      <Stack.Screen
        name="(authenticated)/events/speakers/[event]"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerShown:false,
        }}/>
      <Stack.Screen
        name="(authenticated)/tinder/select"
        options={{
          title: 'plsdontoverthinkandgivemeaname',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle:{
            backgroundColor: Colors.background,
          }
        }}/>
              <Stack.Screen
        name="(authenticated)/tinder/studybuddy"
        options={{
          title: 'omgareyouarealrealrealuser',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle:{
            backgroundColor: Colors.background,
          }
        }}/>
        <Stack.Screen
        name="(authenticated)/tinder/project"
        options={{
          title: 'wooooow',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle:{
            backgroundColor: Colors.background,
          }
        }}/>
        <Stack.Screen
        name="(authenticated)/perks/claim/[perk]"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle:{
            backgroundColor: Colors.background,
          }
          
        }}/>
                <Stack.Screen
        name="(authenticated)/perks/main"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle:{
            backgroundColor: Colors.background,
          }
          
        }}/>
                        <Stack.Screen
        name="(authenticated)/perks/info/[perk]"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle:{
            backgroundColor: Colors.background,
          }
          
        }}/>
                                <Stack.Screen
        name="(authenticated)/adminstration/school"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle:{
            backgroundColor: Colors.background,
          }
          
        }}/>
                                        <Stack.Screen
        name="(authenticated)/adminstration/verify"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle:{
            backgroundColor: Colors.background,
          }
          
        }}/>
        <Stack.Screen
        name="(authenticated)/school/[school]"
        options={{
          title: '',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle:{
            backgroundColor: Colors.background,
          }
          
        }}/>
        <Stack.Screen
        name="(authenticated)/school/announcements/[school]"
        options={{
          title: 'Announcements',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle:{
            backgroundColor: Colors.background,
          }
          
        }}/>
        <Stack.Screen
        name="(authenticated)/tinder/tutor"
        options={{
          title: 'Find a tutor',
          headerBackTitle: '',
          headerShadowVisible: false,
          headerStyle:{
            backgroundColor: Colors.background,
          }
          
        }}/>
    </Stack>
  );
};

const RootLayoutNav = () => {
  return (
    <ClerkProvider publishableKey="pk_test_d2VhbHRoeS1ibG93ZmlzaC0yOC5jbGVyay5hY2NvdW50cy5kZXYk" tokenCache={tokenCache}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar style="light" />
            <InitialLayout />
          </GestureHandlerRootView>
    </ClerkProvider>
  );
};

export default RootLayoutNav;