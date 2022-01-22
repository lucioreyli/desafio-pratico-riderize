import { accelerometer } from "react-native-sensors";
import { map, filter } from "rxjs/operators";

export const getSensor = () => {

  const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>
    console.log({ x, y, z, timestamp })
  );
  setTimeout(() => {
    subscription.unsubscribe();
  }, 1000);
}