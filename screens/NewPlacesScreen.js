import React,{useState} from "react"
import {ScrollView,View,Text,TextInput,Button,StyleSheet} from "react-native"
import { Colors } from "../settings/Colors";

const NewPlacesScreen = ()=>{

    const [title,setTitle] = useState('')

    const savePlaceHandler = ()=>{
        console.log(title)
    }
    return (
        <ScrollView>
        <View style={styles.form}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.textInput} value={title} onChangeText={val=>setTitle(val)}/>
            <Button title="Save Place" color={Colors.primaryColor} onPress={savePlaceHandler}/>
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    form: {
      margin:30
    },
    label:{
        fontSize:16,
        marginBottom:15
    },
    textInput:{
        borderBottomColor:"#ccc",
        borderBottomWidth:5,
        marginBottom:15,
        paddingVertical:4,
        paddingHorizontal:5
    }
  });
  

export default NewPlacesScreen