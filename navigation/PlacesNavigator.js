import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlacesListScreen from "../screens/PlacesListScreen"

const Stack = createStackNavigator()

const PlacesStackNavigator = ()=>(
    <Stack.Navigator>
        <Stack.Screen name="PlacesListScreen" component={PlacesListScreen}/>
    </Stack.Navigator>
)


const PlacesNavigator = ()=>{
    return (
        <NavigationContainer>
            <PlacesStackNavigator/>
        </NavigationContainer>
    )
}

export default PlacesNavigator