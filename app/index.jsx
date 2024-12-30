import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }} >
        <View className="w-full items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Welcome to <Text className="color-secondary-200">YoqMi?</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode={"contain"}
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 my-7 text-center">Keep your family in sync with real-time shopping lists. YoqMi? makes shopping smarter, together!</Text>

          <CustomButton containerStyles="w-full mt-7" isLoading={false} handlePress={()=>{}} title="Lets go"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}