// Styling Imports
import {
  AuthOptionItem,
  AuthOptions,
  CloseButton,
  LoginModalContent,
  LoginModalOverlay,
  LoginModalPortal,
  LoginModalTitle,
} from './styles'

// Strategic Imports
import Image from 'next/image'
import { AuthProps } from '@/pages/login'
import { signIn } from 'next-auth/react'

// Icons Imports
import { X } from 'phosphor-react'

// Image Imports
import logoGoogle from '@/assets/logos/logo-google.svg'
import logoGithub from '@/assets/logos/logo-github.svg'

export function LoginModal() {
  function handleSignIn({ provider, callbackUrl = '/home' }: AuthProps) {
    signIn(provider, {
      callbackUrl,
    })
  }

  return (
    <LoginModalPortal>
      <LoginModalOverlay />

      <LoginModalContent>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <LoginModalTitle>Faça login para deixar sua avaliação</LoginModalTitle>

        <AuthOptions>
          <AuthOptionItem onClick={() => handleSignIn({ provider: 'google' })}>
            <Image
              src={logoGoogle}
              alt="Logo do Google"
              width={32}
              height={32}
            />
            <span>Entrar com Google</span>
          </AuthOptionItem>

          <AuthOptionItem onClick={() => handleSignIn({ provider: 'github' })}>
            <Image
              src={logoGithub}
              alt="Logo do Github"
              width={32}
              height={32}
            />
            <span>Entrar com GitHub</span>
          </AuthOptionItem>
        </AuthOptions>
      </LoginModalContent>
    </LoginModalPortal>
  )
}
