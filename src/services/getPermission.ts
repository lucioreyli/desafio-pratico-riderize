import { Alert, PermissionsAndroid } from 'react-native';

export async function requestAcessPermission(): Promise<boolean> {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
  );
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log("You can use the Location");
    return true;
  } else {
    console.log("Location permission denied");
    Alert.alert('Desafio Riderize 🚵', 'Para funcionar corretamente\no app precisa da sua permissão.')
    return false;
  }
}