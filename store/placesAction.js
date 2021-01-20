import * as FileSystem from 'expo-file-system';
import {insertPlace,fetchplaces} from "../helper/initdb"

export const ADD_PLACE = "ADD_PLACE"
export const SET_PLACES = "SET_PLACES"

const addPlace = (title,imageUri)=>{

    return async (dispatch)=>{
        const fileName = imageUri.split('/').pop()
        const newPath = FileSystem.documentDirectory + fileName;

        try{
            await FileSystem.moveAsync({
            from: imageUri,
            to:newPath
        })
        const dbResult = await insertPlace(title,newPath,"dummy address",15.6,12.3)
        console.log("dbres" + dbResult)
        dispatch({type:ADD_PLACE,placeData:{id:dbResult.insertId,title:title,imageUri:imageUri}})
    }
    catch (err){
        console.log(err)
        throw err
    }

       
    }
}

const setPlaces = ()=>{
    return async (dispatch)=>{
        try{
            await fetchplaces().then((result)=>{
                console.log(result)
                dispatch({type:SET_PLACES,places:result.rows._array})
            })
        }
        catch{err=>console.log("error while fetching data" + err)}            
        }
    }


export {addPlace,setPlaces}