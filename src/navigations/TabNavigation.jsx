import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home'
import Detail from '../screens/Detail'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        focused ? iconName = "home" : iconName = "home-outline"
                    } else if (route.name === 'Detail') {
                        focused ? iconName = 'hammer' : iconName = 'hammer-outline'
                    }

                    return <Icon name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: 'crimson'
            })}>
                <Tab.Screen name='Home' component={Home} options={{ headerShown: false, tabBarLabel: "Asosiy" }} />
                <Tab.Screen name='Detail' component={Detail} options={{ headerShown: false, tabBarLabel: 'Sozlamalar', tabBarBadge: 12 }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}