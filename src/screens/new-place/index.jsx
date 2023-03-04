import { View, Text,TextInput, Button, ScrollView, ImageSelector} from "react-native";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addPlace } from "../../store/place.slice";

import { styles } from "./styles";
import colors from "../../utils/colors";

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onHandlerSubmit = () => {
    dispatch(addPlace({ title }));
    navigation.goBack();
  };

  const onHandlerChange = (text) => {
    setTitle(text);
  };


  return (
<ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Lugar</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del lugar"
          onChangeText={onHandlerChange}
          value={title}
        /> 
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
