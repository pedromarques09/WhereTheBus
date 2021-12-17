import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image} from 'react-native';
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
          onPress={() =>
            navigation.navigate('ApiDataList', {
              url: [
                'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o',
              ],
              title: ['Linhas de Ônibus'],
            })
          }
          title={'Linhas De Ônibus'}
        />
        <ButtonHome
          onPress={() =>
            navigation.navigate('ApiDataList', {
              url: [
                'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=l',
              ],
              title: ['Linhas de Lotação'],
            })
          }
          title={'Linhas De Lotação'}
        />
      </ContentButton>
    </Container>
  );
};

export default Home;
