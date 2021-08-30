import React from 'react'
import { Button } from '@chakra-ui/react'

const ButtonComponent = (props: {onClick : ()=>void,children: React.ReactNode}) : JSX.Element => {

  const {onClick} = props;

  return (
      <Button 
        onClick={onClick}
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
        {props.children}
      </Button>
  )
}

export default ButtonComponent
