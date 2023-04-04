import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

export const Container = styled.TouchableOpacity`
  width: ${width * 0.8}px;
  height: 45px;
  background-color: #fbde37;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin: 20px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: #283673;
  font-weight: bold;
  text-align: center;
`;
