import { siteConfig } from '../data/site'

/** בונה קישור WhatsApp עם הודעה מקודדת */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(message)}`
}

/** הודעה מוכנה לפי שם שירות */
export function serviceMessage(serviceName: string): string {
  return `שלום ישראל,\nאני מעוניין/ת בשירות ${serviceName} ואשמח לקבל הצעת מחיר. (רצוי להוסיף תמונה במידת הצורך)`
}

export function phoneUrl(): string {
  return `tel:+${siteConfig.phoneRaw}`
}
