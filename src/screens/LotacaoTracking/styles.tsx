import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  height: ${height}px;
  background-color: #fbde37;
`;
export const Content = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #4e455410;
  margin-bottom: 120px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 60px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  font-family: Tahoma;
  color: #283673;
  text-align: justify;
  margin-top: 40px;
`;

export const ContentFlatList = styled.TouchableOpacity`
  margin-top: 15px;
  background-color: #ffffff;
  padding: 8px;
  width: 400px;
  border-radius: 5px;
  border: 3px;
  border-color: #283673;
`;

export const TextInfo = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: black;
  letter-spacing: 0.5px;
  font-family: Sans-serif;
`;
