import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import Input from '../../components/Input';
import ButtonBack from '../../components/ButtonBack';
import ModalRoute from '../../components/ ModalRoute';

import {
  Container,
  Content,
  TextInfo,
  Title,
  ContentInput,
  ContentFlatList,
  Header,
} from './styles';
import {setTextRange} from 'typescript';

const Lotacao = () => {
  const [lotacao, SetLotacao] = useState<any>([]);
  const [originalLotacao, SetOriginalLotacao] = useState<any>([]);
  const [visible, setVisible] = useState<Boolean>(false);
  const [modalName, setModalName] = useState();
  const [routeData, setRouteData] = useState();
  const [ArrRoute, setArrRoute] = useState();

  useEffect(() => {
    fetch(
      'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=l',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        SetOriginalLotacao(data);
        SetLotacao(data);
      });
  }, []);

  function Search(text: any) {
    let arr = JSON.parse(JSON.stringify(originalLotacao));
    SetLotacao(
      arr.filter(
        (list: any) => list.nome.includes(text) || list.codigo.includes(text),
      ),
    );
  }

  function LineShow(item: any) {
    return (
      <ContentFlatList
        onPress={() => {
          setModalName(item.nome);
          pegarItinerario(item.id);
          setVisible(true);
        }}>
        <TextInfo>{item.nome}</TextInfo>
        <TextInfo>Codigo = {item.codigo}</TextInfo>
      </ContentFlatList>
    );
  }

  const pegarItinerario = id => {
    console.log('id no fetch ' + id);
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
        setRouteData(data);
        setArrRoute(Object.entries(data));
      });
  };

  return (
    <Container>
      <Content>
        <Header>
          <ButtonBack />
          <Title> Linhas de Lotação </Title>
        </Header>
        <ContentInput>
          <Input
            placeholder="Nome ou Codigo da Linha"
            value={lotacao}
            onChangeText={(text: any) => Search(text)}
          />
        </ContentInput>
        <FlatList
          data={lotacao}
          keyExtractor={item => item.id}
          contentContainerStyle={{flexGrow: 1}}
          renderItem={({item}) => LineShow(item)}
        />

        {visible === true ? (
          <ModalRoute
            visible={visible}
            setVisible={setVisible}
            name={modalName}
            data={routeData}
          />
        ) : null}
      </Content>
    </Container>
  );
};

export default Lotacao;
