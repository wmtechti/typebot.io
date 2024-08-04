import {
  Stack,
  Heading,
  Button,
  List,
  ListItem,
  ListIcon,
  Text,
  Link,
} from '@chakra-ui/react'
import { CheckCircleIcon } from 'assets/icons'

export const EnterprisePlanCard = () => (
  <Stack
    direction={['column', 'row']}
    align="center"
    p="10"
    rounded="lg"
    bgColor="gray.800"
    borderWidth="2px"
    spacing={10}
  >
    <Stack maxW="300px" spacing={4}>
      <Heading fontSize="xl">Enterprise</Heading>
      <Text>
        Ideal para grandes empresas que desejam gerar leads e automatizar 
        o suporte ao cliente em larga escala
      </Text>
      <Text fontSize="lg">
        <Button
          as={Link}
          href="https://typebot.io/enterprise-lead-form"
          isExternal
          variant="outline"
        >
          Solicite um orçamento
        </Button>
      </Text>
    </Stack>
    <Stack flex="1">
      <List spacing="4">
        <ListItem fontWeight="medium" display="flex" alignItems="center">
          <ListIcon fontSize="xl" as={CheckCircleIcon} marginEnd={2} />
          Limites e assentos personalizados para chats para toda a sua equipe
        </ListItem>
        <ListItem fontWeight="medium" display="flex" alignItems="center">
          <ListIcon fontSize="xl" as={CheckCircleIcon} marginEnd={2} />
          SSO e direitos de acesso granulares
        </ListItem>
        <ListItem fontWeight="medium" display="flex" alignItems="center">
          <ListIcon fontSize="xl" as={CheckCircleIcon} marginEnd={2} />
          Contrato anual com representante de suporte dedicado
        </ListItem>
      </List>
    </Stack>
  </Stack>
)
