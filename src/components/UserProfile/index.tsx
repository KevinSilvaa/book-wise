// Styling Imports
import {
  ItemInfos,
  Separator,
  UserProfileContainer,
  UserProfileInfos,
  UserProfileItem,
  UserProfileStatistics,
  UserProfileTextInformations,
} from './styles'

// Strategic Imports
import { UserProfileProps } from '@/pages/profile/[user_id]/index.page'
import Image from 'next/image'

// Icons Imports
import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react'

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
            <strong>{profile?.totalPagesRead}</strong>
            <span>Páginas lidas</span>
          </ItemInfos>
        </UserProfileItem>

        <UserProfileItem>
          <Books size={32} />

          <ItemInfos>
            <strong>{profile?.totalBooksRated}</strong>
            <span>Livros avaliados</span>
          </ItemInfos>
        </UserProfileItem>

        <UserProfileItem>
          <UserList size={32} />

          <ItemInfos>
            <strong>{profile?.readAuthors}</strong>
            <span>Autores lidos</span>
          </ItemInfos>
        </UserProfileItem>

        <UserProfileItem>
          <BookmarkSimple size={32} />

          <ItemInfos>
            <strong>{profile?.mostReadCategory}</strong>
            <span>Categoria mais lida</span>
          </ItemInfos>
        </UserProfileItem>
      </UserProfileStatistics>
    </UserProfileContainer>
  )
}
