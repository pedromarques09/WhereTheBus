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

const BusLine = () => {
  const [lineBus, setLineBus] = useState<any>([]);
  const [originalLineBus, setOriginalLineBus] = useState<any>([]);
  const [visible, setVisible] = useState<Boolean>(false);
  const [modalName, setModalName] = useState();

  useEffect(() => {
    fetch(
      'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        setOriginalLineBus(data);
        setLineBus(data);
      });
  }, []);

  function Search(text: any) {
    let arr = JSON.parse(JSON.stringify(originalLineBus));
    setLineBus(
      arr.filter(
        (list: any) =>
          list.nome.toLowerCase().includes(text.toLowerCase()) ||
          list.codigo.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  }

  // function AbrirModal(name: any) {
  //   setVisible(true);
  //   console.log(visible);
  //   return;
  // }

  function LineShow(item: any) {
    return (
      <ContentFlatList
        onPress={() => {
          setVisible(true);
          setModalName(item.nome);
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
          <Title> Linhas de Ônibus </Title>
        </Header>
        <ContentInput>
          <Input
            placeholder="Nome ou Codigo da Linha"
            value={lineBus}
            onChangeText={(text: any) => Search(text.toLowerCase())}
          />
        </ContentInput>
        <FlatList
          data={lineBus}
          keyExtractor={item => item.id}
          contentContainerStyle={{flexGrow: 1}}
          renderItem={({item}) => LineShow(item)}
        />
        {visible === true ? (
          <ModalRoute
            visible={visible}
            setVisible={setVisible}
            name={modalName}
          />
        ) : null}
      </Content>
    </Container>
  );
};

export default BusLine;
