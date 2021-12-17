import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const Container = styled.View`
  width: 100%;
  height: ${height}px;
  background-color: #283673;
`;
export const ContentButton = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: -70px;
`;
