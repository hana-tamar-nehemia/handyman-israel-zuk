# Backend — API

שרת Express עבור פיצ'רים שדורשים צד שרת.

## מה יש כאן עכשיו

| נתיב | תיאור |
|------|--------|
| `GET /api/health` | בדיקת תקינות |
| `POST /api/assistant/ask` | AI Assistant (תשובות סטטיות — placeholder) |

## הרצה

```bash
cd backend
npm install
npm run dev
```

## מבנה

```
backend/src/
├── index.ts              ← נקודת כניסה, הגדרת Express
└── routes/
    ├── health.ts         ← health check
    └── assistant.ts      ← AI Assistant (עתידי)
```

## שלב הבא

- חיבור OpenAI / Gemini ב-`routes/assistant.ts`
- משתנה סביבה `OPENAI_API_KEY` ב-`.env`
