import React from "react";
import { Container, TextButton } from "./styles";

interface ButtonHomeProps {
  title: string;
  onPress: () => void;
}

function ButtonHome({ title, onPress }: ButtonHomeProps) {
  return (
    <Container onPress={onPress}>
      <TextButton>{title}</TextButton>
    </Container>
  );
}

export default ButtonHome;
