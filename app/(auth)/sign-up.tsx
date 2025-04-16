
import { icons, images } from '@/constants';
import { Text, View, ScrollView, Image } from 'react-native';
import InputField from '@/components/InputField';
import { useState } from 'react';
import CustomerButton from '@/components/CustomerButton';

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    mail: "",
    password: ""
  });
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className='relative w-full h-[250px]'>
          <Image source={images.signUpCar} className='w-full h-[250px]' />
          <Text className='absolute bottom-5 text-2xl text-black font-JakartaBold left-5'>Create You Acount</Text>
        </View>
        <View className='flex-1 p-5'>

        <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
           <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.mail}
            onChangeText={(value) => setForm({ ...form, mail: value })}
          />
           <InputField
            label="Password"
            placeholder="Enter your password"
            icon={icons.lock}
            value={form.password}
            secureTextEntry={true}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomerButton title='Sign Up' bgVariant='primary'></CustomerButton>
        </View>
      </View>
    </ScrollView>

  );
}


