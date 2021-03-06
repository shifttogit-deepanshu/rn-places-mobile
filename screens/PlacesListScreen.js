import React,{useLayoutEffect,useEffect} from "react"
import {FlatList,StyleSheet} from "react-native"
import IoniconsHeaderButton from "../components/IoniconsHeaderButton"
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import PlaceItem from "../components/PlaceItem";
import {connect} from "react-redux"
import { setPlaces } from "../store/placesAction";

const PlacesListScreen = (props)=>{
    useEffect(()=>{
        props.loadPlaces()
    },[])
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

const mapDispatchToProps = (dispatch)=>{
    return {
        loadPlaces:()=>dispatch(setPlaces())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlacesListScreen)