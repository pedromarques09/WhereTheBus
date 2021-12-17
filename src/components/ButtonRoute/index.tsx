import React from 'react';
import {Image} from 'react-native';
import {Container, TextButton} from './styles';

const ButtonRoute = ({onPress}: any) => {
  return (
    <Container onPress={onPress}>
      <TextButton>Rotas</TextButton>
      <Image
        source={require('../../assets/distance.png')}
        style={{resizeMode: 'center'}}
      />
    </Container>
  );
};

export default ButtonRoute;
