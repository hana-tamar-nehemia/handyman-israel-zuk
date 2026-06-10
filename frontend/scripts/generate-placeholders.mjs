/** יוצר SVG placeholder לתמונות לפני/אחרי בגלריית העבודות */
function workSvg(label: string, isAfter: boolean, accent: string): string {
  const bg = isAfter ? '#dbeafe' : '#e2e8f0'
  const wall = isAfter ? '#bfdbfe' : '#cbd5e1'
  const detail = isAfter ? '#3b82f6' : '#94a3b8'
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none">
  <rect width="800" height="600" fill="${bg}"/>
  <rect x="80" y="80" width="640" height="440" rx="8" fill="${wall}"/>
  <rect x="200" y="180" width="400" height="240" rx="4" fill="${detail}" opacity="0.6"/>
  <text x="400" y="520" text-anchor="middle" fill="#64748b" font-size="28" font-family="Segoe UI, sans-serif">${label} — ${isAfter ? 'אחרי' : 'לפני'}</text>
</svg>`
}

import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '../public/images/works')

const works = [
  { id: 'tv', color: '#6366f1' },
  { id: 'closet', color: '#8b5cf6' },
  { id: 'blinds', color: '#0ea5e9' },
  { id: 'bathroom', color: '#14b8a6' },
  { id: 'curtain', color: '#f59e0b' },
  { id: 'wall', color: '#ef4444' },
]

mkdirSync(outDir, { recursive: true })

for (const work of works) {
  writeFileSync(join(outDir, `${work.id}-before.svg`), workSvg(work.id, false, work.color))
  writeFileSync(join(outDir, `${work.id}-after.svg`), workSvg(work.id, true, work.color))
}

console.log('Work placeholders created.')
