import { Provider } from '.'
import { observer } from 'mobx-react-lite'
import { Center, Flex } from '@mantine/core'
import { AppRouting } from './app-routing'
import '@mantine/core/styles.css'
import { Header } from '@/shared/ui'

export const App = observer(() => {
  return (
    <Provider>
      <Center>
        <Flex
          direction={'column'}
          style={{
            width: '100vw',
            height: '100svh',
            maxWidth: 1920
          }}
        >
          <Header />
          <Flex style={{ flexGrow: 2, width: '100%', gap: 6 }}>
            <AppRouting />
          </Flex>
        </Flex>
      </Center>
    </Provider>
  )
})
