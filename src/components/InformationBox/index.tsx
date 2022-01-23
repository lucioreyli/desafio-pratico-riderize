import React from "react"
import { Text, View } from "react-native"
import { FormatedTime } from "~/components/FormatedTime"
import { styles } from "./style"

export const InformationContent: React.FC<
  {
    time: number,
    speed: number,
  }
> = ({ time, speed = 0 }) => {

  return (
    <View style={styles.informationContainer}>
      <View style={styles.informationBox}>
        <Text style={styles.subtitle}>
          distância
        </Text>
        <Text style={styles.informationText}>
          <FormatedTime time={time} />
        </Text>
      </View>

      <View style={styles.informationBox}>
        <Text style={styles.subtitle}>
          velocidade (km/h)
        </Text>
        <Text style={styles.informationText}>
          {speed ? speed : 'N/A'}
        </Text>
      </View>
    </View>
  )
}