import * as FileSystem from 'expo-file-system';

export const ADD_PLACE = "ADD_PLACE"

const addPlace = (title,imageUri)=>{

    return async (dispatch)=>{
        const fileName = imageUri.split('/').pop()
        const newPath = FileSystem.documentDirectory + fileName;

        try{
            await FileSystem.moveAsync({
            from: imageUri,
            to:newPath
        })
        
    }
    catch (err){
        console.log(err)
        throw err
    }

        dispatch({type:ADD_PLACE,placeData:{title:title,imageUri:imageUri}})
    }
}

export {addPlace}