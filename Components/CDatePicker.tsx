import React, { useState } from 'react'
import { Text, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import rncStyles from 'rncstyles'
import Button from './Buttons'

export default function CDatePicker({ onChange, lable }: any) {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const handleclose = () => {
    setOpen(false)
  }
  return (
    <>

      <View style={rncStyles.p2}>
        <Button onPress={() => {setOpen(true) }} label={lable} />
      </View>
      <DatePicker
        modal
        open={open}
        date={date}
        style={rncStyles.textBlack }
        onConfirm={(date) => {
          handleclose()
          setDate(date)
          onChange(date)
        }}
        onCancel={() => {
          handleclose()
        }}
      />
    </>
  )
}