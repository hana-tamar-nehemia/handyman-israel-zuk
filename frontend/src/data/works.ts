export interface WorkItem {
  id: string
  title: string
  description: string
  image: string
}

/** תמונות placeholder — יש להחליף ב-public/images/works/ */
export const works: WorkItem[] = [
  {
    id: 'tv',
    title: 'תליית טלוויזיה',
    description: 'תלייה מקצועית על כל סוג קיר, ישר ובגובה מדויק',
    image: '/images/works/tv-after.svg',
  },
  {
    id: 'closet',
    title: 'הרכבת ארון הזזה',
    description: 'פירוק, הרכבה וכיוון ארונות הזזה וריהוט',
    image: '/images/works/closet-after.svg',
  },
  {
    id: 'blinds',
    title: 'תיקון תריס',
    description: 'תיקון תריסים חשמליים וידניים — חזרה לתפקוד מלא',
    image: '/images/works/blinds-after.svg',
  },
  {
    id: 'bathroom',
    title: 'חידוש אמבטיה',
    description: 'החלפת סיליקון, אביזרים ותיקוני רטיבות',
    image: '/images/works/bathroom-after.svg',
  },
  {
    id: 'curtain',
    title: 'התקנת וילון',
    description: 'התקנת וילונות הזזה ורגילים בצורה ישרה ויציבה',
    image: '/images/works/curtain-after.svg',
  },
  {
    id: 'wall',
    title: 'תיקון קיר',
    description: 'סתימת חורים, תיקוני גבס וגימור חלק לפני צבע',
    image: '/images/works/wall-after.svg',
  },
]
