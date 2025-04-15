import { SafeAreaView } from 'react-native-safe-area-context';
import { Text,View} from 'react-native';
import { Redirect, useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return <Redirect href="/(auth)/wellcome" />;
}
 


