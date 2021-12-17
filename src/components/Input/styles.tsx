import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';

export const Container = styled.View`
  width: 220px;
  height: 45px;
  border-radius: 20px;
  background-color: #4e455410;
  border: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextInput = styled.TextInput`
  font-weight: bold;
  margin-left: 4px;
  width: 80%;
`;

export const MaskTextInput = styled(TextInputMask)`
  font-weight: bold;
  margin-left: 4px;
`;
export const Icon = styled.View`
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
`;
