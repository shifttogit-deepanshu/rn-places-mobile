import React,{useState} from "react"
import {ScrollView,View,Text,TextInput,Button,StyleSheet} from "react-native"
import { Colors } from "../settings/Colors";
import {connect} from "react-redux"
import { addPlace } from "../store/placesAction";
import ImgPicker from "../components/ImgPicker"
import LocationPicker from "../components/LocationPicker"

const NewPlacesScreen = (props)=>{
    const [imageUri,setImageUri] = useState()
    const [title,setTitle] = useState('')

    const savePlaceHandler = ()=>{
        props.addPlace(title,imageUri)
        props.navigation.goBack()
    }

    const addImage = (uri)=>{
        setImageUri(uri)
    }
    return (
        <ScrollView>
        <View style={styles.form}>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.textInput} value={title} onChangeText={val=>setTitle(val)}/>
            <ImgPicker addImage={addImage}/>
            <LocationPicker />
            <Button title="Save Place" color={Colors.primaryColor} onPress={savePlaceHandler} style={{marginTop:30}}/>            
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
  
const mapDispatchToProps = (dispatch)=>{
    return {
        addPlace:(title,uri)=>dispatch(addPlace(title,uri))
    }
}
export default connect(undefined,mapDispatchToProps)(NewPlacesScreen)