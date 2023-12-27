// Styling Imports
import {
  SideBarContainer,
  SideBarContent,
  ContentHeader,
  ContentNavbar,
  NavbarItem,
  LoginInfo,
} from './styles'

// Strategic Imports
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'

// Icons Imports
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'

// Image Imports
import bookWiseLogo from '../../../public/images/logo.png'

type SideBarProps = {
  open?: boolean
}

export function SideBar({ open }: SideBarProps) {
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
          <NavbarItem href="/home" active={currentPage === '/home'}>
            <ChartLineUp size={24} />
            Início
          </NavbarItem>

          <NavbarItem href="/explore" active={currentPage === '/explore'}>
            <Binoculars size={24} />
            Explorar
          </NavbarItem>

          {userIsAuthenticated ? (
            <NavbarItem
              href={`/profile/${session.data.user.id}`}
              active={currentPage.includes('profile')}
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
            <LoginInfo onClick={() => console.log('colocar modal aqui')}>
              <span>Fazer login</span>
              <SignIn size={20} />
            </LoginInfo>
          )}
        </ContentNavbar>
      </SideBarContent>
    </SideBarContainer>
  )
}
