export const ADD_PLACE = "ADD_PLACE"

const addPlace = (title)=>{
    return {
        type:ADD_PLACE,
        placeData:{title:title}
    }
}

export {addPlace}