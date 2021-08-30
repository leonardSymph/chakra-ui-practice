import React from 'react'
import { Flex } from '@chakra-ui/react'
import ButtonComponent from '../atoms/ButtonComponent'
import HeaderTitle from '../atoms/HeaderTitle'
import { useColorMode } from '@chakra-ui/color-mode'

const TrainingTheme = () : JSX.Element => {
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <>
    <nav>

    </nav>
    <header>
      <Flex justifyContent='center' alignItems='center'>
        <HeaderTitle onTextInput={'Title'} fontSize={'50'}/>
      </Flex>
      <Flex justifyContent='center'>
        <ButtonComponent onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </ButtonComponent>
      </Flex>
    </header>
      
    </>
  )
}

export default TrainingTheme