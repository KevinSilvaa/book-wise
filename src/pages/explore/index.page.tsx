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
import { BookDetailsModal } from '@/components/BookDetailsModal'

// Strategic Imports
import { NextPageWithLayout } from '../_app.page'
import {
  ChangeEvent,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { useQuery } from '@tanstack/react-query'
import { Book, Category } from '@prisma/client'
import { api } from '@/lib/axios'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import * as Dialog from '@radix-ui/react-dialog'

// Icons Imports
import { Binoculars } from 'phosphor-react'

export type BookWithAverageRatingProps = Book & {
  bookAlreadyRead: boolean
  averageRating: number
}

const Explore: NextPageWithLayout = () => {
  const [search, setSearch] = useState('')
  const [categoryValue, setCategoryValue] = useState<string | null>(null)

  const [modalOpen, setModalOpen] = useState(false)
  const [book, setBook] = useState<BookWithAverageRatingProps>({
    id: '',
    name: '',
    author: '',
    summary: '',
    cover_url: '',
    total_pages: 0,
    created_at: new Date(),
    averageRating: 0,
    bookAlreadyRead: false,
  })

  const router = useRouter()

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

  const latestBookId = String(router.query.bookId)

  const rated = useCallback(
    function bookRecentlyRated() {
      if (books?.find((book) => book.id === latestBookId)) {
        setModalOpen(true)
        return books?.find((book) => book.id === latestBookId)
      }
    },
    [books, latestBookId],
  )

  useEffect(() => {
    if (rated()) {
      const bookRated = rated()
      setBook(bookRated!)
      router.replace('/explore', undefined, { shallow: true })
    }
  }, [rated, router])

  return (
    <>
      <NextSeo
        title="Explorar livros | Book Wise"
        description="Página da aplicação Book Wise contendo todos os livros que podem ser avaliados."
      />

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
              value === 'Tudo'
                ? setCategoryValue(null)
                : setCategoryValue(value)
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
        <Dialog.Root open={modalOpen}>
          <BookDetailsModal
            book={book!}
            open={modalOpen}
            setModalOpen={setModalOpen}
          />
        </Dialog.Root>
      </ExploreContainer>
    </>
  )
}

Explore.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Explore
