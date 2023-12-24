import { ReactNode } from 'react'

import { Content, LayoutContainer } from './styles'

import { SideBar } from '@/components/SideBar'

type Props = {
  children: ReactNode
}

export function DefaultLayout({ children }: Props) {
  return (
    <LayoutContainer>
      <SideBar />
      <Content>{children}</Content>
    </LayoutContainer>
  )
}
