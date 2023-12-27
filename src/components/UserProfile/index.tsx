// Styling Imports
import Image from 'next/image'
import {
  ItemInfos,
  Separator,
  UserProfileContainer,
  UserProfileInfos,
  UserProfileItem,
  UserProfileStatistics,
  UserProfileTextInformations,
} from './styles'
import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react'
import { UserProfileProps } from '@/pages/profile/[user_id]/index.page'

// Image Imports
import avatarPlaceholder from '@/assets/logos/logo-visitante.svg'

interface UserProfileStatisticsProps {
  profile: UserProfileProps
}

export function UserProfile({ profile }: UserProfileStatisticsProps) {
  const yearThatUserIsCreated = new Date(profile?.user.created_at).getFullYear()

  return (
    <UserProfileContainer>
      <UserProfileInfos>
        <Image
          src={profile?.user.avatar_url || avatarPlaceholder}
          alt=""
          width={72}
          height={72}
        />

        <UserProfileTextInformations>
          <strong>{profile?.user.name}</strong>
          <span>Membro desde {yearThatUserIsCreated}</span>
        </UserProfileTextInformations>
      </UserProfileInfos>

      <Separator />

      <UserProfileStatistics>
        <UserProfileItem>
          <BookOpen size={32} />

          <ItemInfos>
            <strong>3853</strong>
            <span>Páginas lidas</span>
          </ItemInfos>
        </UserProfileItem>

        <UserProfileItem>
          <Books size={32} />

          <ItemInfos>
            <strong>{profile?.ratings.length}</strong>
            <span>Livros avaliados</span>
          </ItemInfos>
        </UserProfileItem>

        <UserProfileItem>
          <UserList size={32} />

          <ItemInfos>
            <strong>8</strong>
            <span>Autores lidos</span>
          </ItemInfos>
        </UserProfileItem>

        <UserProfileItem>
          <BookmarkSimple size={32} />

          <ItemInfos>
            <strong>Computação</strong>
            <span>Categoria mais lida</span>
          </ItemInfos>
        </UserProfileItem>
      </UserProfileStatistics>
    </UserProfileContainer>
  )
}
