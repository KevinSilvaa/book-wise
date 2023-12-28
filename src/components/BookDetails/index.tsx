// Styling Imports
import {
  BookDetailsContent,
  BookDetailsOverlay,
  BookDetailsPortal,
  Card,
  CardBookAuthor,
  CardBookTitle,
  CardInfos,
} from './styles'

// Strategic Imports
import { BookWithAverageRatingProps } from '@/pages/explore/index.page'
import Image from 'next/image'

// Icons Imports

// Image Imports

type BookDetailsProps = {
  book: BookWithAverageRatingProps
}

export function BookDetails({ book }: BookDetailsProps) {
  return (
    <BookDetailsPortal>
      <BookDetailsOverlay />

      <BookDetailsContent>
        <Card>
          <Image
            src="https://github.com/KevinSilvaa.png"
            alt=""
            width={172}
            height={242}
          />

          <CardInfos>
            <CardBookTitle>Kevin</CardBookTitle>
            <CardBookAuthor></CardBookAuthor>
          </CardInfos>
        </Card>
      </BookDetailsContent>
    </BookDetailsPortal>
  )
}
