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

// Icons Imports
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'

// Image Imports
import bookWiseLogo from '../../../public/logo.png'

export function SideBar() {
  const user = true
  const router = useRouter()

  const currentPage = router.pathname

  const userData = {
    id: 1,
  }

  return (
    <SideBarContainer>
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

          {user ? (
            <NavbarItem
              href={`/profile/${userData.id}`}
              active={currentPage.includes('profile')}
            >
              <User size={24} />
              Perfil
            </NavbarItem>
          ) : null}

          {user ? (
            <LoginInfo onClick={() => console.log('Deslogar')} userIsLogged>
              <Image
                src="https://github.com/KevinSilvaa.png"
                alt=""
                width={32}
                height={32}
              />
              <span>Kevin Silva</span>
              <SignOut size={20} />
            </LoginInfo>
          ) : (
            <LoginInfo onClick={() => console.log('Logar')}>
              <span>Fazer login</span>
              <SignIn size={20} />
            </LoginInfo>
          )}
        </ContentNavbar>
      </SideBarContent>
    </SideBarContainer>
  )
}
