//index.js

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import createUser from "./screens/createUser";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="createUser" component={createUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
