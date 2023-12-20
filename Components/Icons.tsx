import Icon from "react-native-vector-icons/MaterialIcons"
import { _dark } from "rncstyles"
import React from 'react'
import { View } from "react-native"

export default function Icons({name , color , size} : any) {
  return (
   <Icon  name={name} color={color ?? _dark} size={size ?? 30}/>
  )
}
