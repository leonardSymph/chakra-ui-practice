import React from 'react'
import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

const ChakraUiLoginSample = () => {

    const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue('gray.100', 'gray.700' )

  return (
    <div>
      <Flex height="100vh" align="center" justifyContent="center">
        <Flex direction='column' background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Log in</Heading>
          <Input placeholder='test@chakra-ui.com' variant='filled' mb={3} type='email'/>
          <Input placeholder='********' variant='filled' mb={6} type='password'/>
          <Button mb={6} colorScheme='teal'>Log in</Button>
          <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
        </Flex>
      </Flex> 
    </div>
  )
}

export default ChakraUiLoginSample
