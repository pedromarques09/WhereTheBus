import styled from 'styled-components/native';

export const Container = styled.View`
  height: 250px;
  width: 300px;
  margin: 50px;
  margin-top: 50%;
  background-color: white;
  border: 5px;
  border-color: #283673;
  border-radius: 10px;
`;
export const ButtonExit = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  margin: 8px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: #283673;
  font-weight: bold;
  text-align: center;
  margin: 8px;
  height: 30%;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;
