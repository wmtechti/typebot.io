import { VStack, Heading, Button, Text } from '@chakra-ui/react'
import React from 'react'

export const ArticleCallToAction = () => (
  <VStack spacing={6}>
    <Heading fontSize="xx-large">
       Colete até 4 vezes mais respostas sem trabalhar 4 vezes mais.
    </Heading>
    <Button
      size="lg"
      colorScheme="orange"
      as="a"
      href="https://painelconstrutor.wmtechai.com/register"
    >
      Crie um typebot
    </Button>
    <Text fontSize="sm" fontStyle="italic" color="gray.600">
      It&apos;s free!
    </Text>
  </VStack>
)
