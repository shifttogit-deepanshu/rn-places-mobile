import React from "react"
import {View,Text,StyleSheet} from "react-native"

const NewPlacesScreen = ()=>{
    return (
        <View style={styles.container}>
            <Text>This is NewPlacesScreen</Text>
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
  

export default NewPlacesScreen