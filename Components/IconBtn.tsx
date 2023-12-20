import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icons from './Icons'
import rncStyles from 'rncstyles'

export default function IconBtn({onPress , name , color , size} : any) {
  return (
  <TouchableOpacity style={[rncStyles.roundedPill ,rncStyles.bgWhite, rncStyles.shadow1 ,rncStyles.flexCenter, {width: 50 , height : 50}] } onPress={onPress}>
    <Icons name={name} color={color} size={size} />
  </TouchableOpacity>
  )
}
