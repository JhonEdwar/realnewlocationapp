import IonicIcons from "@expo/vector-icons/Ionicons";
import { useState, useLayoutEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { styles } from "./styles";

const Maps = ({ navigation, route }) => {
  const { coords } = route.params;
  const [selectedLocation, setSelectedLocation] = useState(null);
  const initialRegion = {
    latitude: coords?.lat,
    longitude: coords?.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <MapView
      initialRegion={initialRegion}
      onPress={onHandlerPickLocation}
      style={styles.container}
      minZoomLevel={14}>
      {selectedLocation && (
        <Marker
          title="Ubicacion seleccionada"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Maps;
