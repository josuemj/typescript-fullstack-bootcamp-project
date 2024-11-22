import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import { PrismaClient } from '../../../packages/database/prisma/prisma-client'

const app = express()
const client = new PrismaClient()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', async(_, res) => {
  const result = await client.product.findMany({
    include : {
      variants: true,
    },
    where: {
      id: 5
    }
  })
  return res.json({ result })
})

const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`Server API running on http://localhost:${port}`)
})
