import React, { useEffect, useState } from "react";
import { FlatList, Linking } from "react-native";
import ButtonBack from "../../components/ButtonBack";
import { LotacaoTrackingScreenProps } from "../../navigation/AppNavigator";

import {
  Container,
  Content,
  TextInfo,
  Title,
  ContentFlatList,
  Header,
} from "./styles";

interface TrackingItem {
  lat: number;
  lng: number;
}
function LotacaoTracking({ route }: LotacaoTrackingScreenProps) {
  const { id } = route.params;
  const [tracking, setTracking] = useState<TrackingItem[]>([]);

  const pegarItinerario = (id: string) => {
    fetch(
      `http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setTracking(
          Object.entries(data)
            .map((track) => {
              if (
                track[0] !== "idlinha" &&
                track[0] !== "nome" &&
                track[0] !== "codigo"
              ) {
                return {
                  lat: track[1].lat,
                  lng: track[1].lng,
                };
              }
              return null;
            })
            .filter(Boolean) as TrackingItem[]
        );
      });
  };
  useEffect(() => {
    pegarItinerario(id);
  }, [id]);

  const LineShow: React.FC<{ item: TrackingItem }> = ({ item }) => {
    return (
      <ContentFlatList
        onPress={() => {
          Linking.openURL(`geo:${item.lat},${item.lng}`);
        }}
      >
        <TextInfo>
          Rota ={item.lat}, {item.lng}
        </TextInfo>
      </ContentFlatList>
    );
  };

  return (
    <Container>
      <Content>
        <Header>
          <ButtonBack />
          <Title> Linhas de Rotas </Title>
        </Header>
        <FlatList
          data={tracking}
          contentContainerStyle={{ flexGrow: 1 }}
          renderItem={({ item }) => <LineShow item={item} />}
        />
      </Content>
    </Container>
  );
}

export default LotacaoTracking;
