import { Router } from 'express'

/** בדיקת תקינות — לשימוש ב-CI, Docker ו-Vercel health checks */
export const healthRouter = Router()

healthRouter.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'handyman-backend',
    timestamp: new Date().toISOString(),
  })
})
