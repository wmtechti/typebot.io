import { Flex, Stack, Heading, Box, Text, Button } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import builderDndSrc from 'public/images/builder-dnd.png'
import { ArrowRight } from 'assets/icons/ArrowRight'
import { Flare } from 'assets/illustrations/Flare'
import Link from 'next/link'

export const EasyBuildingExperience = () => {
  return (
    <Flex as="section" justify="center" pos="relative">
      <Flare
        color="blue"
        pos="absolute"
        left="-200px"
        top="-50px"
        data-aos="fade"
        data-aos-delay="500"
      />
      <Stack
        style={{ maxWidth: '1000px' }}
        pt={'52'}
        w="full"
        px="4"
        spacing={12}
        direction={['column', 'row-reverse']}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack spacing="6" maxW="300px" minW={[0, '300px']}>
          <Heading as="h1" data-aos="fade">
            Experiência de construção fácil
          </Heading>
          <Text
            color="gray.400"
            fontSize={{ base: 'lg', xl: 'xl' }}
            data-aos="fade"
          >
            Tudo o que você precisa fazer é arrastar e soltar blocos para criar seu aplicativo. 
            Mesmo que você tenha necessidades personalizadas, sempre pode adicionar código personalizado.
          </Text>
          <Flex>
            <Button
              as={Link}
              rightIcon={<ArrowRight />}
              href={`https://painelconstrutor.wmtechai.com`}
              variant="ghost"
              data-aos="fade"
            >
              Experimente agora
            </Button>
          </Flex>
        </Stack>
        <Box rounded="md" data-aos="fade">
          <Image
            src={builderDndSrc}
            alt="incomplete results illustration"
            placeholder="blur"
          />
        </Box>
      </Stack>
    </Flex>
  )
}
