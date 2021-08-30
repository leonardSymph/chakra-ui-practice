import React from 'react'
import {Tabs, Tab, TabList, TabPanels, TabPanel, Button, useStyleConfig, Box, Image, Heading, Text} from '@chakra-ui/react'

const ComponentsStyle = () => {
  
  const Card =(props:any)=>{
    const variant = 'smooth'

    const styles = useStyleConfig("Card", { variant })
    
    return <Box __css={styles}>{props.children}</Box>
  }


  return (
    <>
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Tab 1</TabPanel>
        <TabPanel>Tab 2</TabPanel>
      </TabPanels>
    </Tabs>
    <Button>ClickMe</Button>

    <Card variant="smooth">
      <Image
        src="https://chakra-ui.com/eric.jpg"
        rounded="full"
        w={32}
        h={32}
        boxShadow="md"
      />
      <Heading mt={6} maxW={60} size="lg" textAlign="center" color="gray.700">
        Welcome back, Eric
      </Heading>
      <Text mt={6} mb={6} size="sm" color="blackAlpha.500">
        Use your fingerprint to continue.
      </Text>
      <Image src="/fingerprint.png" w={32} h={32} />
    </Card>
    </>
  )
}

export default ComponentsStyle
