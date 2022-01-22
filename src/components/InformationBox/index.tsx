import React from "react"
import { Text, View } from "react-native"
import { FormatedTime } from "~/components/FormatedTime"
import { styles } from "./style"

export const InformationContent: React.FC<
  {
    time: number,
    speed?: any,
  }
> = ({ time, speed }) => {

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
          {speed ? speed : '31.1'}
        </Text>
      </View>
    </View>
  )
}