import { Alert, LogBox, PermissionsAndroid } from 'react-native';
import Geolocation, { GeoCoordinates } from 'react-native-geolocation-service';

LogBox.ignoreLogs(['new NativeEventEmitter'])

export async function requestAcessPermission(): Promise<boolean> {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
  );
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  } else {
    Alert.alert('Desafio Riderize 🚵',
      'Para funcionar corretamente\no app precisa da sua permissão.')
    return false;
  }
}

export const handleGetCurrentPosition = (
  setPosition: (value: React.SetStateAction<GeoCoordinates>) => void
) => {
  Geolocation.getCurrentPosition(({ coords }) => {
    if (coords)
      setPosition(coords)
  }, () => { },
    { enableHighAccuracy: true, maximumAge: 10000 }
  )
}