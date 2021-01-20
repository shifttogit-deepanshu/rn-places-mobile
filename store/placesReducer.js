import {ADD_PLACE,SET_PLACES} from "./placesAction"
import Place from "../models/place"

const initialState = {
    places : []
}

const placesReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_PLACE:
            const place = new Place(action.placeData.id.toString(),action.placeData.title,action.placeData.imageUri)
            return {
                places:state.places.concat(place)
            }
        case SET_PLACES:
            return {places: action.places.map((place)=>new Place(place.id.toString(),place.title,place.imageUri))}
        default:
            return state
    }
}


export default placesReducer