import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { SafeArea } from './src/components/utility/safe-area.component';
import Ionicons from '@expo/vector-icons/Ionicons';

import { ThemeProvider } from 'styled-components/native';
import { theme } from "./src/infrastructure/theme";
import { useFonts as UseOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as UseLato, Lato_400Regular } from '@expo-google-fonts/lato';


const Tab = createBottomTabNavigator();


export default function App() {
  const [oswaldLoaded] = UseOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = UseLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const TAB_ICON = {
    Restaurant: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  };

  const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>

  const Map = () => <SafeArea><Text>Maps</Text></SafeArea>

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color}/>
      )
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{ 
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}


