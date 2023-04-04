import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

export const Container = styled.TouchableOpacity`
  width: ${width * 0.2}px;
  height: ${width * 0.1}px;
  border-radius: ${width * 0.05}px;
  background-color: #fbde37;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  color: #283673;
  font-weight: bold;
  text-align: center;
  border-radius: ${width * 0.05}px;
`;
