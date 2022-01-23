import React, { useEffect } from "react"
import { Text, View } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { SensorTypes, setUpdateIntervalForType } from "react-native-sensors"
import { FormatedTime } from "~/components/FormatedTime"
import { getSensor } from "~/services/getSensor"
import { CancelButton } from "../CancelButton"
import { InformationContent } from "../InformationBox"
import { styles } from "./style"

export const ModalContent: React.FC<
  {
    stopCounter: () => void,
    time: number,
    speed: number
  }
> = ({ stopCounter, time, speed, ...rest }) => {

  return (
    <View style={styles.container}>
      <Text style={[styles.subtitle, {
        textAlign: 'center',
        fontSize: RFValue(24),
      }]}>
        tempo
      </Text>
      <Text style={[styles.informationText, { fontSize: RFValue(64) }]}>
        <FormatedTime time={time} />
      </Text>

      <InformationContent time={time} speed={speed.toFixed()} />

      <CancelButton title='Parar' onPress={stopCounter} />
    </View>
  )
}