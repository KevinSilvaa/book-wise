/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
import {
  ProfileReviewCard,
  UserProfileRatingsProps,
} from '@/components/ProfileReviewCard'

// Strategic Imports
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/pages/_app.page'
import { ChangeEvent, ReactElement, useState } from 'react'

// Icons Imports
import { CaretLeft, User } from 'phosphor-react'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'

export type UserProfileProps = {
  ratings: UserProfileRatingsProps[]
  user: {
    avatar_url: string
    name: string
    created_at: Date
  }
  totalPagesRead: number
  totalBooksRated: number
  readAuthors: number
  mostReadCategory?: string
}

const Profile: NextPageWithLayout = () => {
  const [search, setSearch] = useState('')

  const session = useSession()
  const router = useRouter()
  const userId = String(router.query.user_id)

  const isOwnProfile = session.data?.user.id === userId

  function handleNavigateBack() {
    router.back()
  }

  const { data: userProfile } = useQuery<UserProfileProps>({
    queryKey: ['user-profile', userId],
    queryFn: async () => {
      const { data } = await api.get(`profile/${userId}`)
      return data?.profile ?? {}
    },
    enabled: !!userId,
  })

  const filteredRatings = userProfile?.ratings?.filter((rating) => {
    return (
      rating.book.name.toLowerCase().includes(search.toLowerCase()) ||
      rating.book.author.includes(search.toLowerCase())
    )
  })

  return (
    <ProfileContainer>
      {isOwnProfile ? (
        <ProfileHeader>
          <User size={32} />
          <h1>Perfil</h1>
        </ProfileHeader>
      ) : (
        <ProfileHeader isOwnProfile>
          <button onClick={handleNavigateBack}>
            <CaretLeft size={20} />
            <span>Voltar</span>
          </button>
        </ProfileHeader>
      )}

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
            {filteredRatings?.map((rating) => (
              <ProfileReviewCard
                key={`${userProfile?.user.name}-${rating.book.id}`}
                rating={rating}
              />
            ))}
            {filteredRatings?.length === 0 && (
              <h3>
                {search
                  ? 'Nenhum resultado encontrado'
                  : 'Nenhuma avaliação deste usuário foi encontrada'}
              </h3>
            )}
          </BooksReviewContent>
        </MainContent>

        <ProfileInfo>
          <UserProfile profile={userProfile!} />
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}

Profile.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Profile
