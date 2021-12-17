import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, Text} from 'react-native';
import ButtonHome from '../../components/ButtonHome';
import {Container, ContentButton} from './styles';

const Home = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/logo.png')}
        style={{width: '100%', resizeMode: 'contain'}}
      />
      <ContentButton>
        <ButtonHome
          onPress={() => navigation.navigate('BusLine')}
          title={'Linhas De Ônibus'}
        />
        <ButtonHome
          onPress={() => navigation.navigate('Lotacao')}
          title={'Linhas De Lotação'}
        />
      </ContentButton>
    </Container>
  );
};

export default Home;
