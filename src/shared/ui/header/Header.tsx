import { observer } from 'mobx-react-lite'
import { Flex, Text } from '@mantine/core'

export const Header = observer(() => {
  return (
    <Flex style={{ borderRadius: 4 }} m={6} py={6} px={8} bg={'dark.6'} justify={'center'}>
      <Flex justify={'space-between'} w={1920}>
        <Flex align={'center'}>
          <Text fw={600} size={'22px'}>
            Get&Fix
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
})
