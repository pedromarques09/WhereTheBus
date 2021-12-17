import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {Modal} from 'react-native';
import ButtonRoute from '../ButtonRoute';
import {Container, ButtonExit, Content, TextButton} from './styles';

const ModalRoute = ({visible, setVisible, name, data}: any) => {
  const [ArrRoute, setArrRoute] = useState();
  return (
    <Modal isVisible={visible} transparent animationType={'fade'}>
      <Container>
        <ButtonExit
          onPress={() => {
            setVisible(false);
          }}>
          <Image
            source={require('../../assets/close.png')}
            style={{resizeMode: 'center', width: '50%', height: '90%'}}
          />
        </ButtonExit>
        <TextButton>{name}</TextButton>
        <Content>
          <ButtonRoute
            onPress={() => {
              Object.entries(data).forEach(item => {
                return setArrRoute(item);
              });
            }}
          />
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalRoute;
