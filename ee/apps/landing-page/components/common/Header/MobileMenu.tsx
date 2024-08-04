import { Collapse, Stack, Button, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { links } from './_data'

type Props = { isOpen: boolean }

export const MobileMenu = ({ isOpen }: Props) => (
  <Collapse in={isOpen}>
    <Stack
      pos="absolute"
      insetX={0}
      bgGradient="linear(to-b, gray.900, gray.800)"
      px="6"
      py="10"
      spacing={4}
    >
      <Button
        as={Link}
        href="https://painelconstrutor.wmtechai.com/register"
        colorScheme="blue"
        variant="outline"
        fontWeight={700}
      >
        Entrar
      </Button>
      <Button
        as={Link}
        href="https://painelconstrutor.wmtechai.com/register"
        colorScheme="orange"
        fontWeight={700}
      >
        Crie um typebot
      </Button>
      <Button
        as={Link}
        href="/pricing"
        variant="outline"
        colorScheme="gray"
        fontWeight={700}
      >
        Pricing
      </Button>
      <Text fontWeight="700">Resources:</Text>
      {links[0].children?.map((link, idx) => (
        <Button
          as={Link}
          href={link.href}
          key={idx}
          variant="outline"
          colorScheme="gray"
          fontWeight={700}
          py="6"
        >
          {link.label}
        </Button>
      ))}
    </Stack>
  </Collapse>
)
