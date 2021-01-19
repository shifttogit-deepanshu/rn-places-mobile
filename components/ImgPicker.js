import React,{useState} from "react"
import {View,StyleSheet,Text,Image,Button} from "react-native"
import { Colors } from "../settings/Colors"
import * as ImagePicker from 'expo-image-picker';

const ImgPicker = (props)=>{
    const [image,setImage] = useState(null)
    const pickImage = async ()=>{
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.7
        })
        console.log(result)
        if(!result.canceled){
            setImage(result.uri)
        }
    }
    if(image){
        props.addImage(image)
    }
   
    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
            <Text>No Image Available</Text>
            <Image style={styles.image} source={{uri:image}}/>
            </View>
            <Button title="Take Image" onPress={pickImage} color={Colors.primaryColor} />
        </View>
    )
}

const styles= StyleSheet.create({
    imagePicker:{   
        alignItems:"center",
        marginTop:20
    },  
    imagePreview:{
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

export default ImgPicker