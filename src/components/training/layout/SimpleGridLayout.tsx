import React from 'react'
import {SimpleGrid, Box} from '@chakra-ui/react'

const SimpleGridLayout = () => {
  return (
    <>
      <Box>Specifying the number of columns for the grid layout.</Box>
      <SimpleGrid columns={2} spacing={10}>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>

      <Box pt={1}>You can also make it responsive by passing array or object values into the columns prop.</Box>
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>

      <Box pt={1}>Auto-responsive grid</Box>
      <SimpleGrid minChildWidth="120px" spacing="40px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>

      <Box pt={1}>Changing the spacing for columns and rows</Box>
      <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </>
  )
}

export default SimpleGridLayout
