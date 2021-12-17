import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {FlatList, Linking} from 'react-native';
import ButtonBack from '../../components/ButtonBack';

import {
  Container,
  Content,
  TextInfo,
  Title,
  ContentFlatList,
  Header,
} from './styles';

const LotacaoTracking = () => {
  const navigation = useNavigation();
  const {
    params: {id},
  } = useRoute();
  const [tracking, setTracking] = useState();

  const pegarItinerario = id => {
    fetch(
      `http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${id}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        setTracking(
          Object.entries(data)
            .map(track => {
              if (
                track[0] != 'idlinha' &&
                track[0] != 'nome' &&
                track[0] != 'codigo'
              ) {
                return track[1];
              }
            })
            .filter(Boolean),
        );
      });
  };

  useEffect(() => {
    pegarItinerario(id);
  }, [id]);

  function LineShow(item: any) {
    return (
      <ContentFlatList
        onPress={() => {
          Linking.openURL(`geo:${item.lat},${item.lng}`);
        }}>
        <TextInfo>
          Rota ={item.lat}, {item.lng}
        </TextInfo>
      </ContentFlatList>
    );
  }

  return (
    <Container>
      <Content>
        <Header>
          <ButtonBack />
          <Title> Linhas de Rotas </Title>
        </Header>
        <FlatList
          data={tracking}
          contentContainerStyle={{flexGrow: 1}}
          renderItem={({item}) => LineShow(item)}
        />
      </Content>
    </Container>
  );
};

export default LotacaoTracking;
