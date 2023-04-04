import React, { FC } from "react";
import { Image } from "react-native";
import { Container, TextInput, Icon } from "./styles";

interface InputProps {
  placeholder: string;
  value: any;
  onChangeText: (text: string) => void;
}

const Input: FC<InputProps> = ({ placeholder, value, onChangeText }) => {
  return (
    <Container>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      <Icon>
        <Image
          source={require("../../assets/loupe.png")}
          style={{ resizeMode: "center", width: "50%" }}
        />
      </Icon>
    </Container>
  );
};

export default Input;
