import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import Input from "../../components/Input";
import ButtonBack from "../../components/ButtonBack";

import {
  Container,
  Content,
  TextInfo,
  Title,
  ContentInput,
  ContentFlatList,
  Header,
} from "./styles";
import { ApiDataListScreenProps } from "../../navigation/AppNavigator";

type Line = {
  id: string;
  nome: string;
  codigo: string;
};

function ApiDataList({ route, navigation }: ApiDataListScreenProps) {
  const { url, title } = route.params;
  const [data, SetData] = useState<Line[]>([]);
  const [originalData, SetOriginalData] = useState<Line[]>([]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data: Line[]) => {
        SetOriginalData(data);
        SetData(data);
      });
  }, [url]);

  function Search(text: string) {
    let arr = JSON.parse(JSON.stringify(originalData));
    SetData(
      arr.filter(
        (list: Line) =>
          list.nome.toLowerCase().includes(text.toLowerCase()) ||
          list.codigo.toLowerCase().includes(text.toLowerCase())
      )
    );
  }

  function LineShow({ item }: { item: Line }) {
    return (
      <ContentFlatList
        onPress={() => {
          navigation.navigate("LotacaoTracking", { id: item.id });
        }}
      >
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
            onChangeText={(text: string) => Search(text)}
          />
        </ContentInput>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ flexGrow: 1 }}
          renderItem={LineShow}
        />
      </Content>
    </Container>
  );
}

export default ApiDataList;
