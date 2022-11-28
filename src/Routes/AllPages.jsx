import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../Pages/Start";

const Stack = createNativeStackNavigator();

export default function AllPages(props) {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShoen: false, }}>
                <Stack.Screen name="Start" component={Start} />
            </Stack.Navigator>
        </NavigationContainer>
    );

};