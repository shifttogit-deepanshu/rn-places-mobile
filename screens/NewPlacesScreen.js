import React,{useState} from "react"
import {ScrollView,View,Text,TextInput,Button,StyleSheet} from "react-native"
import { Colors } from "../settings/Colors";
import {connect} from "react-redux"
import { addPlace } from "../store/placesAction";

const NewPlacesScreen = (props)=>{

    const [title,setTitle] = useState('')

    const savePlaceHandler = ()=>{
        props.addPlace(title)
        props.navigation.goBack()
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
  
const mapDispatchToProps = (dispatch)=>{
    return {
        addPlace:(title)=>dispatch(addPlace(title))
    }
}
export default connect(undefined,mapDispatchToProps)(NewPlacesScreen)