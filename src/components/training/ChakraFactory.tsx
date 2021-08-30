import React from 'react'
import { chakra } from '@chakra-ui/react'
import TextareaAutosize from 'react-textarea-autosize';


const AutoResizeInput = chakra(TextareaAutosize)

const Card = chakra('div', {
  baseStyle: {
    margin: '5px',
    shadow: 'lg',
    rounder: 'lg', 
    bg: 'white',
  }
})

const Div = chakra("div", {
  shouldForwardProp: (prop) => {
    console.log('PROP', prop)
    return !["sample"].includes(prop)
  },
})

const ChakraFactory = () => {
  return (
    <div>
      <chakra.button
        px="3"
        py="2"
        bg="green.200"
        rounded="md"
        _hover={{ bg: "green.300" }}
      >
        Click me
      </chakra.button>
      <chakra.h1 fontSize="lg"> Heading </chakra.h1>
      <AutoResizeInput bg='red.200' fontSize='12px'/>
      <Card>Hello</Card>
      <Div>
        hello
      </Div>
    </div>
  )
}

export default ChakraFactory
