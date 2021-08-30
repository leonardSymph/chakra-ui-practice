import React from 'react'
import { Text } from '@chakra-ui/react'

const HeaderTitle = (params: { fontSize: string | number, onTextInput : string }): JSX.Element => {

  const {fontSize, onTextInput} = params;

  return (
    <>
      <Text fontSize={fontSize}>{onTextInput}</Text>
    </>
  )
}

export default HeaderTitle
