# WhereTheBus
Este aplicativo foi um desenvolvido com a intenção de integrar a Api do DataPoa com uma interface intuitiva ao usuario, onde tenha a lista de linhas de onibus e lotação da cidade de Porto Alegre RS.
A partir da listagem, é possível:
- Realizar buscas de linhas de ônibus ou lotação por nome ou código.
- Consultar o itinerário de cada linha.
- Consultar as localidades no Google Maps via link.

# Telas
![home](https://user-images.githubusercontent.com/40700896/229917457-b824723e-39e5-46df-941a-e0bd38bd87f7.png) ![apiDataList](https://user-images.githubusercontent.com/40700896/229921772-969f93b7-3fb4-4c7a-9ddd-34da4b696e41.png) ![apiListFilterWithName](https://user-images.githubusercontent.com/40700896/229922345-28be5ecd-bbf2-4e4a-94a3-50001c7bd29d.png)
![apiListFilterWithCode](https://user-images.githubusercontent.com/40700896/229922511-62a2f97b-9ddd-4e5a-9a5b-bf7bb00dbc26.png)
![LotacaoTracking](https://user-images.githubusercontent.com/40700896/229922534-e42efaf6-c84e-4eff-8cbf-d849e10b78bd.png)![oppeningRouteWithMaps](https://user-images.githubusercontent.com/40700896/229922540-99c7ec0e-d094-4544-aa87-8c74521e8824.png)

# Instalação
Primeiro voce deve ter o computador configurado com o ambiente do [React Native](https://reactnative.dev/docs/environment-setup).

### Instalação de dependência
```
npm install
```

### Inicializar o Metro
```
npx react-native start
```
Se caso der erro ao iniciar o metro rode o comando de instalação de dependencias novamente.

### Instalar o Aplicativo em um emulador android ou dispositivo cabeado
```
npx react-native run-android
```

# Erro de conexão com as bibliotecas
![erro](https://user-images.githubusercontent.com/40700896/229924852-836e7b60-2d04-4051-994f-6b319f8374cd.png)

Aplicativo esta com esse erro de conexão que ainda não consegui arrumar, então é necessario clicar em DISMISS ou pressionar a tecla ESC para utilizar o APP.

