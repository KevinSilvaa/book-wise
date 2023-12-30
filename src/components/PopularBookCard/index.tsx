// Styling Imports
import { CardContent, CardTitle, CardContainer } from './styles'
import { BookRating } from '@/pages/home/styles'

// Strategic Imports
import Image from 'next/image'
import { BookWithAverageRatingProps } from '@/pages/explore/index.page'
import { VariantProps } from '@stitches/react'
import { Rating as StarRating } from '../Rating'
import { useRouter } from 'next/router'

interface PopularBookCardProps extends VariantProps<typeof CardContainer> {
  book: BookWithAverageRatingProps
}

export function PopularBookCard({ book }: PopularBookCardProps) {
  const router = useRouter()

  function handleNavigateExplorePage() {
    router.push(`/explore?bookId=${book.id}`)
  }

  return (
    <CardContainer onClick={handleNavigateExplorePage}>
      <Image src={book.cover_url} alt="" width={64} height={94} />

      <CardContent>
        <CardTitle>
          <strong>{book.name}</strong>
          <span>{book.author}</span>
        </CardTitle>

        <BookRating>
          <StarRating rating={book.averageRating} starSize={16} />
        </BookRating>
      </CardContent>
    </CardContainer>
  )
}
