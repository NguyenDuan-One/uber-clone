import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { router, useNavigation } from 'expo-router';
import Swiper from 'react-native-swiper';
import { useRef, useState } from 'react';
import { onboarding } from '@/constants';
import ButtonCustom from '@/components/CustomerButton';
export default function Wellcome() {
    const refSwiper = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isLastSlide = activeIndex === onboarding.length - 1;
    return (
        <SafeAreaView className="flex items-center justify-between h-full bg-white">
            <TouchableOpacity onPress={() => {
                router.replace("/(auth)/sign-up")
            }} className='w-full justify-end items-end p-5'>
                <Text className="text-red text-md font-JakartaSemiBold text-secondary-800">Skip</Text>
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
                                 <Text className="text-gray-500 font-Jakarta text-center text-lg mt-5">{item.description}</Text>
                            </View>
                        </View>

                    ))
                }
            </Swiper>
            <ButtonCustom title={isLastSlide?"Get start":"Next"} onPress={ ()=>{
                if (isLastSlide) {
                    router.replace("/(auth)/sign-up")
                } else {
                    refSwiper.current?.scrollBy(1);
                }
            }} className='w-10/12 mt-10 bg-primary-500'></ButtonCustom>
        </SafeAreaView>

    );
}


