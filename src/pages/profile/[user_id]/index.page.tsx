// Styling Imports
import {
  BooksReviewContent,
  MainContent,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileInfo,
} from './styles'

// Components Imports
import { SearchBar } from '@/components/SearchBar'
import { UserProfile } from '@/components/UserProfile'

// Strategic Imports
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/pages/_app.page'
import { ChangeEvent, ReactElement, useState } from 'react'

// Icons Imports
import { User } from 'phosphor-react'
import { ProfileReviewCard } from '@/components/ProfileReviewCard'

// Image Imports

const Profile: NextPageWithLayout = () => {
  const [search, setSearch] = useState('')

  const userTeste = {
    name: 'Kevin',
    id: 'ashjodao313',
    avatarUrl: 'https://github.com/KevinSilvaa.png',
  }

  return (
    <ProfileContainer>
      <ProfileHeader>
        <User size={32} />
        <h1>Perfil</h1>
      </ProfileHeader>

      <ProfileContent>
        <MainContent>
          <SearchBar
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            value={search}
            placeholder="Buscar livro avaliado"
          />

          <BooksReviewContent>
            <ProfileReviewCard />
            <ProfileReviewCard />
            <ProfileReviewCard />
          </BooksReviewContent>
        </MainContent>

        <ProfileInfo>
          <UserProfile user={userTeste} />
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}

Profile.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Profile
