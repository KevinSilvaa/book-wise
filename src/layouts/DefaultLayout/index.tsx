import { ReactNode, useState } from 'react'

import { Content, HamburgerMenu, LayoutContainer } from './styles'

import { SideBar } from '@/components/SideBar'
import { List, X } from 'phosphor-react'

type Props = {
  children: ReactNode
}

export function DefaultLayout({ children }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <LayoutContainer>
      <SideBar open={open} />
      <Content>
        <HamburgerMenu
          onClick={() => setOpen(!open)}
          css={{ position: open ? 'sticky' : 'absolute' }}
        >
          {open ? (
            <X size={20} weight="bold" />
          ) : (
            <List size={20} weight="bold" />
          )}
        </HamburgerMenu>
        {children}
      </Content>
    </LayoutContainer>
  )
}
