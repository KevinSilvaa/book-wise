// Styling Imports
import {
  Container,
  ImageContainer,
  LoginMethods,
  MethodsInfo,
  MethodItem,
  MethodsButtons,
} from './styles'

// Strategic Imports
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getSession, signIn } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth].api'
import { useEffect } from 'react'
import { NextSeo } from 'next-seo'

// Image Imports
import backgroundImageLogin from '../../../public/images/login-image.png'
import logoGoogle from '@/assets/logos/logo-google.svg'
import logoGithub from '@/assets/logos/logo-github.svg'
import logoVisitante from '@/assets/logos/logo-visitante.svg'

export type AuthProps = {
  callbackUrl?: string
  provider?: 'google' | 'github'
}

export default function Login() {
  const router = useRouter()

  function handleSignIn({ provider, callbackUrl = '/' }: AuthProps) {
    if (!provider) {
      return router.push('/home')
    }

    signIn(provider, {
      callbackUrl,
    })
  }

  useEffect(() => {
    async function isUserAuthenticated() {
      const session = await getSession()
      if (session) {
        router.push('/home')
      }
    }

    isUserAuthenticated()
  }, [router])

  return (
    <>
      <NextSeo
        title="Faça login no site | Book Wise"
        description="Faça login na aplicação Book Wise ou entre como visitante para visualizar as avalições dos livros."
      />

      <Container>
        <ImageContainer>
          <Image src={backgroundImageLogin} alt="" quality={100} priority />
        </ImageContainer>

        <LoginMethods>
          <MethodsInfo>
            <h1>Boas vindas!</h1>
            <span>Faça seu login ou acesse como visitante.</span>
          </MethodsInfo>

          <MethodsButtons>
            <MethodItem onClick={() => handleSignIn({ provider: 'google' })}>
              <Image
                src={logoGoogle}
                alt="Logo do Google"
                width={32}
                height={32}
              />
              <span>Entrar com Google</span>
            </MethodItem>

            <MethodItem onClick={() => handleSignIn({ provider: 'github' })}>
              <Image
                src={logoGithub}
                alt="Logo do Github"
                width={32}
                height={32}
              />
              <span>Entrar com GitHub</span>
            </MethodItem>

            <MethodItem onClick={() => handleSignIn({})}>
              <Image
                src={logoVisitante}
                alt="Ícone de um foguete"
                width={32}
                height={32}
              />
              <span>Acessar como visitante</span>
            </MethodItem>
          </MethodsButtons>
        </LoginMethods>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
