import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  width: 100%;
  height: ${height}px;
  background-color: #fbde37;
`;

export const Content = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4e455410;
  margin-bottom: ${height * 0.1}px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: ${width * 0.08}px;
  font-weight: bold;
  font-family: Tahoma;
  color: #283673;
  text-align: center;
`;

export const ContentInput = styled.View`
  margin: ${height * 0.01}px;
  padding: ${height * 0.01}px;
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ContentFlatList = styled.TouchableOpacity`
  margin-top: ${height * 0.01}px;
  display: flex;
  background-color: #ffffff;
  padding: ${height * 0.01}px;
  width: ${width * 0.9}px;
  border-radius: 5px;
  border: ${width * 0.005}px;
  border-color: #283673;
`;

export const TextInfo = styled.Text`
  font-size: ${width * 0.03}px;
  font-weight: 600;
  color: black;
  letter-spacing: ${width * 0.002}px;
  font-family: Sans-serif;
`;
