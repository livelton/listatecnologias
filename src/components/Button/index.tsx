import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, View } from 'react-native';
import { styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


interface PropsButtonIcon extends TouchableOpacityProps{
  content: string,
  onPress: () => void,
  color: string,
  type: string
}

export const ButtonIcon = ({content, color, type, onPress}:PropsButtonIcon) => {
  return (
    <TouchableOpacity style={type === 'add' ? styles.button : {}} onPress={onPress}>
      <MaterialIcons name={content} color={color} size={type === 'add' ? 18: 24}/>
    </TouchableOpacity>
  )
}
