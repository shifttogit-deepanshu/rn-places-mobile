import React,{useLayoutEffect} from "react"
import {FlatList,StyleSheet} from "react-native"
import IoniconsHeaderButton from "../components/IoniconsHeaderButton"
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import PlaceItem from "../components/PlaceItem";
import {connect} from "react-redux"

const PlacesListScreen = (props)=>{
    console.log(props.places)
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
        <FlatList data={props.places} renderItem={itemData=><PlaceItem image={null} title={itemData.item.title} address={null} image={itemData.item.imageUri} onSelect={()=>{
            props.navigation.navigate("PlaceDetailScreen",{id:itemData.item.id,title:itemData.item.title}) 
        }}/>}/>
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

const mapStateToProps = (state)=>{
    return {
        places : state.places
    }
}

export default connect(mapStateToProps)(PlacesListScreen)