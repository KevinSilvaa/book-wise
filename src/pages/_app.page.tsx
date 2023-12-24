/* eslint-disable camelcase */
import { globalStyles } from '@/styles/global'
import { NextPage } from 'next'
import { SessionProvider } from 'next-auth/react'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { Nunito_Sans } from 'next/font/google'
import { ReactElement, ReactNode } from 'react'

globalStyles()

const nunitoSans = Nunito_Sans({
  preload: true,
  subsets: ['latin'],
  weight: ['400', '700'],
})

export type NextPageWithLayout<Page = object, InterfacePage = Page> = NextPage<
  Page,
  InterfacePage
> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type PropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: PropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <SessionProvider session={session}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'http://localhost:3000',
          siteName: 'Book Wise',
        }}
      />

      <div className={nunitoSans.style.fontFamily}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </SessionProvider>
  )
}
