import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const Container = styled.View`
  width: 100%;
  height: ${height}px;
  background-color: #283673;
  display: flex;
  flex-direction: column;
`;
export const ContentImage = styled.View`
  width: 100%;
  height: ${height * 0.3}px;
`;
export const ContentButton = styled.View`
  width: 100%;
  height: ${height * 0.9}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
