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

// Strategic Imports

// Icons Imports

// Image Imports

type UserProps = {
  user: {
    name: string
    id: string
    avatarUrl: string
  }
}

export function UserProfile({ user }: UserProps) {
  return (
    <UserProfileContainer>
      <UserProfileInfos>
        <Image src={user.avatarUrl} alt="" width={72} height={72} />

        <UserProfileTextInformations>
          <strong>{user.name}</strong>
          <span>Membro desde 2019</span>
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
            <strong>10</strong>
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
