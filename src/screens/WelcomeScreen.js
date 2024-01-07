import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashSreen from 'expo-splash-screen'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ArrowUpRightIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {

  const navigation = useNavigation();
  const [fontsLoaded, fontError] = useFonts({
    SpaceGroteskSemiBold: require('../fonts/SpaceGrotesk-SemiBold.ttf'),
    SpaceGroteskBold: require('../fonts/SpaceGrotesk-Bold.ttf'),
    SpaceGroteskMedium: require('../fonts/SpaceGrotesk-Medium.ttf'), // SpaceGroteskMedium
  })

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded || fontError) {
      await SplashSreen.hideAsync()
    }
  }, [fontsLoaded, fontError])


  if(!fontsLoaded) {
    return null
  }
  return (
    <View onLayout={onLayoutRootView}
      className="flex-1"
      style={{
        width: wp(100),
      }}
    >
      <View
        className="justify-center items-center border-2"
        style={{
          width: wp(100),
          height: hp(100),
        }}
      >
        {/* Heart Icon Image */}
        <View 
          className="justify-center items-center my-4"
          style={{
            width: wp(100)
          }}
        >
          <Image 
            source={require("../../assets/HeartIcon.png")}
            style={{
              width: wp(100),
              height: hp(40),
              resizeMode: "cover",
            }}
          />
        </View>
        {/* Welcome Text */}
        <View className="w-full p-6 px-10">
            <Text className="font-semibold tracking-widest leading-none"
              style={{
                fontSize: wp(10),
                fontFamily: "SpaceGroteskSemiBold",
              }}
            >
              Embrace
            </Text>
            <Text
              className="tracking-widest w-[70%] leading-none"
              style={{
                fontSize: wp(10),
                fontFamily: "SpaceGroteskBold",
              }}
            >
              A New Way of Dating
            </Text>
            <Text className="text-ray-800 leading-6 tracking-wider w-[70%] mt-2"
              style={{
                fontSize: wp(4),
                fontFamily: "SpaceGroteskMedium",
              }}
            >
              We combine cutting edge technologiees with a modern approach to matchmaking.
            </Text>
        </View>
        <View className=" w-full px-10">
              <TouchableOpacity 
                className=" bg-[#f26322] px-4 py-4 rounded-xl flex-row justify-center items-center w-[45%]"
                onPress={() => navigation.navigate("HomeTabs")}>
                  <Text className="text-white font-bold mr-2"
                    style={{
                      fontSize: wp(4),
                      fontFamily: "SpaceGroteskMedium",
                    }}
                  >
                    Get Started
                  </Text>
                  <ArrowUpRightIcon 
                    name="arrow-up-right" 
                    size={20} 
                    color={"white"} 
                    strokeWidth={2.5}
                  />
                </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}