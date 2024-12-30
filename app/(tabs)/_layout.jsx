import { Tabs, Redirect } from 'expo-router'
import { View, Text, Image } from 'react-native'
import home from '../../assets/icons/home.png'
import { icons } from '../../constants'

function TabIcon(icon, color, name, focused) {
    return (
        <View className={"items-center justify-center gap-2"}>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-4"
            />
            <Text className={`${focused ? 'font-pextrabold' : 'font-pregular'} text-xs`} style={{ color: color }}>{name}</Text>
        </View>

    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#FFA001',
                    tabBarInactiveTintColor: '#CDCDE0',
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderTopWidth: 1,
                        borderTopColor: '#232533',
                        height: 84,
                    }
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            TabIcon(icons.home, color, "Home", focused)
                        )
                    }}
                />
                <Tabs.Screen
                    name='bookmark'
                    options={{
                        title: "Bookmark",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            TabIcon(icons.bookmark, color, "Bookmark", focused)
                        )
                    }}
                />
                <Tabs.Screen
                    name='create'
                    options={{
                        title: "Create",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            TabIcon(icons.plus, color, "Create", focused)
                        )
                    }}
                />
                <Tabs.Screen
                    name='profile'
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            TabIcon(icons.profile, color, "Profile", focused)
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout