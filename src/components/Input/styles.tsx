import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  width: ${width * 0.7}px;
  height: 40px;
  border-radius: 20px;
  background-color: #4e455410;
  border: 1px solid #000;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const TextInput = styled.TextInput`
  font-weight: bold;
  margin-left: 10px;
  flex: 1;
`;

export const Icon = styled.View`
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
`;
