import { prisma } from '@/lib/prisma'
import { getMostReadCategory } from '@/utils/getMostReadCategory'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const userId = String(req.query.userId)

  const profile = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
        orderBy: {
          created_at: 'desc',
        },
      },
    },
  })

  const totalPagesRead = profile?.ratings.reduce(
    (acc, currentRating) => acc + currentRating.book.total_pages,
    0,
  )

  const totalBooksRated = profile?.ratings.length

  const totalAuthorsRead = profile?.ratings.reduce((acc, currentRating) => {
    if (!acc.includes(currentRating.book.author)) {
      acc.push(currentRating.book.author)
    }

    return acc
  }, [] as string[])

  const categories = profile?.ratings.flatMap((rating) =>
    rating.book.categories.flatMap(
      (bookCategory) => bookCategory.category.name,
    ),
  )

  const mostReadCategory = categories ? getMostReadCategory(categories) : null

  const profileData = {
    user: {
      id: profile?.id,
      name: profile?.name,
      email: profile?.email,
      avatar_url: profile?.avatar_url,
      created_at: profile?.created_at,
    },
    ratings: profile?.ratings,
    totalPagesRead,
    totalBooksRated,
    readAuthors: totalAuthorsRead?.length,
    mostReadCategory,
  }

  return res.json({ profile: profileData })
}
