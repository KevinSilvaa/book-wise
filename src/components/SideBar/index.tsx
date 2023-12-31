// Styling Imports
import {
  SideBarContainer,
  SideBarContent,
  ContentHeader,
  ContentNavbar,
  NavbarItem,
  LoginInfo,
} from './styles'

// Components Imports
import { LoginModal } from '../LoginModal'

// Strategic Imports
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import * as Dialog from '@radix-ui/react-dialog'

// Icons Imports
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'

// Image Imports
import bookWiseLogo from '../../../public/images/logo.png'

type SideBarProps = {
  open?: boolean
  onPageClick: () => void
}

export function SideBar({ open = false, onPageClick }: SideBarProps) {
  const session = useSession()

  const userIsAuthenticated = session.status === 'authenticated'

  const router = useRouter()

  const currentPage = router.pathname

  async function handleLogout() {
    signOut({ callbackUrl: '/' })
  }

  return (
    <SideBarContainer open={open}>
      <SideBarContent>
        <ContentHeader>
          <Link href="/home">
            <Image src={bookWiseLogo} alt="" width={128} height={32} />
          </Link>
        </ContentHeader>

        <ContentNavbar>
          <NavbarItem
            href="/home"
            active={currentPage === '/home'}
            onClick={open ? onPageClick : undefined}
          >
            <ChartLineUp size={24} />
            Início
          </NavbarItem>

          <NavbarItem
            href="/explore"
            active={currentPage === '/explore'}
            onClick={open ? onPageClick : undefined}
          >
            <Binoculars size={24} />
            Explorar
          </NavbarItem>

          {userIsAuthenticated ? (
            <NavbarItem
              href={`/profile/${session.data.user.id}`}
              active={currentPage.includes('profile')}
              onClick={open ? onPageClick : undefined}
            >
              <User size={24} />
              Perfil
            </NavbarItem>
          ) : null}

          {userIsAuthenticated ? (
            <LoginInfo onClick={handleLogout} userIsLogged>
              <Image
                src={session.data.user.avatar_url}
                alt=""
                width={32}
                height={32}
              />
              <span>{session.data.user.name}</span>
              <SignOut size={20} />
            </LoginInfo>
          ) : (
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <LoginInfo>
                  <span>Fazer login</span>
                  <SignIn size={20} />
                </LoginInfo>
              </Dialog.Trigger>

              <LoginModal />
            </Dialog.Root>
          )}
        </ContentNavbar>
      </SideBarContent>
    </SideBarContainer>
  )
}
