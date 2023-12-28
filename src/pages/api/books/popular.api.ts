import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const books = await prisma.book.findMany({
    orderBy: {
      ratings: {
        _count: 'desc',
      },
    },
    include: {
      ratings: true,
    },
    take: 4,
  })

  const booksAverageRating = await prisma.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: {
        in: books.map((book) => book.id),
      },
    },
    _avg: {
      rate: true,
    },
  })

  const booksWithAverageRating = books.map((book) => {
    const bookAverageRating = booksAverageRating.find(
      (averageRating) => averageRating.book_id === book.id,
    )

    const { ...bookInfo } = book

    return {
      ...bookInfo,
      averageRating: bookAverageRating?._avg.rate,
    }
  })

  return res.json({ popularBooks: booksWithAverageRating })
}
