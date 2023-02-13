// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  guess: 'red' | 'black'
  isCorrect: boolean
  card: { value: string; suit: string, color: 'RED' | 'BLACK' }
  error?: string
}

// POST /api/make-spin
// Required fields in body: { guess: 'red' | 'black' }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Partial<Data>>
) {
  const { guess } = JSON.parse(req.body)
  if (!guess || (guess !== 'red' && guess !== 'black')) {
    return res
      .status(400)
      .json({ error: 'Invalid guess. Provide either "red" or "black".' + req.body })
  }

  try {
    const deck = await fetch(
      'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
    )
    if (!deck.ok) {
      throw new Error(deck.statusText)
    }
    const deckJson = await deck.json()
    const card = deckJson.cards[0]

    const { value, suit } = card
    const isCorrect = (guess === 'red' && suit === 'HEARTS') || (guess === 'black' && suit === 'SPADES')
    const color = suit === 'HEARTS' || suit === 'DIAMONDS' ? 'RED' : 'BLACK'



    return res.status(200).json({ guess, isCorrect, card: { value, suit, color } })
  } catch (error) {
    console.error('Error fetching deck :: ', error)
    res.status(500).json({ error: 'Error fetching deck. Check /api/make-spin' })
  }
}
