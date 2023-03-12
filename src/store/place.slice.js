import { createSlice } from "@reduxjs/toolkit";
import { URL_GEOCODING } from "../utils/maps";

import Place from "../models/places";

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(Date.now().toString(),
       action.payload.title, 
       action.payload.image,
       action.payload.address,
       action.payload.coords,
       );
      state.places.push(newPlace);
    },
  },
});

export const { addPlace } = placeSlice.actions;


export const savePlace = (title, image, coords) => {
  return async (dispatch) => {

    const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));

    if (!response.ok) throw new Error("No se ha podido conectar con el servidor");

    const data = await response.json();

    if (!data.results) throw new Error("No se ha podido encontrar la dirección");

    const address = data.results[0].formatted_address;
    try {
      // const result = await insertPlace(title, image, address, coords);
      dispatch(addPlace({ title, image, address, coords }));
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };
};



export default placeSlice.reducer;
