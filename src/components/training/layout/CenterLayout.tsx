import React from 'react'
import {Center, Square, Circle, Box, HStack} from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

const CenterLayout = () => {
  return (
    <Box m={1}>
      <Center bg="tomato" h="100px" color="white" my={1}>
        This is the Center
      </Center>

      <Center w="250px" h="250px" bg="tomato" color="white" mb={1}>
          <PhoneIcon h="200px" w="250px"/>
      </Center>

      <HStack>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <PhoneIcon />
        </Center>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <Box as="span" fontWeight="bold" fontSize="lg">
            1
          </Box>
        </Center>
      </HStack>

      <HStack>
        <Circle size="40px" bg="tomato" color="white">
          <PhoneIcon />
        </Circle>
        <Square size="40px" bg="purple.700" color="white">
          <PhoneIcon />
        </Square>
      </HStack>
    </Box>
  )
}

export default CenterLayout
