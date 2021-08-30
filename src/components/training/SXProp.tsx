import React from 'react'
import { Image, Box, Heading } from '@chakra-ui/react'

const SXProp = () => {
  return (
    <div>
      <Image
          src="http://placekitten.com/200/300"
          alt="a kitten"
          sx={{ filter: "blur(8px)" }}
        />
      <Box sx={{ "--my-color": "#53c8c4" }}>
        <Heading color="var(--my-color)" size="lg">
          This uses CSS Custom Properties!
        </Heading>
      </Box>

      <Box borderWidth={2} borderColor="purple.500" p={5} className="my-box">
        <Heading size="lg">
          Hover the box...
          <Box
            as="span"
            color="red.500"
            sx={{
              ".my-box:hover &": {
                color: "green.500",
              },
            }}
          >
            And I will turn green!
          </Box>
        </Heading>
      </Box>

      <Box
        color='brand.primary'
        sx={{
          "@media print": {
            display: "none",
          },
        }}
      >
        This text won't be shown when printing this page.
      </Box>
    </div>
  )
}

export default SXProp
