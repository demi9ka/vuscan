import { Box, ScrollArea } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const PageWrapper = ({ children }: Props) => {
  const { height } = useViewportSize()

  return (
    <ScrollArea
      h={height - 60}
      pr={8}
      style={{
        position: 'relative',
        flexGrow: 2
      }}
    >
      <Box mb={40}>{children}</Box>
    </ScrollArea>
  )
}
