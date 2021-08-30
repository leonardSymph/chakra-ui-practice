import React from 'react'
import { useColorMode, LightMode, DarkMode } from '@chakra-ui/color-mode'
import { Box, Button, VStack, theme } from '@chakra-ui/react'

const ColorMode = () => {
  const { toggleColorMode } = useColorMode()

  // const bg = useColorModeValue('red.500', 'red.200')
  // const color = useColorModeValue('white', 'gray.800');

  return (
    <>
      <Box>
        This box's style will change based on the color mode.
      </Box>
      <Button size='sm' onClick={toggleColorMode}>
        Toggle Mode
      </Button>
      <VStack>
        <LightMode>
          <Button size="sm" colorScheme="blue">
            Light Mode Always
          </Button>
        </LightMode>

        <DarkMode>
          <Button size="sm" colorScheme="blue">
            Dark Mode Always
          </Button>
        </DarkMode>

        <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
          Toggle Mode
        </Button>
      </VStack>

      { /**Using the CSS Variables in themes */ }
      <Box color={theme.colors.red[100]}>
        CSS variables
      </Box>
      <Box color='brand.primary'>
        CSS variables
      </Box>
    </>
  )
}

export default ColorMode
