export interface ServiceCategoryCard {
  id: string
  title: string
  /** רשימת שירותים לדוגמה - מוצגת בפונט קטן מתחת לכותרת */
  examples: string
  icon: string
}

export const servicesIntro =
  'כל מה שצריך לתחזוקה שוטפת של הבית או העסק - תחת קורת גג אחת.'

export const servicesHint =
  'לחצו על קטגוריה לשליחת הודעת WhatsApp מוכנה עם בקשה להצעת מחיר'

export const serviceCategories: ServiceCategoryCard[] = [
  {
    id: 'electrical',
    title: 'חשמל קל',
    examples: 'תליית גופי תאורה, התקנת רמקולים, קולט אדים ומערכות שמע',
    icon: '⚡',
  },
  {
    id: 'plumbing',
    title: 'אינסטלציה קלה',
    examples: 'החלפת ברזים, התקנת אביזרי אמבטיה, החלפת סיליקון, מייבש מגבות',
    icon: '💧',
  },
  {
    id: 'furniture',
    title: 'הרכבת רהיטים',
    examples: 'איקאה, ארונות הזזה, מיטות, שולחנות וריהוט משרדי',
    icon: '🛋️',
  },
  {
    id: 'hanging',
    title: 'תליית מדפים ותמונות',
    examples: 'מדפים, תמונות, מראות וטלוויזיות - במיקום ובגובה מדויק, על כל סוג קיר',
    icon: '📐',
  },
  {
    id: 'drywall',
    title: 'תיקוני גבס וצבע',
    examples: 'סתימת חורים, תיקוני גבס, חידוש רובה, הדבקת אריחים ומרצפות',
    icon: '🎨',
  },
  {
    id: 'doors',
    title: 'דלתות וידיות',
    examples: 'החלפת ידיות, תיקון מגירות, כיוון דלתות וארונות',
    icon: '🚪',
  },
  {
    id: 'general',
    title: 'תיקוני בית כלליים',
    examples: 'תיקון תריסים חשמליים וידניים, מתקן כביסה, מטלות קטנות בבית',
    icon: '🔧',
  },
  {
    id: 'installations',
    title: 'התקנות',
    examples: 'וילונות, זרועות ברקן, מחיצות פרספקס, חבלי כביסה ומתלים',
    icon: '🔩',
  },
  {
    id: 'business',
    title: 'תחזוקה לעסקים',
    examples: 'מענה לעסקים קטנים ומשרדים - תלייה, התקנות ותיקונים שוטפים',
    icon: '🏢',
  },
]
