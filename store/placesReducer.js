import {ADD_PLACE} from "./placesAction"
import Place from "../models/place"

const initialState = {
    places : []
}

const placesReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_PLACE:
            const place = new Place(new Date().toString(),action.placeData.title,action.placeData.imageUri)
            return {
                places:state.places.concat(place)
            }
    
        default:
            return state
    }
}

export default placesReducer