import express from 'express'
import cors from 'cors'
import { healthRouter } from './routes/health.js'
import { assistantRouter } from './routes/assistant.js'

const app = express()
const PORT = process.env.PORT ?? 3001

app.use(cors({ origin: process.env.FRONTEND_URL ?? 'http://localhost:5173' }))
app.use(express.json())

app.use('/api/health', healthRouter)
app.use('/api/assistant', assistantRouter)

app.listen(PORT, () => {
  console.log(`Backend running → http://localhost:${PORT}`)
})
