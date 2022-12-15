import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Main from "./src/main/Main";

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main Page">
          <Stack.Screen options={{headerShown: false}} name="Main Page" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}



