import { accelerometer, SensorData } from "react-native-sensors";
import { map, filter } from "rxjs/operators";

const convertToVelocity = ({ x, y, z }: SensorData) => {

  let newVelocity = Math.sqrt(
    (x * x) + (y * y) + (z * z)
  )

  return newVelocity > 1 ? newVelocity : 0;
}

export const getVelocity = (
  setSpeed: (value: React.SetStateAction<number>) => void
) => {

  const subscription = accelerometer
    .subscribe(data => setSpeed(convertToVelocity(data)))

  return () => {
    setTimeout(() => subscription.unsubscribe(), 1000)
  }
}