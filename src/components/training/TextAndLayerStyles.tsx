import React from 'react'
import { Box } from '@chakra-ui/react'

const TextAndLayerStyles = () => {
  return (
    <>
      <Box layerStyle="selected">This is a box</Box>
      <Box layerStyle="base">This is a box</Box>
      <Box layerStyle="base" _hover={{layerStyle: 'selected'}}>
        This is a box
      </Box>

      <Box textStyle='h1'>This is a box</Box>
    </>
  )
}

export default TextAndLayerStyles
