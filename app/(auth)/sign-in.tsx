import { SafeAreaView } from 'react-native-safe-area-context';
import { Text,View} from 'react-native';
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';

export default function SignIn() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-red-500">
    <Text onPress={()=>{
      navigation.navigate("test")
    }} className="text-red text-xl">SignIn screen</Text>
  </SafeAreaView>
 
  );
}


