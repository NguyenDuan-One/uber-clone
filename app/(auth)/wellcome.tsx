import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { router, useNavigation } from 'expo-router';
import Swiper from 'react-native-swiper';
import { useRef, useState } from 'react';
import { onboarding } from '@/constants';
export default function Wellcome() {
    const refSwiper = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <SafeAreaView className="flex items-center justify-between h-full bg-white">
            <TouchableOpacity onPress={() => {
                router.replace("/(auth)/sign-up")
            }} className='w-full justify-end items-end p-5'>
                <Text className="text-red text-xl">Skip</Text>
            </TouchableOpacity>

            <Swiper ref={refSwiper} loop={false}
                dot={<View className="w-[32px] h-[4px] bg-[#E2E8F0] rounded-full mx-1" />}
                activeDot={<View className="w-[32px] h-[4px] bg-[#0286FF] rounded-full mx-1" />}
                onIndexChanged={(index) => {
                    setActiveIndex(index);
                }}>

                {
                    onboarding.map((item) => (
                        <View key={item.id} className="flex items-center justify-end p-5">
                            <Image source={item.image} className='w-full h-[300px]' resizeMode='contain'></Image>
                            <View className='flex flex-row items-center justify-center w-full mt-10'> 
                                <Text className="text-black text-3xl font-bold mx-10 text-center">{item.title}</Text>
                               
                            </View>
                            <View>
                                 <Text className="text-gray-500 text-base mt-3 text-center">{item.description}</Text>
                            </View>
                        </View>

                    ))
                }
            </Swiper>
        </SafeAreaView>

    );
}


