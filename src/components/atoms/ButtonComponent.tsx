import React from 'react'
import { Button } from '@chakra-ui/react'

const ButtonComponent = (params: { onButtonName: string }) => {
  const { onButtonName } = params
  return (
    <>
      <Button 
        bg='gray.200'
        color = 'gray.700'
        _hover={{
        backgroundColor: 'gray.700',
        color: 'gray.200'
        }}
        _focus= {{
          boxShadow: 'none'
        }}
      >
        {onButtonName}
      </Button>
    </>
  )
}

export default ButtonComponent
