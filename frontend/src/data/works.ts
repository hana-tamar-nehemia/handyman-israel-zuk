export interface WorkItem {
  id: string
  title: string
  description: string
  image: string
}

const worksImage = (filename: string) => `/images/works/${filename}`

/** כותרת ותיאור לפי שם הקובץ שהמשתמש נתן */
function workFromFile(id: string, filename: string): WorkItem {
  const title = filename.replace(/\.(jpe?g|png|webp)$/i, '')
  return {
    id,
    title,
    description: title,
    image: worksImage(filename),
  }
}

export const works: WorkItem[] = [
  workFromFile('tv-mount', 'תליית טלוויזיה על זרוע.jpeg'),
  workFromFile('curtains-track', 'תליית וילונות על מסילה רצה.jpeg'),
  workFromFile('office-blind', 'תליית וילון למשרד.jpeg'),
  workFromFile('lighting', 'התקנת גופי תאורה.png'),
  workFromFile('closet', 'הרכב ארון הזזה.jpeg'),
  workFromFile('aron-kodesh', 'בניית ארון קודש כולל ריפוד פנימי וקיבועו לקיר.png'),
  workFromFile('pallet-seating', 'בניית פינת ישיבה מרפסודות.jpeg'),
  workFromFile('panels', 'הדבקת פאנלים.jpeg'),
  workFromFile('studio-cables', 'הסתרת כבלים באולפן לאורך הקיר.jpeg'),
  workFromFile('chuppah', 'קיבוע עמודי חופה.jpeg'),
  workFromFile('mailbox-sign', 'תליית תא דואר ושילוט בכניסה לבית.png'),
]
