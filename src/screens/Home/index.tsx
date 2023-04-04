import React from "react";
import { Image } from "react-native";
import ButtonHome from "../../components/ButtonHome";
import { HomeScreenProps } from "../../navigation/AppNavigator";
import { Container, ContentButton, ContentImage } from "./styles";
function Home({ navigation }: HomeScreenProps) {
  return (
    <Container>
      <ContentImage>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: "100%", resizeMode: "contain" }}
        />
      </ContentImage>

      <ContentButton>
        <ButtonHome
          onPress={() =>
            navigation.navigate("ApiDataList", {
              url: "http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o",
              title: "Linhas de Ônibus",
            })
          }
          title={"Linhas De Ônibus"}
        />
        <ButtonHome
          onPress={() =>
            navigation.navigate("ApiDataList", {
              url: "http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=l",
              title: "Linhas de Lotação",
            })
          }
          title={"Linhas De Lotação"}
        />
      </ContentButton>
    </Container>
  );
}

export default Home;
