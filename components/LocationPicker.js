import React,{useState} from "react"
import {View,StyleSheet,Text,Button,Alert,ActivityIndicator} from "react-native"
import { Colors } from "../settings/Colors"
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const LocationPicker = (props)=>{
    const [isFetching,setIsFetching] = useState(false)
    
    const getLocation = async ()=>{
        setIsFetching(true)
        const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);

        if(status==='granted'){
            try{
                const location = await Location.getCurrentPositionAsync()
                setIsFetching(false)
            }
            catch(err){
                Alert("Unable to get Location!","Please try again Later or Please Select from the map",[{text:"Okay"}])
            }
        
        }
        else{
            Alert("Unable to get Location!","Permission to fetch location not granted",[{text:"Okay"}])
        }
       
    }
 
    return (
        <View style={styles.locationPicker}>
            <View style={styles.locationPreview}>
            {isFetching?<ActivityIndicator size="large" color={Colors.primaryColor}/>:<Text>No Location Available</Text>}
            </View>
            <Button title="Add Location"  onPress={()=>getLocation()} color={Colors.primaryColor} />
        </View>
    )
}

const styles= StyleSheet.create({
    locationPicker:{   
        alignItems:"center",
        marginTop:20,
        marginBottom:20
    },  
    locationPreview:{
        width:"100%",
        height:200,
        marginBottom:15,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"#ccc",
        borderWidth:2
    },
    image:{
        width:"100%",
        height:"100%"
    }
})

export default LocationPicker