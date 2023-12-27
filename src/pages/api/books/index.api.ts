import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const categoryId = req.query.category as string

  const books = await prisma.book.findMany({
    where: {
      categories: {
        some: {
          categoryId,
        },
      },
    },
    include: {
      ratings: true,
    },
  })

  const booksAverageRating = await prisma.rating.groupBy({
    by: ['book_id'],
    _avg: {
      rate: true,
    },
  })

  let userBooksIds: string[] = []

  const session = await getServerSession(req, res, authOptions)

  const userId = String(session?.user?.id)

  if (session) {
    const userBooks = await prisma.book.findMany({
      where: {
        ratings: {
          some: {
            user_id: userId,
          },
        },
      },
    })

    userBooksIds = userBooks?.map((userBook) => userBook.id)
  }

  const booksWithAverageRating = books.map((book) => {
    const bookAverageRating = booksAverageRating.find(
      (averageRating) => averageRating.book_id === book.id,
    )

    const { ratings, ...bookInfo } = book

    return {
      ...bookInfo,
      ratings: ratings.length,
      averageRating: bookAverageRating?._avg.rate,
      bookAlreadyRead: userBooksIds.includes(book.id),
    }
  })

  return res.json({ books: booksWithAverageRating })
}
