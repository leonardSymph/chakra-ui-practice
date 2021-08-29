import { Box, Text, Flex, Grid, Button, SimpleGrid } from '@chakra-ui/react'

const BoxTraining = () => {
  return (
    <>
      <Flex display="flex" alignItems="center" justifyContent="center">
        <Box bgColor="tomato" opacity="0.5">
          <Box m={[2,3]} maxW='960px' mx='auto' color='gray.50'>Tomato</Box>
        </Box>
      </Flex>
      <Grid gap={2} gridTemplateColumns={'1fr 1fr'} autoFlow='row dense'>
        <Box  w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)"/>
        <Box w={'50%'} h="200px" bgGradient="radial(gray.300,yellow.400,pink.200)" />

        <Text
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize={32}
          fontWeight="extrabold"
          textAlign={['left', 'center']}
        >Welcome To Chakra UI</Text>
          <Box 
            bgImage="url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png')" 
            bgPosition="center"
            bgRepeat="no-repeat"
          />
      </Grid>
      <Box m={2} border='1px' borderColor='gray.200'>Card</Box>
      <Flex margin={2} justifyContent='center' alignItems='center' flexDirection='column'>
        <Button borderRightRadius="0">Button 1</Button>
        <Button borderLeftRadius='0'>Button 2</Button>
        <Button borderTopRadius="md">Button 3</Button>
      </Flex>
      <Box pos='absolute'>Cover</Box>
      <Box pos="absolute" top="0" left="0">
        Absolute with top and left
      </Box>
      <Box pos="fixed" w="100%" zIndex={2}>
        Fixed with zIndex
      </Box>
      <SimpleGrid
        bg="gray.50"
        columns={{ sm: 2, md: 4 }}
        spacing="8"
        p="10"
        textAlign="center"
        rounded="lg"
        color="gray.400"
      >
        <Box boxShadow="xs" p="6" rounded="md" bg="white">
          xs
        </Box>
        <Box boxShadow="sm" p="6" rounded="md" bg="white">
          sm
        </Box>
        <Box boxShadow="base" p="6" rounded="md" bg="white">
          Base
        </Box>
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          md
        </Box>
        <Box boxShadow="lg" p="6" rounded="md" bg="white">
          lg
        </Box>
        <Box boxShadow="xl" p="6" rounded="md" bg="white">
          xl
        </Box>
        <Box boxShadow="2xl" p="6" rounded="md" bg="white">
          2xl
        </Box>
        <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">
          Dark lg
        </Box>
        <Box boxShadow="outline" p="6" rounded="md" bg="white">
          Outline
        </Box>
        <Box boxShadow="inner" p="6" rounded="md" bg="white">
          Inner
        </Box>
      </SimpleGrid>
      
      <Button
        colorScheme='teal'
        _hover={{
          background:'white',
          color: 'teal.500',
        }}
      >
        HoverMe
      </Button>
      
      <Box
        role='group'
      >
        <Box
          _hover={{fontWeight: 'semibold'}}
          _groupHover={{color: 'tomato'}}
        >
          Tomato
        </Box>
      </Box>

      <Button as="a" target="_blank" variant="outline" href="https://chakra-ui.com">
        Hello
      </Button>
    </>
  )
}

export default BoxTraining
