import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import Input from '../../components/Input';
import ButtonBack from '../../components/ButtonBack';

import {
  Container,
  Content,
  TextInfo,
  Title,
  ContentInput,
  ContentFlatList,
  Header,
} from './styles';

import {useNavigation, useRoute} from '@react-navigation/native';

const ApiDataList = () => {
  const {
    params: {url, title},
  } = useRoute();
  const [data, SetData] = useState<any>([]);
  const [originalData, SetOriginalData] = useState<any>([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        SetOriginalData(data);
        SetData(data);
      });
  }, []);

  function Search(text: any) {
    let arr = JSON.parse(JSON.stringify(originalData));
    SetData(
      arr.filter(
        (list: any) =>
          list.nome.toLowerCase().includes(text.toLowerCase()) ||
          list.codigo.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  }

  function LineShow(item: any) {
    return (
      <ContentFlatList
        onPress={() => {
          navigation.navigate('LotacaoTracking', {id: item.id});
        }}>
        <TextInfo>{item.nome}</TextInfo>
        <TextInfo>Codigo = {item.codigo}</TextInfo>
      </ContentFlatList>
    );
  }

  return (
    <Container>
      <Content>
        <Header>
          <ButtonBack />
          <Title> {title} </Title>
        </Header>
        <ContentInput>
          <Input
            placeholder="Nome ou Codigo da Linha"
            value={data}
            onChangeText={(text: any) => Search(text)}
          />
        </ContentInput>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          contentContainerStyle={{flexGrow: 1}}
          renderItem={({item}) => LineShow(item)}
        />
      </Content>
    </Container>
  );
};

export default ApiDataList;
