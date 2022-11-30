import { CreateNativeStackNavigator } from "@react-navigation/native-stack";
import GameConfigurator from "../screens/GameConfigurator";
import GameHome from "../screens/GameHome";
import { NavigationContainer } from "@react-navigation/native";

const Stack = CreateNativeStackNavigator();

export default GameNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicio" component={GameHome} />
                <Stack.Screen name="Configuración" component={GameConfigurator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}