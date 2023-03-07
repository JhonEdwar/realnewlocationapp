import { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { useDispatch } from "react-redux";

import { ImageSelector, LocationSelector } from "../../components";
import { addPlace } from "../../store/place.slice";
import colors from "../../utils/colors";
import { styles } from "./styles";

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [coords, setCoords] = useState(null);
  const dispatch = useDispatch();

  const onHandlerSubmit = () => {
    dispatch(addPlace({ title, image, coords }));
    navigation.goBack();
  };

  const onHandlerChange = (text) => {
    setTitle(text);
  };

  const onImage = (uri) => {
    setImage(uri);
  };

  const onLocation = (location) => {
    setCoords(location);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Lugar</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del lugaar"
          onChangeText={onHandlerChange}
          value={title}
        />
        <ImageSelector onImage={onImage} />
        <LocationSelector onLocation={onLocation} />
        <Button
          disabled={title.length === 0}
          color={colors.primary}
          title="Guardar"
          onPress={onHandlerSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
