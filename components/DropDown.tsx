import { View, Text } from 'react-native'
import React from 'react'
import * as DropdownMenu from 'zeego/dropdown-menu';


export type HeaderDropDown = {
  title: string;
  selected: string;
  onSelect : (key: string) => void;
  items: Array<{ key: string; title: string; icon:string}>;
}

const DropDown = ( {title,selected, onSelect, items } : HeaderDropDown ) => {
  return (
    <View>
      <Text>DropDown</Text>
    </View>
  )
}

export default DropDown