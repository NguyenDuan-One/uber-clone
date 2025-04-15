
import { images } from '@/constants';
import { Text,View,ScrollView, Image} from 'react-native';

export default function SignUp() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
          <View >
            <Image source={images.signUpCar} className='w-full h-[250px]'/>
          </View>
      </View>
  </ScrollView>
 
  );
}


