import { DefaultLayout } from '@/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
