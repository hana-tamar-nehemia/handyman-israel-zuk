# ישראל צוקרמן — אתר הנדימן

אתר תדמית Single Page לעסק הנדימן בירושלים והסביבה.

## מבנה הפרויקט

```
handyman-israel-zuk/
│
├── frontend/                 ← האתר (React + Vite + TypeScript)
│   ├── public/               ← קבצים סטטיים (תמונות, favicon)
│   │   └── images/           ← תמונות Hero, גלריית עבודות
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/       ← Header, Footer — שלד האתר
│   │   │   ├── sections/     ← סקשן לכל אזור בדף (Hero, שירותים...)
│   │   │   └── ui/           ← רכיבים לשימוש חוזר (Button, Accordion...)
│   │   ├── data/             ← כל התוכן (שירותים, מחירון, ביקורות...)
│   │   ├── lib/              ← פונקציות עזר (WhatsApp, קישורים)
│   │   └── styles/           ← CSS גלובלי
│   ├── index.html            ← HTML ראשי + SEO
│   └── package.json
│
├── backend/                  ← API (Express) — AI Assistant עתידי
│   ├── src/
│   │   ├── index.ts          ← שרת Express
│   │   └── routes/           ← נתיבי API
│   └── package.json
│
├── package.json              ← סקריפטים מ-root (dev, build)
└── README.md                 ← המסמך הזה
```

## הרצה מהירה

### Frontend (האתר)

```bash
cd frontend
npm install
npm run dev
```

פתח: http://localhost:5173

### Backend (API — אופציונלי כרגע)

```bash
cd backend
npm install
npm run dev
```

API: http://localhost:3001/api/health

## איפה לערוך מה?

| רוצה לשנות... | קובץ |
|---------------|------|
| טלפון, מייל, שם העסק | `frontend/src/data/site.ts` |
| רשימת שירותים | `frontend/src/data/services.ts` |
| מחירון | `frontend/src/data/pricing.ts` |
| ביקורות | `frontend/src/data/reviews.ts` |
| טיפים / FAQ | `frontend/src/data/tips.ts`, `faq.ts` |
| תמונת Hero | `frontend/public/images/israel-hero.jpg` |
| תמונות עבודות | `frontend/public/images/works/` |
| לוגו | `frontend/public/images/logo.png` + Header |

## Deploy

- **Frontend:** Vercel — Root Directory: `frontend`
- **Backend:** Vercel Serverless / Railway (כשיוסף AI)

## שלבים הבאים

- [ ] החלפת placeholder בתמונות אמיתיות
- [ ] לוגו
- [ ] לינק אינסטגרם
- [ ] AI Assistant (חיבור backend)
- [ ] Tailwind + shadcn (אופציונלי — כשיש מקום בדיסק)
