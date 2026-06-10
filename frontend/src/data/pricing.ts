export interface PriceItem {
  id: string
  service: string
  price: string
}

export interface PricingGroup {
  title: string
  items: PriceItem[]
}

export const pricingGroups: PricingGroup[] = [
  {
    title: 'חשמל',
    items: [
      { id: 'light', service: 'תליית גוף תאורה', price: '250-300 ₪' },
      {
        id: 'ceiling-light',
        service: 'התקנת גוף תאורה צמוד תקרה בתקרת בטון',
        price: '250-350 ₪',
      },
      {
        id: 'ceiling-light-extra',
        service: 'התקנת גוף תאורה שני והלאה (מחיר פר גוף תאורה)',
        price: '100-200 ₪',
      },
      {
        id: 'ceiling-fan',
        service: 'התקנת מאוורר תקרה אחד בתקרת בטון (לא כולל הרכבת המאוורר)',
        price: '400-500 ₪',
      },
      {
        id: 'electrical-point',
        service: 'התקנת נקודת חשמל חדשה כולל חציבה עד 3 מטר',
        price: '700-900 ₪',
      },
    ],
  },
  {
    title: 'אינסטלציה',
    items: [
      { id: 'bath-accessory', service: 'התקנת אביזרי אמבטיה', price: '200-400 ₪' },
      { id: 'silicone', service: 'החלפת סיליקון במקלחת', price: '400-500 ₪' },
      { id: 'faucet-basic', service: 'החלפת ברז, ללא עלות הברז', price: '300-400 ₪' },
      {
        id: 'faucet-stuck',
        service: 'החלפת ברז תקוע / גישה בעייתית, ללא עלות הברז',
        price: '450-700 ₪',
      },
      {
        id: 'faucet-shower',
        service: 'החלפת ברז פרח חמת פשוט, כולל עלות ברז',
        price: '650-750 ₪',
      },
      {
        id: 'faucet-nickel',
        service: 'החלפת ברז ניל, כולל עלות הברז',
        price: '350 ₪',
      },
    ],
  },
  {
    title: 'התקנות',
    items: [
      { id: 'tv-70', service: "תליית טלוויזיה עד 70 אינץ'", price: '300-400 ₪' },
      { id: 'tv-60', service: "התקנת טלוויזיה עד 60 אינץ'", price: '300-400 ₪' },
      { id: 'shelf', service: 'התקנת מדף', price: '150-250 ₪' },
      { id: 'floating-shelf', service: 'התקנת מדף צף מעץ מלא', price: '300-400 ₪' },
      { id: 'picture', service: 'תליית תמונה או מראה', price: '300-350 ₪' },
      { id: 'curtain', service: 'התקנת וילון הזזה בסיסי', price: '300-400 ₪' },
      { id: 'bracken', service: 'תליית זרועות ברקן', price: '300-400 ₪' },
      { id: 'lines', service: 'התקנת 4 חבלי כביסה ללא המתלה', price: '300-450 ₪' },
      { id: 'closet', service: 'הרכבת ארון הזזה 2 דלתות', price: '400-600 ₪' },
      { id: 'ikea', service: 'הרכבת רהיט איקאה', price: '300-500 ₪' },
      { id: 'bed', service: 'הרכבת מיטה', price: '300-500 ₪' },
      { id: 'desk', service: 'הרכבת שולחן או ארון משרדי', price: '300-500 ₪' },
    ],
  },
  {
    title: 'תיקונים כלליים',
    items: [
      { id: 'handle', service: 'החלפת ידית דלת או מגירה', price: '200-300 ₪' },
      { id: 'door-adjust', service: 'כיוון דלת ארון או מגירה', price: '200-250 ₪' },
      { id: 'holes', service: 'סתימת חורים בקיר או גבס', price: '300-500 ₪' },
      { id: 'grout', service: 'חידוש רובה או הדבקת אריח בודד', price: '300-450 ₪' },
      { id: 'blinds', service: 'תיקון תריס חשמלי או ידני', price: '300-350 ₪' },
    ],
  },
]

export const pricingBundleNote =
  'בביצוע מספר עבודות במקביל - תינתן הנחה משמעותית!'

export const pricingCtaText =
  'רוצים לדעת בדיוק כמה זה יעלה? שלחו תמונה ותיאור קצר - בלי הפתעות.'

export const pricingWhatsappLabel = 'שליחת תמונות ובקשה להצעת מחיר - מענה מהיר'

export const pricingQuoteMessage = `שלום ישראל,\nאשמח לקבל הצעת מחיר.\nמצרף/ת תמונה ותיאור של העבודה:`
