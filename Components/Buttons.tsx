import React from 'react'
import { View ,TouchableOpacity, Text } from 'react-native'
import rncStyles from 'rncstyles'

function Button({label,onPress } : any)  {
  return (
     <>
     <TouchableOpacity style={rncStyles.btnPrimary} onPress={onPress}>
        <Text style={[rncStyles.textWhite , rncStyles.textCenter]}>
             {label}
        </Text>
     </TouchableOpacity>
     </>
  )
}

export default Button
