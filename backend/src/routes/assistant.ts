import { Router } from 'express'

/**
 * נתיבים עתידיים ל-AI Assistant.
 * כרגע מחזירים תשובות סטטיות - יוחלפו בחיבור ל-OpenAI/Gemini.
 */
export const assistantRouter = Router()

const staticAnswers: Record<string, string> = {
  'כמה עולה תליית טלוויזיה':
    'תליית טלוויזיה עד 70 אינץ\' עולה בין 300-400 ₪. המחיר תלוי בגודל, סוג הקיר וסוג הזרוע. בביצוע מספר עבודות במקביל - תינתן הנחה משמעותית.',
  'האם ישראל עובד במבשרת':
    'כן! ישראל מגיע לירושלים והסביבה, כולל מבשרת ציון, גבעת זאב ועוד.',
  'האם אתה מתקין וילונות': 'כן, התקנת וילונות הזזה ובסיסיים - אחד השירותים הנפוצים.',
  'האם אתה מתקן תריסים': 'כן, תיקון תריסים חשמליים וידניים.',
}

assistantRouter.post('/ask', (req, res) => {
  const question: string = req.body?.question ?? ''
  const normalized = question.trim()

  const answer =
    Object.entries(staticAnswers).find(([key]) => normalized.includes(key))?.[1] ??
    'לא מצאתי תשובה מדויקת. לחצו על WhatsApp ונשמח לעזור!'

  res.json({ answer, fallbackToWhatsApp: !Object.keys(staticAnswers).some((k) => normalized.includes(k)) })
})
