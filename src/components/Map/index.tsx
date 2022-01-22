import React, { useRef } from "react"
import { Text, View } from "react-native"
import MapView from "react-native-maps";
import { colors } from "~/styles/colors";
import { styles } from "./styles"
import Geolocation from 'react-native-geolocation-service';

export const Map: React.FC<{
  gpsEnabled: Boolean,
  position: Geolocation.GeoCoordinates,
}> = ({
  gpsEnabled,
  position
}) => {

    const map = useRef(null)

    return (
      <View style={[styles.container, (!gpsEnabled || !position) && {
        alignItems: 'center',
        justifyContent: 'center'
      }]}>
        {
          gpsEnabled && position ?
            <>
              <MapView
                ref={map}
                /* Estilização do mapa */
                style={[styles.container, styles.map]}
                loadingEnabled
                loadingIndicatorColor={colors.actionButton}
                userInterfaceStyle="light"

                /* Definir a localização inicial */
                initialRegion={{
                  latitude: position.latitude,
                  longitude: position.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                region={{
                  latitude: position.latitude,
                  longitude: position.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}

                /*Evitar que o usuário gire em outras perspectivas do mapa*/
                zoomTapEnabled={false}
                onDoublePress={undefined}
                pitchEnabled={false}

                /*Garantir que o nível de zoom do mapa fique "fixo"*/
                zoomControlEnabled={false}
                minZoomLevel={18} maxZoomLevel={18}
                zoomEnabled={false}
                scrollEnabled={false}

                /*Mostrar o usuário como ponteiro no mapa*/
                showsUserLocation
                followsUserLocation

                /*Extras*/
                showsMyLocationButton={false}
                showsScale={false}
                showsCompass={false}
                showsIndoors={false}
              />
            </> :
            <Text style={styles.text}>
              {'O aplicativo precisa da sua permissão\n' + 'para usar sua localização'}
            </Text>
        }
      </View>
    );
  }