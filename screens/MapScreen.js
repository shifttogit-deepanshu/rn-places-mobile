import React from "react"
import {View,Text,StyleSheet} from "react-native"

const MapScreen = ()=>{
    return ( 
        <View style={styles.container}>
            <Text>This is Map Screen</Text>
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
  

export default MapScreen