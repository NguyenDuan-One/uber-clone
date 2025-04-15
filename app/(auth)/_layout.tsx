import { Stack } from 'expo-router';
export default function Layout() {

  return (
      <Stack>
        <Stack.Screen name="wellcome" options={{ headerShown: false, title: 'WeelCome' }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      </Stack>
  );
}
