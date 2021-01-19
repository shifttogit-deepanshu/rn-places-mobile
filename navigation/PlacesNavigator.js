import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlacesListScreen from "../screens/PlacesListScreen"
import NewPlacesScreen from "../screens/NewPlacesScreen"
import {Colors} from "../settings/Colors"

const Stack = createStackNavigator()

const PlacesStackNavigator = ()=>(
    <Stack.Navigator >
        <Stack.Screen name="PlacesListScreen" component={PlacesListScreen} options={{
            title:"Places",
            headerStyle:{
                backgroundColor:Colors.primaryColor
            },
            headerTintColor:"white"
        }}/>
        <Stack.Screen name="NewPlaceScreen" component={NewPlacesScreen} options={{
            title:"Add Place",
            headerStyle:{
                backgroundColor:Colors.primaryColor
            },
            headerTintColor:"white"
        }}/>
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