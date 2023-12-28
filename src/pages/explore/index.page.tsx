/* eslint-disable @typescript-eslint/no-non-null-assertion */
// Styling Imports
import {
  BooksList,
  ExploreContainer,
  ExploreContent,
  ExploreHeader,
  FilterTagItem,
  FilterTagsContainer,
  HeaderTitle,
} from './styles'

// Component Imports
import { SearchBar } from '@/components/SearchBar'
import { ExploreBookCard } from '@/components/ExploreBookCard'

// Strategic Imports
import { NextPageWithLayout } from '../_app.page'
import { ChangeEvent, ReactElement, useState } from 'react'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { useQuery } from '@tanstack/react-query'
import { Book, Category } from '@prisma/client'
import { api } from '@/lib/axios'

// Icons Imports
import { Binoculars } from 'phosphor-react'

export type BookWithAverageRatingProps = Book & {
  averageRating: number
  bookAlreadyRead: boolean
}

const Explore: NextPageWithLayout = () => {
  const [search, setSearch] = useState('')
  const [categoryValue, setCategoryValue] = useState<string | null>(null)

  const { data: books } = useQuery<BookWithAverageRatingProps[]>({
    queryKey: ['books', categoryValue],
    queryFn: async () => {
      const { data } = await api.get('/books', {
        params: {
          category: categoryValue,
        },
      })

      return data?.books ?? []
    },
  })

  const filteredBooks = books?.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    )
  })

  const { data: categories } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await api.get('/books/categories')

      return data?.categories ?? []
    },
  })

  return (
    <ExploreContainer>
      <ExploreHeader>
        <HeaderTitle>
          <Binoculars size={32} />
          <h1>Explorar</h1>
        </HeaderTitle>

        <SearchBar
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          value={search}
          placeholder="Buscar livro ou autor"
        />
      </ExploreHeader>

      <ExploreContent>
        <FilterTagsContainer
          type="single"
          defaultValue="Tudo"
          value={categoryValue!}
          onValueChange={(value) => {
            value === 'Tudo' ? setCategoryValue(null) : setCategoryValue(value)
          }}
        >
          <FilterTagItem value="Tudo" aria-checked={categoryValue === null}>
            Tudo
          </FilterTagItem>
          {categories?.map((category) => (
            <FilterTagItem key={category.id} value={category.id}>
              {category.name}
            </FilterTagItem>
          ))}
        </FilterTagsContainer>

        <BooksList>
          {filteredBooks?.map((book) => (
            <ExploreBookCard key={book.id} book={book} />
          ))}
        </BooksList>
      </ExploreContent>
    </ExploreContainer>
  )
}

Explore.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Explore
