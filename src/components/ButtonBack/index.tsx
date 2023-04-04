import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { Container, TextButton } from "./styles";

function ButtonBack() {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.goBack()}>
      <Image
        source={require("../../assets/back.png")}
        style={{ resizeMode: "center", width: "30%" }}
      />
      <TextButton>Voltar</TextButton>
    </Container>
  );
}

export default ButtonBack;
