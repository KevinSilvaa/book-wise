import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth].api'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).end()
  }

  try {
    const bookId = String(req.query.bookId)
    const userId = String(session.user.id)

    const formBodySchema = z.object({
      rate: z.number().min(1).max(5),
      description: z.string().min(3).max(450),
    })

    const { rate, description } = formBodySchema.parse(req.body)

    const userAlreadyRatedBook = await prisma.rating.findFirst({
      where: {
        user_id: userId,
        book_id: bookId,
      },
    })

    if (userAlreadyRatedBook) {
      return res.status(400).json({ error: 'You already rated this book.' })
    }

    await prisma.rating.create({
      data: {
        user_id: userId,
        book_id: bookId,
        description,
        rate,
      },
    })

    return res.status(201).end()
  } catch (err) {
    console.error(err)

    res.status(400).end()
  }
}
