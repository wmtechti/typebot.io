import { Flex, Stack, Heading, Text, Button, VStack } from '@chakra-ui/react'
import { Standard } from '@typebot.io/nextjs'
import { ArrowRight } from 'assets/icons/ArrowRight'
import { HandDrawnArrow } from 'assets/illustrations/HandDrawnArrow'
import { PublicTypebot, Typebot } from '@typebot.io/schemas'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { sendRequest } from '@typebot.io/lib'

const nameBlockId = 'shuUtMDMw9P4iAHbz7B5SqJ'
const messageBlockId = 'sqvXpT1YXE3Htp6BCPvVGv3'

export const RealTimeResults = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const [typebot, setTypebot] = useState<PublicTypebot>()

  const fetchTemplate = async () => {
    const { data, error } = await sendRequest(
      `/typebots/realtime-airtable.json`
    )
    if (error) return
    const typebot = data as Typebot
    setTypebot({ ...typebot, typebotId: typebot.id } as PublicTypebot)
  }

  useEffect(() => {
    fetchTemplate()
  }, [])

  const refreshIframeContent = () => {
    if (!iframeRef.current) return
    iframeRef.current.src += ''
  }

  const handleAnswer = ({ blockId }: { blockId: string }) => {
    if ([nameBlockId, messageBlockId].includes(blockId))
      setTimeout(refreshIframeContent, 1000)
  }

  return (
    <Flex as="section" justify="center">
      <Stack
        style={{ maxWidth: '1200px' }}
        pt={'52'}
        w="full"
        px="4"
        spacing={16}
        justifyContent="space-between"
        alignItems="center"
      >
        <VStack spacing={6}>
          <Heading
            fontSize={{ base: '4xl', xl: '6xl' }}
            textAlign="center"
            data-aos="fade"
          >
            Colete resultados em tempo real
          </Heading>
          <Text
            textAlign="center"
            color="gray.400"
            maxW="1000px"
            fontSize={{ base: 'lg', xl: 'xl' }}
            data-aos="fade"
          >
            Uma das principais vantagens de um aplicativo de chat é que você coleta
            as respostas do usuário para cada pergunta.{' '}

            <strong>Você não perderá nenhum dado valioso.</strong>
            
          </Text>
          <Flex>
            <Button
              as={Link}
              rightIcon={<ArrowRight />}
              href={`https://painelconstrutor.wmtechai.com`}
              variant="ghost"
              colorScheme="blue"
              data-aos="fade"
            >
              Experimente agora
            </Button>
          </Flex>
        </VStack>

        <Stack
          w="full"
          direction={['column', 'row']}
          spacing="4"
          pos="relative"
          data-aos="fade"
        >
          {typebot && (
            <Standard
              typebot="airtable-real-time"
              onAnswer={handleAnswer}
              style={{
                borderRadius: '0.375rem',
                borderWidth: '1px',
                height: '533px',
              }}
            />
          )}
          <iframe
            ref={iframeRef}
            src="https://airtable.com/embed/shr8nkV6DVN88LVIv?backgroundColor=blue"
            width="100%"
            height="533"
            style={{
              borderRadius: '0.5rem',
              border: 'none',
              backgroundColor: 'white',
            }}
          />
          <Flex
            top="-60px"
            right="-30px"
            pos="absolute"
            display={{ base: 'none', xl: 'flex' }}
          >
            <Text fontFamily="'Indie Flower'" fontSize="2xl">
              É uma visão real do Airtable!
            </Text>
            <HandDrawnArrow
              transform="rotate(30deg)"
              boxSize="100px"
              top="15px"
              right="-60px"
              pos="absolute"
            />
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  )
}
