import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import GameConfigurator from "../screens/GameConfigurator";
import GameHome from "../screens/GameHome";
import GameInstructions from '../screens/GameInstructions';


const Stack = createNativeStackNavigator();

export default GameNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicio" component={GameHome} />
                <Stack.Screen name="Configuración" component={GameConfigurator} />
                <Stack.Screen name="Instrucciones" component={GameInstructions} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}