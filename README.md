
# Desafio Riderize
Desafio Riderize / Teste prático técnico - React Native

## Aviso!!!

Antes de iniciar a aplicação, lembre-se de inicializar a `API_KEY` do [Google Maps][maps] (API utilizada para mapa).

Algumas funções não estão configuradas para serem executadas em um dispositivo iOS.

## Setup (Android apenas)

### Criar o arquivo `local.properties` com a seguinte linha:

em Windows
```bash
sdk.dir = C:\\Users\\NOME DE USUÁRIO\\AppData\\Local\\Android\\sdk
```

em MacOS
```bash
sdk.dir = /Users/NOME DE USUÁRIO/Library/Android/sdk
```

em Linux
```bash
sdk.dir = /home/NOME DE USUÁRIO/Android/Sdk
```

### Baseado na documentação do [react-native-maps](https://github.com/react-native-maps/react-native-maps).

### Pegue a `API_KEY` em [Google Maps][maps] e adicione em:

```bash
android/app/src/main/AndroidManifest.xml
```
...
Adicione a tag `<meta-data />` dentro da tag `<application>` com a `API_KEY`:
```xml
<application ...>
	<activity>
		...
	</activity>
	<meta-data
	android:name="com.google.android.geo.API_KEY"
	android:value="COLOQUE AQUI A API_KEY"/>
</application>
```
  
[![lnz0lI.md.png](https://iili.io/lnz0lI.md.png)](https://freeimage.host/i/lnz0lI)


## To do

- [x] Aplicação base;

- [x] Responsividade;

- [x] Perguntar permissão para acessar localização;

- [x] Inicializar Google Maps;

- [x] Pegar localização atual;

- [x] Cronômetro;

- [x] Mapa segue a localização do usuário;

- [x] Acessar acelerômetro do dispositivo;

- [x] Fixar rotação de tela (retrato/portrait);

- [ ] Mudar estilo do mapa;

- [ ] Cálculo de velocidade para km/h
  

## Dispositivos testados / Versão do Android
- Moto G (5) - 8.1.0;
- Redmi 7 - 10.0;
- moto e6s - 9.0;
- Pixel 3 - 7.1.1;

## Referências

### Java
JDK - versão utilizada: 11.0.8+10 - disponível em [OpenLogic/OpenJDK](https://www.openlogic.com/openjdk-downloads)

### Mapa

[react-native-maps](https://github.com/react-native-maps/react-native-maps) 

[Maps SDK for Android](https://console.cloud.google.com/marketplace/product/google/maps-android-backend.googleapis.com)

[Maps SDK for iOS](https://console.cloud.google.com/marketplace/product/google/maps-ios-backend.googleapis.com)

[Maps JavaScript API](https://console.cloud.google.com/marketplace/product/google/maps-backend.googleapis.com)

  

### Localização / Sensores

[react-native-geolocation-service](https://github.com/Agontuk/react-native-geolocation-service)

[react-native-sensors](https://github.com/react-native-sensors/react-native-sensors)

  

### Componentes / Estilização


[react-native-modalize](https://github.com/jeremybarbet/react-native-modalize)

[react-native-svg](https://github.com/react-native-svg/react-native-svg)

[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

[react-native-responsive-fontsize](https://github.com/heyman333/react-native-responsive-fontSize)
  

[maps]: https://console.cloud.google.com/google/maps-apis
