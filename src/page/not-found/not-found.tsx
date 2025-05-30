import { PageWrapper } from '@/shared/ui'
import { Center, Code, Flex, Text, Title } from '@mantine/core'

export const NotFound = () => {
  return (
    <PageWrapper>
      <Center mt={40}>
        <Flex align={'center'} direction={'column'}>
          <Title order={2}>Страницы с таким адресом не существует</Title>
          <Text mt={16} mb={32} ta={'center'} lh={1} size='md'>
            Проверьте введённый <Code>URL</Code>
            или напишите в поддержку
          </Text>
        </Flex>
      </Center>
    </PageWrapper>
  )
}
