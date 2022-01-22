import React from "react"
import { Text, View } from "react-native"

export const FormatedTime: React.FC<{ time: number }> = ({ time }) => {
  return (
    <>
      <Text>{("0" + Math.floor((time / 3600))).slice(-2)}:</Text>
      <Text>{("0" + Math.floor((time / 60) % 60)).slice(-2)}:</Text>
      <Text>{("0" + ((time) % 60)).slice(-2)}</Text>
    </>
  )
}