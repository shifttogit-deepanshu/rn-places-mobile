import React,{useLayoutEffect} from "react"
import {View,Text,StyleSheet} from "react-native"
import IoniconsHeaderButton from "../components/IoniconsHeaderButton"
import {HeaderButtons,Item} from 'react-navigation-header-buttons';

const PlacesListScreen = (props)=>{
    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerRight:()=>(
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                    <Item title="add" iconName="ios-add" onPress={()=>props.navigation.navigate("NewPlaceScreen")} />
                </HeaderButtons>
            )
        })
    })
    return (
        <View style={styles.container}>
            <Text>This is PlacesListScreen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default PlacesListScreen