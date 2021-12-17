import React from 'react';
import {Container, TextButton} from './styles';

const ButtonHome = ({title, onPress}: any) => {
  return (
    <Container onPress={onPress}>
      <TextButton>{title}</TextButton>
    </Container>
  );
};

export default ButtonHome;
